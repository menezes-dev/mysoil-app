import { View } from "react-native";
import styles from "./styles";
import Building from "../../components/Building";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Building page={"Dashboard"} />
    </View>
  );
};

export default Dashboard;
