// FullHomeIcon.tsx
import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

interface FullSpeakingIconProps extends SvgProps {
    width?: number;
    height?: number;
    focused?: boolean;  // Whether the icon is focused/active
    gradientStartColor?: string;  // Gradient start color (used when focused)
    gradientEndColor?: string;    // Gradient end color (used when focused)
    inactiveColor?: string;       // Color when not focused (default: white)
}

const FullSpeakingIcon: React.FC<FullSpeakingIconProps> = ({
    width = 30,
    height = 30,
    focused = true,
    gradientStartColor = "#44DBE5",  // Default gradient start color (cyan)
    gradientEndColor = "#FE6665",    // Default gradient end color (red/coral)
    inactiveColor = "#FFFFFF",       // Default inactive color (white)
    ...props
}) => {
    // Generate gradient ID based on colors (each Svg component has its own scope)
    const gradientId = `paint0_linear_fullSpeaking_${gradientStartColor.replace('#', '')}_${gradientEndColor.replace('#', '')}`;
    const fillColor = `url(#${gradientId})`;

    return (
        <Svg width={width} height={height} viewBox="0 0 30 30" fill="none"
            //xmlns="http://www.w3.org/2000/svg" 
            {...props}>
            <Defs>
                <LinearGradient id={gradientId} x1="25.3339" y1="26.0006" x2="-2.41133e-06" y2="2.00004" gradientUnits="userSpaceOnUse">
                    <Stop stopColor={gradientStartColor} />
                    <Stop offset="0.538462" stopColor={gradientEndColor} />
                </LinearGradient>
            </Defs>
            <Path
                d="M10.3066 22.4541C12.2 22.4541 13.747 24.0002 13.7471 25.8936C13.7471 27.7869 12.2 29.334 10.3066 29.334H5.7207C3.82737 29.334 2.28027 27.7869 2.28027 25.8936C2.28031 24.0002 3.82739 22.4541 5.7207 22.4541H10.3066ZM23.6006 22.4541C25.4937 22.4543 27.04 24.0004 27.04 25.8936C27.04 27.7868 25.4938 29.3338 23.6006 29.334H19.0137C17.1203 29.334 15.5732 27.7869 15.5732 25.8936C15.5733 24.0002 17.1204 22.4541 19.0137 22.4541H23.6006ZM8.02734 16.3604C9.49995 16.3605 10.6934 17.5547 10.6934 19.0273C10.6932 20.4998 9.49985 21.6932 8.02734 21.6934C6.55469 21.6934 5.36053 20.5 5.36035 19.0273C5.36035 17.5546 6.55458 16.3604 8.02734 16.3604ZM21.3066 16.3604C22.7794 16.3604 23.9736 17.5546 23.9736 19.0273C23.9735 20.5 22.7793 21.6934 21.3066 21.6934C19.8341 21.6932 18.6408 20.4998 18.6406 19.0273C18.6406 17.5547 19.834 16.3605 21.3066 16.3604ZM23.6006 0V0.0136719C26.7605 0.0138271 29.334 2.58717 29.334 5.74707C29.334 8.06685 27.9471 10.1466 25.8008 11.04C25.1608 11.3067 24.7471 11.9336 24.7471 12.627C24.7471 13.0803 24.4667 13.5073 24.04 13.6807C23.6135 13.8538 23.1204 13.76 22.7871 13.4268L21.8398 12.4805C21.2 11.8273 20.3338 11.4669 19.4141 11.4668H17.7871C17.1471 11.4668 16.6406 10.9603 16.6406 10.3203C16.6406 9.68032 17.1604 9.17383 17.7871 9.17383H19.4141C20.7606 9.17392 22.0408 9.62723 23.0674 10.4805C23.494 9.80062 24.1335 9.24057 24.9199 8.90723C26.2133 8.36056 27.04 7.12007 27.04 5.7334C27.0399 3.84028 25.4937 2.2941 23.6006 2.29395H17.7871C17.1473 2.29395 16.6409 1.78724 16.6406 1.14746C16.6406 0.507461 17.1604 0 17.7871 0H23.6006ZM10.3066 0C13.4666 0 16.04 2.5607 16.04 5.7207C16.0398 8.88053 13.4665 11.4541 10.3066 11.4541H9.91992C9.00024 11.4542 8.14733 11.8138 7.49414 12.4668L6.54688 13.4141C6.21361 13.7471 5.72044 13.8401 5.29395 13.667C4.86728 13.4937 4.58691 13.0799 4.58691 12.6133C4.58676 11.9201 4.17309 11.294 3.5332 11.0273C1.38669 10.1206 0 8.0533 0 5.7334C0.0001416 2.57352 2.57412 0 5.7207 0H10.3066Z"
                fill={fillColor}
            />
        </Svg>
    );
};

export default FullSpeakingIcon;
