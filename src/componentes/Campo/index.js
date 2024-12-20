import "./Campo.css";

const Campo = (props) => { //Props son datos que se pasan de un componente a otro. En este caso, se pasan los datos de Formulario.js a CampoTexto.js, y a partir de estos datos se comporta de una manera u otra.

    const placeholderModificado = `${props.placeholder} ...` //Se crea una constante placeholderModificado que concatena el placeholder con " ...". Esto se puede hacer con cualquier tipo de dato, por ejemplo si quieres concatenar un número con un texto, puedes hacerlo de la siguiente manera: const placeholderModificado = `${props.placeholder} ... ${props.numero}`. Si quieres concatenar un texto con otro texto, puedes hacerlo de la siguiente manera: const placeholderModificado = `${props.placeholder} ... ${props.texto}`.

    //Destructuración
    const {type = "text"} = props



    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    };

    return <div className={`campo campo${type}`}>
        <label>{props.titulo}</label> {/*se accede a props y se muestra el título. Esto se puede realizar con color, etc./ Tambien puedes usar métodos dependiendo del tipo de dato, por ejemplo si quieres hacer el texto en mayúscula lo puedes utilizar con: props.titulo.toUpperCase()*/}
        <input placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        ></input> {/*se crea un input de tipo texto con el id nombre y el name nombre. Además, siempre se deben cerrar las etiquetas internas*/}
        
    </div>
};



export default Campo;