import { Image, Text, View } from "react-native";
import styles from "./styles";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/earth.png")} />
      <Text style={styles.text}>MySoil</Text>
    </View>
  );
};

export default Logo;
