import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { login } from "./services/loginService";
import Home from "./pages/home";

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  async function loginFront() {
    try {
      await login(usuario, senha);
    } catch (error) {
      console.error("Erro ao logar:", error);
      alert("Usuário ou senha incorretos!");
    }
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "20px",
              height: "100vh"
            }}>
              <h1 style={{ color: "#222", fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
                Gerenciador de Senhas
              </h1>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
                <input
                  type="text"
                  placeholder="Usuário"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc", outline: "none" }}
                />
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Senha"
                  style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc", outline: "none" }}
                />
                <button
                  onClick={loginFront}
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Entrar
                </button>
              </div>
            </div>
          }
        />
        <Route path="/pages/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;