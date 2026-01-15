// FullHomeIcon.tsx
import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

interface FullHomeIconProps extends SvgProps {
  width?: number;
  height?: number;
  focused?: boolean;  // Whether the icon is focused/active
  gradientStartColor?: string;  // Gradient start color (used when focused)
  gradientEndColor?: string;    // Gradient end color (used when focused)
  inactiveColor?: string;       // Color when not focused (default: white)
}

const FullHomeIcon: React.FC<FullHomeIconProps> = ({
  width = 30,
  height = 30,
  focused = true,
  gradientStartColor = "#44DBE5",  // Default gradient start color (cyan)
  gradientEndColor = "#FE6665",    // Default gradient end color (red/coral)
  inactiveColor = "#FFFFFF",       // Default inactive color (white)
  ...props
}) => {
  // Generate gradient ID based on colors (each Svg component has its own scope)
  const gradientId = `paint0_linear_fullHome_${gradientStartColor.replace('#', '')}_${gradientEndColor.replace('#', '')}`;
  const fillColor = focused ? `url(#${gradientId})` : inactiveColor;
  
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none" 
    //xmlns="http://www.w3.org/2000/svg" 
    {...props}>
      {focused && (
        <Defs>
          <LinearGradient id={gradientId} x1="25.3448" y1="26" x2="0.0108943" y2="1.9885" gradientUnits="userSpaceOnUse">
            <Stop stopColor={gradientStartColor} />
            <Stop offset="0.538462" stopColor={gradientEndColor} />
          </LinearGradient>
        </Defs>
      )}
      <Path
        data-figma-bg-blur-radius="4"
        d="M26.6533 7.33333L23.56 4.52L23.6133 1.82667C23.56 0.306667 21.3867 0.306667 21.32 1.82667V3.29333L18.84 1.4C16.3867 -0.466667 12.96 -0.466667 10.5067 1.4L2.70667 7.34667C1.01333 8.64 0 10.68 0 12.8133V22.4533C0 26.24 3.08 29.3333 6.88 29.3333H22.4667C26.2533 29.3333 29.3467 26.2533 29.3467 22.4533V12.8133C29.3467 10.6667 28.3467 8.61333 26.6667 7.33333H26.6533ZM10.9467 19.2533C11.0267 17.3467 13.7333 17.36 13.8133 19.2533C13.7333 21.16 11.0267 21.1467 10.9467 19.2533ZM10.9467 14.6667C10.9467 13.88 11.5867 13.24 12.3733 13.24C13.16 13.24 13.8 13.88 13.8 14.6667C13.72 16.56 11.0133 16.5733 10.9333 14.6667H10.9467ZM15.52 19.2533C15.6 17.3467 18.3067 17.36 18.3867 19.2533C18.3067 21.16 15.6 21.1467 15.52 19.2533ZM15.52 14.6667C15.6 12.76 18.3067 12.7733 18.3867 14.6667C18.3067 16.5733 15.6 16.56 15.52 14.6667Z"
        fill={fillColor}
      />
    </Svg>
  );
};

export default FullHomeIcon;
