import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import { services } from 'data/services';
import ServicesCard from '@/components/ServicesCard';

import styles from '@/styles/Services.module.css';

const ServicesPage: NextPage = () => {
  return (
    <Layout>
      <section className="banner">
        <div className="banner-slide-subpages" style={{ backgroundImage: `url( '/images/abd.jpg' )` }}>
          <div className="container-wide"></div>
          <div className="banner__tint-sub"></div>
        </div>
      </section>
      <section className="container section-margin">
        <h1 className="section-margin title-heading">Services</h1>
        <p>
          We believe that you are the most important person in your child’s life. Our knowledge and wisdom has been gained through years of experiencing our own children plus many others who have passed through the doors of early childhood centres
          where we have worked. It is with this insight that we are able to see things clearly and support you through times that may be challenging. This can be as a new parent to a newborn or with a toddler who is reaching the desire to be
          autonomous but still too little to do it alone through to the young child who has developed their own opinions and want to let you know all about it.
        </p>
        <p>
          Parenting is not a “one size fits all” approach and for this reason we believe that spending time with you in your home or mine, supporting you to see your child through a different lens, creating healthy habits, and giving you emotional
          support face to face is how we serve you. Getting to know you and your child is how solutions can be found to the challenges often faced.
        </p>
        <p>Although there are some amazing services available already in the Waikato, it may either be too hard to get a space or it is a short term service. This may help some, but not all.</p>
        <p>
          If you are experiencing any type of struggles, you are not alone! No one tells you that breastfeeding is not always easy, that sleepless nights will leave your brain foggy and that those baby blues are completely normal and yet no easier to
          deal with. Our passion is to help you enjoy those small moments, to see your child as a whole person, and to encourage happy and healthy relationships in your family.
        </p>
        <p>Take a look at our list of services. If there is something else you would like to discuss please send us a message or give Jay a call. We want this to be accessible for all, so please reach out no matter what your situation.</p>
      </section>

      <section className="container section-margin ">
        <hr className="featurette-divider" />
        <div className={styles.grid}>
          {services?.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
