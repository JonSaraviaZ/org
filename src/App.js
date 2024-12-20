import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Equipo from './componentes/Equipo/index.js'; //importo Equipo desde el archivo Equipo.js
import Footer from './componentes/Footer/index.js';
import Formulario from './componentes/Formulario/Formulario'; //importo Formulario desde el archivo Formulario.js
import Header from './componentes/Header/Header'; //importo Header desde el archivo Header.js
import MiOrg from './componentes/MiOrg/index.js'; //importo MiOrg desde el archivo MiOrg.js

function App() {

  const[mostrarFormulario, actualizarMostrar] = useState(false);
  const[colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://avatars.githubusercontent.com/u/172339152?v=4",
    nombre: "Jonathan Saraviua",
    puesto: "Desarrollador de software e instructor",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }]);

  //Acá actualizamos el litado de los equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF", 
    }
  ]);
    

  //Ternario -- > condicion ? si es verdadero = seMuestra : si es falso = noSeMuestra
  //Corto circuito --> condicion && seMuestra. Al ocupar && si la condición es verdadera se muestra, si es falsa no se muestra.

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador",colaborador);
    //Spread operator - vamos a crear una copia de los valores actuales y después vamos a agregar el colaborador.
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar colaborador", id);
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
  actualizarColaboradores(nuevosColaboradores);
};

//Actualizar color de equipos

const actualizarColor = (color, id) =>{
  console.log("Actualizar:", color, id);
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color;
    }
    return equipo;
  });

  actualizarEquipos(equiposActualizados);
};

//Crear equipo

const crearEquipo = (nuevoEquipo) => {
  console.log("Nuevo equipo", nuevoEquipo);
  actualizarEquipos([...equipos,{... nuevoEquipo, id: uuid()} ]);
};

const like = (id) => {
  console.log("Like", id);
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav;
    }
    return colaborador;
  })

  actualizarColaboradores(colaboradoresActualizados);
};


  //Lista de equipos
//   const equipos = [
//     {
//       titulo: "Programación",
//       colorPrimario: "#57C278",
//       colorSecundario: "#D9F7E9",
//     },
//     {
//       titulo: "Front End",
//       colorPrimario: "#82CFFA",
//       colorSecundario: "#E8F8FF",
//     },
//     {
//       titulo: "Data Science",
//       colorPrimario: "#A6D157",
//       colorSecundario: "#F0F8E2",
//     },
//     {
//       titulo: "Devops",
//       colorPrimario: "#E06B69",
//       colorSecundario: "#FDE7E8",
//     },
//     {
//       titulo: "UX y Diseño",
//       colorPrimario: "#DB6EBF",
//       colorSecundario: "#FAE9F5",
//     },
//     {
//       titulo: "Móvil",
//       colorPrimario: "#FFBA05",
//       colorSecundario: "#FFF5D9",
//     },
//     {
//       titulo: "Innovación y Gestión",
//       colorPrimario: "#FF8A29",
//       colorSecundario: "#FFEEDF",
//     }
// ];

  return (
    <div className="App">
      <Header/>
      {/* { mostrarFormulario === true ? <Formulario /> : <></>} */}
      { 
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        /> 
      }
      

      
      <MiOrg cambiarMostrar = {cambiarMostrar}/>

      {
      equipos.map( (equipo) => <Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} //Si el colaborador pertenece al equipo, que sí se muestre.
        eliminarColaborador = {eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        /> ) //map recorre el array de equipos y por cada uno de ellos, devuelve un componente Equipo. Además, cada vez que trabajo con map debo utilizar key.
      }

      <Footer />

    </div>
  );
}

export default App;
