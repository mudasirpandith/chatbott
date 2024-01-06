import { getChatById } from "@/libs/chat-services";
import ChatCard from "./_components/chatCard";
import { Container, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
export default async function Page({ params }: { params: { chatId: string } }) {
  const chatId = params.chatId;
  const chat = await getChatById(chatId);

  return (
    <Container mx={"auto"} maxW={"3xl"}>
      <NextSeo
        title={`ChatBot- Conversation`}
        description={`ChatBot- Conversation between Mr ${chat?.user.name} and ChatBott`}
        canonical="https://chatbott-ai.vercel.app/"
        openGraph={{
          url: "https://chatbott-ai.vercel.app/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWnJibkZwZlpOZk1DOVk5WjJkN3BsbkNKMkcifQ",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWnJibkZwZlpOZk1DOVk5WjJkN3BsbkNKMkcifQ",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://chatbott-ai.vercel.app/" },
            { url: "https://chatbott-ai.vercel.app/" },
          ],
          siteName: "ChatBott",
        }}
        twitter={{
          handle: "@mudasirpandith",
          site: "@mudasirpandith",
          cardType: "summary_large_image",
        }}
      />
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
    </Container>
  );
}
