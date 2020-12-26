import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Platform, TextInput, StyleProp, ViewStyle, TextStyle } from 'react-native';
import IconFont from '../Iconfont';

// Icon
//import Feather from 'react-native-vector-icons/Feather';

interface Item {
    disabled?: boolean;
    label?: string;
    value?: string | number;
    selected?: boolean;
}

type ValueType<T> = T extends true ? Item[] : Item;

export type DropDownPickerPros = {
    items: Item[];
    defaultValue?: any;
    placeholder?: string;
    placeholderStyle?: StyleProp<TextStyle>;
    dropDownMaxHeight?: number;
    style?: StyleProp<ViewStyle>;
    dropDownStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    itemStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    activeItemStyle?: StyleProp<ViewStyle>;
    activeLabelStyle?: StyleProp<ViewStyle>;
    showArrow?: boolean;
    arrowStyle?: StyleProp<ViewStyle>;
    arrowColor?: string;
    arrowSize?: number;
    customArrowUp?: (size: number, color: string) => React.ReactNode;
    customArrowDown?: (size: number, color: string) => React.ReactNode;
    customTickIcon?: () => React.ReactNode;
    zIndex?: number;
    disabled?: boolean;
    searchable?: boolean;
    searchablePlaceholder?: string;
    searchableError?: string;
    searchableStyle?: StyleProp<ViewStyle>;
    isVisible?: boolean;
    multipleText?: string;
    min?: number;
    max?: number;
    onOpen?: () => void;
    onClose?: () => void;
    arrowFllowText?: boolean;
} & ({
    multiple?: false;
    onChangeItem?: (items: ValueType<false>, index?: number) => void;

} | {
    multiple?: true;
    multipleText?: string;
    onChangeItem?: (items: ValueType<true>, index?: number) => void;
})

interface DropDownPickerState {
    choice: Item[] | Item;
    searchableText?: string;
    isVisible?: boolean;
    props: {
        multiple?: boolean;
        defaultValue: any;
        isVisible?: boolean;
        disabled?: boolean;
    };
    top?: number;
}

class DropDownPicker extends React.Component<DropDownPickerPros, DropDownPickerState> {
    static defaultProps: any = {
        placeholder: 'Select an item',
        dropDownMaxHeight: 150,
        style: {},
        dropDownStyle: {},
        containerStyle: { height: 36 },
        itemStyle: {},
        labelStyle: {},
        placeholderStyle: {},
        activeItemStyle: {},
        activeLabelStyle: {},
        arrowStyle: {},
        arrowColor: '#000',
        showArrow: true,
        arrowSize: 15,
        // customArrowUp: (size, color) => <Feather name="chevron-up" size={size} color={color} />,
        // customArrowDown: (size, color) => <Feather name="chevron-down" size={size} color={color} />,
        // customTickIcon: () => <Feather name="check" size={15} />,
        zIndex: 5000,
        disabled: false,
        searchable: false,
        searchablePlaceholder: 'Search for an item',
        searchableError: 'Not Found',
        searchableStyle: {},
        isVisible: false,
        multiple: false,
        multipleText: '%d items have been selected',
        min: 0,
        max: 10000000,
        onOpen: () => { },
        onClose: () => { },
        onChangeItem: () => { },
    };
    constructor(props: DropDownPickerPros) {
        super(props);

        let choice: Item | undefined;
        let items: Item[] = [];
        if (!props.multiple) {
            if (props.defaultValue) {
                choice = props.items.find(item => item.value === props.defaultValue);
            } else if (props.items.filter(item => item.hasOwnProperty('selected') && item.selected === true).length > 0) {
                choice = props.items.filter(item => item.hasOwnProperty('selected') && item.selected === true)[0];
            } else {
                choice = this.null();
            }
        } else {
            if (props.defaultValue && Array.isArray(props.defaultValue) && props.defaultValue.length > 0) {
                props.defaultValue.forEach((value) => {
                    const item = props.items.find(item => item.value === value);
                    if (item)
                        items.push(item);
                });
            } else if (props.items.filter(item => item.hasOwnProperty('selected') && item.selected === true).length > 0) {
                items = props.items.filter((item) => item.hasOwnProperty('selected') && item.selected === true);
            }
        }

        this.state = {
            choice: props.multiple ? items : {
                label: choice?.label,
                value: choice?.value
            },
            searchableText: undefined,
            isVisible: props.isVisible,
            props: {
                multiple: props.multiple,
                defaultValue: props.defaultValue,
                isVisible: props.isVisible
            }
        };
    }

    static getDerivedStateFromProps(props: DropDownPickerPros, state: DropDownPickerState) {
        // Change default value (! multiple)
        if (!state.props.multiple && props.defaultValue !== state.props.defaultValue) {
            const { label, value } = props.defaultValue === undefined ? {
                label: undefined,
                value: undefined
            } : props.items.find(item => item.value === props.defaultValue)!;
            return {
                choice: {
                    label, value
                },
                props: {
                    ...state.props,
                    defaultValue: props.defaultValue
                }
            }
        }

        // Change default value (multiple)
        if (state.props.multiple && JSON.stringify(props.defaultValue) !== JSON.stringify(state.props.defaultValue)) {
            const items: Item[] = [];
            if (props.defaultValue && Array.isArray(props.defaultValue) && props.defaultValue.length > 0) {
                props.defaultValue.forEach((value) => {
                    const item = props.items.find(item => item.value === value);
                    if (item)
                        items.push(item);
                });
            }

            return {
                choice: items,
                props: {
                    ...state.props,
                    defaultValue: props.defaultValue
                }
            }
        }

        // Change visibility
        if (props.isVisible !== state.props.isVisible) {
            return {
                isVisible: props.isVisible,
                props: {
                    ...state.props,
                    isVisible: props.isVisible
                }
            }
        }

        // Change disability
        if (props.disabled !== state.props.disabled) {
            return {
                props: {
                    ...state.props,
                    disabled: props.disabled
                }
            }
        }

        return null;
    }

    null(): Item {
        return {
            label: undefined,
            value: undefined
        }
    }

    toggle() {
        this.setState({
            isVisible: !this.state.isVisible,
        }, () => {
            const isVisible = this.state.isVisible;

            if (isVisible) {
                this.props.onOpen?.();
            } else {
                this.props.onClose?.();
            }
        });
    }

    select(item: Item, index: number) {
        const { multiple } = this.state.props;
        if (!multiple) {
            this.setState({
                choice: {
                    label: item.label,
                    value: item.value
                },
                isVisible: false,
                props: {
                    ...this.state.props,
                    isVisible: false
                }
            });

            // onChangeItem callback
            //@ts-expect-error
            this.props.onChangeItem?.(item, index);
        } else {
            let choice = [...this.state.choice as Item[]];
            const exists = choice.findIndex(i => i.label === item.label && i.value === item.value);

            if (exists > -1 && choice.length > (this.props.min!)) {
                choice = choice.filter(i => i.label !== item.label && i.value !== item.value);
            } else if (exists === -1 && choice.length < this.props.max!) {
                choice.push(item);
            }

            this.setState({ choice });

            // onChangeItem callback
            this.props.onChangeItem?.(choice.map(c => ({ ...c })));
        }

        // onClose callback (! multiple)
        if (!multiple)
            this.props.onClose?.();
    }

    getLayout(layout: { height: number }) {
        this.setState({ top: layout.height - 1 });
    }

    getItems() {
        if (this.state.searchableText) {
            const text = this.state.searchableText.toLowerCase();

            return this.props.items.filter((item) => {
                return item.label && (item.label.toLowerCase()).indexOf(text) > -1;
            });
        }

        return this.props.items;
    }

    getNumberOfItems() {
        const { choice } = this.state;
        return this.props.multipleText?.replace('%d', Array.isArray(choice) ? choice.length.toString() : "0");
    }

    private itemIsSelected(item: Item) {
        const { choice } = this.state;
        if (Array.isArray(choice)) {
            return choice.findIndex(c => c.value === item.value) >= 0;
        }
        return choice.value === item.value;
    }

    render() {
        const { props: { multiple, disabled }, choice } = this.state;
        const { placeholder, labelStyle } = this.props;
        const isPlaceholderActive = !Array.isArray(choice) ? choice.label === undefined : true;
        const label = isPlaceholderActive ? (placeholder) : (!Array.isArray(choice) ? choice.label : undefined);
        const placeholderStyle = isPlaceholderActive && this.props.placeholderStyle;
        const opacity = disabled ? 0.5 : 1;
        const items = this.getItems();
        return (
            <View style={[{ height: 36 }, this.props.containerStyle, {

                ...(Platform.OS !== 'android' && {
                    zIndex: this.props.zIndex
                })
            }]}>
                <TouchableOpacity
                    onLayout={(event) => this.getLayout(event.nativeEvent.layout)}
                    disabled={disabled}
                    onPress={() => this.toggle()}
                    activeOpacity={1}
                    style={[
                        styles.dropDown,
                        this.props.style,
                        this.state.isVisible && styles.noBottomRadius, {
                            flexDirection: 'row', flex: 1
                        }
                    ]}
                >
                    <View style={[styles.dropDownDisplay]}>
                        <Text style={[this.props.labelStyle, placeholderStyle, { opacity }]}>
                            {multiple ? (
                                (Array.isArray(choice) && choice.length > 0) ? this.getNumberOfItems() : placeholder
                            ) : label}
                        </Text>

                        {this.props.arrowFllowText && this.props.showArrow && (
                            <View style={[styles.arrow]}>
                                <View style={[this.props.arrowStyle, { opacity }]}>
                                    {
                                        !this.state.isVisible ? (
                                            this.props.customArrowDown?.(this.props.arrowSize!, this.props.arrowColor!) ?? <IconFont name="liebiaozhedie1x" />
                                        ) : (
                                                this.props.customArrowUp?.(this.props.arrowSize!, this.props.arrowColor!) ?? <IconFont name="liebiaozhedieshang1x" />
                                            )
                                    }
                                </View>
                            </View>
                        )}
                    </View>
                    {this.props.arrowFllowText !== true && this.props.showArrow && (
                        <View style={[styles.arrow]}>
                            <View style={[this.props.arrowStyle, { opacity }]}>
                                {
                                    !this.state.isVisible ? (
                                        this.props.customArrowDown?.(this.props.arrowSize!, this.props.arrowColor!) ?? <IconFont name="liebiaozhedie1x" />
                                    ) : (
                                            this.props.customArrowUp?.(this.props.arrowSize!, this.props.arrowColor!) ?? <IconFont name="liebiaozhedieshang1x" />
                                        )
                                }
                            </View>
                        </View>
                    )}
                </TouchableOpacity>
                <View style={[
                    styles.dropDown,
                    styles.dropDownBox,
                    this.props.dropDownStyle,
                    !this.state.isVisible && styles.hidden, {
                        top: this.state.top,
                        maxHeight: this.props.dropDownMaxHeight,
                        zIndex: this.props.zIndex
                    }
                ]}>
                    {
                        this.props.searchable && (
                            <View style={{ width: '100%', flexDirection: 'row' }}>
                                <TextInput
                                    style={[styles.input, this.props.searchableStyle]}
                                    defaultValue={this.state.searchableText}
                                    placeholder={this.props.searchablePlaceholder}
                                    onChangeText={(text) => {
                                        this.setState({
                                            searchableText: text
                                        })
                                    }}
                                />
                            </View>
                        )
                    }

                    <ScrollView style={{ width: '100%' }} nestedScrollEnabled={true}>
                        {
                            items.length > 0 ? items.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => this.select(item, index)}
                                    style={[styles.dropDownItem, this.props.itemStyle, (
                                        this.itemIsSelected(item) && this.props.activeItemStyle
                                    ), {
                                        opacity: item?.disabled ? 0.3 : 1,
                                        ...(
                                            multiple && {
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between'
                                            }
                                        )
                                    }]}
                                    disabled={item?.disabled}
                                >
                                    <Text style={[this.props.labelStyle,
                                    this.itemIsSelected(item) && this.props.activeLabelStyle
                                    ]}>{item.label}</Text>
                                    {
                                        multiple && Array.isArray(choice) && choice.findIndex(i => i.label === item.label && i.value === item.value) > -1 && (
                                            this.props.customTickIcon?.()
                                        )
                                    }
                                </TouchableOpacity>
                            )) : (
                                    <Text style={[styles.notFound, {
                                        //@ts-ignore
                                        fontFamily: labelStyle?.fontFamily
                                    }]}>
                                        {this.props.searchableError}
                                    </Text>
                                )
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    arrow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 8,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginLeft: 4
    },
    dropDown: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderWidth: 0.5,
        borderColor: '#dfdfdf',
    },
    dropDownDisplay: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        textAlign: 'center',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        flexGrow: 1,

    },
    dropDownBox: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute',
        width: '100%'
    },
    dropDownItem: {
        paddingVertical: 8,
        width: '100%',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        borderColor: '#dfdfdf',
        borderBottomWidth: 1,
        paddingHorizontal: 0,
        paddingVertical: 8,
        marginBottom: 10,
    },
    hidden: {
        position: 'relative',
        display: 'none',
        borderWidth: 0
    },
    noBottomRadius: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    notFound: {
        textAlign: 'center',
        color: 'grey',
        marginVertical: 10,
        marginBottom: 15
    }
});

export default DropDownPicker;