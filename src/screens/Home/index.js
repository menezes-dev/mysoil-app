import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Home = ({ navigation }) => {
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.textButton}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerImage}>
        <Image source={require("../../assets/tree.png")} style={styles.image} />
      </View>
    </View>
  );
};

export default Home;
