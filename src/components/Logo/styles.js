import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    color: theme.colors.darkGreen,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
