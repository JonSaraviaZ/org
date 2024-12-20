import { useState } from "react";
import Boton from "../Boton";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import "./Formulario.css";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const[color, actualizarColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("Manejar el envío, event");
        let datosAEnviar = { //Se crea un objeto con los datos a enviar que eventualmente se podría enviar a un servidor.
            nombre,
            puesto,
            foto,
            equipo
        };

        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    };

    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required valor ={nombre} 
                actualizarValor={actualizarNombre}/>
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor ={puesto} 
                actualizarValor={actualizarPuesto}/>
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor ={foto}
                actualizarValor={actualizarFoto}/>
            <ListaOpciones 
                valor ={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Título" 
                placeholder="Ingresar título" 
                required valor ={titulo} 
                actualizarValor={actualizarTitulo}/>
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor ={color} 
                actualizarValor={actualizarColor}
                type="color"
                />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>

};

export default Formulario;