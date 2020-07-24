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