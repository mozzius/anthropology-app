import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput as ReactNativeTextInput,
  TextInputProps as ReactNativeTextInputProps,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: {},
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 3,
    marginTop: 15,
  },
});

export interface TextInputProps extends ReactNativeTextInputProps {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  style: propStyle,

  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <ReactNativeTextInput
        style={StyleSheet.flatten([propStyle, styles.input])}
        {...props}
      />
    </View>
  );
};

export default TextInput;