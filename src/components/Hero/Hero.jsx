import React from "react";
import {
  BikeB,
  BikeF,
  Box,
  Button,
  Info,
  Mask,
  Rate,
  Section,
  TextBox,
} from "./Hero.styled";

const Hero = () => {
  return (
    <Section>
      <Box dark>
        <Mask></Mask>

        <TextBox>
          <h1>
            Take The <br /> Streets.
          </h1>
          <span>Hero 3</span>
          <p>
            <b>Shift your ride, not gears. </b>
            Ease your path towards the fastest way to move in the city. Free
            your mind as the bike adapts intitively to power the speed you need.
          </p>
          <Button>Book a test ride</Button>
        </TextBox>
        <BikeF src="./src/assets/bikef.png"></BikeF>
      </Box>
      <Box>
        <TextBox flex>
          <BikeB src="./src/assets/bikeb.png"></BikeB>
          <Rate>
            <span>
              <img src="./src/assets/Star.png" alt="" />
              <img src="./src/assets/Star.png" alt="" />
              <img src="./src/assets/Star.png" alt="" />
              <img src="./src/assets/Star.png" alt="" />
              <img src="./src/assets/Star.png" alt="" />
            </span>
            <br /> 1000+ Reviews
          </Rate>
          <Info>
            <div>
              <h2>25 km/hr</h2>
              <h3>Assist Speed</h3>
            </div>
            <div>
              <h2>70 km</h2>
              <h3>Battery range</h3>
            </div>
            <div>
              <h2>3.5 hr</h2>
              <h3>charging time</h3>
            </div>
            <div>
              <h2>16.9 kg</h2>
              <h3>weight</h3>
            </div>
          </Info>
        </TextBox>
      </Box>
    </Section>
  );
};

export default Hero;
