const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {

        // Identifica a etapa que está aparecendo
        const atual = document.querySelector('.passo.ativo');

        // Identifica o número da próxima etapa
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Procura a próxima etapa no HTML
        const proximo = document.getElementById(proximoPasso);

        // Verifica se a etapa existe
        if (atual && proximo) {
            atual.classList.remove('ativo');
            proximo.classList.add('ativo');
        } else {
            console.error('Etapa não encontrada:', proximoPasso);
        }
    });
});
