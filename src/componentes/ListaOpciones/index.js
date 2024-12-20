import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    //Para hacer correr un arreglo utilizamos el método Map
    //Método Map -> arreglo.map( (nombre del arreglo, index) => {
    //    return <option key={index}>{nombre del arreglo}</option>
    //})


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value);
    };


    return <div className="lista-opciones"> 
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}> {/*así se hace un ciclo para recorrer un arreglo*/}
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option> //El key es un identificador único para cada elemento
            )}
        </select>
    </div>

};

export default ListaOpciones;