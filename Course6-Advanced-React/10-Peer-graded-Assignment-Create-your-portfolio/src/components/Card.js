import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <VStack backgroundColor="white" color="black" borderRadius="xl">
            <VStack>
                <Image src={imageSrc} alt={title} borderRadius="xl" />
            </VStack>
            <VStack spacing={6} p={6} alignItems="flext-start">
                <Heading size="md">{title}</Heading>
                <Text color="#64748b" fontSize="lg">
                    {description}
                </Text>
                <Link>
                    <HStack>
                        <Heading size="xs">See more</Heading>
                        <FontAwesomeIcon icon={faArrowRight} size="1x" />
                    </HStack>
                </Link>
            </VStack>
        </VStack>
    );
};

export default Card;
