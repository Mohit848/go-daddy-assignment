// src/components/ContentWrapper.js
import React from "react";
import "./contentWrapper.css";

const ContentWrapper = ({ children }) => {
	return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;
