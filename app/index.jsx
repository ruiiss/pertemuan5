//index.jsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

export default function Index() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = async () => {
  try {
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Email tidak valid");
      return;
    }

    if (!password) {
      Alert.alert("Error", "Password wajib diisi");
      return;
    }

    const storedUser = await AsyncStorage.getItem("user");

    if (!storedUser) {
      Alert.alert("Error", "User belum terdaftar");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (email !== userData.email || password !== userData.password) {
      Alert.alert("Error", "Email atau password salah");
      return;
    }

    router.push({
      pathname: "/home",
      params: { userName: userData.name },
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    Alert.alert("Error", "Terjadi kesalahan");
  }
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Masuk ke akun kamu</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={{ textAlign: "center", marginTop: 15 }}>
            Belum punya akun? <Text style={{ fontWeight: "600" }}>Daftar</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitle: {
    color: "#666",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});
