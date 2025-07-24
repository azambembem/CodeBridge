import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function getInitials(name: string): string {
	if (!name) return "";

	const words = name
		.trim()
		.split(/\s+/) // split by any whitespace
		.filter(Boolean);

	if (words.length === 1) {
		return words[0].charAt(0).toUpperCase();
	}

	return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
}

type GENERATE_ARRAY = (T: number) => Array<{ id: string }>;

export const generateArray: GENERATE_ARRAY = (length) => {
	return Array.from({ length }).map(() => ({ id: v4() }));
};
