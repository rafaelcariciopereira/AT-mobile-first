import style from "./propostas.module.css";





const Propostas = ({listaObj}) => {
    return (
        <div className="content"> 
        <h2 className={style.h2}>Propostas</h2>
        <div className={style.cardContainer}>
            {listaObj.map((proposta, index) => (
                <div key={index} className={style.card}>
                    <img src={proposta.img} alt={proposta.titulo} className={style.imagem} />
                    <h3 className={style.titulo}> {proposta.titulo} </h3>
                    <p className={style.texto}> {proposta.descricao} </p>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Propostas;
