import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import theme from "../../theme/theme";
import styles from "./styles";
import Logo from "../../components/Logo";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.infoArea}>
        <Image source={require("../../assets/login.png")} />
        <Text style={styles.infoText}>Insira seus dados</Text>
      </View>

      <View style={styles.registerArea}>
        <TextInput
          style={styles.registerInput}
          placeholder="Nome e Sobrenome"
          placeholderTextColor={theme.colors.darkGreen}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Email"
          placeholderTextColor={theme.colors.darkGreen}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="CPF"
          placeholderTextColor={theme.colors.darkGreen}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Telefone"
          placeholderTextColor={theme.colors.darkGreen}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Senha"
          placeholderTextColor={theme.colors.darkGreen}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.registerTextButton}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

      <Logo />
    </View>
  );
};

export default Register;
