export const services: { title: string; description?: [string]; cost: string; link?: { link: string; text: string } }[] = [
  {
    title: 'New mum support',
    description: ['Anything and everything. Overwhelmed? Want an extra hand or need to talk? No family support? On your own for the first time with baby? Pre-bookings essential. Half and full days available.'],
    cost: '$30 per hour',
  },
  {
    title: 'The whole package - Sleep support',
    link: {
      link: 'https://graceandaroha.s3.ap-southeast-2.amazonaws.com/The+whole+package-compressed.pdf',
      text: 'Please click this link for further information about this package.',
    },
    cost: '$600',
  },
  {
    title: 'Sleep support',
    cost: '$150',
    description: ['Two hour face to face initial meeting to discuss how we can help you to help your baby to sleep. This will be deducted from the total should you chose to continue with the “whole package”.'],
  },
  {
    title: 'Māmā and pēpi plus one',
    description: [
      'This is a six week course, designed to be shared with a friend and offers three hours support each week. Spend one hour reflecting on the week just been, the next 90 minutes having some “me” time while Jay cares for your babies, returning for a 30 minute catch up to plan for the week ahead.',
    ],
    cost: '$600',
    link: {
      link: 'https://graceandaroha.s3.ap-southeast-2.amazonaws.com/Mama+and+pe%CC%84pi+-compressed.pdf',
      text: 'Click for further details',
    },
  },
  {
    title: 'Tips for bottle feeding',
    description: ['One hour meeting where I will show you how to make a bottle, clean and store hygienically, offer tips to help baby take a bottle, create a daily routine.'],
    cost: '$40',
  },

  {
    title: 'Terrific 2’s initial meeting',
    cost: '$80',
    description: [
      'Two hour face to face meeting to discuss understanding toddlers: creating a yes environment, providing open ended opportunities, enjoying nature, learning self-help skills. How to communicate with your toddler, language acquisition, toilet learning, to nap or not to nap, respectful parenting with boundaries.',
    ],
  },
  {
    title: 'Terrific 2’s Follow up meeting',
    cost: '$30',
    description: ['Follow up one hour meeting to reflect or offer further support.'],
  },
];
