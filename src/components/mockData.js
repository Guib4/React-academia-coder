const mockItems = [
    {
      id: 1,
      title: "Produto A",
      description: "Descrição breve do Produto A",
      price: 100.0,
      pictureUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Produto B",
      description: "Descrição breve do Produto B",
      price: 200.0,
      pictureUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Produto C",
      description: "Descrição breve do Produto C",
      price: 300.0,
      pictureUrl: "https://via.placeholder.com/150",
    },
  ];
  
  export const fetchMockItems = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockItems);
      }, 2000); // Simula um atraso de 2 segundos
    });