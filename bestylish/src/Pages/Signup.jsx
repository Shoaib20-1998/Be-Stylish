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
} from '@chakra-ui/react';
import { useEffect, useReducer, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Bread from './Shirtcomp/Breadcrumb';
const init = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}
const reducer = (state, action) => {

    switch (action.type) {
        case "firstname": {
            return {
                ...state,
                firstname: action.payload
            }
        }
        case "lastname": {
            return {
                ...state,
                lastname: action.payload
            }
        }
        case "email": {
            return {
                ...state,
                email: action.payload
            }
        }
        case "password": {
            return {
                ...state,
                password: action.payload
            }
        }
    }
}



export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [state, dispatch] = useReducer(reducer, init)
    const [data, setdata] = useState([])

    const usenav = useNavigate()
    const fetchuserdata = () => {
        axios.get(`https://639b03f6d514150197480eef.mockapi.io/user/users`)
            .then((res) => setdata(res.data))
    }

    useEffect(() => {
        fetchuserdata()
    }, [])



    const handlesubmit = (e) => {
        e.preventDefault()
        let flag = false
        let postdata = data.map((item) => {
            if (item.email == state.email) {
                flag = true;
            }
        })
        if (!flag) {
            axios.post(`https://639b03f6d514150197480eef.mockapi.io/user/users`, {
                ...state
            })
            swal("Congratulation!", "Your account successfully created!", "success");
            usenav('/login')
        }else{
            swal("The account is already exist", "Try with different one");
        }


        
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>           
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Bread />
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handlesubmit}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input onChange={(e) => dispatch({ type: "firstname", payload: e.target.value })} type="text" />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input onChange={(e) => dispatch({ type: "lastname", payload: e.target.value })} type="text" />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input onChange={(e) => dispatch({ type: "email", payload: e.target.value })} type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input onChange={(e) => dispatch({ type: "password", payload: e.target.value })} type={showPassword ? 'text' : 'password'} />
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

                                    type="submit"
                                    size="lg"
                                    bg={'red.500'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'red.600',
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                        </form>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link to="/login" color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}