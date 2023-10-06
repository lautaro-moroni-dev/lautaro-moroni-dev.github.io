import React from 'react';
import './Servicios.css';
import {Icon,SimpleGrid,Flex,Image,Avatar,IconButton,Divider,Container,ButtonGroup,Button, Heading,Card , CardHeader, CardBody, CardFooter,Stack,Box,StackDivider, Text } from '@chakra-ui/react';
import {MdOutlinePhoneAndroid,MdCode} from "react-icons/md";
import {LuPencilLine} from "react-icons/lu";
const Servicios = () => {
    return(
        <Container id="servicios" bgColor="colores.negro.900" color={"white"} maxW={"container.2xl"}>
        <Heading textAlign="center" p="3em" >
             Servicios
        </Heading>

        <SimpleGrid  p="3em" display="flex"  flexWrap={["wrap",'wrap','nowrap']} spacing={4} templateColumns='repeat(auto-fill, minmax(10em, 1fr))' justifyContent={"center"}>
          <Card className='card-pro'>

            <CardHeader>
                <Icon boxSize={9} as={MdOutlinePhoneAndroid} />
              <Heading size='md'> Diseñador web</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card className='card-pro'>
            <CardHeader>
              <Icon boxSize={9} as={MdCode} />
              <Heading size='md'> Desarrollador Web</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card className='card-pro'>
            <CardHeader>
              <Icon boxSize={9} as={LuPencilLine} />
              <Heading size='md'> Diseño Creativo</Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
      </SimpleGrid>
     </Container>
    )
}

export { Servicios }