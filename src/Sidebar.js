
import Usuario from "./Usuario";

export default function Sidebar() {
  const sobre = "Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"
  const copi = "© 2021 INSTAGRAM DO FACEBOOK"

  const sugestoes = [
    {
      user: 'bad.vibes.memes',
      razao: 'Segue você',
      link: 'img/bad.vibes.memes.svg',
    },
    {
      user: 'chibirdart',
      razao: 'Segue você',
      link: 'img/chibirdart.svg',
    },
    {
      user: 'razoesparaacreditar',
      razao: 'Novo no Instagram',
      link: 'img/razoesparaacreditar.svg',
    },
    {
      user: 'adorable_animals',
      razao: 'Segue você',
      link: 'img/adorable_animals.svg',
    },
    {
      user: 'smallcutecats',
      razao: 'Segue você',
      link: 'img/smallcutecats.svg',
    },
  ];

  return (
    <div class="sidebar">
      <Usuario/>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestoes.map((sugestao) => (
          <div class="sugestao">
            <div class="usuario">
              <img src={sugestao.link} />
              <div class="texto">
                <div class="nome">{sugestao.user}</div>
                <div class="razao">{sugestao.razao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        ))}
      </div>

      <div class="links">
        {sobre}
      </div>

      <div class="copyright">
        {copi}
      </div>
    </div>
  )
}