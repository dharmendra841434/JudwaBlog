import {
  View,
  Text,
  FlatList,
  Image,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { blogs } from "@/constants/blogData/dummy";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { formatPostDate } from "@/utils/helper";

const BlogsList = () => {
  const [clumn, setClumn] = useState(2);
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme || "light"];
  // Generate styles based on the current theme
  const styles = createStyles(themeColors);
  return (
    <FlatList
      data={blogs}
      scrollEnabled
      numColumns={clumn}
      contentContainerStyle={{ paddingBottom: "4%", paddingTop: "3%" }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.8} style={styles.card}>
          <View>
            <Image
              source={item?.image}
              style={{ height: verticalScale(80), width: scale(80) }}
            />
          </View>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={4} ellipsizeMode="tail" style={styles.desc}>
              {item.description}
            </Text>
            <View className="flex flex-row items-center py-3 ">
              <Ionicons
                name="calendar-outline"
                size={18}
                color={themeColors?.icon}
              />
              <Text
                style={{
                  color: themeColors?.icon,
                  marginStart: "5%",
                  fontWeight: "500",
                }}
              >
                {formatPostDate(item?.createdAt)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const createStyles = (themeColors: any) =>
  StyleSheet.create({
    card: {
      width: "48%",
      alignItems: "center",
      margin: "1.2%",
      ...Platform.select({
        ios: {
          shadowColor: themeColors?.shadow,
          shadowOffset: { width: 0, height: 1 }, // Shadow offset (width, height)
          shadowOpacity: 0.1, // Shadow opacity
          shadowRadius: 1.8, // Shadow blur radius
        },
        android: {
          shadowColor: themeColors?.shadow,
          elevation: 2, // Elevation value for Android
        },
      }),
      backgroundColor: themeColors?.background,
      padding: "2%",
      borderRadius: 10,
    },
    title: {
      color: themeColors?.text,
      fontSize: 16,
      fontWeight: "600",
    },
    desc: {
      color: themeColors?.icon,
    },
  });

export default BlogsList;
