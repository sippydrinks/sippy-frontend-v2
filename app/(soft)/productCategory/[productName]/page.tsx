import { ProductCategoryView } from "@/Views"


interface PageProps {
    params: {productName: string}
}

export default function ProductCategory({params}: PageProps) {
    return (
        <ProductCategoryView nameOfProduct={params.productName} />
    )
}