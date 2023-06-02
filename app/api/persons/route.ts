import { allPersons } from './allPersons';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('email');
  let currentPersons = allPersons;
  if (query) {
    currentPersons = allPersons.filter((person) =>
      person.email.toLocaleLowerCase().includes(query.toLowerCase()),
    );
  }

  return NextResponse.json(JSON.stringify(currentPersons));
}
