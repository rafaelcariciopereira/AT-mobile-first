import Biografia from "./Biografia";
import Propostas from "./Propostas";
import ListaProp from "./Propostas/list";
import Agenda from "./Agenda";
import FormularioContato from "./Contato";

const Main = () => {
  const imagem = "./assets/4200.png";
  const texto =
    " Marco Madureira é um apaixonado pela sua cidade e um defensor incansável da comunidade. Nascido e criado aqui, ele conhece de perto os desafios e as oportunidades que nossos cidadãos enfrentam. Formado em Administração Pública, João atuou por mais de 15 anos em posições de liderança no setor público, onde implementou projetos que melhoraram a infraestrutura e a qualidade de vida dos moradores.";

  const listaObj = [
    {
      id: 1,
      img: "https://portalsoteropreta.com.br/wp-content/uploads/2018/05/Reggae_Ras_Mateus_FotoCauanTomazelli.jpg",
      titulo: "Show de reggae todo dia.",
      descricao:
        "Todas as praças da cidade terão show de reggae de diversas bandas de reggae, rastafariii.",
    },
    {
      id: 2,
      img: "https://www.riodasostras.rj.gov.br/wp-content/uploads/2019/11/A-Feirinha-de-Artesanato-foi-reformulada-e-agradou-artesãos-e-moradores-Foto-Gabriel-Sales.jpg",
      titulo: "Feira de Artesanato Local.",
      descricao:
        "Expositores de toda a cidade mostrarão suas criações em uma feira repleta de cultura e arte.",
    },
    {
      id: 3,
      img: "https://villagerosa.com/wp-content/uploads/GAD_SUR_19-Geral01-1200x675.jpg",
      titulo: "Piscina de Onda.",
      descricao: "Criação de uma piscina de onda por praça.",
    },
    {
      id: 4,
      img: "https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/best-way-to-learn-java.jpg",
      titulo: "Escolas Tecnologicas.",
      descricao:
        "Haverá aulas de Java e C# no ensino Fundamental de todas as escolas.",
    },
    {
      id: 5,
      img: "https://magazine.zarpo.com.br/wp-content/uploads/2020/08/Mar-azul-e-ilhas-paradis%C3%ADacas-veja-o-que-fazer-em-Angra-dos-Reis.jpg",
      titulo: "Infnet em uma Ilha.",
      descricao: "Vamos reservar uma ilha em Angra para o instituto Infnet.",
    },
  ];
  const lista = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1542281286-7b43878e84e0",
      titulo: "Festival de Cervejas Artesanais.",
      descricao:
        "Um festival que reúne as melhores cervejas artesanais da região, com música ao vivo e food trucks.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1507679799820-2c3605a00b20",
      titulo: "Feira de Artesanato Local.",
      descricao:
        "Expositores de toda a cidade mostrarão suas criações em uma feira repleta de cultura e arte.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1521401309470-bc68ef4d9c80",
      titulo: "Cine ao Ar Livre.",
      descricao:
        "Exibição de filmes clássicos sob as estrelas em diferentes parques da cidade.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1494562662358-ccf885b7b91b",
      titulo: "Concerto de Música Clássica.",
      descricao:
        "Orquestras locais se apresentam em um concerto ao ar livre, trazendo a música clássica para todos.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      titulo: "Tarde de Jogos de Tabuleiro.",
      descricao:
        "Reuna seus amigos para uma tarde divertida com jogos de tabuleiro e competição amigável.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1557221644-d55d0c627a29",
      titulo: "Maratona de Dança.",
      descricao:
        "Uma maratona onde todos podem se divertir dançando ao som de diferentes ritmos e estilos.",
    },
  ];
  const eventos = [
    {
      titulo: "Show do Edson Gomes",
      data: "25 de dezembro, 2024",
      descricao: "Evento de abertura da campanha na Infnet.",
    },
    {
      titulo: "Reunião de Planejamento",
      data: "05 de Outubro, 2024",
      descricao: "Reunião para discutir estratégias da campanha.",
    },
    {
      titulo: "Evento de Conscientização",
      data: "10 de Outubro, 2024",
      descricao: "Atividade de conscientização sobre temas da campanha.",
    },
    {
      titulo: "Debate com Candidatos",
      data: "15 de Outubro, 2024",
      descricao: "Debate aberto com todos os candidatos da campanha.",
    },
  ];

  return (
    <>
      <section id="Biografia">
        <Biografia imagem={imagem} texto={texto} />
      </section>
      <section id="Propostas">
        <Propostas listaObj={listaObj} />
        <ListaProp lista={lista} />
      </section>
      <section id="Agenda">
        <Agenda eventos={eventos} />
      </section>
      <section id="Contato">
        <FormularioContato />
      </section>
    </>
  );
};
export default Main;
