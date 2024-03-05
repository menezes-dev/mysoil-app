import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";
import theme from "../../theme/theme";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color={theme.colors.darkGreen} />
    </View>
  );
};

export default Loading;
