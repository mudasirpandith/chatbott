"use client";
import React, { useState } from "react";
import {
  Button,
  HStack,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa6";

interface OldChatItemProps {
  content: string;
  chatId: string;
  viewId: String;
}
export const OldChatItem = ({ content, chatId, viewId }: OldChatItemProps) => {
  const [loading, setLoading] = useState(false);
  const chatdelete = async (chatId: string) => {
    setLoading(true);
    try {
      await fetch("/api/chat", {
        method: "DELETE",
        body: JSON.stringify({ chatId }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HStack px={"10px"}>
      <Text>•</Text>
      <Text w={["200px", "150px"]} textOverflow={"ellipsis"}>
        {content.slice(0, 15)}...
      </Text>
      <Spacer />
      <Popover trigger="hover">
        <PopoverTrigger>
          <Button color={"inherit"} variant={"outlined"}>
            <BsThreeDotsVertical />
          </Button>
        </PopoverTrigger>
        <PopoverContent w={"200px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader color={"black"}>Wooww</PopoverHeader>
          <PopoverBody>
            <HStack>
              <a href={`/id/${viewId}`} target="_blank">
                <Button size={"sm"}>
                  <FaEye />
                </Button>
              </a>
              <Spacer />
              <Button
                isLoading={loading as boolean}
                onClick={() => chatdelete(chatId as string)}
                size={"sm"}
                colorScheme="red"
              >
                <AiFillDelete />
              </Button>
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </HStack>
  );
};
