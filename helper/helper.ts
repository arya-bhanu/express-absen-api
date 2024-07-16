export function excludeKeys(obj: {}, excludedKey: string[]) {
	return Object.fromEntries(
		Object.entries(obj).filter(([key]) => !excludedKey.includes(key))
	);
}

