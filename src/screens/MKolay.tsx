import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'


import { useTheme, useNavigation } from "@react-navigation/native"
import Card from '../components/organisms/Card'

import Image1 from "../../assets/images/image1.png"
import Image2 from "../../assets/images/SEM01651.png"
import Logo1 from "../../assets/images/logo1.png"
import Logo2 from "../../assets/images/logo2.png"
import { TCard } from '../utils/types'

const MKolay = () => {

    const { colors } = useTheme()
    const navigation = useNavigation()

    const data: TCard[] = [
        {
            id: 0,
            image: Image1,
            text: "Mkolay Mağaza ile ürünlerinizi kolayca okutun, JetKasa ile ödeyin",
            logo: Logo1,
            customStyle: { backgroundColor: colors.aqua, iconWrapper: "#53a299" },
            action: () => navigation.navigate("QRStack" as never, { headerColor: "#53a299" })
        },
        {
            id: 1,
            image: Image2,
            text: "Mkolay Kantin ile ürünlerinizi kolayca okutun, telefonunuzdan ödeyin",
            logo: Logo2,
            customStyle: { backgroundColor: colors.primary, iconWrapper: "#a72b59" },
            action: () => navigation.navigate("QRStack" as never, { headerColor: "#a72b59" })
        }
    ]


    const renderItem = ({ item }: { item: TCard }) => {
        return (
            <Card
                image={item.image}
                customStyle={item.customStyle}
                text={item.text}
                logo={item.logo}
                action={() => item.action()}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />
        </View>
    )
}

export default MKolay

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})