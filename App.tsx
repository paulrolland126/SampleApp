/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from "@react-navigation/native";
import React from "react";

import {SafeAreaProvider} from "react-native-safe-area-context";
import RootStack from "./src/navigation/RootStack";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
