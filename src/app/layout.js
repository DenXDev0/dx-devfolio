import '@/styles/globals.scss';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';


export const metadata = {
  title: 'DenXDev',
  description: "Hi, I'm Deni! This is where I showcase my work, share open-source projects, and document my coding journey.",
  icons: {
    icon: "/MyPortfolio.svg",
  },
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]
}
 
export default async function RootLayout({ children }) {

  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className='dark'
    >
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
