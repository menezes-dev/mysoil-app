import { Image, Text, TouchableOpacity, View } from "react-native";
import Loading from "../../components/Loading";
import styles from "./styles";
import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";

const LoadingPage = () => {
  const { setLogged } = useContext(LoginContext);

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Text style={styles.logoText}>MySoil</Text>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.loadingArea}>
        <Text style={styles.loadingText}>
          Aguarde, estamos preparando tudo para você
        </Text>
        <Loading />
      </View>
      <TouchableOpacity
        style={styles.buttonArea}
        onPress={() => {
          setLogged(true);
        }}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoadingPage;
