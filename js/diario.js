// Função para verificar se o usuário está logado
function usuarioEstaLogado() {
    return localStorage.getItem('loggedInUser') !== null;
}

// Função para fazer logout
function fazerLogout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

// Função para salvar uma entrada no localStorage do usuário logado
function salvarEntrada(titulo, conteudo) {
    if (usuarioEstaLogado()) {
        var usuario = JSON.parse(localStorage.getItem('loggedInUser'));

        // Gera um identificador único para a entrada
        var timestamp = Date.now();
        var chave = 'entrada_' + usuario.id + '_' + timestamp;

        var entrada = {
            titulo: titulo,
            conteudo: conteudo
        };

        localStorage.setItem(chave, JSON.stringify(entrada));

        mostrarEntradas(usuario.id); // Atualiza a lista de entradas exibida no frontend para o usuário atual
    } else {
        alert('Você precisa estar logado para salvar entradas.');
    }
}

// Função para mostrar todas as entradas salvas para o usuário logado
function mostrarEntradas(userId) {
    var listaEntradas = document.getElementById('entries-list');
    listaEntradas.innerHTML = '';

    for (var chave in localStorage) {
        if (chave.startsWith('entrada_' + userId)) {
            var entrada = JSON.parse(localStorage.getItem(chave));

            var li = document.createElement('li');
            li.textContent = entrada.titulo + ': ' + entrada.conteudo;
            listaEntradas.appendChild(li);
        }
    }
}

// Ao carregar a página
window.onload = function() {
    const logoutButton = document.getElementById('logout');
    if (usuarioEstaLogado()) {
        var usuario = JSON.parse(localStorage.getItem('loggedInUser'));
        logoutButton.textContent = 'Deslogar';
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            fazerLogout();
        });

        // Carrega as entradas do usuário logado
        mostrarEntradas(usuario.id);
    } else {
        logoutButton.textContent = 'Logar';
        logoutButton.href = 'login.html';
    }
};

// Event listener para o formulário de entrada
document.getElementById('entry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var titulo = document.getElementById('entry-title').value.trim();
    var conteudo = document.getElementById('entry-content').value.trim();

    if (titulo === '' || conteudo === '') {
        alert('Por favor, preencha o título e o conteúdo da entrada.');
        return;
    }

    salvarEntrada(titulo, conteudo);

    document.getElementById('entry-title').value = '';
    document.getElementById('entry-content').value = '';
});

// Event listener para o botão de salvar arquivo .txt
document.getElementById('saveEntry').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (!file) {
        alert('Por favor, selecione um arquivo .txt para salvar.');
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
        var fileName = file.name.replace('.txt', '');
        var fileContent = e.target.result;

        salvarEntrada(fileName, fileContent);
    };

    reader.readAsText(file);
});
