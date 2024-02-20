export interface OrderDetailsCardProps {
    productImg: string
    productName?: string
    productSize?: string
    productPrice?: number
}

export interface OrdersCardProps {
    date?: string
    orderNum?: number
    totalPrice?: number
    orderStatus?: string
    productImg1: string
    productImg2: string
    productImg3: string
    productImg4: string
    isReview?: boolean
}

export interface OrderStateProps {
    orderStatus?: string
}

export interface AccountProps {
    children?: React.ReactNode
    tabActive?: number
}