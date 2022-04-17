import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import { Header } from './Header';
import { Footer } from './Footer';

export interface Props {
  title?: string;
  keywords?: string;
  description?: string;
  sticky?: boolean;
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ title, keywords, description, sticky = true, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
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
  description: 'Here to help',
  keywords: 'postpartum, new mum, childcare',
};

export default Layout;
