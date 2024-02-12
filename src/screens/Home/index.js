import { Image, Text, View } from "react-native";
import styles from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Seja bem vindo ao MySoil</Text>
        <Text>Seu app de informações sobre agricultura de baixo carbono</Text>
      </View>
      <View style={styles.buttons}>
        <Text>Botão 1</Text>
        <Text>Botão 2</Text>
      </View>
      <View>
        <Image source={require("../../assets/tree.png")} style={styles.image} />
      </View>
    </View>
  );
};

export default Home;
