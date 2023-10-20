type Chat = {
  id: string
  name: string
  lastMessage: string
  unreadMessagesAmount: number
  image: string
}

const lastMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'

const chats: Chat[] = [
  {
    id: '1',
    lastMessage,
    name: 'João da Silva',
    unreadMessagesAmount: 2,
    image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'
  },
  {
    id: '2',
    lastMessage,
    name: 'Maria da Silva',
    unreadMessagesAmount: 5,
    image: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg'
  },
  {
    id: '3',
    lastMessage,
    name: 'Carlos Araújo',
    unreadMessagesAmount: 3,
    image: 'https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg'
  },
  {
    id: '4',
    lastMessage,
    name: 'Paula Ferreira',
    unreadMessagesAmount: 1,
    image: 'https://padraomangueiras.com.br/wp-content/uploads/2019/01/person2.jpg'
  },
  {
    id: '5',
    lastMessage,
    name: 'Joana Silva',
    unreadMessagesAmount: 0,
    image: 'https://st.depositphotos.com/1770836/1372/i/450/depositphotos_13720689-stock-photo-young-businesswoman.jpg'
  },
  {
    id: '6',
    lastMessage,
    name: 'Pedro Moreira',
    unreadMessagesAmount: 0,
    image: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg'
  },
  {
    id: '7',
    lastMessage,
    name: 'Ricardo Alves',
    unreadMessagesAmount: 0,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '8',
    lastMessage,
    name: 'Sasha Almeida',
    unreadMessagesAmount: 0,
    image: 'https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg'
  },
  {
    id: '9',
    lastMessage,
    name: 'Roberto Jardim',
    unreadMessagesAmount: 0,
    image: 'https://st.focusedcollection.com/14026668/i/1800/focused_181903512-stock-photo-portrait-smiling-young-man-home.jpg'
  },
  {
    id: '10',
    lastMessage,
    name: 'Alana Agostim',
    unreadMessagesAmount: 0,
    image: 'https://static.demilked.com/wp-content/uploads/2019/04/5cb6d34f775c2-stock-models-share-weirdest-stories-photo-use-102-5cb5c725bc378__700.jpg'
  },
]

export {
  Chat,
  chats
}