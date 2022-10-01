import { FlatList, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute, useTheme } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Items } from './ShoppingDetail';
import ItemContainer from '../components/molecules/ItemContainer';
import IconWrapper from '../components/atoms/IconWrapper';


const HistoryDetail = () => {

    const { colors } = useTheme()
    const { item } = useRoute().params

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
        <View style={styles.container}>
            <View style={[styles.spaces, { backgroundColor: "#fafafa" }]}>
                <View style={styles.rowContainer}>
                    <View style={{ flex: 1 }}>
                        <View style={[styles.rowContainer, { justifyContent: "flex-start", marginBottom: 10 }]}>
                            <AntDesign name="calendar" size={20} color="black" />
                            <Text style={{ fontSize: 16, marginLeft: 10 }}>{item.date}</Text>
                        </View>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.store}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.africau.edu/images/default/sample.pdf')}
                        style={{ backgroundColor: colors.headerColor, padding: 15, borderRadius: 10 }}
                    >
                        <AntDesign name="pdffile1" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.spaces, { flex: 1 }]}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Sepet Özeti</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ItemContainer data={data} />
                </ScrollView>
                <View style={[styles.rowContainer, styles.spaces, { justifyContent: "center", paddingBottom: 0 }]}>
                    <View>
                        <IconWrapper
                            icon={() => <AntDesign name="pdffile1" size={24} color={colors.headerColor} />}
                            customStyle={[styles.iconWrapperStyle, { borderColor: colors.headerColor }]}
                        />

                    </View>
                    <View style={[styles.divider, { borderTopColor: colors.headerColor }]} />
                    <View>
                        <IconWrapper
                            icon={() => <AntDesign name="pdffile1" size={24} color={colors.headerColor} />}
                            customStyle={[styles.iconWrapperStyle, { borderColor: colors.headerColor }]}
                        />
                    </View>
                    <View style={[styles.divider, { borderTopColor: colors.headerColor }]} />
                    <View>
                        <IconWrapper
                            icon={() => <AntDesign name="pdffile1" size={24} color={colors.headerColor} />}
                            customStyle={[styles.iconWrapperStyle, { borderColor: colors.headerColor }]}
                        />
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={{}}>
                        <Text style={{ fontSize: 15, textAlign: "center", marginVertical: 10 }}>Sepet Tutarı</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>56,40 TL</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 15, textAlign: "center", marginVertical: 10 }}>İndirim</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", color: "green" }}>-5,40 TL</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 15, textAlign: "center", marginVertical: 10 }}>Toplam Tutar</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>51,00 TL</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HistoryDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    spaces: {
        paddingVertical: 25,
        paddingHorizontal: 20
    },
    divider: {
        borderTopWidth: 1,
        width: "25%"
    },
    iconWrapperStyle: {
        backgroundColor: "#f0f8f7",
        borderRadius: 100,
        aspectRatio: 1,
        width: 50,
        borderWidth: 1,
        alignSelf: "center"
    }
})
