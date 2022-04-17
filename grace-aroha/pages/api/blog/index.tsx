import { NextApiRequest, NextApiResponse } from 'next';

const { events } = require('./data.json');

type Data = {
  message: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'GET') {
    res.status(200).json(events);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
