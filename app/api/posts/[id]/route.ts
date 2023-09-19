import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const { id } = params;
  console.log('id', id);

  const secretKey = process.env.SECRET_KEY;
  console.log('secretKey', secretKey);

  const headersList = headers();
  const type = headersList.get('Content-Type');
  console.log('type', type);
  const A500_Header = headersList.get('A500_Header');
  console.log('A500_Header', A500_Header);

  const redirectRoute = headersList.get('redirect');
  if (redirectRoute) {
    console.log(`do redirect to ${redirectRoute}`);
    redirect(redirectRoute);
  }

  const cookiesList = cookies();
  // noinspection TypeScriptValidateTypes
  const a500Cookie = cookiesList.get('a500Cookie')?.value;
  console.log('a500Cookie', a500Cookie);

  return NextResponse.json({ id, type, A500_Header, a500Cookie });
};
