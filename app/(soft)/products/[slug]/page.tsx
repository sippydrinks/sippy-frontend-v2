import { ProductDetailsView } from '@/Views';

interface PageProps {
	params: { productName: string };
}

export default function ProductDetailsPage({ params }: PageProps) {
	return <ProductDetailsView />;
}
