"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useAuth } from "@clerk/nextjs";
export default function Home() {
  return (
    <Container maxW={"6xl"} p={"10px"}>
      <Container
        maxW={"4xl"}
        h={"90vh"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignContent={"center"}
        justifyItems={"center"}
        justifySelf={"center"}
        textAlign={"center"}
      >
        <Heading fontWeight={400} fontSize={"7xl"} color={"Green"}>
          ChatBott
        </Heading>
        <Text color={"gray"} fontWeight={"400"}>
          This advanced chatbot is created using the powerful Next.js framework
          and is fueled by the expertise of Gemini Pro. It possesses the
          remarkable ability to engage in natural conversations with users,
          seamlessly adapting to the context of the discussion. Through its
          cutting-edge algorithms and access to vast knowledge, it can recall
          previous interactions, ensuring a continuous and personalized
          experience for each individual user. Whether its answering questions,
          resolving inquiries, or simply making conversation, this chatbot is
          designed to deliver a professional and user-centric interaction,
          providing an unparalleled chatbot experience.
        </Text>

        <Link style={{ margin: "10px" }} href="/chat">
          <Button zIndex={-1} colorScheme="green" rightIcon={<FaArrowRight />}>
            {" "}
            Try ChatBott
          </Button>
        </Link>
      </Container>

      <Image p="10px" src="/chatbott.png" alt="branding" />
      <Image p={"10px"} src="/demo.png" alt="branding" />

      <Flex flexWrap={"wrap"} justify={"center"} gap={"30px"}>
        <Image p={"10px"} src="/chatbott_mobile.png" alt="branding" />
        <Image p={"10px"} src="/mobile_demo.png" alt="branding" />
      </Flex>
    </Container>
  );
}
