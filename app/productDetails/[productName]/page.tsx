import { MainLayout } from "@/layout"
import { ProductDetailsView } from "@/Views"

export interface Props {
    productName: string
}

export default function ProductDetails({ productName }: Props) {
    return (
        <MainLayout>
            <ProductDetailsView />
            <h1>Name: {productName}</h1>
        </MainLayout>
    )
}