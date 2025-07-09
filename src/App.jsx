import { Container } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



export const App = () => {
  return (
    <>
      <Container fluid className="semaforo-contenedor">
        <div className="semaforo-caja">
          <div className="rojo"></div>
          <div className="amarillo selected"></div>
          <div className="verde"></div>
        </div>
      </Container>
    </>
  );
};
