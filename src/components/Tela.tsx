import type { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, fonts } from "../../assets/theme";

type TelaProps = {
  children: ReactNode;
};

export function Tela({ children }: TelaProps) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={[
        styles.conteudo,
        { paddingBottom: insets.bottom + 40 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

type CabecalhoProps = {
  eyebrow: string;
  titulo: string;
  descricao?: string;
};

export function Cabecalho({ eyebrow, titulo, descricao }: CabecalhoProps) {
  return (
    <View>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      {descricao ? <Text style={styles.descricao}>{descricao}</Text> : null}
    </View>
  );
}

export function Divisor() {
  return <View style={styles.divisor} />;
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: colors.lace,
  },
  conteudo: {
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  eyebrow: {
    color: colors.red,
    fontFamily: fonts.bold,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  titulo: {
    marginTop: 10,
    color: colors.blue,
    fontFamily: fonts.black,
    fontSize: 34,
    lineHeight: 38,
    letterSpacing: -0.8,
  },
  descricao: {
    marginTop: 12,
    maxWidth: 520,
    color: colors.textSoft,
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 26,
  },
  divisor: {
    height: 2,
    marginTop: 28,
    marginBottom: 28,
    backgroundColor: colors.line,
  },
});
