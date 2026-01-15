import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

interface FullBurgerIconProps extends SvgProps {
    width?: number;
    height?: number;
    focused?: boolean;
    gradientStartColor?: string;
    gradientEndColor?: string;
    inactiveColor?: string;
}

const FullBurgerIcon: React.FC<FullBurgerIconProps> = ({
    width = 32,
    height = 32,
    focused = true,
    gradientStartColor = "#44DBE5",
    gradientEndColor = "#FE6665",
    inactiveColor = "#FFFFFF",
    ...props
}) => {
    const gradientId = `paint0_linear_fullBurger_${gradientStartColor.replace('#', '')}_${gradientEndColor.replace('#', '')}`;
    const fillColor = `url(#${gradientId})`;

    return (
        <Svg width={width} height={height} viewBox="0 0 32 32" fill="none" {...props}>
            <Defs>
                <LinearGradient id={gradientId} x1="0.85957" y1="6.00011" x2="23.1832" y2="29.2011" gradientUnits="userSpaceOnUse">
                    <Stop stopColor={gradientStartColor} />
                    <Stop offset="0.538462" stopColor={gradientEndColor} />
                </LinearGradient>
            </Defs>
            <Path
                d="M22.3096 23C22.9996 23 23.5596 23.56 23.5596 24.25C23.5596 24.94 22.9996 25.5 22.3096 25.5H7.25C6.56 25.5 6 24.94 6 24.25C6 23.56 6.56 23 7.25 23H22.3096ZM22.3604 12.1904C22.8504 11.7004 23.6399 11.7004 24.1299 12.1904L26.6699 14.8604C26.7898 14.9803 26.8804 15.1197 26.9404 15.2695C27.009 15.4263 27.0388 15.5835 27.04 15.7402C27.04 15.91 27.0003 16.0699 26.9404 16.2197C26.8104 16.5297 26.5698 16.7704 26.2598 16.9004C26.1 16.9702 25.9401 17 25.7803 17H13.2803C12.5903 17 12.0303 16.44 12.0303 15.75C12.0303 15.06 12.5903 14.5 13.2803 14.5H22.8701L22.3604 13.96C21.8704 13.47 21.8704 12.6804 22.3604 12.1904ZM20.3096 6C20.9996 6 21.5596 6.56 21.5596 7.25C21.5596 7.94 20.9996 8.5 20.3096 8.5H5.25C4.56 8.5 4 7.94 4 7.25C4 6.56 4.56 6 5.25 6H20.3096Z"
                fill={fillColor}
            />
        </Svg>
    );
};

export default FullBurgerIcon;
