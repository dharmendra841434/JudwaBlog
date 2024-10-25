import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import useAppTheme from "@/hooks/useAppTheme";
import useStylesByThemes from "@/hooks/useStylesByThemes";
import { Ionicons } from "@expo/vector-icons";
interface CustomInputProps {
  onChangeText: (text: string) => void;
  placeholder: string;
  isPassword?: boolean;
}

const isAndroid = Platform.OS === "android" ? true : false;
const CustomInput: React.FC<CustomInputProps> = ({
  onChangeText,
  placeholder = "Input",
  isPassword = false,
}) => {
  const themeColors = useAppTheme();
  const styles = useStylesByThemes(createStyles);
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.conatiner}>
      <TextInput
        onChangeText={onChangeText}
        style={[styles.inputbox, { width: isPassword ? "90%" : "100%" }]}
        cursorColor={themeColors?.text}
        placeholder={placeholder}
        secureTextEntry={isPassword && !passwordVisible}
        placeholderTextColor={themeColors?.icon}
        keyboardType={
          isPassword && !passwordVisible ? "visible-password" : "default"
        }
      />
      {isPassword && (
        <View className="items-center justify-center w-[10%] ">
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off" : "eye"}
              size={23}
              color={themeColors?.icon}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const createStyles = (themeColors: any) =>
  StyleSheet.create({
    conatiner: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: themeColors?.tabIconDefault,
      borderRadius: 15,
      marginTop: "5%",
      overflow: "hidden",
    },
    title: {
      marginStart: "2%",
    },
    inputbox: {
      padding: isAndroid ? 12 : 16,
      color: themeColors?.text,
    },
  });

export default CustomInput;
