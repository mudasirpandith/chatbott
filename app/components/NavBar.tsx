import React from "react";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Box, Heading, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
export const NavBar = () => {
  return (
    <>
      <HStack
        bg="#232D3F"
        color={"white"}
        position={"sticky"}
        top={"0"}
        p={"10px"}
      >
        <Link href={"/"}>
          <VStack
            justify={"start"}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Heading mb={"0"} fontSize={"28px"}>
              ChatBott
            </Heading>
            <Text fontSize={"12px"} mt={"-10px"}>
              Powered by Gemini Pro
            </Text>
          </VStack>{" "}
        </Link>
        <Spacer />
        <Box>
          {" "}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </Box>
      </HStack>
    </>
  );
};
