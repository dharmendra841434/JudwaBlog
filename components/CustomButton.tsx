import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import useAppTheme from "@/hooks/useAppTheme";
import useStylesByThemes from "@/hooks/useStylesByThemes";

interface CustomInputProps {
  onPress: () => void;
  title: string;
  style: any;
}

const CustomButton: React.FC<CustomInputProps> = ({
  onPress = () => {}, // Default to an empty function if not provided
  title = "",
  style = {},
}) => {
  const themeColors = useAppTheme();
  const styles = useStylesByThemes(createStyles);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{ ...styles.conatiner, ...style }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (themeColors: any) =>
  StyleSheet.create({
    conatiner: {
      backgroundColor: themeColors?.primary,
      paddingHorizontal: "8%",
      paddingVertical: "3.5%",
      borderRadius: 14,
      alignItems: "center",
    },
  });

export default CustomButton;
