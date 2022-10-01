import * as React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRPage from '../screens/QRPage';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';
import WebViewScreen from '../screens/WebViewScreen';
import History from '../screens/History';
import HistoryDetail from '../screens/HistoryDetail';

const Stack = createNativeStackNavigator()

export const QRStack = () => {

    const { colors } = useTheme()
    const navigation = useNavigation()

    return (
        <React.Fragment>
            <StatusBar backgroundColor={colors.headerColor} barStyle={"light-content"} />

            <Stack.Navigator
                initialRouteName='QRPage'
                screenOptions={{
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: colors.headerColor,
                    },
                    headerTintColor: colors.white,
                    title: "MKolay",
                }}
            >
                <Stack.Screen
                    name="QRPage"
                    component={QRPage}
                    options={{
                        headerLeft: () => <Ionicons
                            name={"ios-chevron-back"}
                            size={25}
                            color={colors.white}
                            onPress={() => navigation.navigate("MKolay")}
                        />
                    }}
                />
                <Stack.Screen
                    name="WebViewScreen"
                    component={WebViewScreen}
                    options={{
                        headerLeft: () => <Ionicons
                            name={"ios-chevron-back"}
                            size={25}
                            color={colors.white}
                            onPress={() => navigation.navigate("QRPage")}
                        />
                    }}
                />

                <Stack.Screen
                    name="History"
                    component={History}
                    options={{
                        title: "Alışveriş Geçmişim",
                        headerLeft: () => <Ionicons
                            name={"ios-chevron-back"}
                            size={25}
                            color={colors.white}
                            onPress={() => navigation.navigate("QRPage")}
                        />
                    }}
                />
                <Stack.Screen
                    name="HistoryDetail"
                    component={HistoryDetail}
                    options={{
                        title: "Alışveriş Geçmişim",
                        headerLeft: () => <Ionicons
                            name={"ios-chevron-back"}
                            size={25}
                            color={colors.white}
                            onPress={() => navigation.navigate("History")}
                        />
                    }}
                />
            </Stack.Navigator>
        </React.Fragment>
    );
}