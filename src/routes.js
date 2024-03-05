import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Certifications from "./screens/Certifications";
import theme from "./theme/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { LoginContext } from "./contexts/login.context";
import Search from "./screens/Search";
import Recomendation from "./screens/Recomendation";
import LoadingPage from "./screens/LoadingPage";
import Features from "./screens/Features";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="recomendation"
        component={Recomendation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="loading"
        component={LoadingPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Ionicons
                  size={30}
                  color={theme.colors.darkGreen}
                  name="home"
                />
              );
            }
            return (
              <Ionicons
                size={30}
                color={theme.colors.darkGreen}
                name="home-outline"
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="certifications"
        component={Certifications}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  size={30}
                  color={theme.colors.darkGreen}
                  name="certificate"
                />
              );
            }
            return (
              <MaterialCommunityIcons
                size={30}
                color={theme.colors.darkGreen}
                name="certificate-outline"
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Ionicons
                  size={35}
                  color={theme.colors.darkGreen}
                  name="search-circle"
                />
              );
            }
            return (
              <Ionicons
                size={35}
                color={theme.colors.darkGreen}
                name="search-circle-outline"
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="features"
        component={Features}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Ionicons
                  size={30}
                  color={theme.colors.darkGreen}
                  name="pricetag"
                />
              );
            }
            return (
              <Ionicons
                size={30}
                color={theme.colors.darkGreen}
                name="pricetag-outline"
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const { logged } = useContext(LoginContext);

  return (
    <NavigationContainer>
      {logged ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
