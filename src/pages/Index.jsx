import { Container, VStack, Heading, Text, Box, Flex, Button, IconButton } from "@chakra-ui/react";
import { FaCommentDots, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Tech Discussions Forum
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Join the conversation and share your knowledge with the tech community.
        </Text>
        <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" alignSelf="flex-end">
          New Topic
        </Button>
        <Box width="100%">
          <Flex direction="column" gap={4}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">How to learn React?</Heading>
              <Text mt={4}>Posted by John Doe</Text>
              <IconButton aria-label="Comment" icon={<FaCommentDots />} size="sm" mt={2} />
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Best practices for Node.js</Heading>
              <Text mt={4}>Posted by Jane Smith</Text>
              <IconButton aria-label="Comment" icon={<FaCommentDots />} size="sm" mt={2} />
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Understanding JavaScript closures</Heading>
              <Text mt={4}>Posted by Alice Johnson</Text>
              <IconButton aria-label="Comment" icon={<FaCommentDots />} size="sm" mt={2} />
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;