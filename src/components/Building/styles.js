import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  text: {
    color: theme.colors.darkGreen,
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkGreen,
    padding: 20,
    borderRadius: 20,
    marginTop: 40,
  },

  textButton: {
    color: theme.colors.white,
    fontWeight: "bold",
  },
});

export default styles;
