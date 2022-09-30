import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import BottomSheet from '../components/organisms/BottomSheet'

const ShopingDetail = () => {

    const [active, setActive] = useState(true)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: "pink" }} onPress={() => setActive(!active)}>
                <Text>ShopingDetasadil</Text>
            </TouchableOpacity>
            <BottomSheet isActive={active} />
        </View>
    )
}

export default ShopingDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    }
})