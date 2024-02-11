import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Banner } from "./Banner";
import { colors } from "./colors";
import { LinearGradientBackground } from "./LinearGradient";
import { RadialGradientBackground } from "./RadialGradient";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <RadialGradientBackground
          innerColor={colors.green}
          outerColor={colors.black}
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
