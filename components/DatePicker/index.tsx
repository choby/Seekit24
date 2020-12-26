import moment from 'moment';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Datepicker, DatepickerProps } from 'reactive';
import BottomModal from '../BottomModal';
import Divider from '../Divider';
import styles from './styles';

interface DatePickerProps extends Omit<DatepickerProps, "onChange"> {
    onCancel?: () => void;
    onConfirm?: (date: string) => void;
}

export default class extends React.Component<DatePickerProps, {
    date: string;
}> {
    static displayName = "DatePicker";
    private bottomModal = React.createRef<BottomModal>();
    /**
     *
     */
    constructor(props: DatePickerProps) {
        super(props);
        this.state = {
            date: this.props.date ?? moment(new Date()).format("YYYY-MM-DD")
        };
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
        const { date } = this.state;
        onConfirm?.(date);
        this.close();
    }

    render() {
        const { date } = this.state;
        return <BottomModal ref={this.bottomModal}>
            <View style={styles.funcContainer}>
                <TouchableOpacity onPress={() => this.onCancel()}><Text style={styles.cancelText}>取消</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.onConfirm()}><Text style={styles.confirmText}>确定</Text></TouchableOpacity>
            </View>
            <Datepicker proportion={[1, 1, 1]} {...this.props} date={date} onChange={(value: string) => this.setState({ date: value })} textStyle={styles.datePickerText} />
            <Divider />
            <Divider />
        </BottomModal>;
    }
}