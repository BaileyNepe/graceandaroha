import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import styles from '@/styles/BlogPage.module.css';
import { Container } from 'react-bootstrap';

const BlogPage = ({ events }) => {
  return (
    <Layout title="Blog | Grace & Aroha" sticky={false}>
      <Container>
        <h1 className={styles.header}>Blog</h1>
        {events.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <p>{post.name}</p>
          </Link>
        ))}
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/blog`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
};
