import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import Svg, {
  G,
  Defs,
  Rect,
  RadialGradient,
  Stop,
  ClipPath,
  Ellipse,
  Circle,
  Polygon,
} from "react-native-svg";

export const RadialGradientBackground = ({
  children,
  innerColor,
  outerColor,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={{ flex: 1 }}>
      <Svg height="100%" width="100%">
        <Defs>
          <RadialGradient
            id="grad"
            cx={windowWidth / 2}
            cy={windowHeight / 2}
            rx={Math.max(windowWidth, windowHeight) / 2}
            ry={Math.max(windowWidth, windowHeight) / 2}
            fx={0}
            fy={0}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor={innerColor ?? "#fff"} stopOpacity="1" />
            <Stop offset="1" stopColor={outerColor ?? "#000"} stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Ellipse
          cx={windowWidth / 2}
          cy={windowHeight / 2}
          rx={Math.max(windowWidth, windowHeight) / 2}
          ry={Math.max(windowWidth, windowHeight) / 2}
          fill="url(#grad)"
        />
      </Svg>
      {children}
    </View>
  );
};
