import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme/theme";

const Search = ({ navigation }) => {
  const tags = ["Medição de Carbono", "Plano de Cultivo", "Manejo Sustentável"];
  const researches = [
    "O que é manejo sustentável?",
    "Como combater pragas nas hortas?",
    "O que é manejo sustentável?",
    "Como plantar abacaxi?",
    "O que é manejo sustentável?",
    "Como combater pragas nas hortas?",
  ];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.searchContainer}>
        <View style={styles.searchArea}>
          <Ionicons size={20} color={theme.colors.darkGreen} name="search" />
          <TextInput
            placeholder="O que você está procurando?"
            placeholderTextColor={theme.colors.darkGreen}
          />
        </View>
      </View>

      <View style={styles.tagArea}>
        <View style={styles.tagOptions}>
          <Text style={styles.optionText}>Opções</Text>
          <Text style={[styles.optionText, styles.optionTextSelected]}>
            Mostrar Todas
          </Text>
        </View>
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.researchArea}>
        <Text style={styles.researchText}>Histórico de Pesquisa</Text>

        <View style={styles.containerSearch}>
          {researches.map((item, index) => (
            <TouchableOpacity key={index} style={styles.searchItem}>
              <Ionicons size={20} color={theme.colors.black} name="search" />
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.researchButton}>
        <Text style={styles.researchButtonText}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
