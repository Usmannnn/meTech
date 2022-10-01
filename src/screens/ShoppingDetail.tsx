import { StyleSheet, Text, View, ImageRequireSource } from 'react-native'
import React, { useEffect, useState } from 'react';
import BottomSheet from '../components/organisms/BottomSheet'
import { useNavigation, useTheme } from '@react-navigation/native';
import Pressable from '../components/atoms/Pressable';
import ItemContainer from '../components/molecules/ItemContainer';
import PurgePage from './PurgePage';
import { getDatabase, onValue, ref } from 'firebase/database';


export interface Items {
    source: ImageRequireSource
    title: string
    detail: string
    amount: string
    sign: string
    count: number
}

const ShopingDetail = () => {

    const { colors } = useTheme()
    const navigation = useNavigation()

    const data: Items[] = [
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        },
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        },
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        },
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        },
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        },
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        },
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        },
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        },
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        },
        {
            source: require("../../assets/images/negro.jpg"),
            title: "Eti Negro",
            detail: "100 gr",
            amount: "5,95",
            sign: "₺",
            count: 16
        }
    ]

    const [active, setActive] = useState(false)

    const readQR = () => {
        const db = getDatabase();
        return onValue(ref(db, '/codes'), codes => {
            let data = codes.val() || {};
            if (data.status === 2) setActive(true)
        });
    }

    useEffect(() => {
        readQR()
    }, [])

    if (!active) return <PurgePage />

    else return (
        <View style={[styles.container, { backgroundColor: colors.whitesmoke }]}>
            <View style={styles.innerContainer}>
                <Text style={{ color: colors.black, fontSize: 26, fontWeight: "bold", textAlign: "center" }}>
                    Alışverişin bize ulaştı.
                </Text>
                <Text style={{ color: colors.black, fontSize: 19, textAlign: "center", marginVertical: 25 }}>
                    Faturan oluştuğunda Alışveriş Geçmişim kısmından görüntüleyebilirsin.
                </Text>
                <Pressable text={"Anasayfaya Dön"} action={() => navigation.navigate("Tabs")} />
            </View>
            <BottomSheet
                isActive={true}
                headerItem={() => {
                    return (
                        <View style={styles.headTitle}>
                            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Ödenen Tutar</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 15, color: colors.headerColor }}>56,24 TL</Text>
                        </View>
                    )
                }}
                renderItems={() => <ItemContainer data={data} />}
            />
        </View>
    )
}

export default ShopingDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 50
    },
    headTitle: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        borderBottomColor: "#f6f6f6",
        borderBottomWidth: 2
    },
})