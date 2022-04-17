import { Card } from 'react-bootstrap';
import styles from '@/styles/ServicesCard.module.css';

export interface Props {
  service: { title: string; description?: [string]; cost: string; link?: { link: string; text: string } };
}

const ServicesCard = ({ service }: Props) => {
  const { title, description, cost, link } = service;
  return (
    <Card className={styles.card}>
      <Card.Title className={styles.title}>{title}</Card.Title>

      <Card.Body className={styles.body}>
        <div className={styles['body-text']}>
          {description?.map((text, index) => (
            <Card.Text className={styles.description} key={index}>
              {text}
            </Card.Text>
          ))}
          {link && (
            <Card.Text className={styles.link}>
              <a href={link.link} target="_blank" className={styles.pdf}>
                {link.text}
              </a>
            </Card.Text>
          )}
        </div>
        <div>
          <Card.Text className={styles.cost}>{cost}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServicesCard;
