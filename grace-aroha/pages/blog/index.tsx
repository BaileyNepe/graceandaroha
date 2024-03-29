import Layout from '@/components/Layout';
import PostPreview from '@/components/PostPreview';
import { API_URL } from '@/config/index';
import styles from '@/styles/BlogPage.module.css';
import { Container } from 'react-bootstrap';

interface Props {
  posts: [
    {
      id: string;
      attributes: {
        name: string;
        slug: string;
        description: string;
        image: { data?: { attributes: { url: string } } };
        publishedAt: string;
      };
    }
  ];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <Layout title="Blog | Grace & Aroha">
      <section className="banner">
        <div className="banner-slide-subpages banner-our-story" style={{ backgroundImage: `url( 'images/rock-min.jpg' )` }}>
          <div className="container-wide"></div>
          <div className="banner__tint-sub"></div>
        </div>
      </section>
      <Container>
        <h1 className={styles.header}>Blog</h1>
        <div className={styles.grid}>{posts?.length > 0 ? posts.sort((a, b) => (a.attributes.publishedAt > b.attributes.publishedAt ? -1 : 1)).map((post, index) => <PostPreview key={index} post={post} />) : <p>No posts...</p>}</div>
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/posts?populate=*`);
  const { data } = await res.json();
  const posts = data;

  return {
    props: { posts },
    revalidate: 1,
  };
};
