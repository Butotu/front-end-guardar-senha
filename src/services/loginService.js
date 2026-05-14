const api = "http://localhost:3000"

export async function login(usuario, senha) {
    const res = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome: usuario, senha })
    })

    const data = await res.json()
    console.log("Status do login:", data.verdadeiro);

    if (!res.ok) {
        throw new Error(data.valor || "Erro no login");
    }

    if (data.verdadeiro) {
        window.location.href = "/pages/home";
    }

    return data;
}