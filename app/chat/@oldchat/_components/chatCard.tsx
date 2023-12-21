import React from "react";
import { HStack, VStack, Image, Text } from "@chakra-ui/react";

interface Message {
  parts: string;
  role: string;
  // Add other properties as needed
}
interface ChatCardProps {
  message: Message;
}
export default function ChatCard({ message }: ChatCardProps) {
  return (
    <HStack justifyContent={"start"} alignItems={"start"} py={"5px"} my={"2px"}>
      <Image
        w={"30px"}
        h={"30px"}
        rounded={"full"}
        src={
          message.role === "user"
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hfGP2y9Bya7fGiA7-IgYCHl-VJNm1Tgq2MGgOfdHdGYxgxhoMhKKSVHBKmBZaFzwT74&usqp=CAU"
            : "https://i.gadgets360cdn.com/large/gemini_ai_google_1701928139717.jpg?downsize=950:*"
        }
        alt={message.role}
      />
      <VStack alignItems={"start"} justifyContent={"start"}>
        <Text fontWeight={"bold"} m={"0"}>
          {" "}
          {message.role === "user" ? "You" : "Bot"}
        </Text>{" "}
        <Text mt={"-10px"}>{message.parts}</Text>{" "}
      </VStack>
    </HStack>
  );
}
