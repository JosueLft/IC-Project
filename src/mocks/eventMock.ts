import Event, { Location } from '../models/Event';

// Mock de localizações
const mockLocations: Location[] = [
  {
    street: 'Rua da Igreja, 123',
    city: 'São Paulo',
    state: 'São Paulo',
    zip: '01234-567',
    country: 'Brasil'
  },
  {
    street: 'Avenida da Paz, 456',
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    zip: '12345-678',
    country: 'Brasil'
  },
  {
    street: 'Rua da Esperança, 789',
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
    zip: '23456-789',
    country: 'Brasil'
  },
  {
    street: 'Praça da Fé, 101',
    city: 'Salvador',
    state: 'Bahia',
    zip: '34567-890',
    country: 'Brasil'
  }
];

// Mock de eventos base
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Culto de Louvor e Adoração',
    date: '08/08',
    time: '20h',
    child: [
      'Dia 8 de Agosto, 20:00 - 22:00',
      'Local: Iespa Church',
      'Evento de Louvor e Adoração',
      'Venha participar conosco!'
    ],
    location: mockLocations[0],
    image: ''
  },
  {
    id: '2',
    title: 'Estudo Bíblico',
    date: '09/08',
    time: '19h',
    child: [
      'Dia 9 de Agosto, 19:00 - 21:00',
      'Local: Salão Principal',
      'Estudo do livro de João',
      'Traga sua Bíblia!'
    ],
    location: mockLocations[1],
    image: ''
  },
  {
    id: '3',
    title: 'Oração Matinal',
    date: '10/08',
    time: '06h',
    child: [
      'Dia 10 de Agosto, 06:00 - 07:00',
      'Local: Capela',
      'Momento de oração e comunhão',
      'Começe o dia com Deus!'
    ],
    location: mockLocations[2],
    image: ''
  },
  {
    id: '4',
    title: 'Reunião de Jovens',
    date: '11/08',
    time: '18h',
    child: [
      'Dia 11 de Agosto, 18:00 - 20:00',
      'Local: Salão dos Jovens',
      'Encontro especial para jovens',
      'Dinâmicas e reflexões!'
    ],
    location: mockLocations[3],
    image: ''
  },
  {
    id: '5',
    title: 'Escola Bíblica Dominical',
    date: '12/08',
    time: '09h',
    child: [
      'Dia 12 de Agosto, 09:00 - 10:30',
      'Local: Salas de Aula',
      'Classes para todas as idades',
      'Aprendizado e crescimento espiritual!'
    ],
    location: mockLocations[0],
    image: ''
  },
  {
    id: '6',
    title: 'Culto Evangelístico',
    date: '13/08',
    time: '19h30',
    child: [
      'Dia 13 de Agosto, 19:30 - 21:30',
      'Local: Auditório Principal',
      'Pregação especial',
      'Convide seus amigos!'
    ],
    location: mockLocations[1],
    image: ''
  },
  {
    id: '7',
    title: 'Retiro Espiritual',
    date: '14/08',
    time: '14h',
    child: [
      'Dia 14 de Agosto, 14:00 - 18:00',
      'Local: Chácara da Igreja',
      'Tarde de reflexão e comunhão',
      'Traga lanche para compartilhar!'
    ],
    location: mockLocations[2],
    image: ''
  }
];

// Função para gerar eventos diários com datas sequenciais a partir de hoje
export const generateDailyEvents = (): Event[] => {
  const dailyEvents = [];
  const today = new Date();
  
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    
    // Formatar data como DD/MM
    const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
    
    // Usa um mock base e altera a data
    const baseMock = mockEvents[i % mockEvents.length];
    const dailyEvent: Event = {
      ...baseMock,
      id: `event-daily-${i}`,
      date: formattedDate,
      child: [
        `Dia ${currentDate.getDate()} de ${currentDate.toLocaleDateString('pt-BR', { month: 'long' })}, ${baseMock.time}:00`,
        ...baseMock.child.slice(1)
      ]
    };
    
    dailyEvents.push(dailyEvent);
  }
  
  return dailyEvents;
};

// Função para obter um evento específico por ID
export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};

// Função para obter eventos por data
export const getEventsByDate = (date: string): Event[] => {
  return mockEvents.filter(event => event.date === date);
};

// Função para obter um evento aleatório
export const getRandomEvent = (): Event => {
  const randomIndex = Math.floor(Math.random() * mockEvents.length);
  return mockEvents[randomIndex];
};

// Exporta o primeiro item como default para testes rápidos
export default mockEvents[0];
