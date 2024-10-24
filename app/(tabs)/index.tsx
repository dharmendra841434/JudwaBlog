import BlogsList from "@/components/BlogsList";
import CustomButton from "@/components/CustomButton";
import { Local_Icons } from "@/constants/Icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import useAppTheme from "@/hooks/useAppTheme";
import useStylesByThemes from "@/hooks/useStylesByThemes";
import CustomBottomSheet from "@/components/CustomBottomSheet";
import useBottomSheetState from "@/stateManagment/useBottomSheetState";
import CustomDropDown from "@/components/CustomDropDown";
import { dropDownData } from "@/constants/blogData/dummy";
import { ThemedText } from "@/components/ThemedText";

export default function BlogsScreen() {
  const themeColors = useAppTheme();
  const styles = useStylesByThemes(createStyles);
  const [selectMenu, setSelectMenu] = useState("Afterglow");
  const { setIsOpen } = useBottomSheetState();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    bottomSheetRef?.current?.expand();
    setIsOpen(true);
  };

  return (
    <View
      className="flex-1 px-4 "
      style={{ backgroundColor: themeColors?.background }}
    >
      <View className="flex flex-row items-center justify-between pt-12">
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            color={themeColors?.primary}
          />
        </TouchableOpacity>
        <View className=" w-[7.2rem] h-[2rem] ml-16">
          <Image source={Local_Icons?.appLogo} className="w-full h-full " />
        </View>
        <View className="flex flex-row items-center gap-4 ">
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={Local_Icons?.search} className=" h-7 w-7" />
          </TouchableOpacity>
          <View className="w-16 h-16 ">
            <Image source={Local_Icons?.dp} className="w-full h-full " />
          </View>
        </View>
      </View>
      <CustomDropDown handleOpen={handleOpen} selectedOption={selectMenu} />

      <View className="flex flex-row items-center justify-between my-5 ">
        <View>
          <ThemedText className=" text-[18px] font-medium">Blogs</ThemedText>
        </View>
        <View className="flex flex-row items-center justify-end gap-3 ">
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.addNew}>Add new</Text>
          </TouchableOpacity>
          <CustomButton title="Preview" />
        </View>
      </View>
      <BlogsList />
      <CustomBottomSheet bottomSheetRef={bottomSheetRef}>
        {dropDownData?.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              paddingVertical: "5%",
              borderBottomWidth: 1,
              borderBottomColor: themeColors?.borderColor,
            }}
            onPress={() => {
              setSelectMenu(item?.title);
              bottomSheetRef?.current?.collapse();
              setIsOpen(false);
            }}
          >
            <ThemedText
              style={{
                color:
                  selectMenu === item?.title
                    ? themeColors?.primary
                    : themeColors?.text,
              }}
            >
              {item.title}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </CustomBottomSheet>
    </View>
  );
}

// Function to create styles based on theme colors
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
