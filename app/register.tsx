import { styles } from "@/styles/globalStyles";
import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  ScrollView,
} from "react-native";

export default function CrearCuenta() {
  const tema = useColorScheme() === "dark";
  const style = styles(tema);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertName, setAlertName] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);

  const CrearCuenta = () => {
    let hayError = false;
    if (!name.trim()) {
      setAlertName(true);
      hayError = true;
    }
    if (!email.trim()) {
      setAlertEmail(true);
      hayError = true;
    }
    if (!password.trim()) {
      setAlertPassword(true);
      hayError = true;
    }
    if (hayError) return;
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={style.containerPrincipal}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={style.titulos}>Crear cuenta</Text>
        <Text style={style.subtitulos}>Unete y comienza la experiencia</Text>
        <View style={style.inputContainer}>
          {alertName && (
            <Text style={style.alertasFallidas}> !Nombre es obligatorio</Text>
          )}
          <TextInput
            placeholder="Nombre completo"
            value={name}
            style={style.letraInpus}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            onChangeText={(texto) => {
              setName(texto);
              if (texto.trim()) {
                setAlertName(false);
              }
            }}
          />
          {alertEmail && (
            <Text style={style.alertasFallidas}> !Correo es obligatorio</Text>
          )}
          <TextInput
            placeholder="Correo electronico"
            value={email}
            style={style.letraInpus}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            onChangeText={(texto) => {
              setEmail(texto);
              if (texto.trim()) {
                setAlertEmail(false);
              }
            }}
          />
          {alertPassword && (
            <Text style={style.alertasFallidas}>
              {" "}
              !Contraseña es obligatorio
            </Text>
          )}
          <TextInput
            placeholder="Contraseña"
            style={style.letraInpus}
            value={password}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            onChangeText={(texto) => {
              setPassword(texto);
              if (texto.trim()) {
                setAlertPassword(false);
              }
            }}
          />
        </View>
        <Pressable
          style={style.botones}
          onPress={() => {
            CrearCuenta();
          }}
        >
          <Text style={style.textoBoton}>Crear cuenta</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
