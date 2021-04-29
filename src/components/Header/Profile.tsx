import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Emanuel Jovito</Text>
        <Text color="gray.300" fontSize="small">
          emanuel_carneiro@hotmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Emanuel Jovito" src="https://github.com/EmanuelJovito.png"/>
    </Flex>
  )
}