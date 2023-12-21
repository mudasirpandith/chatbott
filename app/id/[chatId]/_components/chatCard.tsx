import React from "react";
import { Box, HStack, VStack, Image, Text } from "@chakra-ui/react";

interface Message {
  content: string;
  role: string;
}
interface ChatCardProps {
  message: Message;
  name: string;
  profileImage: string;
}
export default function ChatCard({
  message,
  name,
  profileImage,
}: ChatCardProps) {
  return (
    <HStack justifyContent={"start"} alignItems={"start"} py={"5px"} my={"2px"}>
      <Image
        w={"30px"}
        h={"30px"}
        rounded={"full"}
        src={
          message.role === "user"
            ? profileImage
            : "https://i.gadgets360cdn.com/large/gemini_ai_google_1701928139717.jpg?downsize=950:*"
        }
        alt={message.role}
      />
      <VStack alignItems={"start"} justifyContent={"start"}>
        <Text fontWeight={"bold"} m={"0"}>
          {" "}
          {message.role === "user" ? name : "Bot"}
        </Text>{" "}
        <Text mt={"-10px"}>{message.content}</Text>{" "}
      </VStack>
    </HStack>
  );
}
