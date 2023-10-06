import React from 'react';
import { Flex,HStack,Spacer,Box} from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton
  } from '@chakra-ui/react'
  import {
    HamburgerIcon,
    AddIcon,
    EditIcon,
    RepeatIcon,
    ExternalLinkIcon} from '@chakra-ui/icons'


const Navbar = () => {
    return(
        <>
        
        <HStack color="white" display={["none",'none',"flex"]} spacing='1em' p="1em">
                <Box fontWeight={"bold"} fontSize={"2em"}>Cod<Box as="span" color="colores.naranja">e</Box>r.</Box>
                <Spacer />
                <HStack zIndex="1" position={"fixed"} right={"1em"} >
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#hero">Inicio</Box>
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#sobremi">Sobre mi</Box>
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#servicios">Servicios</Box>
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#proyectos">Proyectos</Box>
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#contacto">Contacto</Box>
                </HStack>
        </HStack>
        <HStack  zIndex={"100"} display={["flex",'flex',"none"]} justifyContent={"end"} spacing='1em' p="1em">
        <Menu >
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
            colorScheme='orange'
        />
        <MenuList>
            <MenuItem as="a" href="#hero">
            Inicio
            </MenuItem>
            <MenuItem as="a" href="#sobremi">
            Sobre mi
            </MenuItem>
            <MenuItem  as="a" href="#servicios" >
            Servicios
            </MenuItem>
            <MenuItem  as="a" href="#proyectos" >
            Proyectos
            </MenuItem>
            <MenuItem  as="a" href="#contacto" >
            Contacto
            </MenuItem>

        </MenuList>
        </Menu>
        </HStack>
  
        
        </>
    )
}

export { Navbar }