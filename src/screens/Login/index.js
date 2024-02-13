import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import theme from "../../theme/theme";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <Image source={require("../../assets/earth.png")} />
      </View>

      <View style={styles.imageArea}>
        <Image source={require("../../assets/login.png")} />
      </View>

      <View style={styles.infoArea}>
        <Text style={styles.infoText}>Insira seus dados</Text>
      </View>

      <View style={styles.loginArea}>
        <TextInput
          style={styles.loginInput}
          placeholder="Digite seu email"
          placeholderTextColor={theme.colors.darkGreen}
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Digite sua senha"
          placeholderTextColor={theme.colors.darkGreen}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginTextButton}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialLoginArea}>
        <Text style={styles.socialText}>Ou faça login com</Text>
        <View style={styles.socialOptions}>
          <Image source={require("../../assets/google.png")} />
          <Image source={require("../../assets/facebook.png")} />
          <Image source={require("../../assets/twitter.png")} />
        </View>
      </View>

      <View style={styles.registerArea}>
        <Text style={styles.registerText}>Não possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={[styles.registerText, styles.registerTextButton]}>
            Cadastre-se agora
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoArea}>
        <Image source={require("../../assets/earth.png")} />
        <Text style={styles.logoText}>MySoil</Text>
      </View>
    </View>
  );
};

export default Login;
