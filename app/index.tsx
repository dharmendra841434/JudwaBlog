import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import useAppTheme from "@/hooks/useAppTheme";
import useStylesByThemes from "@/hooks/useStylesByThemes";
import { Local_Images } from "@/constants/local_images";
import { ThemedText } from "@/components/ThemedText";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { useNavigation, useRouter } from "expo-router";

const isAndroid = Platform.OS === "android" ? true : false;

const LoginScreen = () => {
  const themeColors = useAppTheme();
  const styles = useStylesByThemes(createStyles);

  const navaigation = useRouter();

  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardOffset(event.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOffset(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, paddingBottom: keyboardOffset }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.conatiner}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View>
            <Image source={Local_Images?.lock} style={styles.topImage} />
            <View className="absolute left-0 right-0 h-[1px] bg-gray-400 bottom-[20px]" />
          </View>
          <View className="px-3 ">
            <ThemedText style={{ fontSize: 44, fontWeight: "bold" }}>
              Explore now
            </ThemedText>
            <ThemedText
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: themeColors?.bgGray,
              }}
            >
              Sign in to Jadwa
            </ThemedText>
            <TouchableOpacity
              activeOpacity={0.6}
              className=" gap-x-4"
              style={styles.googleButton}
            >
              <Image
                source={Local_Images?.google}
                style={{ width: 22, height: 22 }}
              />
              <ThemedText style={{ fontWeight: "600" }}>
                Sign in with Google
              </ThemedText>
            </TouchableOpacity>
            <View className="py-10 ">
              <View className=" h-[0.7px] bg-gray-300 " />
              <View className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
                <Text
                  className="px-3 "
                  style={{
                    color: themeColors?.tabIconDefault,
                    backgroundColor: themeColors?.background,
                  }}
                >
                  Or or sign in with email
                </Text>
              </View>
            </View>
            <View>
              <CustomInput
                onChangeText={(t) => console.log(t)}
                placeholder="Enter your email address"
              />
              <CustomInput
                isPassword={true}
                onChangeText={(t) => console.log(t)}
                placeholder="Enter your password"
              />
              <View className="flex flex-col items-end mt-3 ">
                <TouchableOpacity>
                  <ThemedText
                    style={{ color: themeColors?.primary, fontSize: 13 }}
                  >
                    Forgot Password?
                  </ThemedText>
                </TouchableOpacity>
              </View>
              <CustomButton
                onPress={() => navaigation?.replace("./(tabs)")}
                title="Sign in"
                style={{ marginTop: "8%" }}
              />

              <View className="flex flex-row items-center justify-center mt-12 ">
                <ThemedText style={{ fontSize: 13 }}>
                  Don't have an account?{" "}
                </ThemedText>
                <TouchableOpacity>
                  <ThemedText
                    style={{
                      color: themeColors?.primary,
                      fontSize: 13,
                      fontWeight: "600",
                    }}
                    onPress={() => console.log("pressed")}
                  >
                    Sign up
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const createStyles = (themeColors: any) =>
  StyleSheet.create({
    conatiner: {
      flex: 1,
      backgroundColor: themeColors?.background,
      paddingTop: "13%",
    },
    topImage: {
      width: 200,
      height: 180,
      alignSelf: "center",
    },
    googleButton: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: themeColors?.borderColor,
      borderRadius: 10,
      padding: isAndroid ? 12 : 13,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
  });

export default LoginScreen;
