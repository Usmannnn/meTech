import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import AssetWrapper from '../atoms/AssetWrapper'
import { useTheme } from '@react-navigation/native'
import { Items } from '../../screens/ShoppingDetail'



const ItemContainer = ({ data }: { data: Items[] }) => {

    const { colors } = useTheme()
    const CountView = ({ count }: { count: number }) => {
        return (
            <View style={styles.countView}>
                <Text style={{ color: "#9f9f9f" }}>{count} adet</Text>
            </View>
        )
    }

    return (
        <Fragment>
            {data.map((item, index) => {
                return (
                    <View key={index} style={styles.container}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <AssetWrapper source={item.source} />
                            <View style={styles.detailContainer}>
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ fontWeight: "bold", color: "black", fontSize: 16 }}>{item.title}</Text>
                                    <Text style={{ fontWeight: "400", color: "#bcbcbc", fontSize: 15 }}>{item.detail}</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: colors.primary, fontWeight: "bold" }}>{item.amount} {item.sign}</Text>
                            </View>
                        </View>
                        <CountView count={item.count} />
                    </View>
                )
            })}
        </Fragment>
    )
}

export default ItemContainer

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        borderBottomColor: "#f6f6f6",
        borderBottomWidth: 2
    },
    detailContainer: {
        marginLeft: 15
    },
    countView: {
        backgroundColor: "#e6e6e6",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})