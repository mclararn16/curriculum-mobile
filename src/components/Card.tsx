import type { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";
import { colors, fonts } from "../../assets/theme";

type CardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function TituloSecao({ children }: { children: ReactNode }) {
  return <Text style={styles.titulo}>{children}</Text>;
}

export function Texto({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.texto, style]}>{children}</Text>;
}

export function Etiqueta({ children }: { children: ReactNode }) {
  return (
    <View style={styles.etiqueta}>
      <Text style={styles.etiquetaTexto}>{children}</Text>
    </View>
  );
}

export function ListaEtiquetas({ children }: { children: ReactNode }) {
  return (
    <View
      style={styles.listaEtiquetas}
      accessibilityLabel="Tecnologias utilizadas"
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
    backgroundColor: colors.card,
    shadowColor: colors.blue,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
  },
  titulo: {
    marginBottom: 12,
    color: colors.blue,
    fontFamily: fonts.bold,
    fontSize: 20,
    lineHeight: 25,
  },
  texto: {
    color: colors.blue,
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 14,
  },
  listaEtiquetas: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  etiqueta: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: colors.red,
    borderRadius: 999,
    backgroundColor: colors.red,
  },
  etiquetaTexto: {
    color: colors.lace,
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 14,
  },
});
