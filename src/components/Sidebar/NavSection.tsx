import { Box, Stack, Text } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

interface NavSectionProps {
  SectionName: string;
  children: ReactNode;
}

export function NavSection({
  SectionName,
  children,
}: NavSectionProps): ReactElement {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {SectionName}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
