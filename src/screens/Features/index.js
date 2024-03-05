import { Image, Text, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import { Entypo } from "@expo/vector-icons";
import theme from "../../theme/theme";

const Features = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={require("../../assets/logo.png")} />
      <Text style={styles.text}>O que vamos usar hoje?</Text>

      <View style={styles.toolsArea}>
        <View style={styles.tools}>
          <Text style={styles.toolText}>Calculadora de Carbono</Text>
          <Entypo size={30} color={theme.colors.darkGreen} name="calculator" />
        </View>

        <View style={styles.tools}>
          <Text style={styles.toolText}>Plano de Cultivo</Text>
          <Entypo size={30} color={theme.colors.darkGreen} name="tree" />
        </View>

        <View style={styles.tools}>
          <Text style={styles.toolText}>Chatbot</Text>
          <Entypo size={30} color={theme.colors.darkGreen} name="chat" />
        </View>
      </View>
    </View>
  );
};

export default Features;
