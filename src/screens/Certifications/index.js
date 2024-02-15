import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../theme/theme";

const Certifications = ({ navigation }) => {
  const certifications = ["ISO 14001", "Cerflor", "IBD", "Imaflora", "Aqua"];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.infoArea}>
        <Text style={styles.infoText}>Escolha uma das certificações: </Text>
      </View>
      <View style={styles.certificationArea}>
        {certifications.map((certification, index) => (
          <TouchableOpacity key={index} style={styles.certificationItem}>
            <Text style={styles.certificationText}>{certification}</Text>
            <MaterialCommunityIcons
              size={30}
              color={theme.colors.darkGreen}
              name="certificate"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Certifications;
