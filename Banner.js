import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, Easing, View } from "react-native";
import { Fireworks } from "./Fireworks";
import { colors } from "./colors";

const AnimatedFireWorks = Animated.createAnimatedComponent(Fireworks);

export const Banner = () => {
  const fireworkColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(fireworkColor, {
        useNativeDriver: false,
        duration: 1000,
        easing: Easing.inOut(Easing.exp),
        toValue: 1,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Congratulations!</Text>
      </View>
      <View style={[styles.fireworks, { right: "5%", zIndex: 1000 }]}>
        <AnimatedFireWorks
          color={fireworkColor.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [colors.red, "transparent", colors.white],
          })}
        />
      </View>
      <View style={[styles.fireworks, { left: "5%", top: "10%", zIndex: -1 }]}>
        <AnimatedFireWorks
          color={fireworkColor.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ["transparent", colors.white, colors.red],
          })}
        />
      </View>
      <View
        style={[styles.fireworks, { left: "5%", bottom: "10%", zIndex: -1 }]}
      >
        <AnimatedFireWorks
          color={fireworkColor.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [colors.white, colors.red, "transparent"],
          })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10000,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 30,
    width: "100%",
    height: "100%",
    // backgroundColor: colors.black,
  },
  headerContainer: {
    zIndex: 100,
  },
  fireworks: {
    position: "absolute",
    width: "30%",
    height: "30%",
    zIndex: -10,
  },
  headerText: {
    fontSize: 16,
    color: colors.white,
    width: "100%",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: colors.white,
  },
});
