import { NextRequest, NextResponse } from 'next/server';
import jwt from "jsonwebtoken";

let users = [
    { username: 'admin', password: 'password' },
    { username: 'user1', password: 'pass123' }
];

export async function POST(request:NextRequest) {
    const { username, password } = await request.json();

    
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
        const token = jwt.sign({
            username: user.username,
            extraInformation: 'additionalData'
        }, 'your_secret_key', { expiresIn: '1h' });
        response.cookies.set('auth_token', token, { httpOnly: true });
        return response;
    } else {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
}