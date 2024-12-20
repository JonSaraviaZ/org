import React from 'react'; //se importa React desde el paquete react
import ReactDOM from 'react-dom/client'; //se importa ReactDOM desde el paquete react-dom de los navegadores
import App from './App'; //se importa el componente App desde el archivo App.js
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //se crea un root con el método createRoot de ReactDOM y se le pasa el elemento con el id root que está en el documento HTML
                                                                  //genera, en consecuencia el enlace entre el DOM y el DIV con el id root
root.render( //va a recibir un componente de React y lo va a renderizar en el root
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
