import './globals.css';
import Providers from '../../components/darkTheme/Provider';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import GuestNavBar from '../../components/Navbar/GuestNavbar';
import PrelineScript from './components/PrelineScript';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};


interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}


const locales = ['en', 'ar'];

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  if (!locales.includes(locale as any)) notFound();
  const t = useTranslations('');
  return (
    <html lang={locale}>
      <body>
        <Providers>
          <GuestNavBar />
          {children}
        </Providers>
      </body>
      <PrelineScript />
    </html>
  );
}
