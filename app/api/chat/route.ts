import { getSelf } from "@/libs/auth-service";
import { db } from "@/libs/db";

export async function POST(req: Request, res: Response) {
  const self = await getSelf();
  const { chatId, role, parts } = await req.json();
  // Check if the chat already exists
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

    return new Response("", { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
export async function DELETE(req: Request, res: Response) {
  const { chatId } = await req.json();
  try {
    await db.chat.delete({ where: { id: chatId } });
    return new Response("Delete", { status: 202 });
  } catch (error) {
    console.log(error);
  }
}
