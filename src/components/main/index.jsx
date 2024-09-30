import Biografia from "./Biografia";
import Propostas from "./Propostas";
import ListaProp from "./Propostas/list";
import Agenda from "./Agenda";
import FormularioContato from "./Contato";

const Main = () =>{
    const imagem = "https://blacktie.com.br/wp-content/uploads/2020/11/WAL4302-800x1000.jpg.webp";
    const texto = " João Silva é um apaixonado pela sua cidade e um defensor incansável da comunidade. Nascido e criado aqui, ele conhece de perto os desafios e as oportunidades que nossos cidadãos enfrentam. Formado em Administração Pública, João atuou por mais de 15 anos em posições de liderança no setor público, onde implementou projetos que melhoraram a infraestrutura e a qualidade de vida dos moradores."

    const listaObj = [
        {
            "id": 1,
            "img": "https://culturanf.com.br/wp-content/uploads/2023/12/fotografia-reggae-brasil-multidao-energia.webp",
            "titulo": "Show de reggae todo dia.",
            "descricao": "Todas as praças da cidade terão show de reggae de diversas bandas de reggae, rastafariii.",
        },
        {
            "id": 1,
            "img": "https://culturanf.com.br/wp-content/uploads/2023/12/fotografia-reggae-brasil-multidao-energia.webp",
            "titulo": "Show de reggae todo dia.",
            "descricao": "Todas as praças da cidade terão show de reggae de diversas bandas de reggae, rastafariii.",
        },
        {
            "id": 1,
            "img": "https://culturanf.com.br/wp-content/uploads/2023/12/fotografia-reggae-brasil-multidao-energia.webp",
            "titulo": "Show de reggae todo dia.",
            "descricao": "Todas as praças da cidade terão show de reggae de diversas bandas de reggae, rastafariii.",
        },
        {
            "id": 1,
            "img": "https://culturanf.com.br/wp-content/uploads/2023/12/fotografia-reggae-brasil-multidao-energia.webp",
            "titulo": "Show de reggae todo dia.",
            "descricao": "Todas as praças da cidade terão show de reggae de diversas bandas de reggae, rastafariii.",
        },
    
    ]
    const eventos = [
        {
          titulo: "Abertura da Campanha",
          data: "01 de Outubro, 2024",
          descricao: "Evento de abertura da campanha no parque central."
        },
        {
          titulo: "Reunião de Planejamento",
          data: "05 de Outubro, 2024",
          descricao: "Reunião para discutir estratégias da campanha."
        },
        {
          titulo: "Evento de Conscientização",
          data: "10 de Outubro, 2024",
          descricao: "Atividade de conscientização sobre temas da campanha."
        },
        {
          titulo: "Debate com Candidatos",
          data: "15 de Outubro, 2024",
          descricao: "Debate aberto com todos os candidatos da campanha."
        },
        // Adicione mais eventos aqui
      ];


    return(
        <>  
            <section id="Biografia"> 
            <Biografia imagem={imagem} texto= {texto}/>
            </section>
            <section id="Propostas">
            <Propostas listaObj={listaObj}/>
            <ListaProp lista={listaObj}/>
            </section>
            <section id="Agenda">
            <Agenda eventos={eventos}/>
            </section>
            <section id="Contato">         
            <FormularioContato />
            </section>
        </>
    );
}
export default Main; 