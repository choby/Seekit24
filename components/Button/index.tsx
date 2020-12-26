import IconFont, { IconNames } from "@/components/Iconfont";
import variables from '@/theme/reactiveTheme';
import { FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { FadeAnimated } from 'reactive/dist/common/animations';
import buttonStyles from './styles';
export { buttonStyles };


enum StyleState {
    ACVTIVED = "Acvtived",
    DISABLED = "Disabled"
}

const fontSizeMap = {
    xl: FontSize.TEXT_SIZE_5,
    lg: FontSize.TEXT_SIZE_4,
    md: FontSize.TEXT_SIZE_3,
    sm: FontSize.TEXT_SIZE_2,
    xs: FontSize.TEXT_SIZE_2
};

const heightMap = {
    xl: {
        height: getLogicPixel(44),
    },
    lg: {
        height: getLogicPixel(40),
    },
    md: {
        height: getLogicPixel(32),
    },
    sm: {
        height: getLogicPixel(28),
    },
    xs: {
        height: getLogicPixel(24)
    }
};

export interface ButtonProps {
    testID?: string;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    type?: 'default' | 'primary' | 'secondary',// | 'info' | 'success' | 'warning' | 'text';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs';
    children?: any;
    disabled?: boolean;
    onPress?: () => void;
    icon?: IconNames;
    iconPosition?: "left" | "right",
    underlayColor?: string;
}

export default class Button extends React.Component<ButtonProps, {
    buttonWidth: number;
    active: boolean;
}> {
    private containerRef?: TouchableHighlight | null = undefined;
    private animated?: FadeAnimated = undefined;

    static defaultProps = {
        style: {},
        textStyle: {},
        textColorInverse: false,
        type: 'default',
        size: 'md',
        disabled: false,
        onPress: null,
    };

    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            buttonWidth: 0,
            active: false
        };

        if (variables.buttonEnableAnimated) {
            this.animated = new FadeAnimated({
                scaleList: [0, 1],

                opacityList: [1, 0],
                opacityDuration: 1000,
            });
        }
    }

    componentDidMount() {

    }

    // measure(...args: any) {
    //     this.containerRef?.measure.apply(null, args)
    // }

    handlePress() {
        const { disabled, onPress } = this.props;
        if (disabled) {
            return;
        }
        this.animated && this.animated.toIn();

        if (typeof onPress === 'function') {
            onPress();
        }
    }

    handleLayout = (e: any) => {
        const { width } = e.nativeEvent.layout;
        this.setState({
            buttonWidth: width
        });
    };

    getStyleName = (target: "Wrapper" | "Text") => {
        const { type, disabled } = this.props;
        const { active } = this.state;
        if (disabled)
            return `${type}${StyleState.DISABLED}${target}`;
        if (active)
            return `${type}${StyleState.ACVTIVED}${target}`;
        return `${type}${target}`;
    };



    render() {
        const { disabled, style, textStyle, size, children, testID, icon, iconPosition, underlayColor } = this.props;

        const styleWrapper = buttonStyles[this.getStyleName("Wrapper")] || buttonStyles.defaultWrapper;
        const styleText = buttonStyles[this.getStyleName("Text")] || buttonStyles.defaultText;


        //let animatedStyle: any = {};
        // if (this.animated) {
        //     animatedStyle = {
        //         transform: [{ scale: this.animated.getState().scale }],
        //         opacity: this.animated.getState().opacity
        //     };
        // }
        return (
            <TouchableHighlight
                testID={testID}
                ref={c => (this.containerRef = c)}
                style={[
                    styleWrapper,
                    {
                        paddingVertical: 0,
                        ...(heightMap[size!] || heightMap['md'])
                    },
                    style,
                ]}
                disabled={disabled}
                onPress={() => this.handlePress()}
                onLayout={this.handleLayout}
                activeOpacity={0.8}
                underlayColor={underlayColor ?? styleWrapper.backgroundColor}
                onPressIn={() => this.setState({ active: true })}
                onPressOut={() => this.setState({ active: false })}
            >
                <>
                    {icon && iconPosition !== "right" && <View><IconFont name={icon} size={fontSizeMap[size!] + 5} style={buttonStyles.icon} /></View>}
                    {
                        React.isValidElement(children) ? children : (
                            <Text
                                style={[
                                    styleText,
                                    size === "xs" ? buttonStyles.xsSizeText : undefined,
                                    {
                                        fontSize: fontSizeMap[size!] || fontSizeMap['md']
                                    },
                                    textStyle,
                                ]}
                            >{children}</Text>
                        )
                    }
                    {icon && iconPosition === "right" && <View><IconFont name={icon} size={fontSizeMap[size!] + 2} /></View>}
                    {/* <Animated.View
                        style={[
                            {
                                position: 'absolute',
                                zIndex: -1,
                                width: this.state.buttonWidth,
                                height: this.state.buttonWidth,
                                borderRadius: this.state.buttonWidth,
                                backgroundColor: styleWrapper.backgroundColor,
                                color: styleText.color,
                                opacity: 1,
                            },
                            animatedStyle
                        ]}>
                    </Animated.View> */}
                </>
            </TouchableHighlight>
        );
    }
}