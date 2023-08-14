import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
	return (
		<div className="flex justify-around">
			<div>Dashbaord page(Authorized)</div>
			<div>
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};

export default DashboardPage;
