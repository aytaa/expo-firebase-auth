import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./screens/stack/AuthStack";
import DashBoardStack from "./screens/stack/DashBoardStack";
import {useAuthentication} from "./useAuthentication";

export default function App () {

  const user = useAuthentication();

  return (
      <NavigationContainer>
        { user ? <DashBoardStack /> : <AuthStack /> }
      </NavigationContainer>
  )

}
