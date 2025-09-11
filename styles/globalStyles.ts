import { StyleSheet } from "react-native";

export const colors = {
  //TEMA OSCURO
  darkBackgroundPrimary: "#1a202c", // Fondo principal
  darkBackgroundScreen: "#2d3748", // Fondo de pantalla
  darkBackgroundInput: "#4a5568", // Fondo de inputs

  //ALERTAS EXITOSAS (rosado)
  darkSuccessBackgroundAlert: "#831843", // fondo rosa oscuro
  darkSuccessBorderAlert: "#db2777", // borde fucsia medio
  darkSuccessTextAlert: "#fbcfe8", // texto rosa claro

  //ALERTAS FALLIDAS (rosado)
  darkErrorBackgroundAlert: "#9d174d",
  darkErrorBorderAlert: "#f472b6",
  darkErrorTextAlert: "#fbcfe8",

  // Textos
  darkTextPrimary: "#e2e8f0", // Texto principal
  darkTextSecondary: "#a0aec0", // Texto secundario (inputs)
  darkTextLink: "#f9a8d4", // Enlaces rosados

  //TEMA CLARO
  //ALERTAS EXITOSAS (rosado)
  lightSuccessBackgroundAlert: "#fce7f3",
  lightSuccessBorderAlert: "#db2777",
  lightSuccessTextAlert: "#be185d",

  //ALERTAS FALLIDAS (rosado)
  lightErrorBackgroundAlert: "#fff1f2",
  lightErrorBorderAlert: "#db2777",
  lightErrorTextAlert: "#db2777",

  // Fondos
  lightBackgroundPrimary: "#f7fafc", // Fondo principal
  lightBackgroundScreen: "#ffffff", // Fondo de pantalla
  lightBackgroundInput: "#f7fafc", // Fondo inputs

  // Textos
  lightTextPrimary: "#2d3748", // Texto principal
  lightTextSecondary: "#718096", // Texto secundario
  lightTextLink: "#db2777", // Enlaces rosados
};

export const styles = (isDark: boolean) =>
  StyleSheet.create({
    containerPrincipal: {
      flex: 1,
      backgroundColor: isDark
        ? colors.darkBackgroundScreen
        : colors.lightBackgroundScreen,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
      paddingTop: 60, // Espaciado desde arriba
    },

    // Contenedor del logo/icono
    iconContainer: {
      width: 80,
      height: 80,
      backgroundColor: "#764ba2", // Color del ícono como en la imagen
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 32,
    },

    iconText: {
      fontSize: 36,
      fontWeight: "bold",
      color: "white",
    },

    titulos: {
      fontSize: 28,
      fontWeight: "bold",
      color: isDark ? colors.darkTextPrimary : colors.lightTextPrimary,
      marginBottom: 8,
      textAlign: "center",
    },

    subtitulos: {
      fontSize: 16,
      color: isDark ? colors.darkTextSecondary : colors.lightTextSecondary,
      marginBottom: 40,
      textAlign: "center",
    },

    // Contenedor de inputs
    inputContainer: {
      width: "100%",
      marginBottom: 24,
    },

    letraInpus: {
      fontSize: 16,
      color: isDark ? colors.darkTextPrimary : colors.lightTextPrimary,
      backgroundColor: isDark
        ? colors.darkBackgroundInput
        : colors.lightBackgroundInput,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 16,
      marginBottom: 16,
    },

    links: {
      fontSize: 16,
      color: isDark ? colors.darkTextLink : colors.lightTextLink,
      textAlign: "center",
      marginBottom: 32,
    },

    // Botón principal
    botones: {
      width: "100%",
      backgroundColor: "#764ba2",
      borderRadius: 12,
      paddingVertical: 16,
      alignItems: "center",
      marginBottom: 16,
    },

    textoBoton: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
    },

    // Botón secundario (crear cuenta)
    botonSecundario: {
      width: "100%",
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: isDark
        ? colors.darkTextSecondary
        : colors.lightTextSecondary,
      borderRadius: 12,
      paddingVertical: 16,
      alignItems: "center",
      marginBottom: 32,
    },

    textoBotonSecundario: {
      fontSize: 16,
      fontWeight: "600",
      color: isDark ? colors.darkTextSecondary : colors.lightTextSecondary,
    },

    // Separador
    separador: {
      fontSize: 14,
      color: isDark ? colors.darkTextSecondary : colors.lightTextSecondary,
      textAlign: "center",
      marginVertical: 16,
    },
    alertasFallidas: {
      color: isDark ? colors.darkErrorTextAlert : colors.lightErrorTextAlert,
      marginBottom: 8,
    },
  });
