import { StatusBar } from "expo-status-bar";
import { StyleSheet, Animated, View, Easing } from "react-native";
import { useRef, useEffect } from "react";
import { Banner } from "./Banner";
import { colors } from "./colors";
import { LinearGradientBackground } from "./LinearGradient";
import { RadialGradientBackground } from "./RadialGradient";

export const AnimatedRadialGradientBackground =
  Animated.createAnimatedComponent(RadialGradientBackground);

export default function App() {
  const outerColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(outerColor, {
        useNativeDriver: false,
        duration: 4000,
        easing: Easing.inOut(Easing.exp),
        toValue: 1,
      })
    ).start();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <AnimatedRadialGradientBackground
          innerColor={colors.white}
          outerColor={outerColor.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [colors.white, colors.red, "transparent"],
          })}
        >
          <Banner />
        </AnimatedRadialGradientBackground>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
