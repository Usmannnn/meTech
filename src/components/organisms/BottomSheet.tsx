import { StyleSheet, View, Text, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@react-navigation/native'
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    WithSpringConfig,
} from 'react-native-reanimated';
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';



const enum SheetStatus {
    CLOSED,
    MIN,
    MAX
}

const BottomSheet = ({ isActive }: { isActive: boolean }) => {


    const { colors } = useTheme()
    const { height } = useWindowDimensions()

    const CLOSED = -70
    const MIN_HEIGHT = -height * .6
    const MAX_HEIGHT = -height * .9

    const animatedHeight = useSharedValue(CLOSED)
    const sheetStatus = useSharedValue(0)

    const springConfig: WithSpringConfig = {
        damping: 50,
        mass: 0.3,
        stiffness: 120,
        overshootClamping: true,
        restSpeedThreshold: 0.3,
        restDisplacementThreshold: 0.3,
    };

    useEffect(() => {
        isActive ? animatedHeight.value = CLOSED : animatedHeight.value = 0
    }, [isActive])

    const panGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = animatedHeight.value
        },
        onActive: (event, ctx) => {
            if (event.translationY < 0) animatedHeight.value < MIN_HEIGHT ? sheetStatus.value = SheetStatus.MIN : sheetStatus.value = SheetStatus.CLOSED
            else if (event.translationY > 0) sheetStatus.value = SheetStatus.MAX
            animatedHeight.value = ctx.startY + event.translationY
        },
        onEnd: () => {
            'worklet'

            if (sheetStatus.value === SheetStatus.CLOSED) {
                animatedHeight.value = withSpring(MIN_HEIGHT, springConfig);
            }
            else if (sheetStatus.value === SheetStatus.MIN) {
                animatedHeight.value = withSpring(MAX_HEIGHT, springConfig);
            }
            else if (sheetStatus.value != SheetStatus.CLOSED && -animatedHeight.value < -MAX_HEIGHT + 1) {
                animatedHeight.value = withSpring(CLOSED, springConfig);
            }

        }
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: -animatedHeight.value,
            maxHeight: -MAX_HEIGHT
        };
    });

    return (
        <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View
                style={[styles.container, animatedStyle]}
            >
                <View style={[styles.headContainer, { height: -CLOSED }]}>
                    <View style={{ backgroundColor: colors.black, height: 5, width: "20%", borderRadius: 10, marginVertical: 10 }} />
                    <View style={styles.headTitle}>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Ödenen Tutar</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 15, color: colors.primary }}>56,24 TL</Text>
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.itemContainer}
                >
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                    <Text>saf</Text>
                </ScrollView>
            </Animated.View>
        </PanGestureHandler>

    )
}

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 4,
    },
    headContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    headTitle: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    itemContainer: {
        paddingHorizontal: 20
    }
})