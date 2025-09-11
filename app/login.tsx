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

export default function Login() {
  const tema = useColorScheme() === "dark";
  const style = styles(tema);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={style.containerPrincipal}>
        <View style={style.iconContainer}>
          <Text style={style.iconText}>DN</Text>
        </View>
        <Text style={style.titulos}>INICIAR APLICACION</Text>
        <View style={style.inputContainer}>
          <TextInput placeholder="Nombre" style={style.letraInpus} />
          <TextInput placeholder="Contraseña" style={style.letraInpus} />
        </View>
        <Pressable
          style={style.botones}
          onPress={() => router.push("/(tabs)/home")}
        >
          <Text style={style.textoBoton}>INICIAR SESION</Text>
        </Pressable>
        <Text style={style.separador}>No tienes cuenta?</Text>
        <Pressable style={style.botonSecundario}>
          <Text style={style.textoBotonSecundario}>CREAR CUENTA</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
