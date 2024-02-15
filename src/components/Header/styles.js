import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.lightGreen,
    height: 70,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
