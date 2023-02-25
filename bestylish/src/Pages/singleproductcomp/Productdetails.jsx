import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import axios from 'axios';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import Headingone from '../../Landingpage/Middlecomponent/Heading';
import styles from '../Shirtcss/shirt.module.css'
//   ={data.title}
//       color={data.Color}
//       size={data.Size}
//       brand={data.brand}
//       discount={data.discount}
//       discription={data.discription}
//       image={data.image}
//       price

export default function Simple(data) {

const{ brand, image, price, title, discount, Size,id }=data;

  const fetchdata=()=>{
   
    axios.post(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart`,{
       brand, price,image:image[0], title, discount, size:Size 
    })
    .then(()=>{
     alert("item addedd successfully")
    })
}
  
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex display="grid" gridTemplateColumns='repeat(2, 1fr)' gap={2}>
          <Image
            className={styles.zoom}
            rounded={'md'}
            alt={'product image'}
            src={data?.image?.[0]}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Image
            className={styles.zoom}
            rounded={'md'}
            alt={'LOUIS PHILIPPE'}
            src={data?.image?.[1]}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Image
            className={styles.zoom}
            rounded={'md'}
            alt={'LOUIS PHILIPPE'}
            src={data?.image?.[2]}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Image
            className={styles.zoom}
            rounded={'md'}
            alt={'LOUIS PHILIPPE'}
            src={data?.image?.[3]}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Image
            className={styles.zoom}
            rounded={'md'}
            alt={'LOUIS PHILIPPE'}
            src={data?.image?.[4]}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Image
            className={styles.zoom}
            rounded={'md'}
            alt={'LOUIS PHILIPPE'}
            src={data?.image?.[5]}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              textAlign={'left'}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {data?.title}
            </Heading>
            <Text
              textAlign={'left'}
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {data?.price}/-  Inclusive of all taxes
            </Text>
          </Box>
          <Text
            textAlign={'left'}
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            ₹1999 Save ₹ 800 discount- {data?.discount}%
          </Text>
          <Text
            textAlign={'left'}
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            Color - {data?.Color}
          </Text>

          <Text
            textAlign={'left'}
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}
          >

            Size -


          </Text>

          <Text
            textAlign={'left'}
            color={useColorModeValue('gray.900', 'gray.400')}

            fontSize={'xl'}
            display="grid" gridTemplateColumns='repeat(8, 1fr)' spacing={0} gap={1}>



            <div width="50px" style={{ border: "2px dotted red", padding: "4px 0", textAlign: "center" }}>S</div>
            <div width="50px" style={{ border: "2px dotted red", padding: "4px 0", textAlign: "center" }}>M</div>
            <div width="50px" style={{ border: "2px dotted red", padding: "4px 0", textAlign: "center" }}>L</div>
            <div width="50px" style={{ border: "2px dotted red", padding: "4px 0", textAlign: "center" }}>XL</div>
            <div width="50px" style={{ border: "2px dotted red", padding: "4px 0", textAlign: "center" }}>XXL</div>

          </Text>
          <div className={styles.singlbuttons}>
            <Button onClick={fetchdata} colorScheme='red'>Add To Cart</Button>
            <Button colorScheme='red'>Buy Now</Button>
          </div>
          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
          <Headingone text={" ⬅ 7 Days return policy"}/>

          <Text
            textAlign={'left'}
            fontSize={'s'}>
             If you're a registered user, that is, if you've created an online shopping account with us, you'll receive a refund for the same amount to My Credit in your account. You can then use your My Credit balance to shop any of our brands online.
          </Text>
          <Headingone text={"💸 Payment in Installments"}/>
          <Text
            textAlign={'left'}
            fontSize={'s'}>
             Pay in easy installments on orders of ₹ 3,000 or more. Available for select banks Available on listed bank credit cards. Pay easy monthly installments instead of lump-sum amount. Find suitable EMI option below and choose same option at payments step while placing the order.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}
                textAlign="left">
               <Headingone text={"Overview"}/> {data?.discription}
              </Text>
              <Text fontSize={'lg'}>
              
              </Text>
            </VStack>
            
            
          </Stack>


          
        </Stack>
      </SimpleGrid>
    </Container>
  );
}