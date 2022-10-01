import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import QrEdges from '../components/atoms/QrEdges'
import CustomButton from '../components/molecules/CustomButton'
import Ionicons from '@expo/vector-icons/Ionicons';
import SvgQRCode from 'react-native-qrcode-svg';
import { getDatabase, ref, onValue, set } from 'firebase/database';


const QRPage = () => {


    const { colors } = useTheme()
    const navigation = useNavigation()
    const { height } = useWindowDimensions()
    const [value, setValue] = useState(Math.random().toString())
    const [data, setData] = useState(null)

    const storeQR = ({ id, val, status }: { id?: number, val?: string, status?: number }) => {
        const db = getDatabase();
        const reference = ref(db, 'codes');
        set(reference, {
            id: id || 0,
            value: val || value,
            status: status || 0
        });
    }

    const readQR = () => {
        const db = getDatabase();
        return onValue(ref(db, '/codes'), codes => {
            let data = codes.val() || {};
            setData(data)
        });
    }

    useEffect(() => {
        readQR()
        storeQR({})
    }, [])

    useEffect(() => {
        if (data?.status === 1) navigation.navigate("ShoppingDetail")
        else if (data?.status === 101) {
            let val = Math.random().toString()
            setValue(val)
            storeQR({ val })
        } else if (data?.status === 1001) alert("Crash")
    }, [data])

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.textContainer}>
                    <Text style={{ color: colors.black, fontWeight: "bold", fontSize: 25, textAlign: "center" }}>Hoş Geldiniz</Text>
                    <Text style={{ color: colors.black, fontSize: 19, textAlign: "center", marginTop: 15 }}>MKolay Kantin'e giriş yapmak için QR kodu turnikeye okutman gerekiyor</Text>
                </View>
                <View style={styles.qrContainer}>
                    <QrEdges
                        edges={[1, 0, 0, 1]}
                        position={[0, undefined, undefined, 0]}
                    />
                    <QrEdges
                        edges={[1, 1, 0, 0]}
                        position={[0, 0, undefined, undefined]}
                    />
                    <QrEdges
                        edges={[0, 1, 1, 0]}
                        position={[undefined, 0, 0, undefined]}
                    />
                    <QrEdges
                        edges={[0, 0, 1, 1]}
                        position={[undefined, undefined, 0, 0]}
                    />
                    <SvgQRCode value={value} size={height * .2} />
                </View>
                <View style={styles.buttonContaier}>
                    <CustomButton
                        text='Alışveriş Geçmişim'
                        icon={() => <Ionicons name={"card"} size={30} color={colors.secondary} />}
                        action={() => navigation.navigate("History")}
                    />
                    <CustomButton
                        text='Yeni Kart Ekle'
                        icon={() => <Ionicons name={"card"} size={30} color={colors.secondary} />}
                        // action={() => navigation.navigate("ShoppingDetail")}
                        action={() => navigation.navigate("WebViewScreen")}
                    />
                </View>
            </View>
        </View>
    )
}

export default QRPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingTop: 40,
        paddingBottom: 25,
    },
    textContainer: {
        alignItems: "center",
    },
    qrContainer: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        width: "75%"
    },
    buttonContaier: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    imageContainer: {
        flex: 1,
        backgroundColor: "pink"
    }
})