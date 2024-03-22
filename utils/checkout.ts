export const paymentOptions = [
	{
		name: 'Pay with card, bank transfer or USSD',
		type: 'fiat_payment',
		id: '1',
		disabled: false,
	},
	{
		name: 'Pay on delivery',
		type: 'fiat_payment',
		id: '2',
		disabled: false,
	},
	{
		name: 'Pay with crypto',
		type: 'crypto_payment',
		id: '3',
		disabled: true,
	},
];

export const shippingOptions = [
	{
		value: 'select_date_and_time',
		label: 'Select date and time',
		id: '1',
	},
	{
		value: 'immediately',
		label: 'Immediately',
		id: '2',
	},
];

export const timeOptions = [
	{
		id: 1,
		label: '09:00am',
		value: '09:00am',
	},
	{
		id: 2,
		label: '10:00am',
		value: '10:00am',
	},
	{
		id: 3,
		label: '11:00am',
		value: '11:00am',
	},
	{
		id: 4,
		label: '12:00pm',
		value: '12:00pm',
	},
	{
		id: 4,
		label: '01:00pm',
		value: '01:00pm',
	},
	{
		id: 5,
		label: '02:00pm',
		value: '02:00pm',
	},
	{
		id: 6,
		label: '03:00pm',
		value: '03:00pm',
	},
	{
		id: 7,
		label: '04:00pm',
		value: '05:00pm',
	},
	{
		id: 8,
		label: '05:00pm',
		value: '05:00pm',
	},
];
