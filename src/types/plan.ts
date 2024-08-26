export type BillingMethod = "yearly" | "monthly"

export type Plan = {
    type: string | undefined,
    price: number,
}

export type PlanObject = {
    id: number,
    type: string,
    price: number,
    logo: string
}