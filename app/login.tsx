import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  useColorScheme,
} from "react-native";
import { styles } from "@/styles/globalStyles";
import { router } from "expo-router";
import { use, useState } from "react";

export default function Login() {
  const tema1 = useColorScheme();
  const tema = useColorScheme() === "dark";
  const style = styles(tema);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertNullEmail, setAlertNullEmail] = useState(false);
  const [alertNullPassword, setAlertNullPassword] = useState(false);

  const enviar = () => {
    let hayError = false;
    if (!email.trim()) {
      setAlertNullEmail(true);
      hayError = true;
    }
    if (!password.trim()) {
      setAlertNullPassword(true);
      hayError = true;
    }
    if (hayError) return;

    router.push("/welcome");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={style.containerPrincipal}>
        <View style={style.iconContainer}>
          <Text style={style.iconText}>DN</Text>
        </View>
        <Text style={style.titulos}>INICIAR APLICACION</Text>

        <View style={style.inputContainer}>
          {alertNullEmail && (
            <Text style={style.alertasFallidas}>
              {" "}
              !El correo es obligatorio
            </Text>
          )}
          <TextInput
            placeholder="Correo"
            style={style.letraInpus}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor={tema1 ? "#a0aec0" : "#718096"}
            onChangeText={(texto) => {
              setEmail(texto);
              if (texto.trim()) {
                setAlertNullEmail(false);
              }
            }}
          />
          {alertNullPassword && (
            <Text style={style.alertasFallidas}>
              {" "}
              !La contraseña es obligatoria
            </Text>
          )}
          <TextInput
            placeholder="Contraseña"
            style={style.letraInpus}
            value={password}
            placeholderTextColor={tema1 ? "#a0aec0" : "#718096"}
            onChangeText={(texto) => {
              setPassword(texto);
              if (texto.trim()) {
                setAlertNullPassword(false);
              }
            }}
          />
        </View>
        <Text
          style={style.links}
          onPress={() => router.push("/forgot-password")}
        >
          ¿Olvidaste tu contraseña?
        </Text>
        <Pressable style={style.botones} onPress={() => enviar()}>
          <Text style={style.textoBoton}>INICIAR SESION</Text>
        </Pressable>
        <Text style={style.separador}>No tienes cuenta?</Text>
        <Pressable
          style={style.botonSecundario}
          onPress={() => {
            router.push("/register");
          }}
        >
          <Text style={style.textoBotonSecundario}>CREAR CUENTA</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
