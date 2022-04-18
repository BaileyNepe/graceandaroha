import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/PostPreview.module.css';
import { Card } from 'react-bootstrap';

const PostPreview = ({ post }) => {
  return (
    <Card className={styles.card}>
      <Link href={`/blog/${post.id}`}>
        <Card.Body>
          <div className={styles.link}>
            <div className={styles.img}>
              <Image src={post.attributes.image ? post.attributes.image.data.attributes.url : '/images/beach-walking.jpg'} height={30} width={50} layout="responsive" />
            </div>
            <h2 className={styles.title}>{post.attributes.name}</h2>
            <p>
              {post.attributes.description.slice(0, 150)}
              <a className={styles.link}> ... continue reading</a>
            </p>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default PostPreview;
