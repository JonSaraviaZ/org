import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Colaborador.css";


const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav } = props.datos;
    const{colorPrimario, eliminarColaborador, like} = props


    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}></AiFillCloseCircle>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like(id)}></AiFillHeart> : <AiOutlineHeart onClick={() => like(id)}></AiOutlineHeart>}
        </div>
    </div>
};

export default Colaborador;
