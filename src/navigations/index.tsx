
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { RootStack } from './RootStack';
import { StatusBar } from 'react-native';

import { initializeApp } from "firebase/app";

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const RootNavigationContainer = () => {


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

    // Import the functions you need from the SDKs you need

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyA8AwIIDlvPpjTYPp06gLT4dXwE0MHBqgM",
        authDomain: "metech-bc5a8.firebaseapp.com",
        projectId: "metech-bc5a8",
        storageBucket: "metech-bc5a8.appspot.com",
        messagingSenderId: "334244005431",
        appId: "1:334244005431:web:8a280ee2469833771421b2",
        measurementId: "G-MLH085SPFF"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();


    const registerForPushNotificationsAsync = async () => {
        let token;
        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        return token;
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);


    return (
        <NavigationContainer theme={theme}>
            <StatusBar backgroundColor={theme.colors.headerColor} barStyle={"light-content"} />
            <RootStack />
        </NavigationContainer>
    );
}

export default RootNavigationContainer