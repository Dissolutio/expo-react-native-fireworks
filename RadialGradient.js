import React from "react";
import { View, StyleSheet, Text } from "react-native";
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

export const RadialGradientBackground = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <Svg height="100" width="100">
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            rx="50%"
            ry="50%"
            fx="50%"
            fy="50%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0%" stopColor="#ff0" stopOpacity="1" />
            <Stop offset="100%" stopColor="#00f" stopOpacity="1" />
          </RadialGradient>
          <ClipPath id="clip">
            <G scale="0.9" x="10">
              <Circle cx="30" cy="30" r="20" />
              <Ellipse cx="60" cy="70" rx="20" ry="10" />
              <Rect x="65" y="15" width="30" height="30" />
              <Polygon points="20,60 20,80 50,70" />
              <Text
                x="50"
                y="30"
                fontSize="32"
                fontWeight="bold"
                textAnchor="middle"
                scale="1.2"
              >
                Q
              </Text>
            </G>
          </ClipPath>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="url(#grad)"
          clipPath="url(#clip)"
        />
      </Svg>
      {children}
    </View>
  );
};
