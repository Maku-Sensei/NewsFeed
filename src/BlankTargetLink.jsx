import React from "react";
import { Link } from "react-router-dom";

function BlankTargetLink(props) {
  return <Link {...props} target="_blank" rel="noopener noreferrer" />;
}

export default BlankTargetLink;
