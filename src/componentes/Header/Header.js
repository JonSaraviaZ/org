//Header.js acá se aplicará el concepto del componente, se va anecargar de toda la estructura de la imagen, etiquetas, etc.

import "./Header.css"; //importando el archivo css

//Creando una función en un component React
function Header(){ //Es importante retornar un html
    return  <header className="header"> {/*className es un atributo de html que se usa para asignar una clase a un elemento*/}
                <img src="/img/Header.png" alt='Org/'></img> {/*img es una etiqueta de html que se usa para mostrar una imagen. Además, si en el return hay un elemento padre, como header, es necesario incluir adentro del elemento padre los elementos hijos*/}
            </header>

};

export default Header //para que se pueda usar un componente en otro archivo, se debe exportar primero.