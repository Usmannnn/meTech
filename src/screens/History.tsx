import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';


const History = () => {

    const { colors } = useTheme()
    const navigation = useNavigation()

    const data = [
        {
            store: "Ataşehir MMM  Migros",
            date: "25 Ekim 2021",
            amout: "56,25 TL"
        },
        {
            store: "Şişli Hürriyet M Migros",
            date: "26 Ekim 2021",
            amout: "32,25 TL"
        }
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("HistoryDetail", { item })}
                style={[styles.itemContainer, { borderColor: colors.whitesmoke, backgroundColor: "#fafafa" }]}
            >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.store}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5 }}>
                    <Text style={{ fontSize: 15 }}>{item.date}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: colors.headerColor }}>{item.amout}</Text>
                        <Ionicons name='chevron-forward' size={20} color={colors.headerColor} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    itemContainer: {
        borderRadius: 10,
        borderWidth: 2,
        padding: 15,
        marginHorizontal: 15,
        marginTop: 10,
    }
})