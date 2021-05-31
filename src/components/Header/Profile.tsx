import {useSession, signOut} from 'next-auth/client'
import { Avatar, Box, Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean 
}

export function Profile({ }: ProfileProps) {
  const [ session ] = useSession()

  return (
    <Flex align="center">
      {session && (
        <>
        <Box mr="4" textAlign="right">
          <Text>{session.user.name}</Text>
          <Text color="gray.300" fontSize="small">
            {session.user.email}
          </Text>

        </Box>

        <Popover>
          <PopoverTrigger>
            <Avatar size="md" name={session.user.name} src={session.user.image}/>
          </PopoverTrigger>
          <Portal>
            <PopoverContent w="60" mr="1rem" align="center" bgColor="gray.700" border="none">
            <PopoverArrow bgColor="gray.700" />
              <PopoverHeader borderColor="gray.600" >Deseja desconectar?</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button colorScheme="pink" onClick={() => signOut()}>Sair</Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        </>
      )}
    </Flex>
  )
}