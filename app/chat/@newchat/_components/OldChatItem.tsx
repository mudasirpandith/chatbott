"use client";
import React, { useState, useTransition } from "react";
import {
  Button,
  HStack,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  Spacer,
  Text,
  useToast,
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
import { chatDelete } from "@/actions/chat";

interface OldChatItemProps {
  content: string;
  chatId: string;
  viewId: String;
}
export const OldChatItem = ({ content, chatId, viewId }: OldChatItemProps) => {
  const [isPending, startTransition] = useTransition();
  const toast = useToast({ position: "top" });
  const handleDelete = async (chatId: string) => {
    startTransition(() => {
      chatDelete(chatId).then(() => {
        toast({
          title: "Chat Deleted",
          colorScheme: "green",
          status: "success",
        });
      });
    });
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
        <PopoverContent w={"100px"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <HStack>
              <a href={`/id/${viewId}`} target="_blank">
                <Button size={"sm"}>
                  <FaEye />
                </Button>
              </a>
              <Spacer />
              <Button
                isLoading={isPending as boolean}
                onClick={() => handleDelete(chatId as string)}
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
