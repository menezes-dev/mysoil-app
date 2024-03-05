import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "../Dashboard/styles";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme/theme";
import { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";
import React, { useState } from "react";

const CarouselItem = ({ imageSource, text }) => (
  <View style={styles.slide}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const Dashboard = ({ navigation }) => {
  const { setLogged } = useContext(LoginContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchArea}>
            <Ionicons size={20} color={theme.colors.darkGreen} name="search" />
            <TextInput
              placeholder="O que você está procurando?"
              placeholderTextColor={theme.colors.darkGreen}
            />
          </View>
        </View>

        <View style={styles.spacerArea}></View>

        <Text style={styles.userArea}>Olá senhor(a)!</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          <View style={styles.carouselContainer}>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/rotacaoCultivo.webp")}
                style={styles.image}
              />
              <Text style={styles.slideText}>Rotação de Cultivo</Text>
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/cultivoSustentavel.jpg")}
                style={styles.image}
              />
              <Text style={styles.slideText}>Cultivo Sustentável</Text>
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/inovacoes.jpg")}
                style={styles.image}
              />
              <Text style={styles.slideText}>Inovações Ecoeficientes</Text>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.recomendationArea}>Você pode gostar disso...</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          <View style={styles.carouselContainer}>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/soloSustentavel.jpg")}
                style={styles.image}
              />
              <Text style={styles.slideText}>Solo Sustentável</Text>
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/agroecologia.jpg")}
                style={styles.image}
              />
              <Text style={styles.slideText}>Agroecologia para o Cultivo</Text>
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/article.png")}
                style={styles.image}
              />
              <Text style={styles.slideText}>Bioenergia Sustentável</Text>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.recomendationArea}>Com relação a grãos...</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          <View style={styles.carouselContainer}>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/graos1.webp")}
                style={styles.image}
              />
              <Text style={styles.slideText}>Desafios na Agricultura</Text>
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/graos2.jpg")}
                style={styles.image}
              />
              <Text style={styles.slideText}>Cultivo Orgânico</Text>
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/graos3.jpg")}
                style={styles.image}
              />
              <Text style={styles.slideText}>Manejo Integrado</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
