//register.jsx
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]+$/;

  const handleRegister = async () => {
    try {
      if (!name) {
        Alert.alert("Error", "Nama wajib diisi");
        return;
      }

      if (!emailRegex.test(email)) {
        Alert.alert("Error", "Email tidak valid");
        return;
      }

      if (!phoneRegex.test(phone) || phone.length < 10) {
        Alert.alert("Error", "Nomor HP tidak valid");
        return;
      }

      if (password.length < 6) {
        Alert.alert("Error", "Password minimal 6 karakter");
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert("Error", "Password tidak sama");
        return;
      }

      const userData = {
        name,
        email,
        password,
      };

      // ✅ simpan ke AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify(userData));

      Alert.alert("Success", "Registrasi berhasil");

      // ✅ kirim nama ke Home
      router.push({
        pathname: "/home",
        params: { userName: name },
      });

    } catch (error) {
      console.log("REGISTER ERROR:", error);
      Alert.alert("Error", "Terjadi kesalahan saat registrasi");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Buat akun baru</Text>

        <TextInput
          placeholder="Nama"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
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