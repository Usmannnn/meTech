import { StyleSheet, Text, View, ImageRequireSource } from 'react-native'
import React from 'react';
import BottomSheet from '../components/organisms/BottomSheet'
import { useTheme } from '@react-navigation/native';
import Pressable from '../components/atoms/Pressable';
import ItemContainer from '../components/molecules/ItemContainer';


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

    return (
        <View style={[styles.container, { backgroundColor: colors.whitesmoke }]}>
            <View style={styles.innerContainer}>
                <Text style={{ color: colors.black, fontSize: 26, fontWeight: "bold", textAlign: "center" }}>
                    Alışverişin bize ulaştı.
                </Text>
                <Text style={{ color: colors.black, fontSize: 19, textAlign: "center", marginVertical: 25 }}>
                    Faturan oluştuğunda Alışveriş Geçmişim kısmından görüntüleyebilirsin.
                </Text>
                <Pressable
                    text={"Anasayfaya Dön"}
                />
            </View>
            <BottomSheet
                isActive={true}
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
    }
})