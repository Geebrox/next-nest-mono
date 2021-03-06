import { Flex, useColorModeValue } from '@chakra-ui/react';
import Header from '@client/components/Header';
import type { FC, PropsWithChildren } from 'react';

const Page: FC<PropsWithChildren<{}>> = ({ children }) => {
  const mainBgColor = useColorModeValue('gray.100', 'gray.500');
  const textColor = useColorModeValue('gray.400', 'gray.300');

  return (
    <Flex
      h="full"
      minH="100vh"
      w="full"
      bg={mainBgColor}
      direction="column"
      p="4"
      transition="ease-in-out"
      transitionProperty="background-color"
      transitionDuration="normal"
    >
      <Header />
      <Flex
        flexGrow={1}
        color={textColor}
        transition="ease-in-out"
        transitionProperty="color"
        transitionDuration="normal"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Page;
