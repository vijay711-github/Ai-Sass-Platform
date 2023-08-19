import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const apiLimitCount = await getApiLimitCount();
	const isPro = await checkSubscription();
	return (
		<div className="h-full relative">
			<div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0  bg-gray-900">
				<Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
			</div>
			<main className="md:pl-72">
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
