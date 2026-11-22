import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, fonts } from "../../assets/theme";
import { Botao } from "../components/Botao";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={[
        styles.container,
        { paddingBottom: insets.bottom + 24 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.eyebrow}>Portfólio pessoal</Text>

        <Text style={styles.titulo} adjustsFontSizeToFit numberOfLines={2}>
          Maria Clara Ribeiro
        </Text>

        <Text style={styles.descricao}>
          Estudante de Ciência da Computação, curiosa por tecnologia e criação.
        </Text>

        <View style={styles.acoes}>
          <Botao href="/sobre" label="Me conheça melhor" />
          <Botao href="/projetos" label="Meus projetos" />
          <Botao href="/forca" label="Divirta-se" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: colors.lace,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
  card: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 22,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 14,
    backgroundColor: colors.card,
    // sombra no iOS
    shadowColor: colors.blue,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    // sombra no Android
    elevation: 6,
  },
  eyebrow: {
    color: colors.red,
    fontFamily: fonts.bold,
    fontSize: 12,
    letterSpacing: 1.8,
    textTransform: "uppercase",
  },
  titulo: {
    marginTop: 14,
    marginBottom: 12,
    color: colors.blue,
    fontFamily: fonts.black,
    fontSize: 38,
    lineHeight: 42,
    letterSpacing: -0.8,
    textAlign: "center",
  },
  descricao: {
    maxWidth: 320,
    color: colors.textSoft,
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 27,
    textAlign: "center",
  },
  acoes: {
    width: "100%",
    gap: 12,
    marginTop: 32,
  },
});
