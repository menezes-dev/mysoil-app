import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "black",
  },

  containerImage: {
    width: "100%",
    maxHeight: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkGreen,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    // borderWidth: 1,
    // borderColor: "black",
  },

  image: {
    width: 300,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "black",
  },

  containerTitles: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "black",
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
    // borderWidth: 1,
    // borderColor: "black",
    gap: 20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.lightGreen,
    width: 325,
    padding: 20,
    borderRadius: 20,
  },

  textButton: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default styles;
