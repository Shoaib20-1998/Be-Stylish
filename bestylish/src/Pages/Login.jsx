import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Auth } from '../Contextprovider/Auth';
import CompExample from './bagcomp/Alert';
import Bread from './Shirtcomp/Breadcrumb';

export default function SimpleCard() {
  const[data,setdata]=useState([])
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const{isAuth,setisAuth,setname}=useContext(Auth)
  const usenav = useNavigate()
  const getuserdata=()=>{
      axios.get(`https://639b03f6d514150197480eef.mockapi.io/user/users`)
      .then((res)=>setdata(res.data))
  }

  const Handlesubmit=(e)=>{
      e.preventDefault()
      let flag=false
      let name=""
     const newdata=data.map((item)=>{
      if(item.email==email&&item.password==password){
          flag=true
          name=item.firstname+" "+item.lastname
      }
     })
     if(!flag){
      swal("Sorry😕!", "...Wrong Credential");         
     }else{     
      setisAuth(true)
      setname(name) 
      swal("Successfully loggedin","You have logged in successfully","success")  
      usenav('/shirts')     
     }

             
  }

  useEffect(()=>{
      getuserdata()
  },[])
  

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
        <Bread />
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <form onSubmit={Handlesubmit}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>setemail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'red.500'}
                color={'white'}
                _hover={{
                  bg: 'red.600',
                }}
                type="submit">
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
        </form>
      </Stack>
    </Flex>
  );
}