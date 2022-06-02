import styles from '@/styles/Layout.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Footer } from './Footer';
import { Header } from './Header';

export interface Props {
  title?: string;
  keywords?: string;
  description?: string;
  sticky?: boolean;
  children: JSX.Element[] | JSX.Element;
  image?: string;
}

const Layout = ({ title, keywords, description, sticky = true, children, image }: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://graceandaroha.co.nz${router.asPath}`} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className={styles.layout}>
        <Header stickyHeader={sticky} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: 'Grace & Aroha',
  description: 'With Grace & Aroha, children and their families are cared for through loving, caring, respectful relationships, in order to feel happy, safe and to be able to grow and learn together.',
  keywords: 'postpartum, new mum, childcare, Grace and Aroha Educare,Grace and Aroha,Grace & Aroha,Homebased,Childcare,education,daycare,whanau,love,family,home-based,ECE,daycare,best childcare',
  image: 'https://graceandaroha.co.nz/images/beach-walking.jpg',
};

export default Layout;
