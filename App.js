import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Banner } from "./Banner";
import { colors } from "./colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Banner />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
