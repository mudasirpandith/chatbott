"use server";
import { getSelf } from "@/libs/auth-service";
import { db } from "@/libs/db";
import { revalidatePath } from "next/cache";

// import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI("AIzaSyBjGEYSCsAV-ORyzZU54j4dLpFF6RyIHhA");
// const generationConfig = {
//   stopSequences: ["red"],
//   maxOutputTokens: 200,
//   temperature: 0.9,
//   topP: 0.1,
//   topK: 16,
// };

// const model = genAI.getGenerativeModel({
//   model: "gemini-pro",
//   generationConfig,
// });

// export async function getChat(chat) {
//   const chatai = model.startChat({
//     history: chat,
//   });
// }
export async function saveChat(role: string, parts: string, chatId: string) {
  const self = await getSelf();

  try {
    const existingChat = await db.chat.findFirst({
      where: {
        chatId,
      },
    });

    if (!existingChat) {
      const newChat = await db.chat.create({
        data: {
          chatId,
          userId: self.id,
        },
      });
      await db.message.create({
        data: {
          content: parts,
          role,
          chat: {
            connect: {
              id: newChat.id,
            },
          },
        },
      });
      revalidatePath("/chat/@newchat");
    }
    if (existingChat) {
      await db.message.create({
        data: {
          content: parts,
          role,
          chat: {
            connect: {
              id: existingChat.id,
            },
          },
        },
      });
    }

    return;
  } catch (error) {
    console.log(error);
  }
}
export async function chatDelete(chatId: string) {
  try {
    await db.chat.delete({ where: { id: chatId } });
    revalidatePath("/chat/@newchat");
    return;
  } catch (error) {
    console.log(error);
  }
}
