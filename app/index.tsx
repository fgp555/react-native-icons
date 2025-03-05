import { View, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome6,
  Fontisto,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import CustomIconExample from "@/components/CustomIconExample";
import IcomoonComp from "@/components/IcomoonComp";

export default function App() {
  const loginWithFacebook = () => {
    console.log("Button pressed");
  };
  // https://docs.expo.dev/guides/icons/
  return (
    <View style={styles.container}>
      <FontAwesome.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={loginWithFacebook}
      >
        Login with Facebook
      </FontAwesome.Button>
      <Image
        source={require("../assets/images/react-logo.png")}
        style={{ width: 50, height: 50 }}
      />
      <CustomIconExample />

      {/* https://icomoon.io/app/#/select */}
      <IcomoonComp />

      {/* https://icons.expo.fyi/Index */}
      <AntDesign name="chrome" size={24} color="black" />

      {/* https://icongr.am/entypo */}
      <Entypo name="colours" size={24} color="black" />

      {/* https://icons.expo.fyi/ */}
      <EvilIcons name="user" size={24} color="black" />

      {/* https://feathericons.com/ */}
      <Feather name="coffee" size={24} color="black" />

      {/* https://fontawesome.com/search */}
      <FontAwesome name="apple" size={25} />
      <FontAwesome6 name={"house"} size={24} color="#b00" />

      {/* https://zurb.com/playground/foundation-icon-fonts-3 */}
      <Foundation name="social-amazon" size={24} color="black" />

      {/* https://ionic.io/ionicons */}
      <Ionicons name="checkmark-circle" size={32} color="green" />

      {/* https://static.enapter.com/rn/icons/material-community.html */}
      <MaterialCommunityIcons name="airballoon-outline" size={24} color="black" />

      {/* https://material.io/resources/icons */}
      <MaterialIcons name="fingerprint" color="#b00" size={25} />

      {/* https://primer.style/foundations/icons */}
      <Octicons name="feed-tag" size={24} color="black" />

      {/* https://simplelineicons.github.io/ */}
      <SimpleLineIcons name="directions" size={24} color="black" />

      <Zocial name="github" size={24} color="black" />
      <Fontisto name="adobe" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
