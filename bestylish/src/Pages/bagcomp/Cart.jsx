import { Box, Button, Card, CardBody, CardFooter, Center, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import swal from 'sweetalert'

function Cart({ title, size, price, image, id, fetchdataa }) {

    const handledelete = (id) => {
        axios.delete(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart/${id}`)
            .then(() => fetchdataa())
            // swal({
            //     title: "Are you sure?",
            //     text: "Once deleted, you will not be able to recover this imaginary file!",
            //     icon: "warning",
            //     buttons: true,
            //     dangerMode: true,
            // })
            //     .then((willDelete) => {
            //         if (willDelete) {
            //             swal("Poof! Your imaginary file has been deleted!", {
            //                 icon: "success",
            //             });
            //         } else {
            //             swal("Your imaginary file is safe!");
            //         }
            //     })    
    }


    return (
        <div key={id}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                h={250}
                w={300}
                p={2}            >
                <Image
                    objectFit='cover'
                    h={100}
                    w={100}
                    src={image}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{title}</Heading>

                        <Text py='2'>
                            {size + "      "}₹{price}/-ONLY
                        </Text>
                        <Button onClick={() => handledelete(id)} variant='solid' colorScheme='red'>
                            Delete
                        </Button>
                    </CardBody>

                    <CardFooter>

                    </CardFooter>
                </Stack>

            </Card>

        </div>

    )
}

export default Cart