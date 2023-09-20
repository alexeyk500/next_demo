import { Awaitable, User } from 'next-auth';
import { OAuthConfig } from 'next-auth/providers';
import Credentials, { CredentialsConfig } from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authConfig: { pages: {}; providers: (OAuthConfig<any> | CredentialsConfig<any>)[] } = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials: any): Awaitable<User | null> {
        console.log('credentials', credentials);
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        if (credentials.password === 'a500') {
          return {
            name: 'Alexey Stepanov',
            email: 'alexeyk500@gmail.com',
          } as User;
        }
        return null;
      },
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      } as any,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
