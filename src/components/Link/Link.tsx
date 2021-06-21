import React from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { LinkProps } from "./types";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return <StyledLink {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: "primary",
};

export default Link;
