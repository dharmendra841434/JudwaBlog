import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import React, { useCallback, useMemo } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import useBottomSheetState from "@/stateManagment/useBottomSheetState";
import useAppTheme from "@/hooks/useAppTheme";

const CustomBottomSheet = ({ bottomSheetRef, children }) => {
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
  const snapPoints = useMemo(() => [1, SCREEN_HEIGHT / 2.8], []);
  const { setIsOpen } = useBottomSheetState();
  const themeColors = useAppTheme();
  const colorScheme = useColorScheme();

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    if (!index || index === -1) {
      setIsOpen(false);
      bottomSheetRef?.current?.close();
    }
  }, []);

  // Backdrop component for the BottomSheet
  const renderBackdrop = (props) => (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsOpen(false);
        bottomSheetRef?.current?.close();
      }}
    >
      <BottomSheetBackdrop
        pressBehavior={true ? "close" : "none"}
        {...props}
        disappearsOnIndex={-1}
        opacity={colorScheme === "dark" ? 0.8 : 0.5}
      />
    </TouchableWithoutFeedback>
  );
  return (
    <BottomSheet
      ref={bottomSheetRef}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      index={-1}
      onChange={handleSheetChanges}
      backgroundStyle={{ backgroundColor: themeColors?.background }}
    >
      <BottomSheetView
        style={{
          backgroundColor: themeColors?.background,
          paddingHorizontal: "5%",
        }}
      >
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
