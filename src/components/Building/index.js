import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme/theme";
import styles from "./styles";
import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";

const Building = ({ page }) => {
  const { setLogged } = useContext(LoginContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{page}</Text>
      <Ionicons name="construct" size={24} color={theme.colors.darkGreen} />
      <Text style={styles.text}>Em construção</Text>
      <TouchableOpacity style={styles.button} onPress={() => setLogged(false)}>
        <Text style={styles.textButton}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Building;
