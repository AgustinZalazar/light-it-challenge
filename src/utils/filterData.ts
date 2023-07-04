import { Category } from "@/models/category"

export const filterByState = (data: any, filter: string) => {
    return data?.data.filter((item: Category) => item.name.toLocaleLowerCase() == filter)
}