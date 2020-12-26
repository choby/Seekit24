import IconFont from '@/components/Iconfont';
import { Color } from "@/theme/variables";
import React, { Component } from 'react';
import { NativeSyntheticEvent, Platform, StyleProp, TextInput, TextInputFocusEventData, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import FormField from './FormField';
import inputStyles from './styles';


//const styles = inputStyles

export interface InputProps extends Omit<TextInputProps, "onChange"> {
  prefix?: React.ReactNode;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: StyleProp<ViewStyle>;
  focusingStyle?: StyleProp<ViewStyle>;
  inputStyle?: TextStyle;
  focusingInputStyle?: TextStyle;
  onChange?: (value: string) => void;
}

interface InputState {
  isEditing: boolean;
}



export default class Input extends Component<InputProps, InputState> {
  static FormField = FormField;
  static displayName = 'Input';
  static defaultProps: InputProps = {
    onChange: undefined,
    textAlign: 'left',
    placeholderTextColor: Color.SECONDARY_4,
    autoFocus: false,
    autoCorrect: true,
    keyboardType: 'default',
    maxLength: undefined,
    editable: true,
    clearButtonMode: 'while-editing',
    value: ''
  };

  delayIsEditing: {
    cancel: () => void;
    delay: (task: () => void) => void;
  };

  textInput!: TextInput | null;

  constructor(props: InputProps) {
    super(props);
    this.state = {
      isEditing: false,

    };

    this.delayIsEditing = this.delayTaskMemoize(3000);
  }

  componentWillUnmount() {
    this.delayIsEditing.cancel();
  }

  handleChange = (value: string) => {
    this.props.onChange && this.props.onChange(value);
  };

  handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    e.stopPropagation();
    const { onBlur } = this.props;
    onBlur?.(e);
    this.setState({ isEditing: false });
  };

  handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({ isEditing: true });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  delayTaskMemoize = (duration: number) => {
    let timeoutId: any;

    return {
      cancel() {
        clearTimeout(timeoutId);
      },

      delay(task: () => void) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          task();
        }, duration || 0);
      }
    };
  };

  modProps(props: InputProps) {
    const tmpProps = {
      ...props
    };

    if (Platform.OS === 'web') {
      // web 平台不支持该属性
      delete tmpProps.textAlign;
    }

    delete tmpProps.style;
    delete tmpProps.inputStyle;

    return tmpProps;
  }

  isPassword() {
    const { textContentType } = this.props;
    return textContentType === "password" || textContentType === "newPassword";
  }

  getShowValue() {
    const { value } = this.props;
    if (this.isPassword()) {
      return value && value.split("").map(() => '*').join("");
    }
    return value;
  }

  getPrefix() {
    const { prefix } = this.props;
    return prefix && <View style={inputStyles.prefix}>{prefix}</View>;
  }



  getContainerStyle() {
    const { isEditing } = this.state;
    return isEditing ? [inputStyles.container, this.props.style, this.props.focusingStyle] : [inputStyles.container, this.props.style];
    //inputStyles.containerFocusing : inputStyles.container;
  }

  getInputStyle() {
    const { isEditing } = this.state;
    return isEditing ? [inputStyles.inputStyle, this.props.inputStyle, this.props.focusingInputStyle] : [inputStyles.inputStyle, this.props.inputStyle];
    //inputStyles.containerFocusing : inputStyles.container;
  }

  renderiOS = () => {

    const tmpProps = this.modProps(this.props);

    return (<View style={this.getContainerStyle()}>
      {this.getPrefix()}

      <TextInput
        ref={ref => this.textInput = ref}
        {...tmpProps}
        value={this.getShowValue()}
        style={this.getInputStyle()}

        onChange={() => { return; }}
        onChangeText={this.handleChange}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        clearButtonMode="while-editing"
        placeholderTextColor={Color.SECONDARY_4}
      />
    </View>

    );
  };

  renderAndroidAndWeb = () => {
    const androidClearButtonMode = this.props.clearButtonMode && this.props.clearButtonMode !== 'never';
    const showDelIcon = androidClearButtonMode && !!this.props.value && this.state.isEditing;
    const tmpProps = this.modProps(this.props);
    return <View style={this.getContainerStyle()}>
      {this.getPrefix()}
      <TextInput
        ref={ref => this.textInput = ref}
        {...tmpProps}
        style={this.getInputStyle()}
        onChange={() => { return; }}
        onChangeText={this.handleChange}
        clearButtonMode="always"
        onFocus={(e) => {
          this.handleFocus(e);
          this.delayIsEditing.cancel();
          this.setState({
            isEditing: true
          });
        }}
        onBlur={(e) => {
          this.handleBlur(e);
          this.delayIsEditing.delay(() => {
            this.setState({
              isEditing: false
            });
          });
        }}
        underlineColorAndroid='transparent'
        placeholderTextColor={Color.SECONDARY_4}
      />
      {
        showDelIcon && <TouchableOpacity onPressIn={() => {
          this.textInput?.clear();
          this.textInput?.focus();
          this.handleChange('');
        }}
          hitSlop={{
            top: 15,
            left: 15,
            right: 15,
            bottom: 15
          }}
        >
          <View style={inputStyles.suffix}>
            <IconFont size={20} name="qingchu-sousuo1x" />
          </View>
        </TouchableOpacity>
      }
    </View>;
  };

  render() {
    if (Platform.OS === 'ios') {
      return this.renderiOS();
    } else {
      return this.renderAndroidAndWeb();
    }
  }
}