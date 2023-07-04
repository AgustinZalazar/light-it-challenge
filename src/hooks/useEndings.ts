import { allEndings } from "@/services/endings";
import { filterByState } from "@/utils";
import { useQuery } from "react-query";

export function useEndings() {
    const { data, isLoading } = useQuery(['endings'], () => allEndings())
    return { data, isLoading }
}

export function useFilteredEndings(filter: string) {
    const { data, isLoading } = useQuery(['endings', filter], () => allEndings())
    const dataFiltered = filterByState(data, filter)
    return { dataFiltered, isLoading }
}