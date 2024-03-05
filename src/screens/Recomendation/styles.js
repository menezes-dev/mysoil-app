import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "space-between",
    gap: 20,
  },

  imageArea: {
    marginTop: 30,
  },

  textArea: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.darkGreen,
  },

  formArea: {
    justifyContent: "center",
    width: "90%",
    height: "auto",
    backgroundColor: "#E5E5E5",
    padding: 32,
    borderRadius: 20,
  },

  selectArea: {
    gap: 20,
  },

  selectItem: {
    gap: 10,
  },

  selectItemText: {
    color: theme.colors.darkGreen,
    fontWeight: "bold",
  },

  buttonArea: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: theme.colors.darkGreen,
    padding: 20,
    marginBottom: 20,
  },

  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
