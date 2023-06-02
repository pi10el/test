import { allLicenses } from './allLicenses'
import { NextResponse } from 'next/server'

export function GET(req: Request) {
  return new NextResponse(JSON.stringify(allLicenses), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}
