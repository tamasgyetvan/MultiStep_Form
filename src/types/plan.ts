export type PlanType = "Arcade" | "Advanced" | "Pro" | undefined;

export type PlanObject = {
    id: number,
    type: string,
    price: number,
    logo: string
}