import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import useAppTheme from "@/hooks/useAppTheme";
import useStylesByThemes from "@/hooks/useStylesByThemes";
import { Ionicons } from "@expo/vector-icons";

interface CustomDropDownProps {
  handleOpen: () => void;
  selectedOption?: string;
}
const CustomDropDown: React.FC<CustomDropDownProps> = ({
  handleOpen,
  selectedOption,
}) => {
  const themeColors = useAppTheme();
  const styles = useStylesByThemes(createStyles);
  return (
    <>
      <View className="flex flex-row justify-between py-3 ">
        <TouchableOpacity
          onPress={() => handleOpen()}
          activeOpacity={0.8}
          style={styles.dropDown}
        >
          <Text style={styles.dropDownText}>{selectedOption}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={18}
            color={themeColors?.icon}
          />
        </TouchableOpacity>
        <View style={styles.rightSection}>
          <Text style={{ color: themeColors?.icon }}>Scenario</Text>
          <View className=" flex flex-row w-[58%] justify-around  ">
            <Text style={{ color: themeColors?.text }}>Default</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Ionicons
                name="chevron-down-outline"
                size={18}
                color={themeColors?.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const createStyles = (themeColors: any) =>
  StyleSheet.create({
    dropDown: {
      backgroundColor: themeColors?.bgGray,
      width: "50%",
      paddingVertical: "3%",
      borderWidth: 1,
      borderColor: themeColors?.borderColor,
      borderRadius: 14,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: "2%",
    },
    dropDownText: {
      textAlign: "center",
      width: "70%",
      color: themeColors?.icon,
    },
    rightSection: {
      flexDirection: "row",
      width: "38%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    addNew: {
      color: themeColors?.primary,
    },
  });

export default CustomDropDown;
