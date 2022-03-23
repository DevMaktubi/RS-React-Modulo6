import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({
  showProfileData = true,
}: ProfileProps): ReactElement {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Breno Luiz</Text>
          <Text color="gray.300" fontSize="small">
            brenoluiz1@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Breno Luiz"
        src="https://github.com/devmaktubi.png"
      />
    </Flex>
  );
}
