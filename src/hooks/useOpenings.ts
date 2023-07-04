import { allOpenings } from "@/services/openings";
import { filterByState } from "@/utils";
import { useQuery } from "react-query";

export function useOpenings() {
    const { data, isLoading } = useQuery(['openings'], () => allOpenings())
    return { data, isLoading }
}

export function useFilteredOpenings(filter: string) {
    const { data, isLoading } = useQuery(['openings', filter], () => allOpenings())
    const dataFiltered = filterByState(data, filter)
    return { dataFiltered, isLoading }
}