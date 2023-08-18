import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const apiLimitCount = await getApiLimitCount();

	return (
		<div className="h-full relative">
			<div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[80] bg-gray-900">
				<Sidebar apiLimitCount={apiLimitCount} />
			</div>
			<main className="md:pl-72">
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
