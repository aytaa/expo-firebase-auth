import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./screens/stack/AuthStack";
import DashBoardStack from "./screens/stack/DashBoardStack";

export default function App () {

  const user = null;

  return (
      <NavigationContainer>
        { user ? <DashBoardStack /> : <AuthStack /> }
      </NavigationContainer>
  )

}
