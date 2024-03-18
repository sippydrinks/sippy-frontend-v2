import { NextResponse } from 'next/server';

let cache: any[] = [];
const softDrinks = [
	{
		id: 1,
		productName: 'coke zero',
		productSize: '30CL',
		productPrice: 350,
		productImage: '/svgs/coke.svg',
		productQuantity: 104,
		slug: 'coke-zero',
	},
	{
		id: 2,
		productName: 'yoghurt',
		productSize: '50CL',
		productPrice: 700,
		productImage: '/svgs/coke.svg',
		productQuantity: 35,
		slug: 'yoghurt',
	},
	{
		id: 3,
		productName: 'chivita',
		productSize: '35CL',
		productPrice: 800,
		productImage: '/svgs/coke.svg',
		productQuantity: 0,
		slug: 'chivita',
	},
	{
		id: 4,
		productName: 'cocacola',
		productSize: '30CL',
		productPrice: 350,
		productImage: '/svgs/coke.svg',
		productQuantity: 104,
		slug: 'cocacola',
	},
	{
		id: 5,
		productName: 'fayrouz',
		productSize: '50CL',
		productPrice: 700,
		productImage: '/svgs/coke.svg',
		productQuantity: 35,
		slug: 'fayrouz',
	},
	{
		id: 6,
		productName: 'amstel malt',
		productSize: '35CL',
		productPrice: 800,
		productImage: '/svgs/coke.svg',
		productQuantity: 10,
		slug: 'amstel-malt',
	},
	{
		id: 7,
		productName: 'chi exotic',
		productSize: '30CL',
		productPrice: 350,
		productImage: '/svgs/coke.svg',
		productQuantity: 104,
		slug: 'chi-exotic',
	},
	{
		id: 8,
		productName: 'Sprite',
		productSize: '50CL',
		productPrice: 700,
		productImage: '/svgs/coke.svg',
		productQuantity: 35,
		slug: 'sprite',
	},
	{
		id: 9,
		productName: 'Fanta',
		productSize: '35CL',
		productPrice: 800,
		productImage: '/svgs/coke.svg',
		productQuantity: 10,
		slug: 'fanta',
	},
	{
		id: 10,
		productName: 'Hollandia',
		productSize: '30CL',
		productPrice: 350,
		productImage: '/svgs/coke.svg',
		productQuantity: 104,
		slug: 'hollandia',
	},
	{
		id: 11,
		productName: 'Vitamilk',
		productSize: '50CL',
		productPrice: 700,
		productImage: '/svgs/coke.svg',
		productQuantity: 35,
		slug: 'vitamilk',
	},
	{
		id: 12,
		productName: 'smoothie',
		productSize: '35CL',
		productPrice: 800,
		productImage: '/svgs/coke.svg',
		productQuantity: 10,
		slug: 'smoothie',
	},
	{
		id: 13,
		productName: 'cocktails',
		productSize: '35CL',
		productPrice: 1500,
		productImage: '/svgs/coke.svg',
		productQuantity: 10,
		slug: 'cocktails',
	},
	{
		id: 14,
		productName: 'milkshake',
		productSize: '35CL',
		productPrice: 1200,
		productImage: '/svgs/coke.svg',
		productQuantity: 10,
		slug: 'milkshake',
	},
	{
		id: 15,
		productName: 'pepsi',
		productSize: '35CL',
		productPrice: 500,
		productImage: '/svgs/coke.svg',
		productQuantity: 10,
		slug: 'pepsi',
	},
	{
		id: 16,
		productName: 'tonic',
		productSize: '35CL',
		productPrice: 800,
		productImage: '/svgs/coke.svg',
		productQuantity: 10,
		slug: 'tonic',
	},
];
const alcholicDrinks = [
	{
		id: 1,
		productName: 'henessy',
		productSize: '30CL',
		productPrice: 350,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 104,
		slug: 'henessy',
	},
	{
		id: 2,
		productName: 'jameson',
		productSize: '50CL',
		productPrice: 700,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 35,
		slug: 'jameson',
	},
	{
		id: 3,
		productName: 'moet',
		productSize: '35CL',
		productPrice: 800,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 0,
		slug: 'moet',
	},
	{
		id: 4,
		productName: 'remy martins',
		productSize: '30CL',
		productPrice: 350,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 104,
		slug: 'remy-martins',
	},
	{
		id: 5,
		productName: 'smirnoff',
		productSize: '50CL',
		productPrice: 700,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 35,
		slug: 'smirnoff',
	},
	{
		id: 6,
		productName: 'baileys',
		productSize: '35CL',
		productPrice: 800,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 10,
		slug: 'baileys',
	},
	{
		id: 7,
		productName: 'amarula',
		productSize: '30CL',
		productPrice: 350,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 104,
		slug: 'amarula',
	},
	{
		id: 8,
		productName: '8pm',
		productSize: '50CL',
		productPrice: 700,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 35,
		slug: '8pm',
	},
	{
		id: 9,
		productName: 'azul',
		productSize: '35CL',
		productPrice: 800,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 10,
		slug: 'azul',
	},
	{
		id: 10,
		productName: 'captain morgan',
		productSize: '30CL',
		productPrice: 350,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 104,
		slug: 'captain-morgan',
	},
	{
		id: 11,
		productName: 'four cousins',
		productSize: '50CL',
		productPrice: 700,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 35,
		slug: 'four-cousins',
	},
	{
		id: 12,
		productName: 'tequila',
		productSize: '35CL',
		productPrice: 800,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 10,
		slug: 'tequila',
	},
	{
		id: 13,
		productName: 'captain jack',
		productSize: '100CL',
		productPrice: 500,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 104,
		slug: 'captain-jack',
	},
	{
		id: 14,
		productName: 'mocktail',
		productSize: '100CL',
		productPrice: 500,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 104,
		slug: 'mocktail',
	},
	{
		id: 15,
		productName: 'johnny walker',
		productSize: '100CL',
		productPrice: 500,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 104,
		slug: '',
	},
	{
		id: 16,
		productName: 'martini',
		productSize: '100CL',
		productPrice: 500,
		productImage: '/svgs/alcohol_icon.svg',
		productQuantity: 104,
		slug: '',
	},
];

export async function GET(request: Request) {
	try {
		const url = new URL(request.url);
		const drinkType = url.searchParams.get('drinkType');
		const drinkArr = drinkType === 'soft' ? softDrinks : alcholicDrinks;
		cache = drinkArr;
		return NextResponse.json({ data: cache }, { status: 201 });
	} catch (error: any) {
		return new Response(`Webhook error: ${error.message}`, {
			status: 400,
		});
	}
}
