export default function Stories() {
    const stories = [
        { user: '9gag', link: `img/9gag.svg` },
        { user: 'meowed', link: `img/meowed.svg` },
        { user: 'barked', link: `img/barked.svg` },
        { user: 'nathanwpylestrangeplanet',link: `img/nathanwpylestrangeplanet.svg`,},
        { user: 'wawawicomics', link: `img/wawawicomics.svg` },
        { user: 'respondeai', link: `img/respondeai.svg` },
        { user: 'filomoderna', link: `img/filomoderna.svg` },
        { user: 'memeriagourmet', link: `img/memeriagourmet.svg` },
    ];

    return (
        <div class="stories">
            {stories.map((story) => (
                <div class="story">
                    <div class="imagem">
                        <img src={story.link} />
                    </div>
                    <div class="usuario">{story.user}</div>
                </div>
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}