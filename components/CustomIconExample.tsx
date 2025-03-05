import createIconSet from "@expo/vector-icons/createIconSet";

const glyphMap = { "icon-name": 1234, test: "∆" };
const CustomIcon = createIconSet(glyphMap, "fontFamily", "custom-icon-font.ttf");

export default function CustomIconExample() {
  return <CustomIcon name="icon-name" size={32} color="red" />;
}
