import style from "./propostas.module.css";
 
 
const ListaProp = ({lista}) => {
    return (
        <div className="content">
            <h2 className={style.h2}>Outras Propostas</h2>
            <ul className={style.ul}>
                {lista.map((proposta, index) => (
                <li className={style.li} key={index}>
                    <h3>{proposta.titulo}</h3>
                </li>
            ))}
            </ul>
        </div>
    );
 }

export default ListaProp;