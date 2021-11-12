import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ParticlesBg from "particles-bg";

const EmailButton = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Box
        color="#F95679"
        fontSize="20px"
        onClick={() => setEmail("contactbuilt.business@gmail.com")}
      >
        <span role="img" aria-label="hand">
          📬 {"  "}
        </span>
        {email ? email : "Get in touch"}
      </Box>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
        minH="100vh"
      >
        <Image
          src="/bighead.svg"
          width="350"
          height="350"
          alt="avatar bigheads"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="500" py="4">
            Get your business idea built{" "}
            <span role="img" aria-label="hand">
              🚀
            </span>
          </Heading>
          <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
            <Text as="span">Building</Text> digital products, brands, and
            experiences.
          </Heading>
          <Text p="5">
            We take care of all your technology needs. We specialize in{" "}
            <Text as="span" fontWeight="600">
              Mobile Apps,
            </Text>{" "}
            <Text as="span" fontWeight="600">
              Websites,
            </Text>{" "}
            <Text as="span" fontWeight="600">
              E-commerce,
            </Text>{" "}
            and much more. Contact us to get a free consultation.
          </Text>
          <EmailButton />
        </Box>

        <ParticlesBg num={3} type="ball" bg={true} />
      </Box>
    </>
  );
};

export default Home;
