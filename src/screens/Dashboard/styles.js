import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  searchContainer: {
    marginTop: 30,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkGreen,
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
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

  spacerArea: {
    width: "100%",
    height: 10,
    backgroundColor: "#EDEDED",
    marginBottom: 10,
  },

  userArea: {
    width: "100%",
    alignItems: "center",
    color: theme.colors.darkGreen,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 50,
  },

  text: {
    fontSize: 18,
    textAlign: "center",
  },

  dot: {
    backgroundColor: "#D9D9D9",
    width: 8,
    height: 8,
    borderRadius: 4,
    // margin: 1,
  },

  activeDot: {
    backgroundColor: theme.colors.darkGreen,
    width: 12,
    height: 12,
    borderRadius: 6,
    // margin: 3
  },

  buttonExit: {
    backgroundColor: theme.colors.darkGreen,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  buttonText: {
    color: theme.colors.white,
    fontWeight: "bold",
  },

  newsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  sliderArea: {
    flexDirection: "row",
    flexWrap: "wrap",
    // flexWrap: "wrap",
  },

  carouselContainer: {
    flexDirection: "row",
    // alignItems: "center",
    padding: 10,
  },
  slide: {
    marginRight: 10,
    textAlign: "center",
    width: 282,
    height: 200,
    gap: 5,
    borderRadius: 20,
    backgroundColor: "#FFF",
    overflow: "hidden",
    justifyContent: "center",
  },

  slideText: {
    fontSize: 18,
    marginLeft: 20,
    color: theme.colors.darkGreen,
  },

  image: {
    width: 300,
    height: "80%",
  },

  scrollView: {
    flexDirection: "row",
    // flex: 0,
  },

  recomendationArea: {
    width: "100%",
    alignItems: "center",
    color: theme.colors.darkGreen,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 50,
    marginTop: 30,
  },
});

export default styles;
