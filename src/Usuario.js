import React from "react"
export default function Usuario() {

    const fotoPadrao = "img/catanacomics.svg"

    const [nome, setNome] = React.useState("catanacomics")
    const [foto, setFoto] = React.useState(fotoPadrao)

    function inserirNome(){
        const nomePrompt = prompt("Qual é o seu usuario?")
        setNome(nomePrompt)
    }

    function inserirFoto(){
        const fotoPrompt = prompt("Insira o link de uma foto aqui!")
        setFoto(fotoPrompt)
    }
    return (
        <div class="usuario">
            <img onClick={inserirFoto} src= {foto}/>
            <div class="texto">
                <strong>{nome}</strong>
                <span>
                    {nome}
                    <ion-icon onClick={inserirNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}