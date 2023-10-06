import React from 'react';
import {Icon,Container,Heading ,SimpleGrid,Card,CardHeader,CardBody,Text,Button,CardFooter} from '@chakra-ui/react';
import {FaPlus} from "react-icons/fa";
const Proyectos = () => {
    return(<Container maxW={"container.2xl"} minH="100vh" id="proyectos" bg="colores.negro.100" color="colores.blanco">
        <Heading as="h2" textAlign="center" p="1em" >
             Proyectos
        </Heading>
        <SimpleGrid color="colores.blanco" p="3em"   minChildWidth={['10em','20em']}  columns={3} spacing={9} >
          <Card color="colores.blanco" bg="colores.negro.900" >
            <CardBody color={"white"} textAlign="center" p="5em">
                <Icon as={FaPlus} />
            </CardBody>
          </Card>
          <Card color="colores.blanco" bg="colores.negro.900" >
            <CardBody color={"white"} textAlign="center" p="5em">
                <Icon as={FaPlus} />
            </CardBody>
          </Card>
          <Card color="colores.blanco" bg="colores.negro.900" >
            <CardBody color={"white"} textAlign="center" p="5em">
                <Icon as={FaPlus} />
            </CardBody>
          </Card>
          <Card color="colores.blanco" bg="colores.negro.900" >
            <CardBody color={"white"} textAlign="center" p="5em">
                <Icon as={FaPlus} />
            </CardBody>
          </Card>
          <Card color="colores.blanco" bg="colores.negro.900" >
            <CardBody color={"white"} textAlign="center" p="5em">
                <Icon as={FaPlus} />
            </CardBody>
          </Card>
          <Card color="colores.blanco" bg="colores.negro.900" >
            <CardBody color={"white"} textAlign="center" p="5em">
                <Icon as={FaPlus} />
            </CardBody>
          </Card>
      </SimpleGrid>
        </Container>   
    )
}

export { Proyectos }