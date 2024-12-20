import hexToRgba from 'hex-to-rgba';
import Colaborador from "../Colaborador/index.js";
import "./Equipo.css";



const Equipo = (props) => {

    //Desestructuración de props
    const{ colorPrimario, colorSecundario, titulo, id} = props.datos; //Extraigo las propiedades de datos y las guardo en variables

    const{colaboradores, eliminarColaborador, actualizarColor, like} = props; //Extraigo las propiedades de colaboradores y las guardo en variables


    //Declaro un objeto con las propiedades del color
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    };

    const estiloTitulo = {borderColor: colorPrimario}; //Declaro un objeto con las propiedades del color del título

    return <>{ colaboradores.length > 0 &&
        <section className="equipo" style={obj}> {/* entrego el color a través del objeto "obj"*/}
        <input
            type="color"
            className="input-color"
            value={hexToRgba(colorPrimario, 0.6)}
            onChange={(evento) => actualizarColor(evento.target.value, id)}
        />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador = {eliminarColaborador}
                like={like}
                />)
            }
        </div>
    </section>
    }</>
};

export default Equipo;