import { allLicenses } from './allLicenses';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(allLicenses);
}
