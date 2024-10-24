import { Platform } from "react-native";

const IsThisAndroid = () => {
  return Platform?.OS === "android" ? true : false;
};

export default IsThisAndroid;
