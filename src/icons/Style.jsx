import React from "react";
import { colors } from "../styles/styleVars";

export const Style = ({ style }) => {
  // paths
  const paths = {
    success: (
      <>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </>
    ),
    fail: (
      <>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </>
    ),
    unset: (
      <>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
      </>
    ),
  };
  // success or fail
  const success = style.match(/(O\/S|flash|G\/U|RP|rpt|x)/) !== null ? true : false;
  const fail = style.match(/(dog|dnf)/) !== null ? true : false;

  let colour, icon;

  // fail
  if (fail) {
    colour = `${colors.red}`;
    icon = paths.fail;
  }
  // success
  else if (success) {
    icon = paths.success;
    if (style.split(" ")[0] == "TR" || style.split(" ")[0] == "2nd") {
      colour = `${colors.midBlue}`;
    } else {
      colour = `${colors.green}`;
    }
  }
  // unset
  else {
    colour = `${colors.darkGrey}`;
    icon = paths.unset;
  }

  return (
    <svg
      aria-labelledby="style"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill={colour}
    >
      <title id="style" lang="en">
        You {fail ? "failed" : "succeeded"} on this attempt
      </title>
      {icon}
    </svg>
  );
};
