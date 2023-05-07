import React from 'react';
import {Text, View , StyleSheet} from "react-native";
import {useAuthentication} from "../../useAuthentication";

const MainScreen = () => {

    const user = useAuthentication()

    return (
        <View style={styles.container}>
            <Text>User Email : {user?.user?.email}</Text>
            <Text>User Email Verified : {user?.user?.emailVerified === false ? 'Email not verified' : 'Verified'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'lightgray'
    }
})

export default MainScreen;
