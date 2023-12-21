import { getSelf } from "@/libs/auth-service";
import { getOldChat } from "@/libs/chat-services";
import { Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { OldChatItem } from "./_components/OldChatItem";
const OldChat = async () => {
  const self = await getSelf();
  const oldChat = await getOldChat();

  return (
    <>
      <HStack p={"10px"}>
        <Image
          h={"40px"}
          w={"40px"}
          rounded={"full"}
          src={self.profileImage as string}
          alt={self.name as string}
        />

        <VStack alignItems={"start"} justifyContent={"start"}>
          <Text mb={"0"}>{self.name} </Text>
          <Text mt={"-10px"}>
            {self.email.slice(0, 4)}---{self.email.slice(-10)}{" "}
          </Text>
        </VStack>
      </HStack>
      <Divider />
      <VStack alignItems={"start"} justifyContent={"start"}>
        {oldChat?.map((chat) => {
          return (
            <OldChatItem
              viewId={chat?.chatId}
              key={chat.id}
              content={chat?.messages[0]?.content}
              chatId={chat.id}
            />
          );
        })}
      </VStack>
    </>
  );
};

export default OldChat;
