import React from 'react'
import ReactDOM from 'react-dom/client'

import { Navbar } from './components/Navbar/Navbar.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { SobreMi } from './components/SobreMi/SobreMi.jsx'
import { ChakraProvider,Box,Container,Flex} from '@chakra-ui/react'
import { Contacto } from './components/Contacto/Contacto.jsx'
import { Servicios } from './components/Servicios/Servicios.jsx'
import { Proyectos } from './components/Proyectos/Proyectos.jsx'
import './index.css'
import { extendTheme } from '@chakra-ui/react'
  

const colors = {
  colores: {
    naranja: '#F24607',
    negro: {
      100:'#292A2A',
      900:'#1F1F20'
    },
    blanco:'#fefefe',
    gris:"#b4b4b5"
  },
}
const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <Container id="hero" as={"header"}  minW={"100%"}  bgImage="url('mifoto.jpg')" bgColor="#cccccc"  backgroundRepeat="no-repeat" position="relative" bgPosition= "center" bgSize={["cover","cover","cover"]}>
        <Navbar />
        <Hero/>
      </Container> 
      <Container  as={"main"}  maxWidth={'container.2xl'} bgColor="colores.negro.100">
      <Flex as={"section"}  flexWrap={["wrap",'wrap','nowrap']} justify={"center"} py="1em" minH={"100vh"} alignItems={"center"} color="white">
        <SobreMi/>
      </Flex>
      </Container>
      <Servicios  />
      <Proyectos/>
        <Contacto/>
      <Box bgColor="colores.negro.100" color="colores.gris" p="1em">hola</Box>
    </ChakraProvider>    
  </React.StrictMode>,
)
