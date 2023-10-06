import React from 'react';
import './Servicios.css';
import {Icon,SimpleGrid,Flex,Image,Avatar,IconButton,Divider,Container,ButtonGroup,Button, Heading,Card , CardHeader, CardBody, CardFooter,Stack,Box,StackDivider, Text } from '@chakra-ui/react';
import {MdOutlinePhoneAndroid} from "react-icons/md";
const Servicios = () => {
    return(
        <Container bgColor="colores.negro.900" color={"white"} maxW={"container.2xl"}>
        <Heading textAlign="center" p="3em" >
             Servicios
        </Heading>

        <SimpleGrid  p="3em" display="flex"  flexWrap={["wrap",'wrap','nowrap']} spacing={4} templateColumns='repeat(auto-fill, minmax(10em, 1fr))'>
          <Card className='card-pro'>

            <CardHeader>
                <Icon  as={MdOutlinePhoneAndroid} />
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
              <Heading size='md'> Customer dashboard</Heading>
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
              <Heading size='md'> Customer dashboard</Heading>
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