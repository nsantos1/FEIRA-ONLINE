const produtos = [
  // --- Frutas e Verduras ---
  {
    id: 1,
    nome: "Banana Prata (Kg)",
    preco: 9.9,
    imagem: "https://images.unsplash.com/photo-1587334206596-c0f9f7dccbe6?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Frutas e Verduras",
  },
  {
    id: 2,
    nome: "Maçã Gala (Kg)",
    preco: 11.9,
    imagem: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Frutas e Verduras",
  },
  {
    id: 3,
    nome: "Cenoura (Kg)",
    preco: 4.5,
    imagem: "https://cdn.pixabay.com/photo/2016/08/03/01/09/carrot-1565597_1280.jpg",
    categoria: "Frutas e Verduras",
  },
  {
    id: 4,
    nome: "Tomate Italiano (Kg)",
    preco: 7.8,
    imagem: "https://cdn.pixabay.com/photo/2016/10/26/20/08/vegetables-1772527_1280.jpg",
    categoria: "Frutas e Verduras",
  },
  {
    id: 5,
    nome: "Alface Crespa (Unidade)",
    preco: 3.5,
    imagem: "https://images.unsplash.com/photo-1515356956468-873dd257f911?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Frutas e Verduras",
  },
  {
    id: 6,
    nome: "Batata Inglesa (Kg)",
    preco: 5.2,
    imagem: "https://cdn.pixabay.com/photo/2016/08/11/08/37/potatoes-1585057_1280.jpg",
    categoria: "Frutas e Verduras",
  },
  {
    id: 51,
    nome: "Limão Tahiti (Kg)",
    preco: 4.2,
    imagem: "https://images.unsplash.com/photo-1615734333404-69f44d04d26f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Frutas e Verduras",
  },
  {
    id: 52,
    nome: "Abacate (Unidade)",
    preco: 5.5,
    imagem: "https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Frutas e Verduras",
  },

  // --- Bebê e Gravidez ---
  {
    id: 7,
    nome: "Papinha de Maçã Orgânica (120g)",
    preco: 8.9,
    imagem: "https://images.unsplash.com/photo-1600984177310-c86c8f8fa9c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFwaW5oYSUyMGRlJTIwYmViZXxlbnwwfHwwfHx8MA%3D%3D",
    categoria: "Bebê e Gravidez",
  },
  {
    id: 8,
    nome: "Fralda Descartável (Pacote M)",
    preco: 35.5,
    imagem: "https://images.unsplash.com/photo-1695065876947-0e899ca10336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyYWxkYXxlbnwwfHwwfHx8MA%3D%3D",
    categoria: "Bebê e Gravidez",
  },
  {
    id: 9,
    nome: "Lenços Umedecidos (48 Unidades)",
    preco: 12.0,
    imagem: "https://images.unsplash.com/photo-1633265484557-e298493cb162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuJUMzJUE3byUyMHVtZWRlY2lkb3xlbnwwfHwwfHx8MA%3D%3D",
    categoria: "Bebê e Gravidez",
  },
  {
    id: 53,
    nome: "Creme para Assaduras (45g)",
    preco: 25.0,
    imagem: "https://plus.unsplash.com/premium_photo-1674949802338-f94005eb5b0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JlbWV8ZW58MHx8MHx8fDA%3D",
    categoria: "Bebê e Gravidez",
  },

  // --- Bebidas ---
  {
    id: 10,
    nome: "Suco de Laranja Natural (1L)",
    preco: 12.5,
    imagem: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Bebidas",
  },
  {
    id: 11,
    nome: "Água de Coco (330ml)",
    preco: 6.8,
    imagem: "https://images.unsplash.com/flagged/photo-1560505761-b46fb3d231bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JUMzJUExZ3VhJTIwZGUlMjBjb2NvfGVufDB8fDB8fHww",
    categoria: "Bebidas",
  },
  {
    id: 54,
    nome: "Kombucha de Gengibre (350ml)",
    preco: 15.9,
    imagem: "https://images.unsplash.com/photo-1716142840686-4c796b60ca35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a29tYnVjaGElMjBkZSUyMGdlbmdpYnJlfGVufDB8fDB8fHww",
    categoria: "Bebidas",
  },

  // --- Carnes e Frutos do Mar ---
  {
    id: 13,
    nome: "Filé de Salmão (500g)",
    preco: 45.0,
    imagem: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Carnes e Frutos do Mar",
  },
  {
    id: 14,
    nome: "Patinho Moído (500g)",
    preco: 28.9,
    imagem: "https://plus.unsplash.com/premium_photo-1670357599582-de7232e949a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FybmUlMjBtbyVDMyVBRGRhfGVufDB8fDB8fHww",
    categoria: "Carnes e Frutos do Mar",
  },
  {
    id: 55,
    nome: "Ovos Orgânicos (Dúzia)",
    preco: 18.0,
    imagem: "https://plus.unsplash.com/premium_photo-1676686125407-227f3d352df8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3Zvc3xlbnwwfHwwfHx8MA%3D%3D",
    categoria: "Carnes e Frutos do Mar",
  },

  // --- Biscoitos e Snacks ---
  {
    id: 56,
    nome: "Biscoito de Arroz Integral (150g)",
    preco: 9.5,
    imagem: "https://plus.unsplash.com/premium_photo-1726072375899-434c539ac731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlzY29pdG8lMjBkZSUyMGFycm96fGVufDB8fDB8fHww",
    categoria: "Biscoitos e Snacks",
  },
  {
    id: 57,
    nome: "Chips de Mandioca (45g)",
    preco: 7.2,
    imagem: "https://images.unsplash.com/photo-1740993384870-0793845268e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpcHMlMjBkZSUyMG1hbmRpb2NhfGVufDB8fDB8fHww",
    categoria: "Biscoitos e Snacks",
  },
  
  // --- Pães e Padaria ---
  {
    id: 18,
    nome: "Pão Francês (Unidade)",
    preco: 1.2,
    imagem: "https://plus.unsplash.com/premium_photo-1664640733898-d5c3f71f44e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cCVDMyVBM298ZW58MHx8MHx8fDA%3D",
    categoria: "Pães e Padaria",
  },
  {
    id: 19,
    nome: "Bolo de Chocolate (Fatia)",
    preco: 8.5,
    imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Pães e Padaria",
  },
  {
    id: 58,
    nome: "Pão de Forma Integral (500g)",
    preco: 12.0,
    imagem: "https://images.unsplash.com/photo-1593285702005-ccc93dfe7cfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cCVDMyVBM28lMjBkZSUyMGZvcm1hJTIwaW50ZWdyYWx8ZW58MHx8MHx8fDA%3D",
    categoria: "Pães e Padaria",
  },

  // --- Café da Manhã e Laticínios ---
  {
    id: 20,
    nome: "Queijo Minas Frescal (Kg)",
    preco: 55.0,
    imagem: "https://images.unsplash.com/photo-1733210437933-6151fbe2818e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHF1ZWlqbyUyMG1pbmFzJTIwZnJlc2NhbHxlbnwwfHwwfHx8MA%3D%3D",
    categoria: "Café da Manhã e Laticínios",
  },
  {
    id: 21,
    nome: "Leite Integral (1L)",
    preco: 5.99,
    imagem: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=1887&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Café da Manhã e Laticínios",
  },
  {
    id: 59,
    nome: "Manteiga com Sal (200g)",
    preco: 11.5,
    imagem: "https://plus.unsplash.com/premium_photo-1700440539073-c769891a9e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFudGVpZ2F8ZW58MHx8MHx8fDA%3D",
    categoria: "Café da Manhã e Laticínios",
  },
  {
    id: 60,
    nome: "Iogurte Natural (170g)",
    preco: 4.8,
    imagem: "https://plus.unsplash.com/premium_photo-1713719213311-044ae870a7ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlvZ3VydGV8ZW58MHx8MHx8fDA%3D",
    categoria: "Café da Manhã e Laticínios",
  },

  // --- Congelados ---
  {
    id: 61,
    nome: "Pão de Queijo Congelado (400g)",
    preco: 15.0,
    imagem: "https://cdn.pixabay.com/photo/2018/12/08/01/11/cheese-bread-3862706_640.jpg",
    categoria: "Congelados",
  },
  {
    id: 62,
    nome: "Lasanha Bolonhesa Congelada (600g)",
    preco: 28.9,
    imagem: "https://plus.unsplash.com/premium_photo-1671559021023-3da68c12aeed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFzYW5oYXxlbnwwfHwwfHx8MA%3D%3D",
    categoria: "Congelados",
  },
  
  // --- Mercearia e Básicos ---
  {
    id: 22,
    nome: "Arroz Agulhinha (1Kg)",
    preco: 8.0,
    imagem: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJyb3p8ZW58MHx8MHx8fDA%3D",
    categoria: "Mercearia e Básicos",
  },
  {
    id: 23,
    nome: "Feijão Carioca (1Kg)",
    preco: 9.5,
    imagem: "https://plus.unsplash.com/premium_photo-1726072397905-f398308c564e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVpaiVDMyVBM28lMjBjYXJpb2NhfGVufDB8fDB8fHww",
    categoria: "Mercearia e Básicos",
  },
  {
    id: 63,
    nome: "Azeite Extra Virgem (500ml)",
    preco: 39.9,
    imagem: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXplaXRlfGVufDB8fDB8fHww",
    categoria: "Mercearia e Básicos",
  },
  
  // --- Saúde ---
  {
    id: 64,
    nome: "Mel Orgânico (250g)",
    preco: 22.0,
    imagem: "https://plus.unsplash.com/premium_photo-1723507365758-be432e8460ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVsJTIwb3JnYW5pY298ZW58MHx8MHx8fDA%3D",
    categoria: "Saúde",
  },
  {
    id: 65,
    nome: "Sabonete Antisséptico",
    preco: 5.5,
    imagem: "https://plus.unsplash.com/premium_photo-1677776518705-70b21cbc4d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Fib25ldGV8ZW58MHx8MHx8fDA%3D",
    categoria: "Saúde",
  },

  // --- Produtos para o Lar ---
  {
    id: 66,
    nome: "Detergente Neutro (500ml)",
    preco: 4.0,
    imagem: "https://cdn.pixabay.com/photo/2017/06/10/12/08/cosmetics-2389772_640.jpg",
    categoria: "Produtos para o Lar",
  },
  {
    id: 67,
    nome: "Limpador Multiuso (500ml)",
    preco: 7.5,
    imagem: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV0ZXJnZW50ZXxlbnwwfHwwfHx8MA%3D%3D",
    categoria: "Produtos para o Lar",
  }
];

export default produtos;