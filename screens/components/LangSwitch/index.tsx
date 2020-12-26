import React from "react";
import { SlideModal, NavigationBar, SlideModalProps, Radio } from "reactive";
import { View, Text } from "react-native";
import styles from "./styles";
import IconFont from "@/components/Iconfont";

interface LangSwitchState {
    value?: string | number | boolean;
}
export default class LangSwitch extends React.PureComponent<unknown, LangSwitchState> {
    /**
     *
     */
    constructor(props: unknown) {
        super(props);
        this.state = {
            value: undefined
        };
    }
    private slideModalx?: SlideModal<any> | null;
    open() {
        this.slideModalx?.open(undefined);
    }
    render() {
        const { value } = this.state;
        return <SlideModal<SlideModalProps> align="up" direction="up" ref={ref => this.slideModalx = ref}
            styles={{
                container: styles.container,
                content: styles.content
            }}
            cancelable={true}
        >
            <NavigationBar
                backLabel={<Text style={styles.navCancelStyle}>取消</Text>}
                title="选择语言"
                titleStyle={styles.navTitleStyle}
                style={styles.navBar}
            />
            <View>
                <Radio
                    value={value}
                    iconPosition="right"
                    onChange={(value) => {

                        this.setState({
                            value: value
                        })
                    }}
                    style={styles.radio}
                    checkedIcon={<IconFont name="duihao1x" size={20}/>}
                >

                    <Radio.Item label='选项A' value={0} style={styles.radioItem} />
                    <Radio.Item label='选项B' value={1} style={styles.radioItem} />
                    <Radio.Item label='选项C' value={2} style={styles.radioItem} />
                </Radio>
            </View>
        </SlideModal>
    }

}