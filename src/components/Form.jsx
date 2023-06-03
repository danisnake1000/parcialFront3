import { useState } from "react";
import "../App.css";

const Form=({onSubmit}) => {

    const [nombre, setNombre] = useState("");

    const [fruta, setFruta] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {

    e.preventDefault();

    if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
      setError('El nombre no puede ser menor a 3 caracteres por favor');
      return;
    }

    if (fruta.length < 6) {
      setError('la fruta debe contener mas de 6 caracteres');
      return;
    }

    onSubmit({ nombre, fruta });
    setError('');
    setNombre('');
    setFruta('');
  };

    return (


    <div>
        <form  onSubmit={handleSubmit}>
            <div>

                <h2>Fruta preferida</h2>
                <label>Nombre</label>
                <input type="text" placeholder="nombre" value={nombre} onChange={(e) => {
                    setNombre(e.target.value);
                    }}/>
                    <br />

                <label>Fruta</label>
                <input type="text" value={fruta} placeholder="fruta" onChange={(e) => {
                  setFruta(e.target.value)
                }}/>


                <button type="submit">Enviar Info</button>
            </div>
            {error && <p>{error}</p>}
        </form>

    </div>
    )
            }





export default Form;