import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    updateProfile,
    updateEmail
} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {initializeAuth} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getReactNativePersistence} from "firebase/auth/react-native";

const firebaseConfig = {
    apiKey: "AIzaSyA4H_j92vQV75fw_YhaZgs8-imBNhuPUYM",
    authDomain: "expo-firebase-login-2df8d.firebaseapp.com",
    projectId: "expo-firebase-login-2df8d",
    storageBucket: "expo-firebase-login-2df8d.appspot.com",
    messagingSenderId: "65713818653",
    appId: "1:65713818653:web:aa75338e2133a746214af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
export const auth = getAuth(app);


const AuthService = {

    register: async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await AsyncStorage.setItem('user', JSON.stringify(user)); // save user info in AsyncStorage
            return user;
        } catch (error) {
            throw error;
        }
    },

    signIn: async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await AsyncStorage.setItem('user', JSON.stringify(user)); // save user info in AsyncStorage
            return user;
        } catch (error) {
            throw error;
        }
    },

    updateUser: async (displayName, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        }).then(() => {
            return true
        }).catch((error) => {
            console.log(error.message);
            return error
        });
    },

    emailUpdate: async (email) => {
        updateEmail(auth.currentUser, email).then(() => {
            return true
        }).catch((error) => {
            console.log(error.message)
            return error.message
        });
    },

    verification: async () => {
        try {
            return await sendEmailVerification(auth.currentUser)
        } catch (e) {
            console.log(e.message)
            return e.message
        }
    },

    signOut: async () => {
        try {
            return await signOut(auth);
        } catch (error) {
            console.log(e.message)
            return e.message
        }
    },

};

export default AuthService;
