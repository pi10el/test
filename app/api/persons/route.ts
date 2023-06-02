import { allPersons } from './allPersons'
import { NextResponse } from 'next/server'

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('email')
  let currentPersons = allPersons
  if (query) {
    currentPersons = allPersons.filter((person) =>
      person.email.toLocaleLowerCase().includes(query.toLowerCase())
    )
  }

  return new NextResponse(JSON.stringify(currentPersons), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}
