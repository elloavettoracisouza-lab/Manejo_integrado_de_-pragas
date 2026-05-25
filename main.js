function mostrarSecao(id) {
    // Esconde todas as seções
    const secoes = document.querySelectorAll('main section');
    secoes.forEach(s => s.style.display = 'none');

    // Mostra apenas a seção clicada
    document.getElementById(id).style.display = 'block';
}
