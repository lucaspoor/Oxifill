import {
  CardBody,
  Card,
  Heading,
  Text,
  Stack,
  Image,
  CardFooter,
  ButtonGroup,
  Button,
  Divider,
  Img,
} from '@chakra-ui/react';

import card from '../json/card.json';

export default function CardMia() {
  return (
    <div className="flex justify-between flex-wrap ">
      {card.map((c) => {
        return (
          <Card className="max-w-sm p-4 bg-white">
            {' '}
            <CardBody>
              <Img src={`/images/${c.tipo}.jpg`}></Img>
              <Stack mt="6" spacing="3">
                <Heading className="font-bold text-3xl mb-6">
                  {c.titulo}
                </Heading>
                <Text>{c.texto} </Text>
              </Stack>
            </CardBody>
            {/* <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter> */}
          </Card>
        );
      })}
    </div>
  );
}
