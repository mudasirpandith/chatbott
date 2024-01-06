"use client";
import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Layout = (props: {
  children: React.ReactNode;
  newchat: React.ReactNode;
  oldchat: React.ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        newChat={props.newchat}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="md"
      >
        <DrawerContent>
          <SidebarContent newChat={props.newchat} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={"2px"}>
        {props.oldchat}
      </Box>
    </>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
  newChat: React.ReactNode;
}

const SidebarContent = ({ onClose, newChat, ...rest }: SidebarProps) => {
  return (
    <Box
      w={{ base: "full", md: 60 }}
      bg="black"
      position="fixed"
      overflow={"hidden"}
      overflowY={"scroll"}
      color={"white"}
      h="full"
      {...rest}
    >
      <Flex justifyContent="space-between">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {newChat}
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        color={"inherit"}
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text>History</Text>
    </Flex>
  );
};
export default Layout;
