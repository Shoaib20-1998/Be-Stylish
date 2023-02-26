import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, useDisclosure } from "@chakra-ui/react"

function CompExample() {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: false })
  
    return <Alert status="success">
    <AlertIcon />
    Data uploaded to the server. Fire on!
  </Alert>
  }

  export default CompExample;