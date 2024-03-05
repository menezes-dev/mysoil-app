import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },

  text: {
    color: theme.colors.darkGreen,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  toolsArea: {
    width: "100%",
    alignItems: "center",
    gap: 20,
  },

  tools: {
    borderRadius: 20,
    width: "80%",
    height: 70,
    flexDirection: "row",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },

  toolText: {
    color: theme.colors.darkGreen,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;
