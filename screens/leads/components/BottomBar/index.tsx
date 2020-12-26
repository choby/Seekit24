import IconFont from "@/components/Iconfont";
import theme from "@/theme";
import { withAuthDelegate } from "@/utils/withAuth";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";



interface BottomBarProps {
    // goodsId: number;
    // isCollected?: boolean;
    // isOnSale?: boolean;
    onStartMessage?: () => void;
    // onCollect?: () => void;
    // onCancelCollect?: () => void;
    // onStartChat?: () => void;
    isMaster: boolean;
}
export const BottomBar = ({ //goodsId, isCollected, 
    onStartMessage, isMaster }: BottomBarProps) => {
    //const [collected, setCollected] = useState(isCollected);
    // const onCollect = async () => {
    //     const result = await collect(goodsId);
    //     if (result)
    //         setCollected(true);
    // };
    // const onCancelCollect = async () => {
    //     const result = await collect(goodsId);
    //     if (result)
    //         setCollected(false);
    // };
    return <View style={theme.bottomBar}>
        <View style={styles.bottomFunctionBottoms}>
            <TouchableOpacity onPress={withAuthDelegate(onStartMessage)}>
                <View style={styles.bottomFunctionItem}>
                    <IconFont name="jinru1x" size={20} />
                    <Text style={styles.bottomFunctionName}>Message</Text>
                </View>
            </TouchableOpacity>
            {
                !isMaster && <>
                    {/* {
                //未收藏
                !collected && <TouchableOpacity onPress={withAuthDelegate(onCollect)}>
                    <View style={styles.bottomFunctionItem}>
                        <IconFont name="shoucangicon1x" size={20} />
                        <Text style={styles.bottomFunctionName}>Collection</Text>
                    </View>
                </TouchableOpacity>

            } */}
                    {/* {
                //已收藏
                collected && <TouchableOpacity onPress={withAuthDelegate(onCancelCollect)}>
                    <View style={styles.bottomFunctionItem}>
                        <IconFont name="shoucangicon-liang1x" size={20} />
                        <Text style={styles.bottomFunctionName}>Collected</Text>
                    </View>
                </TouchableOpacity>

            } */}
                </>
            }
        </View>
        {/* {
            isOnSale && <Button type="primary" style={styles.bottomChatButton} onPress={withAuthDelegate(onStartChat)}>Chat</Button>
        } */}
        {
            // !isOnSale && <Button type="secondary" style={styles.bottomRemovedButton}>Removed</Button>
        }
    </View>;
};
