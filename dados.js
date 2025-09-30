const imoveis = [
    {
        id: 1,
        titulo: "APARTAMENTO COM 4 SUÍTES VISTA MAR EM MEIA PRAIA",
        categoria: "medio-padrao",
        imagemPrincipal: "Fotos/Imoveis/ID01/ImagemPrincipal01.jpeg",
        outrasFotos: [
            "Fotos/Imoveis/ID01/ImagemPrincipal01.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem1.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem2.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem3.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem4.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem5.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem6.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem7.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem8.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem9.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem10.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem11.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem12.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem13.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem14.jpeg",
            "Fotos/Imoveis/ID01/OutraImagem15.jpeg",
        ],
        descricao: "Apartamento luxuoso localizado na Avenida de Meia Praia. Conta com 04 suítes, sendo uma máster com hidromassagem, living integrado com sala ampla, cozinha e sacada com churrasqueira. O imóvel possui área privativa de 225m² e área total de 302m², oferecendo conforto e exclusividade. O empreendimento conta com portaria 24h, hall decorado e lazer completo para toda a família.",
        preco: "R$ 4.870.000,00",
        detalhes: {
            quartos: 4,
            banheiros: 5,
            vagas: 3,
            areaUtil: "225m²",  
            areaTotal: "302m²"
        },
       caracteristicas: {
    'Sobre o Imóvel': [
        'Portaria 24h',
        '03 elevadores',
        'Prédio com 32 andares',
        'Hall de entrada decorado',
        'Apenas alguns apartamentos por andar (alto padrão)'
    ],
    'Lazer': [
        'Salão de festas com espaço gourmet',
        'Sala de jogos com espaço gourmet',
        'Fire place',
        'Espaço zen',
        'Academia',
        'Espaço gourmet das piscinas',
        'Piscina infantil',
        'Piscina adulto com raia de 20m, prainha, spa e espelho d’água',
        'Sauna e ante sauna',
        'Espaço mulher com sala de massagem',
        'Brinquedoteca',
    ],
    'Estrutura Interna': [
        '04 suítes (01 máster com hidromassagem)',
        'Sala ampla',
        'Cozinha',
        'Sacada com churrasqueira',
        'Lavabo',
        'Área de serviço'
    ]
} 
    },
    {
        id: 2,
        titulo: "Casa Espaçosa com Área de Festas na Itoupava Central",
        categoria: "medio-padrao",
        imagemPrincipal: "Fotos/ImovelTeste2.jpg",
        outrasFotos: [
            "Fotos/ImovelTeste2.jpg"
        ],
        descricao: "Uma casa fantástica para quem valoriza espaço e lazer. Com 3 suítes, uma ampla área de festas com churrasqueira e piscina, esta propriedade é perfeita para receber amigos e familiares. O terreno é espaçoso e o acabamento é de alto padrão.",
        preco: "R$ 980.000,00",
        detalhes: 
        {
            quartos: 3,
            banheiros: 4,
            vagas: 3,
            areaUtil: "78m²",  
            areaTotal: "90m²"
        }
        ,
       caracteristicas: {
    'Sobre o Imóvel': [
        '3 vagas',
        '1 Elevador',
        'Apartamento no 9º andar',
        '9 Andares no prédio',
        '2 Apartamentos por andar'
    ],
    'Lazer': [
        'Salão de festa'
    ],
    'Estrutura Interna': [
        '3 Dormitórios, sendo 3 Suítes',
        '4 Banheiros',
        '1 Sala',
        '1 Closet',
        'Lavabo'
    ],
} 
    },
    {
        id: 3,
        titulo: "Terreno Amplo no Bairro Fortaleza",
        categoria: "medio-padrao",
        imagemPrincipal: "Fotos/ImovelTeste2.jpg",
        outrasFotos: [],
        descricao: "Oportunidade única para construtores ou para quem deseja construir a casa dos sonhos. Terreno plano com 1.200m², localizado em área de grande valorização no Bairro Fortaleza. Próximo a comércios e com fácil acesso à Via Expressa.",
        preco: "R$ 600.000,00",
        detalhes: {
            quartos: 0,
            banheiros: 0,
            vagas: 0,
            areaUtil: "78m²",  
            areaTotal: "90m²"
        },
       caracteristicas: {
    'Sobre o Imóvel': [
        '3 vagas',
        '1 Elevador',
        'Apartamento no 9º andar',
        '9 Andares no prédio',
        '2 Apartamentos por andar'
    ],
    'Lazer': [
        'Salão de festa'
    ],
    'Estrutura Interna': [
        '3 Dormitórios, sendo 3 Suítes',
        '4 Banheiros',
        '1 Sala',
        '1 Closet',
        'Lavabo'
    ],
} 
    },
    {
        id: 4,
        titulo: "Kitnet Mobiliada Próxima à FURB",
        categoria: "medio-padrao",
        imagemPrincipal: "Fotos/ImovelTeste2.jpg",
        outrasFotos: [],
        descricao: "Ideal para estudantes e investidores, esta kitnet já vem mobiliada e está pronta para morar ou alugar. Localização estratégica, a 5 minutos a pé da universidade, com baixo custo de condomínio.",
        preco: "R$ 210.000,00",
        detalhes: {
            quartos: 1,
            banheiros: 1,
            vagas: 0,
            areaUtil: "78m²",  
            areaTotal: "90m²"
        },
       caracteristicas: {
    'Sobre o Imóvel': [
        '3 vagas',
        '1 Elevador',
        'Apartamento no 9º andar',
        '9 Andares no prédio',
        '2 Apartamentos por andar'
    ],
    'Lazer': [
        'Salão de festa'
    ],
    'Estrutura Interna': [
        '3 Dormitórios, sendo 3 Suítes',
        '4 Banheiros',
        '1 Sala',
        '1 Closet',
        'Lavabo'
    ]
} 
    }
];