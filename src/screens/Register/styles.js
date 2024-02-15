import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  infoArea: {
    alignItems: "center",
    justifyContent: "center",
  },

  infoText: {
    color: theme.colors.darkGreen,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },

  registerArea: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  registerInput: {
    width: "80%",
    padding: 10,
    borderColor: theme.colors.darkGreen,
    borderBottomWidth: 1,
  },

  registerButton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkGreen,
    padding: 20,
    borderRadius: 20,
    marginTop: 40,
  },

  registerTextButton: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
