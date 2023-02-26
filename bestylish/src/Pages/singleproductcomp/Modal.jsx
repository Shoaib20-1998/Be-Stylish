import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Auth } from "../../Contextprovider/Auth";
import swal from "sweetalert";
function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure(false)
    const[data,setdata]=useState([])
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const{isAuth,setisAuth,setname}=useContext(Auth)

    const getuserdata=()=>{
        axios.get(`https://639b03f6d514150197480eef.mockapi.io/user/users`)
        .then((res)=>setdata(res.data))
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        let flag=false
        let name=""
       const newdata=data.map((item)=>{
        if(item.email==email&&item.password==password){
            flag=true
            name=item.firstname+" "+item.lastname
        }
       })
       if(flag){
        setisAuth(true)
        setname(name)
        swal("Logged in", "Congratulation you are logged in successfully", "success");
       }else{
        swal("Sorry😕!", "...Wrong Credential");
       }      
    }
    console.log(data)
    useEffect(()=>{
        getuserdata()
    },[])

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    
    return (
        <>
            <Button size="lg"
                bg={'red.500'}
                color={'white'}
                _hover={{
                    bg: 'red.600',
                }} onClick={onOpen}>Checkout Now</Button>


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Please Sign in Before Checkout</ModalHeader>
                    <ModalCloseButton />
                <form onSubmit={handlesubmit}>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input value={email} onChange={(e)=>setemail(e.target.value)} ref={initialRef} placeholder='username / email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            type="submit"
                            bg={'red.500'}
                            color={'white'}
                            _hover={{
                                bg: 'red.600',
                            }} mr={3}>
                            Sign in
                        </Button>
                      <Button onClick={onClose}><Link to="/signup">i Don't have account</Link> </Button>
                    </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default InitialFocus;