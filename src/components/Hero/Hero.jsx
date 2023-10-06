import { Icon,Hide,Flex,Box, Container,Spacer, Heading,Text,Circle,Stack,Button} from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import {ChevronRightIcon} from '@chakra-ui/icons'
import { FaPlay} from "react-icons/fa6";
import  './Hero.css';

const Hero = () => {
    return(
        <Flex  minH="80vh" align="center"  color="white">
        <Box p="3em" w="50%" >
        <Hide below='md'>
            <Box fontWeight={"bold"} p="1" fontSize={"2em"} w="max-content" color="colores.blanco" bg="#F24607" >Hola yo soy</Box>
        </Hide>
            <Heading fontWeight={"bold"}>Lautaro Moroni </Heading>
            <Heading color="#F24607" fontWeight={900}>Web Developer</Heading>
            <Hide below='md' >
                <Text fontWeight={400}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci ducimus fugit aliquid aperiam qui hic tempore cumque dolor numquam, quibusdam dicta accusantium cupiditate odio veniam error at. Nobis, vel!</Text>

            </Hide>
            <Stack direction={"row"}  alignItems={"center"} >
                <Hide below='md'>
                <Text bg="colores.naranja" p={"1em"} my={0} borderRadius="3em" fontWeight="bold">Mira mis trabajos</Text>
                </Hide>
                
                  <Button  mx="1em" as="a" href="#proyectos"  variant={"outline"} bg={"#F24607"} color="white"><Icon as={FaPlay} /></Button>
            </Stack>
        </Box>
        </Flex>
    )
}

export { Hero }