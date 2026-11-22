import { StyleSheet, View } from "react-native";
import { colors } from "../../assets/theme";
import { Card, Texto, TituloSecao } from "../components/Card";
import { Foto } from "../components/Foto";
import { Cabecalho, Divisor, Tela } from "../components/Tela";

const fotoEscola = require("../../assets/images/portfolio/foto-escola.jpeg");
const fotoFrente = require("../../assets/images/portfolio/foto-frente.jpeg");
const fotoCostas = require("../../assets/images/portfolio/foto-costas.jpeg");
const fotoLiferay = require("../../assets/images/portfolio/liferay.jpeg");

export default function Sobre() {
  return (
    <Tela>
      <Cabecalho
        eyebrow="Sobre mim"
        titulo="Me conheça melhor"
        descricao="Sou estudante de Ciência da Computação e gosto de transformar ideias em experiências digitais."
      />

      <Divisor />

      <Card>
        <TituloSecao>Formação acadêmica</TituloSecao>

        <Foto
          source={fotoEscola}
          style={styles.fotoAcademica}
          accessibilityLabel="Maria Clara no Colégio Eximius"
        />

        <Texto>
          Me formei no Colégio Eximius em 2022 e ingressei na Universidade Católica
          de Pernambuco em 2024, onde estou finalizando minha graduação.
        </Texto>
      </Card>

      <Card>
        <TituloSecao>Atividades extracurriculares</TituloSecao>

        <View style={styles.galeria}>
          <Foto
            source={fotoFrente}
            style={styles.fotoGaleria}
            accessibilityLabel="Projeto SWITAB"
          />
          <Foto
            source={fotoCostas}
            style={styles.fotoGaleria}
            accessibilityLabel="Projeto SWITAB"
          />
          <Foto
            source={fotoLiferay}
            style={styles.fotoGaleria}
            accessibilityLabel="ET Liferay"
          />
        </View>

        <Texto>
          Ao longo da minha trajetória acadêmica, busquei ir além da sala de aula
          participando de atividades extracurriculares que me aproximaram do
          ambiente profissional.
        </Texto>

        <Texto>
          No segundo período, tive a oportunidade de participar da mentoria da
          Avanade, que foi meu primeiro contato mais próximo com esse universo e um
          ótimo ponto de partida para entender como funciona o dia a dia na área de
          tecnologia.
        </Texto>

        <Texto>
          Outra experiência que marcou muito minha formação foi minha participação
          no projeto SWITAB. No ano passado, entrei como mentorada e, este ano, já
          atuo como mentora — uma evolução que mostra o quanto cresci dentro do
          projeto. Foi por meio do SWITAB que tive a chance de fazer uma mentoria
          com a Liferay, que funcionou praticamente como um treinamento intensivo e
          me proporcionou uma bagagem de aprendizado incrível, unindo teoria e
          prática de um jeito que a faculdade sozinha não conseguiria oferecer.
        </Texto>

        <Texto style={styles.ultimoTexto}>
          Essas vivências foram essenciais para meu desenvolvimento profissional, me
          dando uma visão real do mercado de tecnologia e reforçando minha vontade
          de continuar aprendendo e evoluindo na área.
        </Texto>
      </Card>
    </Tela>
  );
}

const styles = StyleSheet.create({
  fotoAcademica: {
    width: "100%",
    aspectRatio: 3 / 4,
    maxHeight: 420,
    marginBottom: 16,
  },
  galeria: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  fotoGaleria: {
    flex: 1,
    aspectRatio: 3 / 4,
    borderColor: colors.blue,
  },
  ultimoTexto: {
    marginBottom: 0,
  },
});
