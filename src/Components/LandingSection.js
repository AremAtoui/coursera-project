import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Melly!";
const bio1 = "A fullStack developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar name="my avatar" src="https://i.pinimg.com/564x/16/0f/c5/160fc5f14560c8a58ffb1fbb5b91bef3.jpg" size="2xl" />
      <Heading size="md">{greeting}</Heading>
      <br/>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;