import { Heading,Input,Stack,FormControl,FormLabel,FormErrorMessage,FormHelperText,HStack,Flex,Box,Button, Container, Icon, VStack,   Editable,EditableInput,EditableTextarea,EditablePreview,Textarea} from '@chakra-ui/react';
import React, { useRef } from 'react';

import { FaFacebookF,FaGithub } from "react-icons/fa6";
import { BiLogoGmail} from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import emailjs from '@emailjs/browser';

const Contacto = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rrpeg6c', 'template_ncts3dk', form.current, 'oKWf2-iaBcacIDYG_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    const iconStyle = {
        bg:"#F24607",
        p:"0.5em",
        borderRadius:"0.5em",
        w:"3em",
        textAlign:"center"

    }
    return(
        <Container p="2em" minWidth={"100%"} id="contacto" bg="colores.negro.900" color={"colores.blanco"} >
        <Flex  justify={"space-around"} flexWrap={{base:'wrap'}} >
        <VStack>
        <Heading textAlign={"left"} color={"colores.blanco"}>
            Contacto
        </Heading>
        <HStack>
            <Box  href="#" as="a" sx={iconStyle} >
                <Icon  as={FaFacebookF} />
            </Box>
            <Box href="https://github.com/moro12389" as="a" sx={iconStyle} >
                <Icon  as={FaGithub} />
            </Box>
            <Box href="#" as="a" sx={iconStyle} >
                <Icon as={BiLogoGmail} />
            </Box>
            <Box href="https://www.linkedin.com/in/lautaro-moroni/" as="a" sx={iconStyle} >
                <Icon as={BsLinkedin} />
            </Box>
            
        </HStack>

        </VStack>
        <Box w={["100vw",null,"50vw"]}  p={{base:'2em'}}>  
            
            <FormControl as="form" ref={form} onSubmit={sendEmail}>
                <FormLabel>Nombre</FormLabel>
                <Input placeholder='Su nombre' type="text" name="from_name" />
                <FormLabel>Mensaje</FormLabel>
                <Textarea  name="message" placeholder='Escribir aqui su mensaje' />
                <Input w={['100%',null,'25%']} type="submit" value="Enviar" color={"colores.blanco"} bg='colores.naranja' my={"3em"}/>
                

            </FormControl>
        </Box>
        </Flex>
        </Container>
        

    )
}

export { Contacto }