import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Etiqueta, ListaEtiquetas, Texto, TituloSecao } from "../components/Card";
import { Foto } from "../components/Foto";
import { Cabecalho, Divisor, Tela } from "../components/Tela";

const telasSweetly = [
  require("../../assets/images/portfolio/Switly-entrada.jpeg"),
  require("../../assets/images/portfolio/sweetly-pedidos.jpeg"),
  require("../../assets/images/portfolio/sweetly-bemvindos.jpeg"),
  require("../../assets/images/portfolio/sweetly-criar.jpeg"),
];

const qina = require("../../assets/images/portfolio/QinaHomePage.jpeg");
const jogoDado = require("../../assets/images/portfolio/jogoDado.jpeg");

export default function Projetos() {
  return (
    <Tela>
      <Cabecalho eyebrow="Portfólio" titulo="Meus projetos" />

      <Divisor />

      <Card>
        <TituloSecao>Aplicativo de entrega de doces</TituloSecao>

        <ListaEtiquetas>
          <Etiqueta>React</Etiqueta>
          <Etiqueta>Node.js</Etiqueta>
          <Etiqueta>Scrum</Etiqueta>
        </ListaEtiquetas>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carrossel}
          accessibilityLabel="Telas do aplicativo Sweetly"
        >
          {telasSweetly.map((tela, indice) => (
            <Foto
              key={indice}
              source={tela}
              style={styles.telaApp}
              accessibilityLabel={`Tela do aplicativo Sweetly ${indice + 1}`}
            />
          ))}
        </ScrollView>

        <Texto style={styles.ultimoTexto}>
          Desenvolvi este projeto em uma disciplina focada em gestão de projetos de
          software, aplicando a metodologia ágil Scrum do início ao fim do processo.
          O objetivo era criar uma aplicação web para gerenciamento de pedidos em
          docerias. Embora a implementação técnica não tenha sido finalizada 100%,
          todo o ciclo de gestão do projeto — planejamento, sprints, cerimônias
          ágeis e entregas incrementais — foi concluído com sucesso, o que trouxe um
          aprendizado sólido sobre como conduzir um projeto de software na prática.
        </Texto>
      </Card>

      <Card>
        <TituloSecao>Sistema para Empresa de Móveis Planejados</TituloSecao>

        <ListaEtiquetas>
          <Etiqueta>React</Etiqueta>
          <Etiqueta>JavaScript</Etiqueta>
          <Etiqueta>CSS</Etiqueta>
        </ListaEtiquetas>

        <Foto
          source={qina}
          style={styles.fotoProjeto}
          accessibilityLabel="Página inicial do site da Qina"
        />

        <Texto style={styles.ultimoTexto}>
          Este é meu projeto mais recente, desenvolvido em grupo e atualmente em
          fase inicial. Trata-se de uma aplicação web voltada para uma empresa de
          móveis planejados, com o front-end sendo construído em React. É um projeto
          que está me permitindo aplicar na prática o trabalho em equipe e
          colaboração em código, além de aprofundar meus conhecimentos em React.
        </Texto>
      </Card>

      <Card>
        <TituloSecao>Portfólio Pessoal</TituloSecao>

        <ListaEtiquetas>
          <Etiqueta>Next.js</Etiqueta>
          <Etiqueta>React</Etiqueta>
          <Etiqueta>Node.js</Etiqueta>
        </ListaEtiquetas>

        <Texto style={styles.ultimoTexto}>
          Este site que você está navegando agora também é um dos meus projetos!
          Desenvolvido com React no front-end e Node.js no back-end, foi uma
          experiência muito interessante de unir design, organização de conteúdo e
          programação para criar uma vitrine dos meus trabalhos e experiências.
        </Texto>
      </Card>

      <Card>
        <TituloSecao>Jogo dos Dados</TituloSecao>

        <ListaEtiquetas>
          <Etiqueta>React</Etiqueta>
          <Etiqueta>Node.js</Etiqueta>
        </ListaEtiquetas>

        <Foto
          source={jogoDado}
          style={styles.fotoProjeto}
          accessibilityLabel="Tela do Jogo dos Dados"
        />

        <Texto style={styles.ultimoTexto}>
          O jogo dos dados foi um projeto muito interessante que criei para a
          cadeira de Web-Mobile da faculdade, um projeto criado em React utilizando
          Node.js e foi muito interessante aprender coisas novas através de
          pesquisas para o design do site.
        </Texto>
      </Card>
    </Tela>
  );
}

const styles = StyleSheet.create({
  carrossel: {
    gap: 10,
    paddingBottom: 4,
    marginBottom: 16,
  },
  telaApp: {
    width: 148,
    aspectRatio: 480 / 1039,
  },
  fotoProjeto: {
    width: "100%",
    aspectRatio: 1200 / 524,
    marginBottom: 16,
  },
  ultimoTexto: {
    marginBottom: 0,
  },
});
