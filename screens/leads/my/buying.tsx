import { Loading, PreLoader } from "@/components/animations";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import PlaceHolder from "@/components/Placeholder";
import Tip from '@/components/Tip';
import useNetworkListener from "@/hooks/useNetworkListener";
import NavigationHelper from "@/navigation/helper";
import { Pages } from "@/navigation/pages";
import { deleteLeads, getUserLeadsList } from "@/services/leads";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { Leads } from "@/types/data/Leads";
import { PagedList } from "@/types/data/PagedList";
import { EnumLeadsType } from "@/types/enums";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { Text, View } from "react-native";
import LeadsItem from "../components/LeadsItem";
import Separator from "../components/LeadsItem/separator";
import styles from "./styles";

export default observer(() => {
    const [leadsList, setLeadsList] = useState<PagedList<Leads>>({ total: 0, list: [], pageSize: 10 });
    const appState = useStore("appState");
    const [initializing, setInitializing] = useState(true);
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();

    useNetworkEffect(() => {
        setInitializing(true);
        refreshLeadsList(true);
    }, true);

    const refreshLeadsList = async (reload?: boolean) => {
        if (!isConnected || (reload !== true && leadsList.isLastPage === true)) return;
        const data = await getUserLeadsList({
            userId: appState.session?.userId ?? -1,
            pageNum: reload ? undefined : leadsList.nextPage,
            typed: EnumLeadsType.BUYING
        });
        if (data) {
            if (reload)
                setLeadsList({
                    ...data
                });
            else
                setLeadsList({
                    ...data,
                    list: leadsList.list?.concat(data.list)
                });
        }
        setInitializing(false);
    };


    const delLeads = async (leads: Leads) => {
        Modal.show({
            content: "Unable to recover after deletion, are you sure to delete?",
            okText: "Delete",
            cancelText: "Cancel ",
            onCancelPress: () => {

            },
            onOkPress: async () => {
                const result = await deleteLeads(leads.demandId);
                if (result) {
                    refreshLeadsList(true);
                    Tip.show("Delete Success");
                }
            }
        });
    };

    return <View style={[theme.statusBar, theme.screenView]}>
        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
            <PreLoader.View loading={initializing}>
                <Loading.FlatList<Leads>
                    renderItem={({ item }) => <LeadsItem key={`leadsItem_${item.demandId}`} data={item}
                        actions={<Button size="sm" onPress={() => delLeads(item)}>Delete</Button>}
                    />}
                    ItemSeparatorComponent={() => <Separator />}
                    data={leadsList.list}
                    contentContainerStyle={theme.paddingHorizontal}
                    keyExtractor={(item) => `leadsItem_${item.demandId}`}
                    isLastPage={leadsList.isLastPage}
                    lastPageFooterComponent={<View style={styles.noMore}>
                        <Text style={styles.noMoreText}>
                            No more leads, go to <Text onPress={() => NavigationHelper.goPostLeads(Pages.LeadsMy)} style={styles.noMoreReleaseText}>release new Leads</Text>
                        </Text>
                    </View>}
                    onScrollEndLoad={refreshLeadsList}
                    onScrollTopLoad={() => refreshLeadsList(true)}
                />
            </PreLoader.View>
        </PlaceHolder.NoNetworkView>
    </View>;
});



