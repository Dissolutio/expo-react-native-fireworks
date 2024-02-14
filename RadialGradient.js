import React from "react";
import { View, Dimensions, Animated, Easing } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Ellipse } from "react-native-svg";

const HUE_SPEED = 1;
const GLOW_SCALE = 1.5;
const GLOW_RADIUS = 100;
const ANIMATION_DURATION = 4000;
class RadialGradientBg extends React.Component {
  render() {
    const { hueValue, gradientPosX, gradientPosY } = this.props;
    const currentHue = hueValue * HUE_SPEED;
    const windowWidth = Dimensions.get("window").width;
    const vw = windowWidth / 100;
    const cardWidth = 35 * vw;
    const windowHeight = Dimensions.get("window").height;
    const innerHsl = `hsl(${currentHue}, 100%, 90%)`;
    const secondHsl = `hsl(${currentHue}, 100%, 80%)`;
    const colorHsl = `hsl(${currentHue}, 100%, 60%)`;
    return (
      <View
        style={{
          flex: 1,
          width: windowWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: cardWidth,
            height: (cardWidth * 2) / 3,
            // aspectRatio: 1.5 / 1,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "40%",
            left: "40%",
          }}
        >
          <Svg height="100%" width={"100%"}>
            <Defs>
              <RadialGradient
                id="grad"
                // cx={"50%"}
                // cy={"50%"}
                cx={`${gradientPosX}%`}
                cy={`${gradientPosY}%`}
                rx={"30%"}
                ry={"30%"}
                // fx={0}
                // fy={0}
                gradientUnits="userSpaceOnUse"
              >
                <Stop
                  offset="0"
                  stopColor={innerHsl ?? "#fff"}
                  stopOpacity="1"
                />
                <Stop
                  offset="0.2"
                  stopColor={secondHsl ?? "#fff"}
                  stopOpacity="1"
                />
                <Stop
                  offset="0.4"
                  stopColor={colorHsl ?? "#000"}
                  stopOpacity="1"
                />
                <Stop offset="1" stopColor={"transparent"} stopOpacity="1" />
              </RadialGradient>
            </Defs>
            <Ellipse
              // cx={windowWidth / 2}
              // cy={windowHeight / 2}
              cx={"50%"}
              cy={"50%"}
              // rx={Math.max(windowWidth, windowHeight) / 2}
              // ry={Math.max(windowWidth, windowHeight) / 2}
              rx={"100%"}
              ry={"100%"}
              fill="url(#grad)"
            />
          </Svg>
        </View>
        <View
          style={{
            width: cardWidth - 5,
            height: (cardWidth * 2) / 3 - 5,
            // aspectRatio: 1.5 / 1,
            backgroundColor: "black",
            position: "absolute",
            top: "40%",
            left: "40%",
            marginLeft: 5 / 2,
            marginTop: 5 / 2,
          }}
        ></View>
      </View>
    );
  }
}
export const RadialGradientBackground =
  Animated.createAnimatedComponent(RadialGradientBg);

const hueInterpolation = {
  inputRange: [0, 1],
  outputRange: [0, 360],
};
const gradientPosXInterpolation = {
  inputRange: [0, 0.25, 0.5, 0.75, 1],
  outputRange: [0, 100, 100, 0, 0],
};
const gradientPosYInterpolation = {
  inputRange: [0, 0.25, 0.5, 0.75, 1],
  outputRange: [0, 0, 100, 100, 0],
};
export const AnimatedRadialGradient = () => {
  const outerColor = React.useRef(new Animated.Value(0)).current;
  const gradientPos = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(outerColor, {
        toValue: 1,
        useNativeDriver: false,
        duration: (ANIMATION_DURATION * 2) / Math.PI, // to give us a non-repetitive strobe
        // easing: Easing.inOut(Easing.exp),
        easing: Easing.linear,
      })
    ).start();
    Animated.loop(
      Animated.timing(gradientPos, {
        toValue: 1,
        useNativeDriver: false,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  return (
    <>
      <RadialGradientBackground
        hueValue={outerColor.interpolate(hueInterpolation)}
        gradientPosX={gradientPos.interpolate(gradientPosXInterpolation)}
        gradientPosY={gradientPos.interpolate(gradientPosYInterpolation)}
      />
    </>
  );
};

const CreateOverlayFrom2Components = (props) => {
  const child1 = props?.children?.child1;
  const child2 = props?.children?.child2;
  const parentStyle = {
    flex: 1,
    width: windowWidth,
    // justifyContent: "center",
    // alignItems: "center",
  };
  const childStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
  return (
    <View style={parentStyle}>
      <View style={childStyle}></View>
      <View style={childStyle}></View>
    </View>
  );
};
