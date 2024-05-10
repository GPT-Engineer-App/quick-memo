import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  const addNote = () => {
    if (input.trim() !== "") {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4}>
        <HStack width="100%">
          <Input placeholder="Add a new note..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && addNote()} />
          <IconButton icon={<FaPlus />} onClick={addNote} aria-label="Add note" />
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle color mode" />
        </HStack>
        <VStack spacing={4} width="100%">
          {notes.map((note, index) => (
            <HStack key={index} width="100%" p={4} bg={bgColor} borderRadius="md" spacing={4}>
              <Text flex={1} color={color}>
                {note}
              </Text>
              <IconButton icon={<FaTrash />} onClick={() => deleteNote(index)} aria-label="Delete note" colorScheme="red" />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
