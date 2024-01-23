import { getChatById } from "@/libs/chat-services";
import ChatCard from "./_components/chatCard";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: { chatId: string };
}): Promise<Metadata> {
  const seo = await getChatById(params.chatId);

  return {
    title: `ChatBott- Conversation between ${seo?.user?.name} and ChatBott`,
    description: `Conversation : ${seo?.messages[0].content}`,
    openGraph: {
      images: [seo?.user.profileImage as string],
    },
  };
}

export default async function Page({ params }: { params: { chatId: string } }) {
  const chatId = params.chatId;
  const chat = await getChatById(chatId);

  return (
    <>
      <Head>
        <title>jb jyg j jvhdfh</title>
      </Head>
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
