import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, Platform } from "react-native";
import { Local_Icons } from "@/constants/Icons";
import useBottomSheetState from "@/stateManagment/useBottomSheetState";

const isAndroid = Platform.OS === "android" ? true : false;

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isOpen } = useBottomSheetState();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: isAndroid ? "7%" : "10%",
          display: isOpen ? "none" : "flex",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={Local_Icons?.home}
              tintColor={color}
              style={{ width: 30, height: 32 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={Local_Icons?.blogs}
              tintColor={color}
              style={{ width: 32, height: 32 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={Local_Icons?.forecast}
              tintColor={color}
              style={{ width: 33, height: 33 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={Local_Icons?.track}
              tintColor={color}
              style={{ width: 32, height: 32 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
