import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    backgroundColor: theme.colors.lightGreen,
    height: 70,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonText: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },

  imageArea: {
    alignItems: "center",
    justifyContent: "center",
  },

  infoArea: {
    alignItems: "center",
    justifyContent: "center",
  },

  infoText: {
    color: theme.colors.darkGreen,
    fontSize: 22,
    fontWeight: "bold",
  },

  loginArea: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  loginInput: {
    width: "80%",
    padding: 10,
    borderColor: theme.colors.darkGreen,
    borderBottomWidth: 1,
  },

  loginButton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkGreen,
    padding: 20,
    borderRadius: 20,
    marginTop: 40,
  },

  loginTextButton: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },

  socialLoginArea: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  socialText: {
    color: theme.colors.darkGreen,
  },

  socialOptions: {
    flexDirection: "row",
    gap: 20,
  },

  registerArea: {
    alignItems: "center",
    justifyContent: "center",
  },

  registerText: {
    color: theme.colors.darkGreen,
  },

  registerTextButton: {
    fontWeight: "bold",
  },

  logoArea: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  logoText: {
    color: theme.colors.darkGreen,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
