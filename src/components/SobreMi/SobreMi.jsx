import React from 'react';
import { Image,Box, Heading,Text, Button,Flex} from '@chakra-ui/react'
const SobreMi = () => {
    return(
        <>
            <Flex id="sobremi" boxSize='50vw' p="3em" alignItems="center">
                <Image src='./mifoto.jpg' alt='Lautaro Moroni' sizes={['200px','500px','600px']}/>
            </Flex>
            <Box maxW={"50vw"} p="3em">
                <Heading as='h2' size='2xl' textAlign={['center','center','left']}>
                    Sobre <Box as="span" color={"#F24607"}>Mi</Box>
                </Heading>
                <Text textAlign={['left','left','left']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum ducimus nulla distinctio incidunt possimus dignissimos et magnam expedita perferendis laudantium itaque, accusamus hic quas dolorum molestias. Nemo, nisi veritatis!
                </Text>
                <Button w={["100%","100%","min-content"]} as="a" href="#" variant={"outline"} bg={"#F24607"} color="white" >Mas sobre mi</Button>
            </Box>
        </>
    )
}

export { SobreMi }