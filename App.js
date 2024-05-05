import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import UploadMedia from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <UploadMedia />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
