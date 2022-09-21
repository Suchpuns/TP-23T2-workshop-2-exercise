import { useState, useEffect } from "react";
import Circle from "./Circle";

const trafficLightContainer = {
  backgroundColor: "gray",
  height: 400,
  width: 150,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
};


/**
 * The traffic light component consisting of three colored circles
 */
function TrafficLight() {
  // The colors of a traffic light
  // Top light is the same color as the first index of lights
  // Middle light is the same color as the second index of lights
  // Bottom light is the same color as the third index of lights
  const [lights, setLights] = useState(["green", "orange", "red"]);

  const [activeLight, setActiveLight] = useState(0);
  // TODO TASK 1: Make the traffic lights switch between
  // green, orange and red at the press of the changeLights button
  // Do this by using setActiveLight
  // If activeLight is 0, top light will turn on
  // If activeLight is 1, middle light will turn on
  // If activeLight is 2, bottom light will turn on

  // TODO TASK 2: Make a form that lets you change the colors of the top traffic light

  return (
    <div>
    {/* TODO TASK 2 EDIT BELOW FORM */}
    <form>
      <input type="text"/>
      <button>Change Top Colour</button>
    </form>
    <div style={trafficLightContainer}>
      <Circle color={lights[0]} active={lights[activeLight] === lights[0]} />
      <Circle color={lights[1]} active={lights[activeLight] === lights[1]} />
      <Circle color={lights[2]} active={lights[activeLight] === lights[2]} />
    </div>
    {/* TODO TASK 1 EDIT BELOW BUTTON */}
    <button>Change lights</button>
    </div>
  );
}

export default TrafficLight;
