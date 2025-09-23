document.addEventListener('DOMContentLoaded', function() 
{
    const titulos = {
        'terreno': 'Terrenos',
        'baixo-padrao': 'Imóveis de Baixo Padrão',
        'medio-padrao': 'Imóveis de Médio Padrão',
        'alto-padrao': 'Imóveis de Alto Padrão'
    };

    const urlParams = new URLSearchParams(window.location.search);
    const tipoCategoria = urlParams.get('tipo');

    const tituloPagina = document.getElementById('titulo-categoria');
    const tituloAba = document.querySelector('title');
    if (titulos[tipoCategoria]) {
        tituloPagina.textContent = titulos[tipoCategoria];
        tituloAba.textContent = titulos[tipoCategoria];
    } else {
        tituloPagina.textContent = "Categoria não encontrada";
    }

    const imoveisFiltrados = imoveis.filter(imovel => imovel.categoria === tipoCategoria);

    const gridContainer = document.getElementById('grid-imoveis-categoria');

    if (imoveisFiltrados.length > 0) {
        imoveisFiltrados.forEach(imovel => {
            const card = document.createElement('div');
            card.className = 'imovel-grid-card';
            
            card.innerHTML = `
                <a href="imovel.html?id=${imovel.id}">
                    <img src="${imovel.imagemPrincipal}" alt="${imovel.titulo}">
                    <h3>${imovel.titulo}</h3>
                </a>
            `;

            gridContainer.appendChild(card);
        });
    } else {
        gridContainer.innerHTML = '<p class="aviso-nenhum-imovel">Nenhum imóvel encontrado nesta categoria no momento.</p>';
    }
});