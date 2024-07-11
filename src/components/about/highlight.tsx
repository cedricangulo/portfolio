import { GeistMono } from "geist/font/mono";
import React from "react";

type Props = {
	children: React.ReactNode;
};

function Highlight({ children }: Props) {
	return <span className={`${GeistMono.className} highlight`}>{children}</span>;
}

export default Highlight;
