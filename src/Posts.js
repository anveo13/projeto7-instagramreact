import React from 'react';
import './App.css';


export default function Posts() {


    const preto = event => {
        event.currentTarget.classList.toggle('pretin');
    }


    /* const [contador, setContador] = React.useState(0);
    {() => setContador(contador + 1)}
*/

    const posts = [
        {
            user: 'meowed',
            link: 'img/meowed.svg',
            following: 'respondeai',
            likes: 'outras 101.522',
            content: 'img/gato-telefone.svg',
        },
        {
            user: 'barked',
            link: 'img/barked.svg',
            following: 'adorable_animals',
            likes: 'outras 99.152',
            content: 'img/dog.svg',
        },
    ];
        const [showElement, setShowElement] = React.useState(false)
        const [nomeNovo, setVermelinho] = React.useState('heart-outline');
    function CurtirPost() {
        let vermelhinho = nomeNovo 
        if (showElement) {
            setShowElement(false)
            vermelhinho = 'heart-outline'
        } else {
            setShowElement(true)
            vermelhinho = 'heart'
        }
        setVermelinho(vermelhinho)
    }

    const [showElemen2t, setShowElement2] = React.useState(false)
        const [nomeNovo2, setVermelinho2] = React.useState("bookmark-outline");
    function CurtirPoste() {
        let preto = nomeNovo2 
        if (showElement) {
            setShowElement2(false)
            preto = 'bookmark-outline'
        } else {
            setShowElement2(true)
            preto = 'bookmark'
        }
        setVermelinho2(preto)
    }
    return (
        <div class="posts">
            {posts.map((post) => (
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={post.link} />
                            {post.user}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={post.content} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div class='container'>
                                <ion-icon  onClick={CurtirPost} class={nomeNovo} name={nomeNovo} ></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon onClick={CurtirPoste} class={nomeNovo2} name={nomeNovo2}></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="img/respondeai.svg" />
                            <div class="texto">
                                Curtido por <strong>{post.following}</strong> e{' '}
                                <strong>{post.likes} pessoas.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}