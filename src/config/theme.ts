import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#EFFCF4',
      600: '#1BD15D',
      800: '#088435'
    }
  },
  fontConfig: {
    Poppins: {
      400: {
        normal: 'Poppins_400Regular'
      },
      500: {
        normal: 'Poppins_500Medium'
      },
      600: {
        normal: 'Poppins_600SemiBold'
      }
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins'
  }
})