import { getChatById } from "@/libs/chat-services";
import ChatCard from "./_components/chatCard";
import { Container, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
export default async function Page({ params }: { params: { chatId: string } }) {
  const chatId = params.chatId;
  const chat = await getChatById(chatId);

  return (
    <>
      <Container mx={"auto"} maxW={"3xl"}>
        {chat?.messages
          ?.slice()
          .reverse()
          .map((message) => {
            return (
              <ChatCard
                key={message.id}
                name={chat.user.name as string}
                profileImage={chat.user.profileImage as string}
                message={message}
              />
            );
          })}
      </Container>{" "}
    </>
  );
}
