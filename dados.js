const imoveis = [
    {
        id: 1,
        titulo: "Apartamento Aconchegante no Bairro da Velha",
        categoria: "medio-padrao",
        imagemPrincipal: "Fotos/ImovelTeste2.jpg",
        outrasFotos: [
            "Fotos/ImovelTeste2.jpg",
            "Fotos/Tania.png", 
            "Fotos/ImagemTeste1.jpg" 
        ],
        descricao: "Este encantador apartamento de 2 quartos oferece o equilíbrio perfeito entre conforto e conveniência. Localizado em uma rua tranquila no Bairro da Velha, fica a poucos minutos de escolas, supermercados e do centro da cidade. A sala de estar é espaçosa e bem iluminada, e a cozinha conta com móveis planejados. Ideal para casais ou pequenas famílias.",
        preco: "R$ 450.000,00",
        detalhes: {
            quartos: 2,
            banheiros: 1,
            vagas: 1,
            area: "78m²"
        }
    },
    {
        id: 2,
        titulo: "Casa Espaçosa com Área de Festas na Itoupava Central",
        categoria: "alto-padrao",
        imagemPrincipal: "Fotos/ImovelTeste2.jpg",
        outrasFotos: [
            "Fotos/ImovelTeste2.jpg"
        ],
        descricao: "Uma casa fantástica para quem valoriza espaço e lazer. Com 3 suítes, uma ampla área de festas com churrasqueira e piscina, esta propriedade é perfeita para receber amigos e familiares. O terreno é espaçoso e o acabamento é de alto padrão.",
        preco: "R$ 980.000,00",
        detalhes: {
            quartos: 3,
            banheiros: 4,
            vagas: 3,
            area: "220m²"
        }
    },
    {
        id: 3,
        titulo: "Terreno Amplo no Bairro Fortaleza",
        categoria: "terreno",
        imagemPrincipal: "Fotos/ImovelTeste2.jpg",
        outrasFotos: [],
        descricao: "Oportunidade única para construtores ou para quem deseja construir a casa dos sonhos. Terreno plano com 1.200m², localizado em área de grande valorização no Bairro Fortaleza. Próximo a comércios e com fácil acesso à Via Expressa.",
        preco: "R$ 600.000,00",
        detalhes: {
            quartos: 0,
            banheiros: 0,
            vagas: 0,
            area: "1.200m²"
        }
    },
    {
        id: 4,
        titulo: "Kitnet Mobiliada Próxima à FURB",
        categoria: "baixo-padrao",
        imagemPrincipal: "Fotos/ImovelTeste2.jpg",
        outrasFotos: [],
        descricao: "Ideal para estudantes e investidores, esta kitnet já vem mobiliada e está pronta para morar ou alugar. Localização estratégica, a 5 minutos a pé da universidade, com baixo custo de condomínio.",
        preco: "R$ 210.000,00",
        detalhes: {
            quartos: 1,
            banheiros: 1,
            vagas: 0,
            area: "35m²"
        }
    }
];