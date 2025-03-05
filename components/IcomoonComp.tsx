import React from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";

const Icon = createIconSetFromIcoMoon(
  require("./assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function IcomoonComp() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icomoon/icomoon.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Icon name="instagram" size={50} color="red" />;
}
