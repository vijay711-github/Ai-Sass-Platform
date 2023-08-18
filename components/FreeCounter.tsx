"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constant";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

interface FreeCounterProps {
	apiLimitCount: number;
}

const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div>
			<div className="px-3">
				<Card className="bg-white/10 border-0">
					<CardContent className="py-6">
						<div className="text-center text-sm text-white mb-4 space-y-2">
							<p>
								{apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
							</p>
							<Progress
								className="h-3"
								value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
							/>
						</div>
						<Button variant="premium" className="w-full">
							Upgrade
							<Zap className="w-4 h-4ml-2 fill-white" />
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default FreeCounter;
