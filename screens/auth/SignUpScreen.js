import React from 'react';
import {TouchableOpacity, View , StyleSheet} from "react-native";

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Sign Up Screen</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default SignUpScreen;
