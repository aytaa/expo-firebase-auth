import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image, TextInput} from "react-native";
import Logo from "../../assets/fifrebase.png";
import {AntDesign} from "@expo/vector-icons";
import AuthService from "../../AuthService";

const SignUpScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setLoading(true)
        try {
            await AuthService.register(email , password)
        } catch (e) {
            console.log(e.message);
            setError(e.message)
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Logo}/>
            <Text style={styles.title}>Sign Up Firebase</Text>
            {error && <View style={{ marginBottom: 10 }}>
                <Text style={styles.error}>{error}</Text>
            </View> }
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
                onPress={handleRegister}
                style={loading || !email || !password ? styles.disabled : styles.loginContainer}>
                <AntDesign name="login" size={27} color="white" style={{marginRight: 10}}/>
                <Text style={styles.loginButton}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            <View style={styles.accountContainer}>
                <Text style={styles.accountTitle}>
                    Have an account ?
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                >
                    <Text
                        style={styles.accountTitleSignUp}>
                        Sign In
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
    },
    error: {
        fontWeight: 600,
        fontSize: 17,
        color: 'red'
    }
})
export default SignUpScreen;
