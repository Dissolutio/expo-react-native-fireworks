import React from "react";
import { View, Dimensions } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Ellipse } from "react-native-svg";

export class RadialGradientBackground extends React.Component {
  render() {
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
              <Stop
                offset="0"
                stopColor={this.props.innerColor ?? "#fff"}
                stopOpacity="1"
              />
              <Stop
                offset="1"
                stopColor={this.props.outerColor ?? "#000"}
                stopOpacity="1"
              />
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
        {this.props.children}
      </View>
    );
  }
}
