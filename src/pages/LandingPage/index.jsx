import React from "react";
import Logo from "../../assets/logo.png";
import "../../../node_modules/video-react/dist/video-react.css";
import "./landing.css";

import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  Text,
  Avatar,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Focus from "../../assets/focus-img.png";
import About from "../../assets/about.png";
import { Player, BigPlayButton } from "video-react";

const LandingPage = () => {
  return (
    <div className="landing--container">
      <section className="hero--section">
        <div className="hero--content max--container">
          <div className="hero--left">
            <div className="hero--logo">
              <img src={Logo} alt="" />
            </div>
            <div className="hero--left--lower">
              <h2>Smart to invest in real estate</h2>
              <p>
                Our international brand specializes in property <br />{" "}
                appraisal, sales, purchases, and investments.
              </p>
              <Button
                colorScheme="orange"
                backgroundColor="#F9A526"
                size={"lg"}
              >
                Explore Our Projects
              </Button>
            </div>
          </div>
          <div className="hero--right">
            <form className="hero--form">
              <h2>
                Book Your Free <br /> <span>Consultation</span>
              </h2>
              <div className="form--main">
                <Input
                  focusBorderColor={"#F9A526"}
                  variant="filled"
                  placeholder="Enter your name"
                  backgroundColor={"#e5e5e5"}
                  color={"#737373"}
                  size={"lg"}
                  height={"55px"}
                />
                <Input
                  focusBorderColor={"#F9A526"}
                  variant="filled"
                  placeholder="Enter your email"
                  backgroundColor={"#e5e5e5"}
                  color={"#737373"}
                  size={"lg"}
                  height={"55px"}
                />
                <Input
                  focusBorderColor={"#F9A526"}
                  variant="filled"
                  placeholder="Enter your Phone number"
                  backgroundColor={"#e5e5e5"}
                  color={"#737373"}
                  size={"lg"}
                  height={"55px"}
                />
                <Button
                  colorScheme="orange"
                  backgroundColor="#F9A526"
                  size={"lg"}
                  marginTop={4}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="focus--section">
        <div className="focus--content max--container">
          <div className="focus--head">
            <h2>Our main focus</h2>
            <p>
              At aliquet viverra placerat enim semper nulla ut auctor habitasse.
            </p>
          </div>

          <div className="focus--image">
            <img src={Focus} alt="focus" />
          </div>
        </div>
      </section>

      <section className="facility--section">
        <div className="facility--content max--container">
          <div className="facility--left">
            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
              <BigPlayButton position="center" />
            </Player>
          </div>
          <div className="facility--right">
            <span>Our facilities</span>
            <h2>HELPING YOU FIND THE PROPERTY OF YOUR DREAMS</h2>
            <p>
              Agent hen an unknown printer took a galley of type and scramble d
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic.
            </p>
            <div className="facility--list">
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
              <div className="facility--li">
                <CheckIcon color={"#0061E0"} /> <span>Parking Space</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about--section">
        <div className="about--content max--container">
          <div className="about--left">
            <h2>About Us</h2>
            <img src={About} alt="" />
          </div>
          <div className="about--right">
            <h2 className="a--h2">
              HELPING YOU FIND THE PROPERTY OF YOUR DREAMS
            </h2>
            <p>
              We are a trusted professional in Indore with decades of experience
              in the property market. We deal in all kinds of properties
              including commercial, affordable housing, luxury, rental, etc. We
              are also covering all types of property documentation and legal
              work on behalf of our clients.
            </p>
            <div className="about--numbers">
              <div className="number--cont">
                <h2>
                  10 <span>+</span>
                </h2>
                <p>Awards Gained</p>
              </div>
              <div className="number--cont">
                <h2>
                  20 <span>+</span>
                </h2>
                <p>Years of Experience</p>
              </div>
              <div className="number--cont">
                <h2>
                  567 <span>+</span>
                </h2>
                <p>Rented Home Stay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer--section">
        <div className="customer--content max--container">
          <div className="customer--head">
            <h2>
              What Our Customers Say <br /> About Us
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Duis sit amet ante justo. Nulla quis semper ex, eu fringilla urna.
            </p>
          </div>

          <div className="customer--cards">
            <Card maxW="md" borderRadius={"10px"}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box>
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text>Creator, Chakra UI</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  With Chakra UI, I wanted to sync the speed of development with
                  the speed of design. I wanted the developer to be just as
                  excited as the designer to create a screen.
                </Text>
              </CardBody>
            </Card>

            <Card maxW="md" borderRadius={"10px"}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box>
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text>Creator, Chakra UI</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  With Chakra UI, I wanted to sync the speed of development with
                  the speed of design. I wanted the developer to be just as
                  excited as the designer to create a screen.
                </Text>
              </CardBody>
            </Card>

            <Card maxW="md" borderRadius={"10px"}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box>
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text>Creator, Chakra UI</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  With Chakra UI, I wanted to sync the speed of development with
                  the speed of design. I wanted the developer to be just as
                  excited as the designer to create a screen.
                </Text>
              </CardBody>
            </Card>

            <Card maxW="md" borderRadius={"10px"}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />

                    <Box>
                      <Heading size="sm">Segun Adebayo</Heading>
                      <Text>Creator, Chakra UI</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  With Chakra UI, I wanted to sync the speed of development with
                  the speed of design. I wanted the developer to be just as
                  excited as the designer to create a screen.
                </Text>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="gallery max--container">
        <figure className="item-1">
          <img
            className="gallery--img"
            src="https://s3-alpha-sig.figma.com/img/06d5/46b0/5de5b8a0b6b664e39d78267ec2643afc?Expires=1699228800&Signature=e9efji89k7p8y4VkOpoULeHrpShkuNXi3MNlEKHJa9xxRKvKz~WN1y3oOJFu8hffMyUADAZT5EiPMkalXGbQxPy4-57uP~9x3GGogMsK0VlEEGGvVeunQKf0lKK77AXjlcf6UQ9oJHL4PKkztQKTPH~5AweB0~3elFKWKns3rsg5W94SmDREZHn652AJlXi1gAPWGRB9fUiJZGInlN0joNDcyOvCmYW9ip7hlPEg~kecuhMWyk7Bds8VUfkKz~Xw4IbsVYFErTdzrPcBU5lWJSENm9N0N3TFXQhWZW11fStSfZSFTpLLkxbDMvlb2TSA3Pcar6u6r0bLXcnvmh4ulQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </figure>
        <figure className="item-2">
          <img
            className="gallery--img"
            src="https://s3-alpha-sig.figma.com/img/e34b/6456/cfaa9c81d600207c986211e8f8e1288a?Expires=1699228800&Signature=bCTz9e~sw8c6ylkEPvKPN14MvbSSYV1UNjOpxrmpvMTkuZp5xuM73GZv3XaCbJAOSjMlOfnAeHwISGCFGt06X3mOsUDTsGBM~k9gyDuRbypxqg3-EhZ~frbPVddHKEfNZbwvWrVj2dMe90tKi-COVrKNGV-IlLhxEo5oIpP~Yj2AwdZXJNXRXgBslP2K0VhRSj23lKcSucyJ4uefRPbQXNXSFLzPxBuUzpV60Bkv-wpXcJ4gdx74XCizOisQ8cOJFp5lGb4iMTepuNplOHsO0XwLowdsawW9u1GViL1Dd4vYBWccpdoP8z882kF6Dq7y8O4Pdt7swwOkyEhM9IK4Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </figure>
        <figure className="item-3">
          <img
            className="gallery--img"
            src="https://s3-alpha-sig.figma.com/img/63fc/6527/53b2a1b26fbee48a2b6d42f73bfb38c3?Expires=1699228800&Signature=OtkPe-z0IDZlHqCtA9WEcx0Y4166JbxjY3pmbI1-~gGFHxuup2vPLu8ZqZEVdRvg9CFbRkQZnRIuuVo0BK4HfVhLlEn0HgP8QlS4dwqHcxrGBUxsTQMphtq4sJw35Jm~ngPHdCA5EhuQxQu-MXoUSPQPa8SbXPnJWm3Kf44kt8wzeM5lkc3dpurupUEp67s-zN~ao9lZQWMoAUVJfY~PkyIl8MDTQJ8O9pQzzvHdH0MuGVK0o1RwZHkqsHMjLSQU-sG62U-4Y583p~UQF38gPvNKt4hSqc8v~QlwtyPrXHoN5GCvXzxhovhUcGdbvQDWbbMv1mIFM8e~6kY4sIJq~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </figure>
        <figure className="item-4">
          <img
            className="gallery--img"
            src="https://s3-alpha-sig.figma.com/img/66d6/e888/3c1780f6158b1d62f2036152ec7a594f?Expires=1699228800&Signature=m0oKJdq4dnbTri8bqfYTOkpTKWsDwr164poeC6-aSKomGc75rFDoUmVF7u85Ykhm4yftIyqxWZ~4~bki20-1EtZglAtqs6cnNgmTOM9NsHBwwrW8Jil3in66GSE-Xip1XfwYfwPcqRVp7jK~7f9sS6FjQAU8iPuDzrbPIJ5Q7ucCuPnm5le6sjp2pxs-tGoniq5WNCdDReVJKB9tEd31k9VdSXcWR0ofceyPI7XRTTZmsYs0vq89pktHwaUXQesbqvy5x0EzEBq990IPkwEfmUWOmBu9JqWfcIaIEahngBTHqbwdsToJcp2-42TXzQ42Ln~JascmqafiduqrGhdUbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </figure>
        <figure className="item-5">
          <img
            className="gallery--img"
            src="https://s3-alpha-sig.figma.com/img/ac6b/f43e/8363fc4f62fd9a46cc28eb202059adff?Expires=1699228800&Signature=VfOXxn1X8BJASr17in56KIeyCri-7V7HWwaXo-yNDRZbqHOqStU~iQWwhYsJ5VToAY4aUtPfLoEjeTKmug7xjvb0rOyC~Ayjs1eLYHa6KjKxFGVm87uuSnaOkADOQy7-iswJJc0-3wh5OQM9YMpaG7LfWtwc0OGLBQbhi6NZ31TdNCOlphO1T0jd81gmk5ouKDZEs-ueEgGyL4WYwsaZcO3ITb4YGNiMFU5wKTabtXBinvf9sMFqmEcflvAHTlVNy~4V4-6GDcGGI9KyWgOv2HwTqDIJJvxHorHElb2VJQEg0TR8e5K~nwTpDpZGKydG9vvB6QzXHR9Kw8VKad-vjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </figure>
        <figure className="item-6">
          <img
            className="gallery--img"
            src="https://s3-alpha-sig.figma.com/img/e34b/6456/cfaa9c81d600207c986211e8f8e1288a?Expires=1699228800&Signature=bCTz9e~sw8c6ylkEPvKPN14MvbSSYV1UNjOpxrmpvMTkuZp5xuM73GZv3XaCbJAOSjMlOfnAeHwISGCFGt06X3mOsUDTsGBM~k9gyDuRbypxqg3-EhZ~frbPVddHKEfNZbwvWrVj2dMe90tKi-COVrKNGV-IlLhxEo5oIpP~Yj2AwdZXJNXRXgBslP2K0VhRSj23lKcSucyJ4uefRPbQXNXSFLzPxBuUzpV60Bkv-wpXcJ4gdx74XCizOisQ8cOJFp5lGb4iMTepuNplOHsO0XwLowdsawW9u1GViL1Dd4vYBWccpdoP8z882kF6Dq7y8O4Pdt7swwOkyEhM9IK4Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </figure>
      </section>

      <section className="map max--container">
        <div className="map--left">
          <form action="">
            <h2>
              Book Your Free <br /> <span>Consultation</span>
            </h2>
            <Input
              focusBorderColor={"#F9A526"}
              variant="filled"
              placeholder="Enter your name"
              backgroundColor={"#263666"}
              color={"#fff"}
              size={"lg"}
              height={"55px"}
            />
            <Input
              focusBorderColor={"#F9A526"}
              variant="filled"
              placeholder="Enter your email"
              backgroundColor={"#263666"}
              color={"#fff"}
              size={"lg"}
              height={"55px"}
            />
            <Input
              focusBorderColor={"#F9A526"}
              variant="filled"
              placeholder="Enter your Phone number"
              backgroundColor={"#263666"}
              color={"#fff"}
              size={"lg"}
              height={"55px"}
            />
            <Button
              colorScheme="orange"
              backgroundColor="#F9A526"
              size={"lg"}
              marginTop={4}
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="map--right">
          <img
            src="https://s3-alpha-sig.figma.com/img/26ec/ec4d/f24d9e13ded0c0cd3b2826ccf70c77fd?Expires=1699228800&Signature=NCttYyosAA~YdP-g5IR8rNRMkAkxWKzp63LS3CnWZ4EDMSlwlkwnyFU~Yw0OCtZLFqtCBdFcjkhFLK4fWyXCod7Zd4Tn9NcQgoYI8SmXSSJ9RjcxSlMnSXJWY1QLHgrsy8k5BRo1SA5zFBCZh9OxB7DYKmRVub~4OjvsCSCwZ7EUEvPy5sWbkEoPLGN0oSuFv-RoCCMrf5mWaqS176Qaa~xqd~bnCMfSjYMX7Uxn8qbsXUPbJ9m3WIcjI6iI1hrxpxyhDLjS5a1qiBA~Zo6t73GT1P7mpcpSoeM0gpHG66FqW-w1kWCOJv~j1LKyuxsViHPj6up0LtBxkK6OItIMAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
