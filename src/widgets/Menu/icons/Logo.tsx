import React from "react";

import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return <img width="220px" height="50px" src="/images/logo.png" alt="logo" />;
};

export default Logo;
