import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },

  logoArea: {
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.darkGreen,
  },

  loadingArea: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },

  loadingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.darkGreen,
    textAlign: "center",
    marginBottom: 20,
  },

  buttonArea: {
    backgroundColor: theme.colors.darkGreen,
    padding: 20,
    borderRadius: 20,
  },

  buttonText: {
    color: theme.colors.white,
  },
});

export default styles;
