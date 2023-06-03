
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  
const [datos,setDatos]= useState()

const handleSubmit = (info) => {
  setDatos(info);
}


  return (
    <div className="App">

              <>
              <div className="cards">
                <Form onSubmit={handleSubmit} />
                {datos && <Card nombre={datos.nombre} fruta={datos.fruta} />}
              </div></>



    </div>

  );
        }





export default App;