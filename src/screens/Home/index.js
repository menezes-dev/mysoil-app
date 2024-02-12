import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitles}>
        <Text style={[styles.title, styles.principal]}>
          Seja bem vindo ao MySoil
        </Text>
        <Text style={[styles.title, styles.secondary]}>
          Seu app de informações sobre agricultura de baixo carbono
        </Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button}>Botão 1</TouchableOpacity>
        <TouchableOpacity style={styles.button}>Botão 2</TouchableOpacity>
      </View>
      <View>
        <Image source={require("../../assets/tree.png")} style={styles.image} />
      </View>
    </View>
  );
};

export default Home;
