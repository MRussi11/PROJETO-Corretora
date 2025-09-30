document.addEventListener('DOMContentLoaded', function() 
{
    const urlParams = new URLSearchParams(window.location.search);
    const imovelId = parseInt(urlParams.get('id'));

    const imovel = imoveis.find(item => item.id === imovelId);

    if (imovel) 
        {
        document.title = imovel.titulo;

        document.getElementById('imovel-titulo').textContent = imovel.titulo;
        document.getElementById('imovel-imagem-principal').src = imovel.imagemPrincipal;
        document.getElementById('imovel-imagem-principal').alt = imovel.titulo;
        document.getElementById('imovel-descricao').textContent = imovel.descricao;
        document.getElementById('imovel-preco').textContent = imovel.preco;

        document.getElementById('imovel-quartos').textContent = imovel.detalhes.quartos;
        document.getElementById('imovel-banheiros').textContent = imovel.detalhes.banheiros;
        document.getElementById('imovel-vagas').textContent = imovel.detalhes.vagas;
        document.getElementById('imovel-area-util').textContent = imovel.detalhes.areaUtil;   
        document.getElementById('imovel-area-total').textContent = imovel.detalhes.areaTotal; 

        const galeria = document.getElementById('imovel-galeria');
        imovel.outrasFotos.forEach(fotoSrc => {
            let img = document.createElement('img');
            img.src = fotoSrc;
            img.className = 'galeria-miniatura';
            img.addEventListener('click', () => 
                {
                document.getElementById('imovel-imagem-principal').src = fotoSrc;
            });
            galeria.appendChild(img);
        });
     const caracteristicasGrid = document.getElementById('imovel-caracteristicas-grid');
        if (imovel.caracteristicas) {
            for (const categoria in imovel.caracteristicas) {
                const coluna = document.createElement('div');
                coluna.className = 'caracteristica-coluna';

                let itensHtml = '';
                imovel.caracteristicas[categoria].forEach(item => {
                    itensHtml += `<li>${item}</li>`;
                });

                coluna.innerHTML = `
                    <h4>${categoria}</h4>
                    <ul>${itensHtml}</ul>
                `;
                caracteristicasGrid.appendChild(coluna);
            }
        }   
    } else {
        const container = document.querySelector('.imovel-detalhes-container');
        container.innerHTML = "<h1>Imóvel não encontrado!</h1><p>O imóvel que você está procurando não existe ou foi removido.</p>";
    }
});