import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Text, TextInput, Image} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import AuthService from "../../AuthService";
import Logo from "../../assets/fifrebase.png";

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        setLoading(true);
        try {
            await AuthService.signIn(email, password)
            setLoading(false)
        } catch (e) {
            console.log(e.message)
            setError(e.message)
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Logo}/>
            <Text style={styles.title}>Sign In Firebase</Text>
            <TextInput
                autoCapitalize="none"
                style={styles.input}
                placeholderTextColor="black"
                placeholder="Email"
                value={email}
                onChangeText={e => setEmail(e)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="black"
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={e => setPassword(e)}
            />
            <TouchableOpacity
                disabled={loading || !email || !password}
                onPress={handleLogin}
                style={loading || !email || !password ? styles.disabled : styles.loginContainer}>
                <AntDesign name="login" size={27} color="white" style={{marginRight: 10}}/>
                <Text style={styles.loginButton}>
                    Sign In
                </Text>
            </TouchableOpacity>
            <View style={styles.accountContainer}>
                <Text style={styles.accountTitle}>
                    Have not an account ?
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                >
                    <Text
                        style={styles.accountTitleSignUp}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 22,
        fontWeight: 600,
        marginBottom: 10
    },
    input: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        width: 360,
        height: 55,
        padding: 10,
        fontWeight: '600',
        fontSize: 16,
        borderWidth: 0.5,
        marginBottom: 10
    },
    loginContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'black',
        width: 360,
        height: 55,
        borderWidth: 0.5,
        borderRadius: 10
    },
    loginButton: {
        color: '#fff',
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
        fontSize: 18
    },
    disabled: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'lightgray',
        width: 360,
        height: 55,
        borderWidth: 0.5,
        borderRadius: 10
    },
    accountContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 10
    },
    accountTitle: {
        fontWeight: 600,
        fontSize: 20
    },
    image: {
        top: -40,
        width: 200,
        height: 250,
        padding: 10,
        marginBottom: 20
    },
    accountTitleSignUp: {
        fontWeight: 600,
        fontSize: 20,
        color: 'blue',
        marginLeft: 10
    }
})
export default SignInScreen;
