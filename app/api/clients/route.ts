import { NextResponse } from 'next/server';
import { allClients } from './allClients';

export async function GET() {
  return NextResponse.json(allClients);
}
