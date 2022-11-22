// estrutura = '';
// for (let i = 0; i < 10; i++){
//     estrutura += `<li> linha ${i}/100 </li>`;
// }
// var est = `
//     <ul>
//     ${estrutura}
//     </ul>
// `;
// document.querySelector('body').innerHTML = est;

let post = {
    title: 'Título da minha página',
    excerpt: 'Introdução do meu texto',
    body: 'Conteúdo do meu texto',
    tags: [
        'Tag 1',
        'Tag 2',
        'Tag 3',
        'Tag 4'
    ]
}

let {
    title,
    excerpt,
    body,
    tags
} = post;

var postHtml = `
    <article>
        <header>
            <h1>${title}</h1>
        </header>
        <section>
            <div>${excerpt}</div><br>
            <div>${body}</div><br>
        </section>
        <footer>
            <ul>
                ${tags.map(tag => `<li>${tag}</li>`).join(`\n`)}
            </ul>
        </footer>
    </article>
`;

document.querySelector('body').innerHTML = postHtml;