import { StyleSheet, Text, View } from 'react-native'
import React, { useState, } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import QrEdges from '../components/atoms/QrEdges'
import CustomButton from '../components/atoms/CustomButton'


const QRPage = () => {

    const { colors } = useTheme()
    const navigation = useNavigation()

    const [status, setStatus] = useState(true)


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.textContainer}>
                    <Text style={{ color: colors.black, fontWeight: "bold", fontSize: 25, textAlign: "center" }}>Hoş Geldiniz</Text>
                    <Text style={{ color: colors.black, fontSize: 19, textAlign: "center", marginTop: 15 }}>MKolay Kantin'e giriş yapmak için QR kodu turnikeye okutman gerekiyor</Text>
                </View>
                <View style={[styles.qrContainer, { width: "85%" }]}>
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

                    <View style={{ backgroundColor: "black", width: "75%", aspectRatio: 1 }} />
                </View>
            </View>
            <View style={styles.buttonContaier}>
                <CustomButton text='Alışveriş Geçmişim' action={() => navigation.navigate("PurgPage")} />
                <CustomButton text='Yeni Kart Ekle' action={() => navigation.navigate("PurgPage")} />
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
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingTop: 40,
        paddingBottom: 25,
    },
    textContainer: {
        alignItems: "center",
    },
    qrContainer: {
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
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