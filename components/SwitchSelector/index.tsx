import React, { Component } from 'react';
import { Animated, Easing, GestureResponderEvent, I18nManager, Image, ImageStyle, PanResponder, PanResponderGestureState, PanResponderInstance, RegisteredStyle, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native';
import styles from './styles';

/**
 * 可以自定义label的switch开关
 */
export interface SwitchSelectorOption {
    label: string;
    value: string | number;
    customIcon?: (isSelected: boolean) => JSX.Element | JSX.Element;
    imageIcon?: string;
    activeColor?: string;
}

interface SwitchSelectorProps {
    options: SwitchSelectorOption[];
    initial?: number;
    value?: number;
    onPress(value: string | number | SwitchSelectorOption): void;
    fontSize?: number;
    selectedColor?: string;
    buttonMargin?: number;
    buttonColor?: string;
    buttonBorderWidth?: number;
    buttonBorderColor?: string;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    hasPadding?: boolean;
    animationDuration?: number;
    valuePadding?: number;
    height?: number;
    bold?: boolean;
    textStyle?: TextStyle | RegisteredStyle<TextStyle>;
    selectedTextStyle?: TextStyle | RegisteredStyle<TextStyle>;
    textCStyle?: TextStyle | RegisteredStyle<TextStyle>;
    selectedTextContainerStyle?: TextStyle | RegisteredStyle<TextStyle>;
    imageStyle?: ImageStyle | RegisteredStyle<ImageStyle>;
    style?: ViewStyle | RegisteredStyle<ViewStyle>;
    returnObject?: boolean;
    disabled?: boolean;
    disableValueChangeOnPress?: boolean;
    textContainerStyle?: StyleProp<ViewProps>;
    borderWidth?: number;
    selectedButtonStyle?: false | RegisteredStyle<ViewStyle> | Animated.Value | Animated.AnimatedInterpolation | Animated.WithAnimatedObject<ViewStyle>;
}



export default class SwitchSelector extends Component<SwitchSelectorProps, {
    selected?: number;
    sliderWidth?: number;
}> {
    static defaultProps = {
        style: {},
        textStyle: {},
        selectedTextStyle: {},
        textContainerStyle: {},
        selectedTextContainerStyle: {},
        imageStyle: {},
        options: [],
        textColor: '#000000',
        selectedColor: '#FFFFFF',
        fontSize: 14,
        backgroundColor: '#FFFFFF',
        borderColor: '#C9C9C9',
        borderRadius: 50,
        borderWidth: 1,
        hasPadding: false,
        valuePadding: 1,
        height: 40,
        bold: false,
        buttonMargin: 0,
        buttonColor: '#BCD635',
        returnObject: false,
        animationDuration: 100,
        disabled: false,
        disableValueChangeOnPress: false,
        initial: -1,
        value: 1,
        onPress: null,
    };

    private panResponder: PanResponderInstance;
    private animatedValue: Animated.Value;

    constructor(props: SwitchSelectorProps) {
        super(props);
        const { initial, options } = props;
        this.state = {
            selected: initial,
        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.shouldSetResponder,
            onMoveShouldSetPanResponder: this.shouldSetResponder,
            onPanResponderRelease: this.responderEnd,
            onPanResponderTerminate: this.responderEnd,
        });

        this.animatedValue = new Animated.Value(
            initial
                ? I18nManager.isRTL
                    ? -(initial / options.length)
                    : initial / options.length
                : 0,
        );
    }

    componentDidUpdate(prevProps: SwitchSelectorProps) {
        const { value, disableValueChangeOnPress } = this.props;
        if (value && prevProps.value !== value) {
            this.toggleItem(value, !disableValueChangeOnPress);
        }
    }

    getSwipeDirection(gestureState: PanResponderGestureState) {
        const { dx, dy, vx } = gestureState;
        // 0.1 velocity
        if (Math.abs(vx) > 0.1 && Math.abs(dy) < 80) {
            return dx > 0 ? 'RIGHT' : 'LEFT';
        }
        return null;
    }

    getBgColor() {
        const { selected } = this.state;
        const { options, buttonColor } = this.props;
        if (selected === -1) {
            return 'transparent';
        }
        return options[selected!].activeColor || buttonColor;
    }

    responderEnd = (_evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        const { disabled, options } = this.props;
        const { selected } = this.state;

        if (disabled) return;
        const swipeDirection = this.getSwipeDirection(gestureState);
        if (
            swipeDirection === 'RIGHT'
            && selected! < options.length - 1
        ) {
            this.toggleItem(selected! + 1);
        } else if (swipeDirection === 'LEFT' && selected! > 0) {
            this.toggleItem(selected! - 1);
        }
    };

    shouldSetResponder = (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => evt.nativeEvent.touches.length === 1 && !(Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5);

    animate = (value: number, last: number) => {
        const { animationDuration } = this.props;
        this.animatedValue.setValue(last);
        Animated.timing(this.animatedValue, {
            toValue: value,
            duration: animationDuration,
            easing: Easing.cubic,
            useNativeDriver: true,
        }).start();
    };

    toggleItem = (index: number, callOnPress = true) => {
        const { selected } = this.state;
        const { options, returnObject, onPress } = this.props;
        if (options.length <= 1 || index === null || isNaN(index)) return;
        this.animate(
            I18nManager.isRTL ? -(index / options.length) : index / options.length,
            I18nManager.isRTL
                ? -(selected! / options.length)
                : selected! / options.length,
        );
        if (callOnPress && onPress) {
            onPress(returnObject ? options[index] : options[index].value);
        } else {
            console.log('Call onPress with value: ', options[index].value);
        }
        this.setState({ selected: index });
    };

    render() {
        const { style, textStyle, selectedTextStyle, textContainerStyle, selectedTextContainerStyle, imageStyle,
            textColor, selectedColor, fontSize, backgroundColor, borderColor, borderRadius, borderWidth, hasPadding, valuePadding, height,
            bold, disabled, buttonMargin, options, buttonBorderWidth, buttonBorderColor, selectedButtonStyle } = this.props;

        const { selected, sliderWidth } = this.state;

        const optionsMap = options.map((element, index) => {
            const isSelected = selected === index;

            return (
                <TouchableOpacity
                    key={index}
                    disabled={disabled}
                    style={[
                        styles.button,
                        isSelected ? selectedTextContainerStyle : textContainerStyle,
                    ]}
                    onPress={() => this.toggleItem(index)}
                >
                    {typeof element.customIcon === 'function'
                        ? element.customIcon(isSelected)
                        : element.customIcon}
                    {element.imageIcon && (
                        <Image
                            source={{ uri: element.imageIcon }}
                            style={[
                                {
                                    height: 30,
                                    width: 30,
                                    tintColor: isSelected ? selectedColor : textColor,
                                },
                                imageStyle,
                            ]}
                        />
                    )}
                    <Text
                        style={[
                            {
                                fontSize,
                                fontWeight: bold ? 'bold' : 'normal',
                                textAlign: 'center',
                                color: isSelected ? selectedColor : textColor,
                                backgroundColor: 'transparent',
                            },
                            isSelected ? selectedTextStyle : textStyle,
                        ]}
                    >
                        {element.label}
                    </Text>
                </TouchableOpacity>
            );
        });

        return (
            <View style={[{ flexDirection: 'row' }, style]}>
                <View {...this.panResponder.panHandlers} style={{ flex: 1 }}>
                    <View
                        style={{
                            borderRadius,
                            backgroundColor,
                            height: height! + buttonMargin! * 2,
                        }}
                        onLayout={(event) => {
                            const { width } = event.nativeEvent.layout;
                            this.setState({
                                sliderWidth: width - (hasPadding ? 2 : 0),
                            });
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                borderColor,
                                borderRadius,
                                borderWidth: hasPadding ? borderWidth : 0,
                                alignItems: 'center',
                            }}
                        >
                            {!!sliderWidth && (
                                <Animated.View
                                    style={[
                                        {
                                            height: hasPadding ? height! - valuePadding! * 2 - borderWidth! * 2 : height,
                                            backgroundColor: this.getBgColor(),
                                            width: sliderWidth / options.length - ((hasPadding ? valuePadding! : 0) + buttonMargin! * 2),
                                            transform: [
                                                {
                                                    translateX: this.animatedValue.interpolate({
                                                        inputRange: [0, 1],
                                                        outputRange: [
                                                            hasPadding ? valuePadding! : 0,
                                                            sliderWidth
                                                            - (hasPadding ? valuePadding! : 0),
                                                        ],
                                                    }),
                                                },
                                            ],
                                            borderRadius,

                                            margin: buttonMargin,
                                        },
                                        styles.animated,
                                        {
                                            borderWidth: buttonBorderWidth,
                                            borderColor: buttonBorderColor,

                                        },
                                        selectedButtonStyle
                                    ]}
                                />
                            )}
                            {optionsMap}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}



