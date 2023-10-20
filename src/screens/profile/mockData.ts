type MenuItem = {
  id: string
  title: string
  icon: string
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    icon: 'edit-fill',
    title: 'Editar perfil'
  },
  {
    id: '2',
    icon: 'settings-2-fill',
    title: 'Configurações'
  },
  {
    id: '3',
    icon: 'question-fill',
    title: 'Ajuda'
  }
]

export {
  MenuItem,
  menuItems
}