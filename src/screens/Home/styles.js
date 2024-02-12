import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "black",
  },

  containerImage: {
    backgroundColor: theme.colors.darkGreen,
  },

  image: {
    width: 250,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },

  containerTitles: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },

  title: {
    color: theme.colors.darkGreen,
    textAlign: "center",
  },

  principal: {
    fontSize: 32,
    fontWeight: "bold",
  },

  secondary: {
    fontSize: 28,
  },

  containerButtons: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    gap: 20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.lightGreen,
    color: theme.colors.white,
    width: 325,
    padding: 20,
    borderRadius: 20,
    fontSize: 16,
  },
});

export default styles;
