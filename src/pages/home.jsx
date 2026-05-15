import Cookies from 'js-cookie';

export default function Home() {
    const valor = Cookies.get("nome")
    if (valor) {
        return
    } else {
        window.location.href("/")
    }
    return (
        <div>
            <h1>olá, {valor}</h1>
        </div>
    )
}