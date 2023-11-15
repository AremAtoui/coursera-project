import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];



const Header = () => {

  const socialsList = socials.map((social) => {
    const socialRef = `${social.url}`;
    const socialIcon = `${social.icon}`;
    return (
      <HStack>
        <a href={socialRef}><FontAwesomeIcon icon={socialIcon} size="2x" /></a>
      </HStack>
    )
  })

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav style={{ display: "flex", gap: "20px", color: "white", fontSize: "30px" }}>
            <i><FaRegEnvelope></FaRegEnvelope></i>
            <i><FaGithub></FaGithub></i>
            <i><FaLinkedin></FaLinkedin></i>
            <i><FaMedium></FaMedium ></i>
            <i><FaStackOverflow></FaStackOverflow></i>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contact-me" onClick={handleClick("contact")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;