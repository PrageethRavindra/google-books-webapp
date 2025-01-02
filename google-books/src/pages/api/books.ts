import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

  try {
    const response = await axios.get(URL);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books data' });
  }
}
