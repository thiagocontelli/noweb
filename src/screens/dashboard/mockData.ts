type MockItem = {
  id: string,
  title: string,
  time: Date,
  status: string
}

const mockData = [
  {
    id: '1',
    title: 'Projeto 1',
    time: new Date(2023, 9, 19, 10),
    status: 'Finalizado'
  },
  {
    id: '2',
    title: 'Projeto 2',
    time: new Date(2023, 9, 19, 9),
    status: 'Finalizado'
  },
  {
    id: '3',
    title: 'Projeto 3',
    time: new Date(2023, 9, 19, 13),
    status: 'Finalizado'
  },
  {
    id: '4',
    title: 'Projeto 4',
    time: new Date(2023, 9, 19, 10),
    status: 'Finalizado'
  },
  {
    id: '5',
    title: 'Projeto 5',
    time: new Date(2023, 9, 19, 11),
    status: 'Adiado'
  },
  {
    id: '6',
    title: 'Projeto 6',
    time: new Date(2023, 9, 19, 7, 30),
    status: 'Finalizado'
  },
  {
    id: '7',
    title: 'Projeto 7',
    time: new Date(2023, 9, 19, 9),
    status: 'Cancelado'
  },
  {
    id: '8',
    title: 'Projeto 8',
    time: new Date(2023, 9, 19, 12),
    status: 'Finalizado'
  },
  {
    id: '9',
    title: 'Projeto 9',
    time: new Date(2023, 9, 19, 16),
    status: 'Finalizado'
  },
  {
    id: '10',
    title: 'Projeto 10',
    time: new Date(2023, 9, 19, 14),
    status: 'Adiado'
  },
]

export {
  MockItem,
  mockData
}