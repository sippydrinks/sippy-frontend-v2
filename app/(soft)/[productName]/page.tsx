

interface PageProps {
    params: {productName: string}
}

export default function ProductCategory({params}: PageProps) {
    return (
        <h1>Page for {params.productName}</h1>
    )
}