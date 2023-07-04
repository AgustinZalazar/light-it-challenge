import { allEquipment } from "@/services/equipment";
import { filterByState } from "@/utils";
import { useQuery } from "react-query";

export function useEquipment() {
    const { data, isLoading } = useQuery(['equipment'], () => allEquipment())
    return { data, isLoading }
}

export function useFilteredEquipment(filter: string) {
    const { data, isLoading } = useQuery(['equipment', filter], () => allEquipment())
    const filteredData = filterByState(data, filter)
    return { filteredData, isLoading }
}