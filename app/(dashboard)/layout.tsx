import Navbar from "@/components/Navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full relative">
			<div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-gray-900">
				<div className="text-white">Hello sidebar</div>
			</div>
			<main className="md:pl-72">
                <Navbar/>
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
