import { Link, type Href } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { colors, fonts } from "../../assets/theme";

type BotaoProps = {
  href: string;
  label: string;
  style?: StyleProp<ViewStyle>;
};

export function Botao({ href, label, style }: BotaoProps) {
  return (
    <Link href={href as Href} asChild>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={label}
        style={({ pressed }) => [
          styles.botao,
          pressed && styles.pressionado,
          style,
        ]}
      >
        <Text style={styles.botaoTexto}>{label}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 999,
    backgroundColor: "transparent",
  },
  pressionado: {
    backgroundColor: colors.lace,
    // brilho vermelho ao redor (iOS)
    shadowColor: colors.red,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 14,
    // sombra no Android
    elevation: 10,
  },
  botaoTexto: {
    color: colors.blue,
    fontFamily: fonts.bold,
    fontSize: 16,
    textAlign: "center",
  },
});
