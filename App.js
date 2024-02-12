import { StatusBar } from "expo-status-bar";
import { StyleSheet, Animated, View, Easing } from "react-native";
import { useRef, useEffect } from "react";
import { Banner } from "./Banner";
import { colors } from "./colors";
import { LinearGradientBackground } from "./LinearGradient";
import { RadialGradientBackground } from "./RadialGradient";

const hueInterpolation = {
  inputRange: [0, 1],
  outputRange: [0, 360],
};
export default function App() {
  const outerColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(outerColor, {
        toValue: 1,
        useNativeDriver: false,
        duration: 4000,
        // easing: Easing.inOut(Easing.exp),
      })
    ).start();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <RadialGradientBackground
          innerColor={colors.white}
          hueValue={outerColor.interpolate(hueInterpolation)}
        >
          <Banner />
        </RadialGradientBackground>
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
