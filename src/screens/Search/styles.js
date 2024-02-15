import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },

  searchContainer: {
    marginTop: 30,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkGreen,
    borderRadius: 20,
    padding: 20,
  },

  searchArea: {
    width: "90%",
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },

  tagArea: {
    marginTop: 30,
    width: "90%",
    gap: 30,
  },

  tagOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  optionText: {
    fontWeight: "bold",
    fontSize: 16,
  },

  optionTextSelected: {
    color: theme.colors.darkGreen,
  },

  tagContainer: {
    flexDirection: "row",
    gap: 20,
    overflow: "scroll",
    flexWrap: "nowrap",
  },

  tag: {
    width: "30%",
    borderRadius: 10,
    backgroundColor: theme.colors.darkGreen,
    padding: 20,
  },

  tagText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: theme.colors.white,
    fontWeight: "bold",
  },

  researchArea: {
    marginTop: 30,
    width: "90%",
    gap: 20,
  },

  researchText: {
    fontWeight: "bold",
  },

  containerSearch: {
    gap: 20,
  },

  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    borderRadius: 10,
    borderBottomColor: theme.colors.black,
    borderBottomWidth: 1,
  },

  researchButton: {
    marginTop: 40,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkGreen,
    padding: 15,
    borderRadius: 20,
  },

  researchButtonText: {
    fontWeight: "bold",
    color: theme.colors.white,
    fontSize: 20,
  },
});

export default styles;
