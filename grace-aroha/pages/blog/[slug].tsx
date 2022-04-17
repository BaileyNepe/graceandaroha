import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

const PostPage = ({ post }) => {
  return (
    <Layout sticky={false}>
      <div>{post.name}</div>
    </Layout>
  );
};

export default PostPage;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/blog`);
  const posts: string[] = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const res = await fetch(`${API_URL}/api/blog/${slug}`);
  const posts = await res.json();

  return {
    props: {
      post: posts[0],
    },
    revalidate: 1,
  };
};
