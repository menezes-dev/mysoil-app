import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import theme from "../../theme/theme";

const Recomendation = ({ navigation }) => {
  const [selected, setSelected] = useState("");

  const regions = [
    { key: "1", value: "Norte" },
    { key: "2", value: "Nordeste" },
    { key: "3", value: "Centro Oeste" },
    { key: "4", value: "Sudeste" },
    { key: "5", value: "Sul" },
  ];

  const cultivation = [
    { key: "1", value: "Grãos" },
    { key: "2", value: "Hortaliças" },
    { key: "3", value: "Frutas" },
    { key: "4", value: "Outros" },
  ];

  const binarie = [
    { key: "1", value: "Sim" },
    { key: "2", value: "Não" },
  ];

  const irrigation = [
    { key: "1", value: "Aspersão" },
    { key: "2", value: "Gotejamento" },
    { key: "2", value: "Inundação" },
    { key: "2", value: "Subterrânea" },
    { key: "2", value: "Outras" },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />

        <Image
          source={require("../../assets/logo.png")}
          style={styles.imageArea}
        />

        <Text style={styles.textArea}>Conte-nos mais...</Text>

        <View style={styles.formArea}>
          <View style={styles.selectArea}>
            <View style={styles.selectItem}>
              <Text style={styles.selectItemText}>Qual sua região?</Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={regions}
                dropdownTextStyles={{ color: theme.colors.darkGreen }}
                inputStyles={{ color: theme.colors.darkGreen }}
                boxStyles={{}}
              />
            </View>

            <View style={styles.selectItem}>
              <Text style={styles.selectItemText}>
                Qual seu tipo de cultura?
              </Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={cultivation}
                dropdownTextStyles={{ color: theme.colors.darkGreen }}
                inputStyles={{ color: theme.colors.darkGreen }}
                boxStyles={{}}
              />
            </View>

            <View style={styles.selectItem}>
              <Text style={styles.selectItemText}>
                Você faz rotação de cultura?
              </Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={binarie}
                dropdownTextStyles={{ color: theme.colors.darkGreen }}
                inputStyles={{ color: theme.colors.darkGreen }}
              />
            </View>

            <View style={styles.selectItem}>
              <Text style={styles.selectItemText}>
                Que tipo de irrigação utiliza?
              </Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={irrigation}
                dropdownTextStyles={{ color: theme.colors.darkGreen }}
                inputStyles={{ color: theme.colors.darkGreen }}
                boxStyles={{}}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonArea}
          onPress={() => navigation.navigate("loading")}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Recomendation;
