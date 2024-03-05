import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  infoArea: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderBottomColor: theme.colors.darkGreen,
    borderBottomWidth: 1,
    padding: 15,
    marginTop: 20,
    marginBottom: 30,
  },

  infoText: {
    color: theme.colors.darkGreen,
    fontSize: 20,
  },

  certificationArea: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: theme.colors.darkGreen,
  },

  certificationItem: {
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    padding: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  certificationText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.darkGreen,
  },
});

export default styles;
