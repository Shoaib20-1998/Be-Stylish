import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { ShoppingCartOutlined  } from '@ant-design/icons'
import { Link as RouteLink } from 'react-router-dom';
import Bag from '../../Pages/Bag';
import SignupCard from '../../Pages/Signup';
import SimpleCard from '../../Pages/Login';
import { useContext } from 'react';
import { Auth } from '../../Contextprovider/Auth';
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const {isAuth,name}=useContext(Auth)
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <img width="110px" src="Be stylish logo.jpg" alt="" />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const {isAuth,name,setisAuth}=useContext(Auth)
  return (
    <Stack p={"0"} direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                mg={50}
                p={5}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={500}
                color={'black'}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
                
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
                color={'black'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <><DesktopSubNav key={child.label} {...child} />
                    
                    </>
                  ))}

                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}

      <Stack spacing={3}>
        
        <Input ml={"20px"} width="300px"  placeholder="What are you looking for ?" size='md' />
        
      </Stack>
      <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={2}>
       {isAuth?<>
        <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#ED1C24'}
            href={'#'}
            _hover={{
              bg: 'black',
            }} >
            {name}
          </Button>
          
       <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#ED1C24'}
            href={'#'}
            _hover={{
              bg: 'black',
            }} onClick={()=>setisAuth(!isAuth)}> 
              
            Log out
          </Button>
       </>:<>
       <RouteLink to="/login"><Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#ED1C24'}
            href={'#'}
            _hover={{
              bg: 'black',
            }} onClick={()=><SimpleCard />}>
            Sign in
          </Button>
          </RouteLink> 
      <RouteLink to="/signup"><Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#ED1C24'}
            href={'#'}
            _hover={{
              bg: 'black',
            }} onClick={()=><SignupCard />}> 
              
            Sign Up
          </Button>
       </RouteLink></>}
        </Stack>             
      <Stack spacing={6}>
        <Bag />
      </Stack>
      
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <RouteLink to="/shirts">
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('white', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#ED1C24' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'red'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
    </RouteLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



// Kurta Sets
// Ethnic Dresses
// Tops & Tunics
// Leggings & Churidars
// Pants & Palazzos
// Skirts
// Dupattas & Stoles

const NAV_ITEMS = [
  {
    label: 'Woman',
    children: [
      {
        label: 'Ethnic & Fusion Wear',
        subLabel: 'Kurtas & Kurtis',
        href: '/shirts',
      },
      {
        label: 'Lingerie/Sleepwear/Tracksuits',
        subLabel: 'Nightwear/Shapeswear',
        href: '/shirts',
      },
      {
        label: 'Sports Wear/Regular Wear',
        subLabel: 'Joggers And Tracks',
        href: '/shirts',
      },
      {
        label: 'Wastern Wear/cultural Wear',
        subLabel: 'Top & tees',
        href: '/shirts',
      },
    ],
  },
  {
    label: 'Men',
    children: [

      {
        label: 'Bottom Wear',
        subLabel: 'Jeans',
        href: '/shirts',
      },
      {
        label: 'Winter Wear',
        subLabel: 'Jackets',
        href: '/shirts',
      },
      {
        label: 'Top Wear',
        subLabel: 'Formal Shirt',
        href: '/shirts',
      },
      {
        label: 'Active Wear',
        subLabel: 'Polos',
        href: '/shirts',
      },
    ],
  },
  {
    label: 'Kids',
    children: [
      {
        label: 'BOYS',
        subLabel: 'Shirt/Jeans',
        href: '/shirts',
      },
      {
        label: 'GIRLS',
        subLabel: 'Top/jeans',
        href: '/shirts',
      },
      {
        label: 'Top Brands',
        subLabel: 'Benatton',
        href: '/shirts',
      },
      {
        label: 'Price Point',
        subLabel: 'Under 299',
        href: '/shirts',
      },
    ],
  },
  {
    label: 'Shoes & bags',
    children: [
      {
        label: 'Woman Top Brands',
        subLabel: 'Flip flops & Sliders',
        href: '/shirts',
      },
      {
        label: 'Man Top Brands',
        subLabel: 'U.S.Polo Assn',
        href: '/shirts',
      },
      {
        label: 'Boys Top Brands',
        subLabel: 'Code',
        href: '/shirts',
      },
      {
        label: 'Girls Top Brands',
        subLabel: 'Ginger',
        href: '/shirts',
      },
    ],
  },

  {
    label: 'Beauty',
    children: [
      {
        label: 'Men Grooming & Styles',
        subLabel: 'Haircare/Facewash',
        href: '/shirts',
      },
      {
        label: 'Skin Care & Face',
        subLabel: 'Masks/Serum',
        href: '/shirts',
      },
      {
        label: 'Bath & Body',
        subLabel: 'Soaps & cup',
        href: '/shirts',
      },
      {
        label: 'Fragrences',
        subLabel: 'Sets & deo',
        href: '/shirts',
      },
    ],
  },

];