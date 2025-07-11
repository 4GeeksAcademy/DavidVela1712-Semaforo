import { Button, Container } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


export const App = () => {

  const [colorSeleccionado, setColorSeleccionado] = useState('');
  const [activeMorado, setActiveMorado] = useState(false);

  const claseRojo = "rojo" + (colorSeleccionado === "rojo" ? " selected" : "");
  const claseAmarillo = "amarillo" + (colorSeleccionado === "amarillo" ? " selected" : "");
  const claseVerde = "verde" + (colorSeleccionado === "verde" ? " selected" : "");
  const claseMorado = "morado" + (colorSeleccionado === "morado" ? " selected" : "");

  return (
    <>
      <Container fluid className="semaforo-contenedor">
        <div className="semaforo-caja">
          <div className={claseRojo} onClick={() => setColorSeleccionado("rojo")}></div>
          <div className={claseAmarillo} onClick={() => setColorSeleccionado("amarillo")}></div>
          <div className={claseVerde} onClick={() => setColorSeleccionado("verde")}></div>
          {activeMorado && (<div className={claseMorado} onClick={() => setColorSeleccionado("morado")}></div>)}          
        </div>
        <Button 
        onClick={() => setActiveMorado(true)}
        className={activeMorado ? "ocultar": ""}
        >Añadir color</Button>
      </Container>
    </>
  );
};
