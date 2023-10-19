type ListItem = {
  id: string
  title: string
}

const projectTypes: ListItem[] = [
  {
    id: '1',
    title: 'Campanha de marketing'
  },
  {
    id: '2',
    title: 'Lançamento do projeto'
  },
  {
    id: '3',
    title: 'Nova funcionalidade'
  }
]

const urgencies: ListItem[] = [
  {
    id: '1',
    title: 'Tranquilo'
  },
  {
    id: '2',
    title: 'Apressado'
  },
  {
    id: '3',
    title: 'Urgente'
  }
]

const deadlines: ListItem[] = [
  {
    id: '1',
    title: '7 dias'
  },
  {
    id: '2',
    title: '15 dias'
  },
  {
    id: '3',
    title: '30 dias'
  }
]

const needs: ListItem[] = [
  {
    id: '1',
    title: 'Identidade',
  },
  {
    id: '2',
    title: 'Anúncios',
  },
  {
    id: '3',
    title: 'Desenvolvimento',
  }
]

export {
  ListItem, deadlines,
  needs, projectTypes,
  urgencies
};
