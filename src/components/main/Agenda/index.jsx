import style from './agenda.module.css';

const Evento = ({ evento }) => {
  return (
    <div className={style.evento}>
      <h3 className={style.titulo}>{evento.titulo}</h3>
      <p className={style.data}>{evento.data}</p>
      <p className={style.descricao}>{evento.descricao}</p>
    </div>
  );
};




const Agenda = ({ eventos }) => {
  return (
    <div className={style.agendaContainer}>
      <h2 className={style.h2}>Agenda</h2>
      <div className={style.gridContainer}>
        {eventos.map((evento, index) => (
          <Evento key={index} evento={evento} />
        ))}
      </div>
    </div>
  );
};

export default Agenda;



