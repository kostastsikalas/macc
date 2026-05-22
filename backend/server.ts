import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS for Next.js frontend running on port 3000
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Type definition for Article
interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  readTime: string;
}

// Mock News Articles
const mockArticles: Article[] = [
  {
    id: 'fstp-launch-2026',
    title: 'FSTP Launching Event: Accelerating Agrofood Innovation',
    category: 'MACC Events',
    date: 'May 18, 2026',
    summary: 'The Mediterranean Agrofood Competence Center (MACC) officially launched the Financial Support to Third Parties (FSTP) program, granting €1.2M in funding for innovative agricultural projects.',
    readTime: '4 min read'
  },
  {
    id: 'new-cap-reforms',
    title: 'Navigating the New CAP: Digital Transition in Agriculture',
    category: 'Agricultural Policy',
    date: 'April 29, 2026',
    summary: 'Understanding the key pillars of the Common Agricultural Policy (CAP) reforms. How precision farming and smart technologies help Cretan farmers achieve compliance and premium pricing.',
    readTime: '6 min read'
  },
  {
    id: 'elevate-greece-award',
    title: 'MACC Awarded top Agro-Tech Accelerator status by Elevate Greece',
    category: 'Accolades',
    date: 'March 15, 2026',
    summary: 'In recognition of its outstanding contribution to the startup ecosystem, MACC has been designated as an official innovation incubator for sustainable agricultural developments.',
    readTime: '3 min read'
  }
];

// Endpoint: Get News Articles
app.get('/api/news', (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      success: true,
      data: mockArticles
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve articles'
    });
  }
});

// Endpoint: Newsletter Subscription
interface SubscriptionRequestBody {
  email?: string;
}

app.post('/api/newsletter', (req: Request, res: Response) => {
  const { email } = req.body as SubscriptionRequestBody;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email address is required.'
    });
  }

  // Simple email format validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  // Simulate success response
  return res.status(201).json({
    success: true,
    message: 'Subscription successful! Thank you for subscribing.'
  });
});

app.listen(PORT, () => {
  console.log(`[MACC API] Mock server running at http://localhost:${PORT}`);
});
