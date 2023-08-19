"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("47a56f7e-6abb-4f27-95ae-98cebbccb6cb");
	}, []);

	return null;
};

export default CrispChat;
