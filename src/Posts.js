import React from 'react';
import './App.css';


export default function Posts() {
    
    const vermelho = event => {
        event.currentTarget.classList.toggle('bg-salmon');
    };
    const preto = event => {
        event.currentTarget.classList.toggle('pretin');
    };
    const [contador, setContador] = React.useState(0);


    const posts = [
        {
            user: 'meowed',
            link: 'img/meowed.svg',
            following: 'respondeai',
            likes: 'outras 101.52' ,
            content: 'img/gato-telefone.svg',
        },
        {
            user: 'barked',
            link: 'img/barked.svg',
            following: 'adorable_animals',
            likes: 'outras 99.15',
            content: 'img/dog.svg',
        },
    ];
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
                                <ion-icon onClick={() => setContador(contador + 1)} name="heart-outline" ></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon onClick={preto} name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="img/respondeai.svg" />
                            <div class="texto">
                                Curtido por <strong>{post.following}</strong> e{' '}
                                <strong>{post.likes}{contador} pessoas.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}