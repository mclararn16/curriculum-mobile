import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { colors, fonts } from "../../assets/theme";
import { Card } from "../components/Card";
import { Cabecalho, Divisor, Tela } from "../components/Tela";

const WORDS = [
  "CLARA",
  "REACT",
  "JAVASCRIPT",
  "COMPUTADOR",
  "TECLADO",
  "MOUSE",
  "INTERNET",
  "PROGRAMA",
  "ALGORITMO",
  "VARIAVEL",
  "FUNCAO",
  "ARQUIVO",
  "NAVEGADOR",
  "SERVIDOR",
  "BANCO",
  "PYTHON",
  "ESTUDANTE",
  "FACULDADE",
  "RECIFE",
  "PERNAMBUCO",
  "PROJETO",
  "ESTAGIO",
  "FRONTEND",
  "BACKEND",
  "BANCODEDADOS",
  "GITHUB",
  "CELULAR",
  "ARDUINO",
  "ROBOTICA",
  "FORCA",
];

const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERROS = 6;
const ESPACO_LETRAS = 6;
const ESPACO_TECLAS = 8;

function sortearPalavra() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default function Forca() {
  const { width } = useWindowDimensions();
  const [palavra, setPalavra] = useState(sortearPalavra);
  const [palpites, setPalpites] = useState<string[]>([]);

  const letras = palavra.split("");
  const erros = palpites.filter((letra) => !palavra.includes(letra));
  const venceu = letras.every((letra) => palpites.includes(letra));
  const perdeu = erros.length >= MAX_ERROS;
  const fimDeJogo = venceu || perdeu;

  const larguraCelula = Math.min(
    38,
    (width - 40 - 36 - (letras.length - 1) * ESPACO_LETRAS) / letras.length,
  );
  const tamanhoTecla = Math.min(
    52,
    Math.max(34, Math.floor((width - 40 - 36 - 6 * ESPACO_TECLAS) / 7)),
  );

  function chutar(letra: string) {
    if (!palpites.includes(letra) && !fimDeJogo) {
      setPalpites((atuais) => [...atuais, letra]);
    }
  }

  function reiniciar() {
    setPalpites([]);
    setPalavra(sortearPalavra());
  }

  return (
    <Tela>
      <Cabecalho
        eyebrow="Momento de brincar"
        titulo="Jogo da forca"
        descricao="Descubra a palavra secreta antes de completar 6 erros."
      />

      <Divisor />

      <Card>
        <View style={styles.palavra} accessibilityLabel="Palavra da forca">
          {letras.map((letra, indice) => {
            const revelada = palpites.includes(letra);

            return (
              <View
                key={`${letra}-${indice}`}
                style={[
                  styles.celula,
                  {
                    width: larguraCelula,
                    height: larguraCelula * 1.3,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.celulaTexto,
                    { fontSize: Math.max(16, larguraCelula * 0.62) },
                  ]}
                >
                  {revelada ? letra : ""}
                </Text>
                <View style={styles.celulaLinha} />
              </View>
            );
          })}
        </View>

        <View style={styles.erros}>
          <Text style={styles.errosTexto}>
            Erros: {erros.length} de {MAX_ERROS}
          </Text>
          <View style={styles.marcadores}>
            {Array.from({ length: MAX_ERROS }).map((_, indice) => (
              <View
                key={indice}
                style={[
                  styles.marcador,
                  indice < erros.length && styles.marcadorErro,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.teclado} accessibilityLabel="Letras disponíveis">
          {ALFABETO.map((letra) => {
            const usada = palpites.includes(letra);
            const acertou = palavra.includes(letra);

            return (
              <Pressable
                key={letra}
                disabled={usada || fimDeJogo}
                accessibilityRole="button"
                accessibilityLabel={`Letra ${letra}`}
                accessibilityState={{ disabled: usada || fimDeJogo }}
                onPress={() => chutar(letra)}
                style={({ pressed }) => [
                  styles.tecla,
                  {
                    width: tamanhoTecla,
                    height: tamanhoTecla,
                  },
                  usada && (acertou ? styles.teclaAcerto : styles.teclaErro),
                  (usada || fimDeJogo) && styles.teclaDesativada,
                  pressed && !usada && !fimDeJogo && styles.teclaPressionada,
                ]}
              >
                <Text
                  style={[
                    styles.teclaTexto,
                    usada && styles.teclaTextoUsada,
                    { fontSize: Math.round(tamanhoTecla * 0.38) },
                  ]}
                >
                  {letra}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {fimDeJogo && (
          <View style={styles.resultado}>
            <Text style={styles.resultadoTitulo}>
              {venceu ? "Você acertou! 🎉" : "Que pena, você perdeu!"}
            </Text>
            <Text style={styles.resultadoTexto}>
              {venceu
                ? `A palavra era ${palavra}.`
                : `A palavra era ${palavra}. Tente de novo!`}
            </Text>

            <Pressable
              onPress={reiniciar}
              accessibilityRole="button"
              style={({ pressed }) => [
                styles.reiniciar,
                pressed && styles.reiniciarPressionado,
              ]}
            >
              <Text style={styles.reiniciarTexto}>Jogar novamente</Text>
            </Pressable>
          </View>
        )}
      </Card>
    </Tela>
  );
}

const styles = StyleSheet.create({
  palavra: {
    flexDirection: "row",
    justifyContent: "center",
    gap: ESPACO_LETRAS,
    marginTop: 6,
    marginBottom: 24,
  },
  celula: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  celulaTexto: {
    color: colors.blue,
    fontFamily: fonts.black,
    marginBottom: 6,
  },
  celulaLinha: {
    width: "100%",
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.blue,
  },
  erros: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 22,
  },
  errosTexto: {
    color: colors.blue,
    fontFamily: fonts.bold,
    fontSize: 14,
  },
  marcadores: {
    flexDirection: "row",
    gap: 6,
  },
  marcador: {
    width: 10,
    height: 10,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.blue,
  },
  marcadorErro: {
    borderColor: colors.red,
    backgroundColor: colors.red,
  },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: ESPACO_TECLAS,
  },
  tecla: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 8,
  },
  teclaPressionada: {
    backgroundColor: colors.red,
    borderColor: colors.red,
  },
  teclaAcerto: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
  teclaErro: {
    backgroundColor: colors.red,
    borderColor: colors.red,
  },
  teclaDesativada: {
    opacity: 0.85,
  },
  teclaTexto: {
    color: colors.blue,
    fontFamily: fonts.bold,
  },
  teclaTextoUsada: {
    color: colors.lace,
  },
  resultado: {
    marginTop: 24,
    paddingTop: 20,
    borderTopWidth: 2,
    borderTopColor: colors.line,
    alignItems: "center",
  },
  resultadoTitulo: {
    color: colors.blue,
    fontFamily: fonts.black,
    fontSize: 19,
    textAlign: "center",
    marginBottom: 6,
  },
  resultadoTexto: {
    color: colors.textSoft,
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 23,
    textAlign: "center",
    marginBottom: 18,
  },
  reiniciar: {
    paddingVertical: 13,
    paddingHorizontal: 26,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.red,
    backgroundColor: colors.red,
  },
  reiniciarPressionado: {
    opacity: 0.85,
    transform: [{ translateY: -2 }],
  },
  reiniciarTexto: {
    color: colors.lace,
    fontFamily: fonts.bold,
    fontSize: 15,
  },
});
