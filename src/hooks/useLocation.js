import { useMemo } from "react";

export const useLocations = (locations, query) => {
    const searchedLocations = useMemo(() => {
        if (!query) {
            return locations;
        }
        return locations.filter(loc => loc.toLowerCase().includes(query.toLowerCase()))
    }, [query, locations]);

    return searchedLocations;
}