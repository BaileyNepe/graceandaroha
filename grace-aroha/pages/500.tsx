import Layout from '@/components/Layout';
import styles from '@/styles/Error.module.css';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <Layout title="Server Error" sticky={false}>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          500
        </h1>
        <h4>Server Error</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
