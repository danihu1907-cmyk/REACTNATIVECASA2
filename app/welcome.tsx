import { styles } from "@/styles/globalStyles";
import {
  Text,
  Button,
  View,
  Image,
  ScrollView,
  Pressable,
  useColorScheme,
} from "react-native";
export default function Welcome() {
  const tema = useColorScheme() === "dark";
  const style = styles(tema);

  return (
    <ScrollView contentContainerStyle={style.containerPrincipal}>
      <Text style={style.titulos}>!Bienvenido!</Text>
      <Text style={style.subtitulos}>
        Descubre una nueva forma de conectar con las personas
      </Text>
      <View>
        <Image
          source={require("../assets/images/2442125.png")}
          style={style.image}
        ></Image>
      </View>
      <Pressable style={style.botones}>
        <Text style={style.textoBoton}>Comenzar</Text>
      </Pressable>
    </ScrollView>
  );
}
