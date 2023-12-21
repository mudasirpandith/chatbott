import { getSelf } from "./auth-service";
import { db } from "./db";

export const getOldChat = async () => {
  const self = await getSelf();

  const oldChat = await db.chat.findMany({
    where: { userId: self.id },
    include: {
      messages: {
        select: {
          content: true,
        },
        take: 1, // Limit to only one message
      },
    },
    orderBy: {
      timestamp: "desc",
    },
  });

  // Return null or a default value if no messages are found
  return oldChat;
};
export const getChatById = async (chatId: string) => {
  const chat = await db.chat.findUnique({
    where: {
      chatId,
    },
    include: {
      user: {
        select: {
          name: true,
          profileImage: true,
        },
      },
      messages: {
        select: {
          id: true,
          content: true,
          role: true,
          timestamp: true,
        },
        orderBy: {
          timestamp: "desc",
        },
      },
    },
  });

  return chat;
};
