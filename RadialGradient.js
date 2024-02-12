import React from "react";
import { View, Dimensions, Animated } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Ellipse } from "react-native-svg";

const HUE_SPEED = 1;
class RadialGradientBg extends React.Component {
  render() {
    const { children, innerColor, hueValue } = this.props;
    const currentHue = hueValue * HUE_SPEED;
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const innerHsl = `hsl(${currentHue}, 100%, 90%)`;
    const secondHsl = `hsl(${currentHue}, 100%, 80%)`;
    const colorHsl = `hsl(${currentHue}, 100%, 60%)`;
    return (
      <View style={{ flex: 1 }}>
        <Svg height="100%" width="100%">
          <Defs>
            <RadialGradient
              id="grad"
              cx={"50%"}
              cy={"50%"}
              rx={"30%"}
              ry={"30%"}
              // fx={0}
              // fy={0}
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0" stopColor={innerHsl ?? "#fff"} stopOpacity="1" />
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
        {children}
      </View>
    );
  }
}
export const RadialGradientBackground =
  Animated.createAnimatedComponent(RadialGradientBg);
