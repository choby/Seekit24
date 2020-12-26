import { Color } from "@/theme/variables";
import { getFontLogicSize, getLogicPixel } from '@/utils/pixelRatio';
import React from 'react';
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleProp, TextInputSubmitEditingEventData, TextStyle, ViewStyle } from 'react-native';
import { TextInputMaskOptionProp } from 'react-native-masked-text';
import TextField from './TextField/index';

interface FormFieldProps {
    title?: string;
    placeholder?: string;
    isSecured?: boolean;
    onInputChange?: (value: string) => void;
    onValidate?: (value: string) => boolean;
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    invalidHint?: string;
    validateAsTyping?: boolean;
    isRequired?: boolean;
    isRequiredHint?: string;
    cellHeight?: number;
    width?: number;
    autoCapitalize?: "none" | "sentences" | "words" | "characters",
    autoCorrect?: boolean;
    selectorColor?: string;
    style?: StyleProp<ViewStyle>;
    maskOptions?: TextInputMaskOptionProp,
    value?: string;
    isMultiline?: boolean;
    // titleStyle?: StyleProp<TextStyle>;
    textFieldStyle?: StyleProp<TextStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    placeholderStyle?: StyleProp<TextStyle>;
    // invalidTextFieldStyle?: StyleProp<TextStyle>;
    // invalidTextInputStyle?: StyleProp<TextStyle>;
    // invalidHintStyle?: StyleProp<TextStyle>;
    // visibilityIconTintColor?: string;
    // visibilityIconSource?: string;
    // invisibilityIconSource?: string;
    textType?: "cel-phone" | "credit-card" | "datetime" | "money" | "only-numbers" | "zip-code" | "default";
    autoFocus?: boolean;
    invalid?: boolean;
    keyboardType?: KeyboardTypeOptions;
    placeholderTextColor?: string;
}
export default class FormField extends React.PureComponent<FormFieldProps, { isEditing: boolean; }>{
    static defaultProps: FormFieldProps = {
        placeholderStyle: {

        },
        placeholderTextColor: Color.SECONDARY_4,
        onInputChange: () => { },
        //@ts-ignore
        visibilityIconTintColor: Color.SECONDARY_4,
        textFieldStyle: {
            borderWidth: getLogicPixel(0.5),
            color: Color.SECONDARY_4,
            borderColor: "#FFFFFF",
            borderBottomColor: Color.SECONDARY_4
        },
        textInputStyle: {
            fontSize: getFontLogicSize(16),
            color: Color.SECONDARY_4,
        },
        invalidTextFieldStyle: {
            borderBottomColor: Color.ERROR,
            borderBottomWidth: getLogicPixel(0.5)
        },
        invalidTextInputStyle: {
            color: Color.ERROR,

        }
    };
    private field = React.createRef<TextField>();
    constructor(props: FormFieldProps) {
        super(props);
        this.state = { isEditing: false };
    }

    render() {
        const { isEditing } = this.state;
        const textFieldStyle = {
            ...this.props.textFieldStyle as any,
            borderWidth: getLogicPixel(0.5),
            color: Color.SECONDARY_1,
            borderColor: "#FFFFFF",
            paddingLeft: 0,
        };
        const textInputStyle = {
            ...this.props.textInputStyle as any,
            paddingLeft: 0,
            color: Color.SECONDARY_1,
        };
        const activedProps: any = isEditing ? {
            visibilityIconTintColor: Color.SECONDARY_1,
            textFieldStyle: {
                ...textFieldStyle,
                borderBottomColor: Color.SECONDARY_1,
            },
            textInputStyle,

        } : {
                textFieldStyle: {
                    ...textFieldStyle,
                },
                textInputStyle,
            };

        return <TextField ref={this.field}
            {...this.props}
            {...activedProps}

            placeholderTextColor={Color.SECONDARY_4}
            onFocus={() => this.setState({ isEditing: true }, () => this.field.current?.forceUpdate())}
            onEndEditing={() => this.setState({ isEditing: false }, () => this.field.current?.forceUpdate())}

        />;
    }
}
