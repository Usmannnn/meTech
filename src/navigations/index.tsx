
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { RootStack } from './RootStack';
import { StatusBar } from 'react-native';

import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";



const RootNavigationContainer = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyB37kEqiDw8cd8AsbQiBLQxrSkQTRBqXCE",
        authDomain: "metech-8646e.firebaseapp.com",
        projectId: "metech-8646e",
        storageBucket: "metech-8646e.appspot.com",
        messagingSenderId: "939368136070",
        appId: "1:939368136070:web:99e4cac3229ea2d6704007",
        measurementId: "G-25Y1SJ83L0"
    };

    let myApp = initializeApp(firebaseConfig);

    const messaging = getMessaging();

    React.useEffect(() => {
        // onMessage(messaging, (payload) => {
        //     console.log('Message received. ', payload);
        // });
        console.log(myApp)
    }, [])

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#b83163',
            secondary: "#e4782e",
            aqua: "#65bab0",
            gray: "#D6D6D6",
            whitesmoke: "#F0F0F0",
            white: "#FFFFFF",
            black: "#000000",
            headerColor: "#e4782e"
        },
    };

    return (
        <NavigationContainer theme={theme}>
            <StatusBar backgroundColor={theme.colors.headerColor} barStyle={"light-content"} />
            <RootStack />
        </NavigationContainer>
    );
}

export default RootNavigationContainer