import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import ReactMarkdown from 'react-markdown';

import styles from '@/styles/Post.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';

interface Props {
  postDetails: {
    data: { id: string; attributes: { name: string; slug: string; date: string; description: string; image: { data: { attributes: { url: string } } } } };
  };
}

const PostPage = ({ postDetails }: Props) => {
  const post = postDetails?.data?.attributes;
  return (
    <Layout sticky={false} title={`${post.name} | Grace and Aroha`} description={post.description.slice(0, 150)} image={post?.image ? post.image.data.attributes.url : '/images/beach-walking.jpg'}>
      <Container className={styles.container}>
        <div className={styles['link-container']}>
          <Link href="/blog">
            <a className="btn banner-button-secondary">
              <BsArrowLeft /> Back to Blog
            </a>
          </Link>
        </div>

        <div
          className={styles.img}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image src={post?.image ? post.image.data.attributes.url : '/images/beach-walking.jpg'} height={400} width={700} />
        </div>
        <h1 className={styles.title}>{post?.name}</h1>
        <ReactMarkdown className={styles.text} children={post?.description} />
      </Container>
    </Layout>
  );
};

export default PostPage;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/posts`);
  const json = await res.json();
  const posts = json.data;

  const paths = posts.map((post: any) => ({
    params: { slug: `${post.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const res = await fetch(`${API_URL}/api/posts/${slug}?populate=*`);
  const posts = await res.json();

  return {
    props: {
      postDetails: posts,
    },
    revalidate: 1,
  };
};
