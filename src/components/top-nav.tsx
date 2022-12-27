import * as React from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  HStack,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import NoteForm from "./note-form";
import { motion } from "framer-motion";

export interface TopNavProps {
  handleNoteCreate?: (note: note) => void;
}

export const TopNav: React.SFC<TopNavProps> = ({ handleNoteCreate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex mb={"30px"} align="center">
        <HStack>
          <Box p="2" as={Link} to="/">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Heading
                as="h1"
                size="xl"
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                bgClip="text"
                _focus={{ boxShadow: "none", outline: "none" }}
                _hover={{
                  textDecoration: "none",
                  bgGradient: "linear(to-r, red.500, yellow.500)"
                }}
              >
                Notebook App
              </Heading>
            </motion.div>
          </Box>
        </HStack>
        <Spacer />
        <Box>
          <HStack>
            <HStack d={["none", "none", "block"]}>
              <Button
                leftIcon={<AddIcon />}
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                _hover={{ bgGradient: "linear(to-r, red.500, yellow.500)" }}
                variant="solid"
                size="sm"
                onClick={onOpen}
              >
                Add new note
              </Button>
            </HStack>
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
        </Box>
      </Flex>
      <NoteForm
        isOpen={isOpen}
        onClose={onClose}
        handleNoteCreate={handleNoteCreate}
      />
    </>
  );
};
