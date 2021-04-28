import { FormControl, FormLabel, Input as ChackraInput, InputProps as ChackraInputProps } from "@chakra-ui/react";

interface InputProps extends ChackraInputProps {
  name: string,
  label?: string
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <ChackraInput
        name={name} 
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}