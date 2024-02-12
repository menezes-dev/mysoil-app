import { StyleSheet } from "react-native";
import theme from "../theme/theme";

const globalStyle = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default globalStyle;
