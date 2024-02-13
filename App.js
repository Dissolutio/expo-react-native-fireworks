import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./colors";
import { AnimatedRadialGradient } from "./RadialGradient";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AnimatedRadialGradient />
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
