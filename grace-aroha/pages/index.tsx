import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Carousel, Container } from 'react-bootstrap';

import { testimonials } from 'data/testimonials';
import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
        <div className="banner">
          <div className="banner-slide" style={{ backgroundImage: `url( 'images/beach-walking.jpg' )` }}>
            <div className="container-wide">
              <div className="banner-slide__content">
                <h1 className="main-title heading__title">Aroha mai, aroha atu</h1>
                <p className="title-paragraph inner-section-margin">With Grace & Aroha, parenting can take on a whole new lens. One of understanding, patience, resilience, and most of all kindness to yourself as a parent.</p>
                <a href="contact" className="btn btn-secondary banner-btn">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="banner__tint"></div>
          </div>
        </div>
      </section>
      <section className="container primary-content section-margin">
        <h2 className="section-margin title-heading">Welcome to Grace & Aroha</h2>
        <p className="inner-section-margin">
          At Grace & Aroha Ltd, our approach to care and learning is indeed grace and aroha; we strive to respectfully meet the needs of children and whānau with care and love, while recognising the potential each child has and supporting their
          natural growth and development. Children need to be trusted, to lead, play, explore, grow. Whānau should be supported with care as they raise their children. The three underlying principles of our kaupapa are love, care and respect.
        </p>
        <p className="inner-section-margin">
          Neuroscience tells us that the brain needs to be in a state of well-being before it can be ready for learning. The warm environment of love and genuine connection we model at Grace & Aroha Ltd enhances every child's learning and
          development.{' '}
        </p>
        <p className="inner-section-margin">
          When we show respect to children through listening and acknowledging them, their thoughts and feelings, they learn their worth and can begin to understand that every person is deserving of respect. We will share our lens of viewing the
          child in a holistic way, using love, care and respect providing a strong, healthy foundation for them to build all other relationships throughout their life.{' '}
        </p>
        <p className="inner-section-margin">We can guide you to understand this Kaupapa so that you gain confidence in your parenting and empower your child to be the confident and competent person they were born to be.</p>

        <a href="contact" className="btn banner-button-secondary section-margin">
          Call us now
        </a>
      </section>

      <section className="positioning section-margin">
        <div className="row g-0">
          <div className="col-md-6 backgrounds">
            <a href="our-story" className="grid__block js-tilt">
              <div className="content tint">
                <Image className="image-scale" src="/images/rocks-min.jpg" layout="responsive" height={50} width={100} />
                <h3 className="on-top">Our Story</h3>
              </div>
            </a>
          </div>
          <div className="col-md-6 backgrounds">
            <a href="services" className="grid__block js-tilt">
              <div className="content tint">
                <Image className="image-scale" src="/images/abd.jpg" layout="responsive" height={50} width={100} />
                <h3 className="on-top">Services</h3>
              </div>
            </a>
          </div>
          <div className="col-md-6 backgrounds">
            <a href="find-childcare" className="grid__block js-tilt">
              <div className="content tint">
                <Image className="image-scale" src="/images/rock-min.jpg" layout="responsive" height={50} width={100} />
                <h3 className="on-top">Find Childcare</h3>
              </div>
            </a>
          </div>
          <div className="col-md-6 backgrounds">
            <a href="contact" className="grid__block js-tilt">
              <div className="content tint">
                <Image className="image-scale" src="/images/j-floor.JPG" layout="responsive" height={50} width={100} />
                <h3 className="on-top">Contact Us</h3>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="testimonials section-margin">
        <h2>Testimonials</h2>
        <Carousel
          className="carousel slide"
          data-bs-ride="carousel"
          pause="hover"
          interval={10000}
          touch={true}
          nextIcon={
            <span aria-hidden="true" className="carousel-control-next-icon carousel-fixings">
              &#10095;
            </span>
          }
          prevIcon={
            <span aria-hidden="true" className="carousel-control-prev-icon carousel-fixings">
              &#10094;
            </span>
          }
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              {testimonial.text.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              <em>- {testimonial.person}</em>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      <section className="padding">
        <Container>
          <div className="row g-0">
            <div className="col-lg-6 margining">
              <Image className="bd-placeholder-img" width="140" height="140" src="/images/kaupapa.png" />
              <h2 className="heading-section">Kaupapa</h2>
              <p>Our role-modelling of love, care and respect with our children provides a strong, healthy foundation for them to build all other relationships throughout their life.</p>
              <p>
                <a className="btn banner-button-secondary centering" href="our-story">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-6 margining">
              <Image className="bd-placeholder-img" width="140" height="140" src="/images/hands.png" />
              <h2 className="heading-section">Whānau</h2>
              <p>Whānau should be supported with care as they raise their children. The three underlying principles of our kaupapa are love, care and respect.</p>
              <p>
                <a className="btn banner-button-secondary centering" href="services">
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
