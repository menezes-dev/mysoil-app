import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";

const Header = ({ navigation }) => {
  const { setLogged } = useContext(LoginContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setLogged(false);
        }}
      >
        <Image source={require("../../assets/earth.png")}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
