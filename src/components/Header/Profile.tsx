import {useSession} from 'next-auth/client'
import { BiError } from 'react-icons/bi'
import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean 
}

export function Profile({ showProfileData = true }: ProfileProps) {
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

        <Avatar size="md" name={session.user.name} src={session.user.image}/>
        </>
      )}
    </Flex>
  )
}