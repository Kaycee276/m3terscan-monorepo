import { create } from "zustand";

interface MapStore {
	mapCenter: { lat: number; lng: number } | null;
	setMapCenter: (coords: { lat: number; lng: number }) => void;
}

export const useMapStore = create<MapStore>((set) => ({
	mapCenter: null,
	setMapCenter: (coords) => set({ mapCenter: coords }),
}));
