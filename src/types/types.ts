type Address = {
    streetAddress: string
    city: string
    state: string
    zip: string
}

export type TableItem = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    address?: Address
    description?: string
}

export type TableData = Array<TableItem>

export type DatasetSize = "big" | "small";

export type SortDirections = "asc" | "desc";

export type SortConfig = {
    key: string
    direction: SortDirections
}

export type PaginationConfig = {
    pageSize: number
    startIndex: number
}