import { useState } from "react";
import api from "../api";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        await api.post("/auth/register", { username, password });
        alert("Usuario registrado con éxito");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <input placeholder="Usuario" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
            <button type="submit">Registrar</button>
        </form>
    );
}
