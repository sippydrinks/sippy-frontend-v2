import { NextResponse } from 'next/server';

const users = [
	{ id: 1, name: 'John Doe', username: 'john_doe', email: 'john@example.com' },
	{ id: 2, name: 'Jane Smith', username: 'jane_smith', email: 'jane@example.com' },
	{ id: 3, name: 'Alice Johnson', username: 'alice_johnson', email: 'alice@example.com' },
	{ id: 4, name: 'Bob Williams', username: 'bob_williams', email: 'bob@example.com' },
	{ id: 5, name: 'Sarah Brown', username: 'sarah_brown', email: 'sarah@example.com' },
	{ id: 6, name: 'Michael Lee', username: 'michael_lee', email: 'michael@example.com' },
	{ id: 7, name: 'Emily Davis', username: 'emily_davis', email: 'emily@example.com' },
	{ id: 8, name: 'David Martinez', username: 'david_martinez', email: 'david@example.com' },
	{ id: 9, name: 'Jessica Rodriguez', username: 'jessica_rodriguez', email: 'jessica@example.com' },
	{ id: 10, name: 'Daniel Taylor', username: 'daniel_taylor', email: 'daniel@example.com' },
];

export async function GET(request: Request) {
	const url = new URL(request.url);
	const email = url.searchParams.get('email');

	if (!email || typeof email !== 'string') {
		return new Response(`error:  Email parameter is missing or invalid`, {
			status: 401,
		});
	}

	try {
		const user = users.find((user) => user.email === email);
		if (user) {
			return NextResponse.json({ data: user }, { status: 201 });
		} else {
			return NextResponse.json({ data: null }, { status: 401 });
		}
	} catch (error: any) {
		return new Response(`Webhook error: ${error.message}`, {
			status: 400,
		});
	}
}
