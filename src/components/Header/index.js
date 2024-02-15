import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
      <Image source={require("../../assets/earth.png")}></Image>
    </View>
  );
};

export default Header;
