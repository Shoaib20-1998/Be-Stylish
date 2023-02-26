import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import swal from 'sweetalert'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import CompExample from '../bagcomp/Alert';
  import { useNavigate } from 'react-router-dom';
  
  export default function Payment() {
    
    const [showPassword, setShowPassword] = useState(false);
    const usenav=useNavigate()
    return (
      <Flex
        minH={'5vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Pay Pal
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Enter your Card Details here
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>CARD NUMBER</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>CARD HOLDER</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Expire Date</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>CVV</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'red.500'}
                  color={'white'}
                  _hover={{
                    bg: 'red.400',
                  }}
                   onClick={()=>
                    
                    {
                      
                      swal("Order Placed Successfully", "Your Order will be delivered in 4 to 5 days", "success")
                      usenav('/')
                    }
                   }>
                  Place Order
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  DON'T HAVE DEBIT CARD? <Link color={'blue.400'}>BHIM UPI</Link>
                </Text>
              </Stack>
             
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }