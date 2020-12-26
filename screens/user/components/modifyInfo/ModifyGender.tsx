import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Scrollpicker, ScrollpickerProps } from 'reactive';
import styles from './styles';
import BottomModal from '@/components/BottomModal';
import Divider from '@/components/Divider';
import { EnumGender } from '@/types/enums';
import _ from 'lodash';

interface ModifyGenderProps extends ScrollpickerProps {
    gender?: EnumGender;
    onCancel?: () => void;
    onConfirm?: (value: {
        label: string;
        value: EnumGender;
    }) => void;
}

const genderItems = [{ label: "Male", value: EnumGender.MALE }, { label: "Female", value: EnumGender.FEMALE }];

export default class extends React.Component<ModifyGenderProps, {
    valueIndex: number;
}> {
    private bottomModal = React.createRef<BottomModal>();
    /**
     *
     */
    constructor(props: ModifyGenderProps) {
        super(props);
        this.state = {
            valueIndex: genderItems.findIndex(gender => Number(props.gender ?? 0) === gender.value) ?? 0
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps: ModifyGenderProps) {
        if (!_.isEqual(nextProps.gender, this.props.gender)) {
            this.setState({
                valueIndex: genderItems.findIndex(gender => Number(nextProps.gender ?? 0) === gender.value) ?? 0
            });
        }
    }

    open() {
        this.bottomModal.current?.open();
    }
    close() {
        this.bottomModal.current?.close();
    }

    private onCancel() {
        const { onCancel } = this.props;
        onCancel?.();
        this.close();
    }

    private onConfirm() {
        const { onConfirm } = this.props;
        const { valueIndex } = this.state;
        onConfirm?.(genderItems[valueIndex]);
        this.close();
    }


    render() {
        const { valueIndex } = this.state;

        return <BottomModal ref={this.bottomModal}>
            <View style={styles.funcContainer}>
                <TouchableOpacity onPress={() => this.onCancel()}><Text style={styles.cancelText}>取消</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.onConfirm()}><Text style={styles.confirmText}>确定</Text></TouchableOpacity>
            </View>
            <Scrollpicker
                textStyle={styles.pickerText}
                list={[genderItems]}
                value={[valueIndex]}
                onChange={(_: number, index: number) => this.setState({ valueIndex: index })}
            />
            <Divider />
            <Divider />
        </BottomModal>
    }
}