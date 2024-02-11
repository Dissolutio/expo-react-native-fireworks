import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Banner } from "./Banner";
import { colors } from "./colors";
import { LinearGradientBackground } from "./LinearGradient";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LinearGradientBackground>
          <Banner />
        </LinearGradientBackground>
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
