import { Container } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


export const App = () => {
  
  const [colorSeleccionado, setColorSeleccionado] = useState('');

  const claseRojo = "rojo" + (colorSeleccionado === "rojo" ? " selected" : "");
  const claseAmarillo = "amarillo" + (colorSeleccionado === "amarillo" ? " selected" : "");
  const claseVerde = "verde" + (colorSeleccionado === "verde" ? " selected" : "");

  return (
    <>
      <Container fluid className="semaforo-contenedor">
        <div className="semaforo-caja">
          <div className={claseRojo} onClick={() => setColorSeleccionado("rojo")}></div>
          <div className={claseAmarillo} onClick={() => setColorSeleccionado("amarillo")}></div>
          <div className={claseVerde} onClick={() => setColorSeleccionado("verde")}></div>
        </div>
      </Container>
    </>
  );
};
