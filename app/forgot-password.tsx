import { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  useColorScheme,
} from "react-native";
import { styles } from "@/styles/globalStyles";
import { router } from "expo-router";

export default function ForgotPassword() {
  const tema = useColorScheme() === "dark";
  const style = styles(tema);
  const [email, setEmail] = useState("");
  const [alertEmail, setAlertEmail] = useState(false);
  const [emailEnviado, setEmailEnviado] = useState(false);

  const enviar = () => {
    let hayError = false;
    if (!email.trim()) {
      setAlertEmail(true);
      hayError = true;
    }
    if (hayError) return;
    setEmailEnviado(true);

    setTimeout(() => {
      setEmailEnviado(false);
    }, 4000);

    router.push("/emailVerificationScreen");
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={style.containerPrincipal}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={style.titulos}>¿Olvidaste tu contraseña?</Text>
        <Text style={style.subtitulos}>
          No te preocupes, te enviaremos un enlace para restablecerla
        </Text>
        {emailEnviado && (
          <Text style={style.alertasExitosas}>
            ✅ ¡Perfecto! Se ha enviado un enlace de recuperación a tu correo
            electrónico. Revisa tu bandeja de entrada y spam.
          </Text>
        )}
        <View style={style.inputContainer}>
          {alertEmail && (
            <Text style={style.alertasFallidas}>
              {" "}
              !El correo es obligatorio
            </Text>
          )}
          <TextInput
            placeholder="Correo electronico"
            style={style.letraInpus}
            value={email}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            onChangeText={(text) => {
              setEmail(text);
              if (text.trim()) {
                setAlertEmail(false);
              }
            }}
          />
        </View>
        <Pressable style={style.botones} onPress={() => enviar()}>
          <Text style={style.textoBoton}>Enviar enlace</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
