import type { NextPage } from 'next';


const ServicesPage: NextPage = () => {
  return <!-- Primary written content -->
  <section class="container section-margin extra-margin__btm">
    <h1 class="section-margin title-heading">Services</h1>
    <p>We believe that you are the most important person in your child’s life. Our knowledge and wisdom has been gained through years of experiencing our own children plus many others who have passed
      through the doors of early childhood centres where we have worked. It is with this insight that we are able to see things clearly and support you through times that may be challenging. This can
      be as a new parent to a newborn or with a toddler who is reaching the desire to be autonomous but still too little to do it alone through to the young child who has developed their own opinions
      and want to let you know all about it.</p>
    <p>Parenting is not a “one size fits all” approach and for this reason we believe that spending time with you in your home or mine, supporting you to see your child through a different lens,
      creating
      healthy habits, and giving you emotional support face to face is how we serve you. Getting to know you and your child is how solutions can be found to the challenges often faced.</p>
    <p>Although there are some amazing services available already in the Waikato, it may either be too hard to get a space or it is a short term service. This may help some, but not all.</p>
    <p>If you are experiencing any type of struggles, you are not alone! No one tells you that breastfeeding is not always easy, that sleepless nights will leave your brain foggy and that those baby
      blues are completely normal and yet no easier to deal with. Our passion is to help you enjoy those small moments, to see your child as a whole person, and to encourage happy and healthy
      relationships in your family.
    </p>
    <p>Take a look at our list of services. If there is something else you would like to discuss please send us a message or give Jay a call. We want this to be accessible for all, so please reach out
      no matter what your situation.</p>
  </section>
  <!-- Sections -->
  <section class="container section-margin extra-margin__btm">
    <hr class="featurette-divider">
    <div class="feature-card">
      <h3 class="padding-30 h6">New mum support</h3>
      <p class="cost">$30 per hour</p>
      <p class="text">Anything and everything. Overwhelmed? Want an extra hand or need to talk? No family support? On your own for the first time with baby? Pre-bookings essential. Half
        and full days
        available.
      </p>

    </div>
    <div class="feature-card">
      <h3 class="padding-30 h6">The whole package - Sleep support</h3>
      <p class="cost">$600</p>
      <p class="text">
        <span style="display: block; margin-top: 1rem;"><a href="https://graceandaroha.s3.ap-southeast-2.amazonaws.com/The-whole-package-compressed.pdf" target="_blank" class="pdf">Please click this
            link for further information about this
            package.</a></span>
      </p>

    </div>

    <div class="feature-card">
      <h3 class="padding-30 h6">Sleep support</h3>
      <p class="cost">$150</p>
      <p class="text">Two hour face to face initial meeting to discuss how we can help you to help your baby to sleep. This will be deducted from the total should you chose to continue
        with the “whole
        package”.
      </p>
    </div>

    <div class="feature-card">
      <h3 class="padding-30 h6">Māmā and pēpi plus one</h3>
      <p class="cost">$600
      </p>
      <p class="text">This is a six week course, designed to be shared with a friend and offers three hours support each week. Spend one hour reflecting on the week just been, the next 90 minutes
        having some “me” time while Jay
        cares for your babies, returning for a 30 minute catch up to plan for the week ahead.
        <span style="display: block; padding-top: 0.7rem;"><a href="https://graceandaroha.s3.ap-southeast-2.amazonaws.com/Mama-and-pe%CC%84pi+-compressed.pdf" target="_blank" class="pdf">Click for
            further details</a></span>
      </p>

    </div>

    <div class="feature-card">
      <h3 class="padding-30 h6">Tips for bottle feeding</h3>
      <p class="cost">$40
      </p>
      <p class="text">One hour meeting where I will show you how to make a bottle, clean and store hygienically, offer tips to help baby take a bottle, create a daily routine.
      </p>
    </div>
    <div class="feature-card">
      <h3 class="padding-30 h6">Terrific 2’s initial meeting </h3>
      <p class="cost">$80</p>
      <p class="text">Two hour face to face meeting to discuss understanding toddlers: creating a yes environment, providing open ended opportunities, enjoying nature, learning self-help
        skills. How
        to communicate with your toddler, language acquisition, toilet learning, to nap or not to nap, respectful parenting with boundaries.
      </p>
    </div>
    <div class="feature-card">
      <h3 class="padding-30 h6">Terrific 2’s Follow up meeting</h3>
      <p class="cost">$30</p>
      <p class="text">Follow up one hour meeting to reflect or offer further support.
      </p>
    </div>
  </section>;
};

export default ServicesPage;

<style>
    @media only screen and (min-width: 30rem) {
      .feature-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: min-content min-content;
        grid-template-areas: 'title cost''text text';
        gap: 0.5rem;
      }

      .cost {
        grid-area: cost;
        justify-self: right;
        font-weight: bold;
        color: black;
      }

      .text {
        font-style: italic;
        grid-area: text;
      }

    }

    .feature-card {

      margin: 2rem 0;
    }

    .cost {
      grid-area: cost;
      justify-self: right;
      font-weight: bold;
      color: black;
    }

    .text {
      font-style: italic;
      grid-area: text;
    }

    .h6 {
      color: #C68A94;
    }

    .pdf {
      color: #596E79;
      transition: 200ms all ease-in;
      text-decoration: underline;
    }

    .pdf:hover {
      color: #869ba7;
    }
  </style>