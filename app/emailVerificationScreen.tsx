import { styles } from "@/styles/globalStyles";
import { useState, useRef } from "react";
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

  // Solo esto para las referencias
  const inputs = useRef<(TextInput | null)[]>([]);

  const CodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Solo esta línea para auto-navegar
    if (text && index < 3 && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }
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
            ref={(ref) => {
              inputs.current[0] = ref;
            }}
            style={style.letraInputsCode}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            value={code[0]}
            onChangeText={(text) => CodeChange(text, 0)}
            maxLength={1}
            keyboardType="numeric"
            autoFocus
          />
          <TextInput
            ref={(ref) => {
              inputs.current[1] = ref;
            }}
            style={style.letraInputsCode}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            value={code[1]}
            onChangeText={(text) => CodeChange(text, 1)}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            ref={(ref) => {
              inputs.current[2] = ref;
            }}
            style={style.letraInputsCode}
            placeholderTextColor={tema ? "#a0aec0" : "#718096"}
            value={code[2]}
            onChangeText={(text) => CodeChange(text, 2)}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            ref={(ref) => {
              inputs.current[3] = ref;
            }}
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
        <Text style={style.separador}>¿No recibiste el codigo?</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
