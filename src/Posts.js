export default function Posts() {
    const posts = [
        {
            user: 'meowed',
            link: 'img/meowed.svg',
            following: 'respondeai',
            likes: 'outras 101.523 pessoas',
            content: 'img/gato-telefone.svg',
        },
        {
            user: 'barked',
            link: 'img/barked.svg',
            following: 'adorable_animals',
            likes: 'outras 99.159 pessoas',
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
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="img/respondeai.svg" />
                            <div class="texto">
                                Curtido por <strong>{post.following}</strong> e{' '}
                                <strong>{post.likes}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}