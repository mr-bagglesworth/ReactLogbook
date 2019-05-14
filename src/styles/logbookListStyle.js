import styled from "styled-components";
import styleVars from "./styleVars";

const { colors, spacing, fonts, fontSize, fontWeight } = styleVars;

const ListStyle = styled.ul`
  margin-top: ${spacing.xLarge};
  li {
    width: 100%;
  }
`;

const ListButton = styled.button`
  user-select: none;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  font-family: ${fonts.main};
  font-size: ${fontSize.small};
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  border: ${spacing.xSmall} solid transparent;
  border-radius: ${spacing.xSmall};
  padding: ${spacing.med} ${spacing.large};
  background-color: transparent;
  &:hover {
    background-color: ${colors.lightGrey};
    border-color: ${colors.midGrey};
  }
  &:focus {
    outline: none;
  }
  span:nth-child(1) {
    margin-right: ${spacing.large};
    font-weight: ${fontWeight.med};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 2;
  }
  span:nth-child(2) {
    margin-right: ${spacing.large};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 3;
  }
  span:nth-child(3) {
    margin-left: ${spacing.large};
    font-weight: ${fontWeight.bold};
    margin-left: auto;
    display: flex;
    align-items: center;
  }
  svg {
    align-self: flex-end;
  }
`;

export { ListStyle, ListButton };