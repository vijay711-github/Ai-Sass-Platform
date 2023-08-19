"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

interface MobileSidebarProps{
	apiLimitCount: number;
	isPro: boolean;
}

const MobileSidebar = ({apiLimitCount=0,isPro=false}:MobileSidebarProps) => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) {
		return null;
	}
	return (
		<Sheet>
			<SheetTrigger>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="p-0">
				<Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
