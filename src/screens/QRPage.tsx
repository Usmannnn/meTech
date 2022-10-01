import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useState, } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import QrEdges from '../components/atoms/QrEdges'
import CustomButton from '../components/molecules/CustomButton'
import Ionicons from '@expo/vector-icons/Ionicons';
import SvgQRCode from 'react-native-qrcode-svg';

const QRPage = () => {

    const { colors } = useTheme()
    const navigation = useNavigation()
    const { height } = useWindowDimensions()
    const [status, setStatus] = useState(true)


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
                    <SvgQRCode value='value' size={height * .2} />
                </View>
                <View style={styles.buttonContaier}>
                    <CustomButton
                        text='Alışveriş Geçmişim'
                        icon={() => <Ionicons name={"card"} size={30} color={colors.secondary} />}
                        action={() => navigation.navigate("PurgPage")}
                    />
                    <CustomButton
                        text='Yeni Kart Ekle'
                        icon={() => <Ionicons name={"card"} size={30} color={colors.secondary} />}
                        action={() => navigation.navigate("PurgPage")}
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