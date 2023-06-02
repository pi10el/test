import { NextResponse } from 'next/server';
import { allClients } from './allClients';

export function GET() {
  return NextResponse.json(allClients);
}
