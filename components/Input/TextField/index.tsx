import IconFont from "@/components/Iconfont";
import { Color } from "@/theme/variables";
import React, { Component } from 'react';
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleProp, Text, TextInput, TextInputFocusEventData, TextInputSubmitEditingEventData, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { TextInputMask, TextInputMaskOptionProp, TextInputMaskTypeProp } from 'react-native-masked-text';
import styles from './styles';

const CELL_HEIGHT = 40;

interface TextFieldProps {
    title?: string;
    value?: string;
    placeholder?: string,
    cellHeight?: number,
    isMultiline?: boolean,
    width?: number, //Optional
    style?: StyleProp<ViewStyle>,
    onInputChange?: (value: string) => void;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters', //enum('none', 'sentences', 'words', 'characters')
    autoCorrect?: boolean,
    textType?: TextInputMaskTypeProp,
    customMask?: string,
    maskOptions?: TextInputMaskOptionProp,
    titleStyle?: Record<string, unknown>,
    textFieldStyle?: Record<string, unknown>,
    textInputStyle?: Record<string, unknown>,
    placeholderTextColor?: string,
    selectionColor?: string,
    isRequired?: boolean,
    isRequiredHint?: string,
    isSecured?: boolean,
    onValidate?: (value: string) => boolean;
    validateAsTyping?: boolean,
    invalidTextFieldStyle?: Record<string, unknown>,
    invalidTextInputStyle?: Record<string, unknown>,
    invalidHint?: string,
    invalidHintStyle?: Record<string, unknown>,
    visibilityIconTintColor?: string,
    invisibilityIconSource?: Record<string, unknown>,
    visibilityIconSource?: Record<string, unknown>,
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    onEndEditing?: () => void;
    keyboardType?: KeyboardTypeOptions,
    isDisabled?: boolean;
    disabledTextFieldStyle?: Record<string, unknown>,
    disabledTextInputStyle?: Record<string, unknown>,
    onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    autoFocus?: boolean;
    invalid?: boolean;
}

interface TextFieldState {
    text?: string,
    isValid: boolean;
    invalidMessage?: string,
    isVisible: boolean;

}

export default class TextField extends Component<TextFieldProps, TextFieldState> {
    static defaultProps = {
        title: '',
        value: null,
        placeholder: '',
        cellHeight: CELL_HEIGHT,
        isMultiline: false,
        autoCapitalize: 'none',
        autoCorrect: false,
        textType: 'default',
        customMask: '',
        maskOptions: null,
        isRequired: false,
        isRequiredHint: 'Field is required.',
        isSecured: false,
        onValidate: null,
        validateAsTyping: false,
        invalidHint: undefined,
        textFieldStyle: styles.textField,
        invalidTextFieldStyle: styles.invalidTextField,
        visibilityIconTintColor: null,
        onSubmitEditing: () => { },
        onEndEditing: () => { },
        isDisabled: false,
        disabledTextFieldStyle: styles.disabledTextField,
        disabledTextInputStyle: styles.disabledTextInput,
        onFocus: () => { },
    };

    constructor(props: TextFieldProps) {
        super(props);
        this.state = {
            text: this.props.value,
            isValid: true,
            invalidMessage: this.props.invalidHint,
            isVisible: !this.props.isSecured
        };
    }
    maskedTextInput: any;

    UNSAFE_componentWillReceiveProps(nextProps: TextFieldProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                text: nextProps.value
            });
        }
        if (nextProps.invalidHint !== this.props.invalidHint) {
            this.setState({
                invalidMessage: nextProps.invalidHint
            });
        }
        if (nextProps.invalid !== this.props.invalid) {
            this.setState({
                isValid: !!!nextProps.invalid
            });
        }
    }

    onMaskedTextChange = (text: string) => {
        this.setState({
            text
        }, () => {
            let rawText = this.maskedTextInput.getRawValue();
            if (this.props.textType == 'credit-card') {
                rawText = rawText.join('');
            }
            if (this.props.validateAsTyping) {
                this.validate(rawText);
            }
            this.props.onInputChange?.(rawText);
        });
    };

    onTextChange = (text: any) => {
        this.setState({
            text
        }, () => {
            if (this.props.validateAsTyping) {
                this.validate(text);
            }
            this.props.onInputChange?.(text);
        });
    };

    renderTitle = (title: any) => {
        if (title.length > 0) {
            return (
                <Text style={[styles.title, this.props.titleStyle]}>
                    {`${title}${this.props.isRequired ? '*' : ''}`}
                </Text>
            );
        }
    };

    getMaskType = () => {
        return this.props.textType!;
    };

    getMaskOptions = (): TextInputMaskOptionProp => {
        if (this.props.textType == 'custom') {
            return {
                /**
                 * mask: (String | required | default '')
                 * the mask pattern
                 * 9 - accept digit.
                 * A - accept alpha.
                 * S - accept alphanumeric.
                 * * - accept all, EXCEPT white space.
                */
                mask: this.props.customMask || '',
                getRawValue: (value: any) => {
                    if (this.props.customMask) {
                        const maskCharacters = this.props.customMask.split('');
                        const indiceToKeep: any[] = [];
                        maskCharacters.map((char, index) => {
                            if (char == '9' || char == 'A' || char == 'S' || char == '*') {
                                indiceToKeep.push(index);
                            }
                        });
                        const valueCharacters = value.split('');
                        const rawValue = valueCharacters.filter((_char: string, index: number) => {
                            return indiceToKeep.includes(index);
                        }).join('');
                        //if (__DEV__) console.log('Value', value, 'RawValue', rawValue)
                        return rawValue;
                    }
                }
            };
        }
        let maskOptions = {};
        if (this.props.maskOptions) {
            maskOptions = this.props.maskOptions;
        } else {
            switch (this.props.textType) {
                case 'cel-phone':
                    maskOptions = {
                        maskType: 'INTERNATIONAL',
                        withDDD: false
                    };
                    break;
                case 'credit-card':
                    maskOptions = {
                        obfuscated: false,
                        issuer: 'visa-or-mastercard'
                    };
                    break;
                case 'money':
                    maskOptions = {
                        unit: '$',
                        separator: '.',
                        delimiter: ','
                    };
                    break;
                case 'datetime':
                    maskOptions = {
                        format: 'YYYY/MM/DD'
                    };
                    break;
                default:
                    break;
            }
        }
        // if (__DEV__) console.log(`Options: ${JSON.stringify(maskOptions, undefined, 2)}`)
        return maskOptions;
    };

    renderMaskedTextInput = () => {
        const { placeholder, placeholderTextColor, autoFocus } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <TextInputMask
                    allowFontScaling={false}
                    ref={(ref) => { this.maskedTextInput = ref; }}
                    type={this.getMaskType()}
                    options={this.getMaskOptions()}
                    style={this.stylishTextInput()}
                    value={this.state.text}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    selectionColor={this.props.selectionColor}
                    editable={!this.props.isDisabled}
                    onChangeText={this.onMaskedTextChange}
                    blurOnSubmit={true}
                    underlineColorAndroid='transparent'
                    maxLength={this.props.customMask ? this.props.customMask.split('').length : undefined}
                    onSubmitEditing={this.props.onSubmitEditing}
                    onEndEditing={(event) => {
                        this.validate(event.nativeEvent.text);
                        this.props.onEndEditing?.();
                    }}
                    keyboardType={this.props.keyboardType || 'default'}
                    onFocus={this.props.onFocus}
                    autoFocus={autoFocus}
                />
            </View>
        );
    };

    stylishTextInput = (): StyleProp<TextStyle> => {
        const { cellHeight, textInputStyle, invalidTextInputStyle, disabledTextInputStyle } = this.props;
        if (this.props.isDisabled) {
            return [styles.textInput, textInputStyle, disabledTextInputStyle, { height: cellHeight }];
        }
        if (this.state.isValid) {
            return [styles.textInput, textInputStyle, { height: cellHeight }];
        }
        return [styles.textInput, textInputStyle, invalidTextInputStyle, { height: cellHeight }];
    };

    renderTextInput = () => {
        const { placeholder, placeholderTextColor } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    allowFontScaling={false}
                    autoCapitalize={this.props.autoCapitalize}
                    autoCorrect={this.props.autoCorrect}
                    style={this.stylishTextInput()}
                    value={this.state.text}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor ?? Color.SECONDARY_4}
                    selectionColor={this.props.selectionColor}
                    editable={!this.props.isDisabled}
                    multiline={this.props.isMultiline}
                    onChangeText={this.onTextChange}
                    blurOnSubmit={true}
                    underlineColorAndroid='transparent'
                    secureTextEntry={!this.state.isVisible}
                    onEndEditing={(event) => {
                        this.validate(event.nativeEvent.text);
                        this.props.onEndEditing?.();
                    }}
                    onSubmitEditing={this.props.onSubmitEditing}
                    keyboardType={this.props.keyboardType || 'default'}
                    onFocus={this.props.onFocus}
                    autoFocus={this.props.autoFocus}
                />
            </View>
        );
    };

    renderInvalidHint = () => {
        return (
            <View>
                {
                    !this.state.isValid &&
                    <Text
                        numberOfLines={0}
                        ellipsizeMode="tail"
                        style={[styles.invalidHint, this.props.invalidHintStyle]}
                    >{this.state.invalidMessage}</Text>
                }
            </View>
        );
    };

    renderVisibilityIcon = () => {
        const { cellHeight } = this.props;
        const visibleIconWidth = Math.min(cellHeight!, CELL_HEIGHT);
        return (
            <TouchableOpacity style={{ width: visibleIconWidth, height: visibleIconWidth, ...styles.central }} onPress={() => {
                this.setState({
                    isVisible: !this.state.isVisible
                });
            }}>
                {
                    this.state.isVisible ? <IconFont name="yanjingzhangkai1x" size={24} /> : <IconFont name="yanjingguanbi1x" size={24} />
                }
            </TouchableOpacity>
        );
    };

    stylishTextField = () => {
        const { textFieldStyle, invalidTextFieldStyle, disabledTextFieldStyle } = this.props;
        if (this.props.isDisabled) {
            return [styles.defaultPadding, disabledTextFieldStyle, styles.flexRowEnd];
        }
        return [styles.defaultPadding, this.state.isValid ? textFieldStyle : invalidTextFieldStyle, styles.flexRowEnd];
    };

    renderTextField = () => {
        const { textType } = this.props;
        return (
            <View>
                <View style={this.stylishTextField()}>

                    {//@ts-expect-error
                        textType == 'default' ? this.renderTextInput() : this.renderMaskedTextInput()}
                    {this.props.isSecured && this.renderVisibilityIcon()}
                </View>
            </View>
        );
    };

    render() {
        const { title } = this.props;
        return (
            <View style={[this.props.style, this.props.width ? { width: this.props.width } : null]}>
                {this.renderTitle(title)}
                {this.renderTextField()}
                {/* {!this.state.isValid && this.renderInvalidHint()} */}
            </View>
        );
    }

    validate(text: string) {
        if (this.props.isRequired) {
            if (!text) {
                this.setAsInvalid(this.props.isRequiredHint);
                return false;
            } else {
                this.setState({
                    isValid: true
                });
            }
        }

        if (this.props.onValidate) {
            const validateResult = this.props.onValidate(text);
            if (validateResult === true) {
                this.setState({
                    isValid: true
                });
            } else {
                if (validateResult === false) {
                    this.setState({
                        isValid: false
                    });
                    return false;
                }
                if (validateResult !== false && typeof (validateResult) === 'string') {
                    this.setAsInvalid(validateResult);
                    return false;
                }
            }
        }

        return true;
    }

    setAsValid() {
        this.setState({
            isValid: true,
            invalidMessage: ''
        });
    }

    setAsInvalid(errorMessage = '') {
        this.setState({
            isValid: false,
            invalidMessage: errorMessage
        });
    }

    getIsValid() {
        return this.state.isValid;
    }

    getValue() {
        return this.state.text;
    }
}