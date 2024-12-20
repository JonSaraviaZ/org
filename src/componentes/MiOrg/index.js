
import "./MiOrg.css";

const MiOrg = (props) => {
    // Estado - hooks
    //useState: retorna un arreglo con dos elementos
    //const [nombreVariable, funciónQueActualizaNombreVariable] = useState("valorInicial");



    // const [mostrar, actualizarMostrar] = useState(true); //establecemos el estado inicial en true

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar);
    //     actualizarMostrar(!mostrar); //cambiamos el estado de mostrar a su valor contrario, es decit, si estaba en true, ahora estará en false y viceversa.
    // };

    return (
        <section className="orgSection">
            <h3 className="title">Mi organización</h3> 
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
        </section>
    );
};

export default MiOrg;
