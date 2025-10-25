import { useState } from "react";
import api from "../api";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await api.post("/auth/login", { username, password });
        localStorage.setItem("token", res.data.token);
        alert("Inicio de sesión exitoso");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <input placeholder="Usuario" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
            <button type="submit">Entrar</button>
        </form>
    );
}
