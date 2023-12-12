import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import bgImage from './assets/image.jpg'

function Header() {
  
  return (
    <Box
    h='48vh'
    bg='gray'
    bgImage={`url(${bgImage})`}
    bgRepeat='no-repeat'
    bgSize='cover'
    >
      <Flex
      direction='column'
      alignItems='center'
      justify='center'
      h='100%'
      bg='rgb(0 0 0 / 50%)'
      p={['0 10%', null, '0 20%']}
      >

      <Heading
      variant='banner'
      >Domina el terreno</Heading>

      <Stack
      direction={{ base: 'column', md: 'row'}}
      spacing='35px'
      mt='30px'
      w={['100%', null, 'auto']}
      >
      <Button
      variant='outline'
      size='lg'
      >ver detalle</Button>

      <Button
      variant='outline'
      size='lg'
      >ver video</Button>
      </Stack>
      </Flex>
    </Box>
  )
}

export default Header;
