import { styles } from "@/styles/globalStyles";
import { useState } from "react";
import {
  View,
  Pressable,
  TextInput,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  useColorScheme,
} from "react-native";

export default function EmailVerification() {
  const [code, setCode] = useState(["", "", "", ""]);
  const tema = useColorScheme() === "dark";
  const style = styles(tema);

  const CodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={style.containerPrincipal}>
        <Text style={style.titulos}>Verifica tu email</Text>
        <Text style={style.subtitulos}>
          Ingresa el codigo de 4 digitos que enviamos a tu correo
        </Text>
        <View style={style.inputContainerCode}>
          <TextInput
            style={style.letraInputsCode}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            value={code[0]}
            onChangeText={(text) => CodeChange(text, 0)}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={style.letraInputsCode}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            value={code[1]}
            onChangeText={(text) => CodeChange(text, 1)}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={style.letraInputsCode}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            value={code[2]}
            onChangeText={(text) => CodeChange(text, 2)}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={style.letraInputsCode}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            value={code[3]}
            onChangeText={(text) => CodeChange(text, 3)}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>
        <Pressable style={style.botones}>
          <Text style={style.textoBoton}>Verificar codigo</Text>
        </Pressable>
        <Text style={style.separador}>¿No recibiste el codigo ?</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
