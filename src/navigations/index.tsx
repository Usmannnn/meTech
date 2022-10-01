
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { RootStack } from './RootStack';
import { StatusBar } from 'react-native';

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

    return (
        <NavigationContainer theme={theme}>
            <StatusBar backgroundColor={theme.colors.headerColor} barStyle={"light-content"} />
            <RootStack />
        </NavigationContainer>
    );
}

export default RootNavigationContainer