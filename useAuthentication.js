import React, {useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {Text, View} from "react-native";

const auth = getAuth();

export function useAuthentication() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
        });
        return unsubscribe;
    }, []);

    return {user};
}

export function Loading() {
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
}

export function AuthenticatedApp() {
    const {user} = useAuthentication();

    if (!user) {
        return <Loading/>;
    }

    // Kullanıcının oturum açmış olduğu uygulama bileşenleri
}

export function UnauthenticatedApp() {
    return (
        <View>
            <Text>You need to sign in to use this app.</Text>
        </View>
    );
}

export default function App() {
    const {user} = useAuthentication();

    if (user === null) {
        return <Loading/>;
    }

    return user ? <AuthenticatedApp/> : <UnauthenticatedApp/>;
}
