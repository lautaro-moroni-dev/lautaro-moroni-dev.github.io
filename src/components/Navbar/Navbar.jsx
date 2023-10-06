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
                <Box >Coder.</Box>
                <Spacer />
                <HStack zIndex="1" position={"fixed"} right={"1em"} >
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#">Inicio</Box>
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#">Sobre mi</Box>
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#">Servicios</Box>
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#">Portfolio</Box>
                    <Box as={'a'} bg="whiteAlpha.400" p="0.3em" borderRadius="1em" href="#">Contacto</Box>
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
            <MenuItem  as="a" href="#contacto" >
            Servicios
            </MenuItem>
            <MenuItem  as="a" href="#proyectos" >
            Proyeectos
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