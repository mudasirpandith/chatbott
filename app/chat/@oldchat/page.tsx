"use client";
import { useEffect, useState } from "react";
import { Box, VStack, Button, Input } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { saveChat } from "@/actions/chat";
import ChatCard from "./_components/chatCard";

const Chat = () => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBjGEYSCsAV-ORyzZU54j4dLpFF6RyIHhA"
  );
  const initialChatId = uuidv4();
  const [prompt, setPrompt] = useState<string>("");
  const [chat, setChat] = useState<Array<{ role: string; parts: string }>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [chatId, setChatId] = useState(initialChatId);

  const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 200,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
  };

  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig,
  });

  const chatai = model.startChat({
    history: chat,
  });

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey && prompt.trim() && !loading) {
      e.preventDefault();
      handleRun();
    }
  };

  const handleRun = async () => {
    setLoading(true);

    // Add user message to chat
    const newUserMessage = { role: "user", parts: prompt };
    setChat((prevChat) => [...prevChat, newUserMessage]);
    setPrompt("");
    saveChat(newUserMessage.role, newUserMessage.parts, chatId);

    try {
      // Send user message to the model and get the response
      const result = await chatai.sendMessage(prompt);
      const response = await result.response;
      const text = response.text();

      // Add model response to chat
      const newModelMessage = { role: "model", parts: text };
      setChat((prevChat) => [...prevChat, newModelMessage]);
      saveChat(newModelMessage.role, newModelMessage.parts, chatId);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const newChatId = uuidv4();
    setChatId(newChatId);
  }, []);

  return (
    <>
      <Box ml={["0", "20px"]} zIndex={1000}>
        <VStack
          alignItems={"start"}
          alignContent={"end"}
          justifyContent={"end"}
          justifyItems={"end"}
          h={"100%"}
        >
          {chat
            .slice()
            .reverse()
            .map((message, index) => (
              <ChatCard key={index} message={message} />
            ))}
        </VStack>
        <Box
          display="flex"
          position="fixed"
          justifyContent="center"
          alignItems="center"
          bottom="0px"
          left={["0", "0", 60]}
          right="0"
          borderRadius="10px"
          p="10px"
          mx={"3px"}
          bg="#232D3F"
          color={"white"}
        >
          <Input
            type="text"
            name="prompt"
            variant="flushed"
            id="prompt"
            fontWeight={"500"}
            placeholder="Message ChatBot..."
            value={prompt}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            p={"5px"}
            marginRight="2"
          />
          <Button
            colorScheme="gray"
            isLoading={loading}
            onClick={handleRun}
            disabled={!prompt.trim() || loading}
          >
            <FiSend />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Chat;
