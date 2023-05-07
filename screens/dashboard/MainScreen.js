import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity, ActivityIndicator, Image} from "react-native";
import {useAuthentication} from "../../useAuthentication";
import {StatusBar} from "expo-status-bar";
import AuthService from "../../AuthService";


const MainScreen = () => {

    const user = useAuthentication()

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    useEffect(() => {
        setPhotoUrl(user?.user?.photoURL);
        setEmail(user?.user?.email)
        setDisplayName(user?.user?.displayName)
    }, [user])

    const handleVerify = async () => {
        setLoading(true);
        try {
            await AuthService.verification()
            setLoading(false)
            alert('Sent email for verification !')
        } catch (e) {
            console.log(e);
            setLoading(false)
            setError(e.message);
        } finally {
            setLoading(false);
            setError(false);
        }
    }

    const handleEvent = (e , setState) => {
        setState(e)
    }

    const handleUpdate = async () => {
        setLoading(true);
        try {
            await AuthService.updateUser(displayName, photoUrl);
            alert('User profile updated');
            setLoading(false);
            setError(false)
        } catch (e) {
            setError(e.message);
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={{uri: user?.user?.photoURL}} style={styles.profileImage}/>
            </View>
            {error && <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.error}> {error} </Text>
            </View>}
            <TextInput
                autoCapitalize="none"
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#98A9BC"
                value={email}
                onChangeText={e => setEmail(e)}
            />
            <TextInput
                style={styles.input}
                placeholder="Display Name"
                placeholderTextColor="#98A9BC"
                value={displayName}
                onChangeText={e => setDisplayName(e)}
            />
            <TextInput
                style={styles.input}
                placeholder="Photo Url"
                placeholderTextColor="#98A9BC"
                value={photoUrl}
                onChangeText={e => setPhotoUrl(e)}
            />
            {user?.user?.emailVerified === false ? <TouchableOpacity
                style={styles.verify}
                onPress={handleVerify}
            >
                <Text style={styles.verifyText}>
                    {loading && <ActivityIndicator size="small"/>}
                    Verify Email
                </Text>
            </TouchableOpacity> : ''}
            <TouchableOpacity
                onPress={handleUpdate}
                disabled={!displayName || !photoUrl}
                style={styles.verify}
            >
                <Text
                    style={styles.verifyText}
                >Update Profile</Text>
            </TouchableOpacity>
            <StatusBar style="dark"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: -100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F8FAFB'
    },
    input: {
        width: 355,
        height: 46,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10
    },
    error: {
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: 17
    },
    verify: {
        backgroundColor: '#4D7CFE',
        width: 355,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    verifyText: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 18,
        color: 'white'
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 300
    },
    image: {
        borderRadius: 300,
        borderWidth: 0.5,
        borderColor: 'gray',
        marginBottom: 40
    }
})

export default MainScreen;
