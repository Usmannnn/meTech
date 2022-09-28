import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'


import { useTheme } from "@react-navigation/native"
import Card from '../components/organisms/Card'

import Image1 from "../../assets/images/image1.png"
import Image2 from "../../assets/images/SEM01651.png"
import Logo1 from "../../assets/images/logo1.png"
import Logo2 from "../../assets/images/logo2.png"

const MKolay = () => {

    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Card
                    image={Image1}
                    customStyle={{ backgroundColor: colors.aqua, iconWrapper: "#53a299" }}
                    text={"Mkolay Mağaza ile ürünlerinizi kolayca okutun, JetKasa ile ödeyin"}
                    source={Logo1}
                />
                <Card
                    image={Image2}
                    customStyle={{ backgroundColor: colors.primary, iconWrapper: "#a72b59" }}
                    text={"Mkolay Kantin ile ürünlerinizi kolayca okutun, telefonunuzdan ödeyin"}
                    source={Logo2}
                />
            </ScrollView>
        </View>
    )
}

export default MKolay

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})