import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useUserActions } from "./hooks/api";
import { useUser } from "./UserContext";
import "./Login.css";

function Login() {
  const [user] = useUser();
  const { login } = useUserActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit} id="login">
      <label>
        <span>Email:</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </label>
      <label>
        <span>Contraseña:</span>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Entrar</button>
      <p>
        Todavía no tienes cuenta?
        <Link to="/signup">Regístrate</Link>
      </p>
    </form>
  );
}

export default Login;