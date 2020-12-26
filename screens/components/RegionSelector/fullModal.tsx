import FullModal from "@/components/FullModal";
import IconFont from "@/components/Iconfont";
import theme from "@/theme";
import { Region } from "@/types/data/Region";
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationBar } from "reactive";
import RegionSelector from ".";
import styles from './styles';

interface RegionSelectorModalProps {
    selectedids?: number[];
    onConfirm: (values: Region[]) => void;
    onClose?: () => void;
    regions?: Region[];
}

/**
 * 区划选择弹窗
 * 使用场景:
 * 1: 个人信息设置
 */

export default class RegionSelectorModal extends React.Component<RegionSelectorModalProps> {

    constructor(props: RegionSelectorModalProps) {
        super(props);
    }

    private modal = React.createRef<FullModal>();


    open() {
        this.modal.current?.open();
    }
    close() {
        this.modal.current?.close();
        this.props.onClose?.();
    }

    private onConfirm(values: Region[]) {

        const { onConfirm } = this.props;
        onConfirm(values);
        this.close();
    }

    render() {
        const { selectedids, regions } = this.props;

        return <FullModal ref={this.modal} align="down"
            direction="up">
            <SafeAreaView style={{ flex: 1 }}>

                <NavigationBar
                    backLabel={<IconFont name="yemianguanbi-hei1x" />}
                    titleContainer={false}
                    onPressBack={() => this.close()}
                    style={theme.navigationBar}
                />
                <View style={[theme.paddingHorizontal, styles.pageTitle]}>
                    <Text style={styles.pageTitleText}>Region</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <RegionSelector selectedids={selectedids} onConfirm={this.onConfirm.bind(this)} regions={regions} />
                </View>

            </SafeAreaView>
        </FullModal>;
    }
}