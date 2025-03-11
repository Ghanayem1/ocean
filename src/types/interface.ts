export interface Client{
    imageUrl: string,
    alt: string
} 
export interface Features{
    imageUrl: string,
    title: string,
    content: string
} 

export interface fetureBlck extends Features{
    isReversed?:boolean
}

export interface Pricing {
    title:string,
    description:string,
    monthlyPrice:number,
    annuallyPrice:number,
    features:string[],
    isMostPopular?:boolean,
    glowposition?:'right' | 'left'
}

export interface Testimonials{
    imageUrl:string ,
    name:string,
    role:string,
    review:string
}

export interface FooterColumn{
    title:string,
    Links:string[]
}

export type PricingMode = "monthly" | "annually"