import { Button, HStack, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import { FaRegSurprise } from 'react-icons/fa'

export function NotificationNav() {
  return (
    <HStack 
      spacing={["6", "2"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Popover>
        <PopoverTrigger>
          <Button bg="none" variant='ghost' colorScheme='gray' _hover={{ bg: 'gray.600'}}>
            <Icon as={RiNotificationLine} fontSize="20"/>
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent w="60" align="center" bgColor="gray.700" border="none">
            <PopoverHeader borderColor="gray.600">Notificações</PopoverHeader>
            <PopoverArrow bgColor="gray.700"/>
            <PopoverCloseButton />
            <PopoverBody>
              <Icon as={FaRegSurprise}/>
              <Text>Você não tem nem uma nova notificação</Text>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button bg="none" margin="" variant='ghost' colorScheme='gray' _hover={{ bg: 'gray.600'}}>
            <Icon as={RiUserAddLine} fontSize="20"/>
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent w="60" align="center" bgColor="gray.700" border="none">
            <PopoverHeader borderColor="gray.600">Solicitações</PopoverHeader>
            <PopoverArrow bgColor="gray.700"/>
            <PopoverCloseButton />
            <PopoverBody>
              <Icon as={FaRegSurprise}/>
              <Text>Você não tem nem uma nova solicitação</Text>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </HStack>
  )
}