export type PlanType = "arcade" | "advanced" | "pro" | undefined;

export type PlanObject = {
    id: number,
    type: string,
    price: number,
    logo: string
}