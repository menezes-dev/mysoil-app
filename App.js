import { StatusBar } from "react-native";
import AppNavigator from "./src/routes";
import LoginProvider from "./src/contexts/login.context";

const App = () => {
  return (
    <LoginProvider>
      <StatusBar />
      <AppNavigator />
    </LoginProvider>
  );
};

export default App;
