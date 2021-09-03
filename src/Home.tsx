import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

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
            We take care of all your technology needs. We specialize in {" "}
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
          <Button
            color="#F95679"
            variant="ghost"
            size="lg"
            fontSize="20px"
            as="a"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contactbuilt.business@gmail.com"
            target="_blank"
          >
            Get in touch
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
