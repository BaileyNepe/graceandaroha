import styles from '@/styles/ServicesCard.module.css';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export interface Props {
  service: { title: string; description?: string; price?: string };
}

const ServicesCard = ({ service }: Props) => {
  const { title = 'Not Found', description = 'Not Found', price = '$N/A' } = service;
  return (
    <Card className={styles.card}>
      <Card.Title className={styles.title}>{title}</Card.Title>

      <Card.Body className={styles.body}>
        <div className={styles['body-text']}>
          <ReactMarkdown className={styles.description} children={description} />
        </div>
        <div>
          <Card.Text className={styles.cost}>{price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServicesCard;
