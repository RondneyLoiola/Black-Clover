const h2 = document.querySelector('#name');
const p = document.querySelector('#description');
const persoInfo = document.querySelector('.perso-info');
const persoImg = document.querySelector('.perso img');
const icons = document.querySelectorAll('.icon-box');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Remove active de todos
        icons.forEach(item => item.classList.remove('active'));
        // Adiciona no atual
        icon.classList.add('active');

        // Pega o índice do data-index
        const index = icon.dataset.index;
        const perso = data[index];

        // Atualiza tudo de uma vez
        h2.textContent = perso.name;
        p.textContent = perso.description;
        persoInfo.src = perso.info;
        persoImg.src = perso.img;
    });
});