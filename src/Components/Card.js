import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      background="white"
      color="black"
      borderRadius="10px"
      align="start"
    >
      <Image src={imageSrc} alt="image" borderRadius="10px"/>
      <VStack 
      padding="10px"
      background="white"
      color="black"
      borderRadius="10px"
      align="start"
      >
      <Heading size="md">{title}</Heading>
      <Text color="gray">{description}</Text>
      <HStack>
        <Text size="xs">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;