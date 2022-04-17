import type { NextPage } from 'next';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import styles from '@/styles/OurStory.module.css';
import Layout from '@/components/Layout';

const OurStoryPage: NextPage = () => {
  return (
    <Layout>
      <section className="banner">
        <div className="banner-slide-subpages banner-find-childcare" style={{ backgroundImage: `url( 'images/rocks.jpg' )` }}>
          <div className="container-wide"></div>
          <div className="banner__tint-sub"></div>
        </div>
      </section>
      <section className="primary-cell">
        <Container>
          <h1 className="section-margin title-heading">Our story</h1>
          <p>
            It is with grace and aroha that we should treat ourselves and others. This is no more true than when you become a parent. It’s one of the hardest jobs you’ll ever do. A mixture of emotions and a role not easily defined can often lead to
            exhaustion and a lack of confidence.
          </p>
          <p>
            Jay has spent literally thousands of hours caring for infants and toddlers as an early childhood teacher, she is a parent to two teenagers and delights in the newborn, infant and toddler stage. It is with this passion that Grace & Aroha
            began. Jay wants to be your champion, to empower you and guide you to enjoy all the moments that parenting brings. Someone to be by your side to listen, guide and inspire you to see your baby as a unique and whole person, capable and
            competent from the beginning. Aroha Mai, Aroha Atu. Love received, Love returned.
          </p>
          <p>With a variety of services at affordable prices her hope is that every parent receives the support needed at the beginning of the parenting journey to create a positive and rewarding experience.</p>
        </Container>
      </section>
      <section className={styles.guide}>
        <Container>
          <h2 className="title-heading">Parent Guide</h2>
          <div className={styles.frontside}>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <div className={styles['img-wrapper']}>
                  <Image className={styles['img-fluid']} src="/images/jay-profile.JPG" alt="card image" height={100} width={100} />
                </div>
                <h3 className={styles['card-title']}>Jay Fowles</h3>
              </div>
              <p>
                Jay is a committed and passionate qualified early childhood teacher with a passion for supporting you to create a loving and caring home that encourages optimal learning for your baby. With years of experience working with infants and
                toddlers she is also passionate in supporting whānau through the challenging times at home and offers support, particularly with establishing positive sleep habits and positive behaviour strategies.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default OurStoryPage;
