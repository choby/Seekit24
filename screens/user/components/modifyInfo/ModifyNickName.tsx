import Button from '@/components/Button';
import Divider from '@/components/Divider';
import FullModal from '@/components/FullModal';
import Iconfont from '@/components/Iconfont';
import Input from '@/components/Input';
import theme from '@/theme';
import { getLogicPixel } from '@/utils/pixelRatio';
import _ from 'lodash';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationBar } from "reactive";
import styles from './styles';

interface ModifyNickNameProps {
    maxLength: number;
    minLength: number;
    onOK?: (value: string) => void;
    nickName?: string;
}

export default class extends React.Component<ModifyNickNameProps, {
    text?: string;
}> {
    private fullModal = React.createRef<FullModal>();
    static defaultProps = {
        maxLength: 15,
        minLength: 4
    };
    /**
     *
     */
    constructor(props: ModifyNickNameProps) {
        super(props);
        this.state = {
            text: props.nickName,
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps: ModifyNickNameProps) {
        if (!_.isEqual(nextProps.nickName, this.props.nickName)) {
            this.setState({ text: nextProps.nickName });
        }
    }

    open() {
        this.setState({ text: this.props.nickName }, () => {
            this.fullModal.current?.open();
        });
    }

    close() {
        this.fullModal.current?.close();
    }

    private onTextChanged(text: string) {
        this.setState({ text });
    }

    private onOk() {
        const { maxLength, onOK } = this.props;
        const { text } = this.state;
        if (text && text.length <= maxLength) {
            onOK?.(text);
        }
    }

    render() {
        const { maxLength, minLength } = this.props;
        const { text } = this.state;
        return <FullModal ref={this.fullModal}
            align="down"
            direction="up"

        >
            <View style={[theme.container]}>
                <NavigationBar
                    backLabel={<Iconfont name="yemianguanbi-hei1x" size={getLogicPixel(20)} />}
                    titleContainer={false}
                    forwardLabel={false}
                    onPressBack={() => this.close()}
                    style={{ zIndex: 1 }}
                />
                <Input.FormField value={text}
                    invalid={(text?.length ?? 0) < minLength || (text?.length ?? 0) > maxLength}
                    placeholder="Please edit your nickname"
                    onInputChange={this.onTextChanged.bind(this)}
                    textInputStyle={styles.nicknameText}
                />

                <View style={styles.upToCharactersContainer}>
                    <Text style={styles.upToCharactersText}>Up to {maxLength} characters</Text>
                </View>
                <Divider height={28} />
                <View>
                    <Button size="lg" type="primary" disabled={(text?.length ?? 0) > maxLength} onPress={this.onOk.bind(this)}>OK</Button>
                </View>
            </View>
        </FullModal>;
    }
}