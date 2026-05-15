
const api = "http://localhost:3000"

export async function login(usuario, senha) {
    const res = await fetch(`${api}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: usuario, senha })
    });

    const data = await res.json();

    if (!res.ok || !data.verdadeiro) {
        throw new Error(data.valor || "Usuário ou senha incorretos");
    }
    return data;
}