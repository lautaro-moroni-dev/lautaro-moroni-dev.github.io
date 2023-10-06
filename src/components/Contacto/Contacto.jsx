import { Heading,Input,Stack,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,HStack,Flex,Box,Button, Container, Icon, VStack} from '@chakra-ui/react';
import React from 'react';

import { FaFacebookF,FaGithub } from "react-icons/fa6";
import { BiLogoGmail} from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";

const Contacto = () => {
    
    const iconStyle = {
        bg:"#F24607",
        p:"0.5em",
        borderRadius:"0.5em",
        w:"3em",
        textAlign:"center"
        
        
        

    }
    return(
        <Container p="2em" minWidth={"100%"} id="contacto" bg="colores.negro.900" color={"colores.blanco"} >
        <Flex  justify={"space-between"} >
        <VStack>
        <Heading textAlign={"left"} color={"colores.blanco"}>
            Contacto
        </Heading>
        <HStack>
            <Box sx={iconStyle} >
                <Icon  as={FaFacebookF} />
            </Box>
            <Box sx={iconStyle} >
                <Icon  as={FaGithub} />
            </Box>
            <Box sx={iconStyle} >
                <Icon as={BiLogoGmail} />
            </Box>
            <Box sx={iconStyle} >
                <Icon as={BsLinkedin} />
            </Box>
            
        </HStack>

        </VStack>
        <Box>  
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We ll never share your email.</FormHelperText>
                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />
                <Button color={"colores.blanco"} bg='colores.naranja' my={"3em"}>Enviar</Button>

            </FormControl>
        </Box>
        </Flex>
        </Container>
        

    )
}

export { Contacto }