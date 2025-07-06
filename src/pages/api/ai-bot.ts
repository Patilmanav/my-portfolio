import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const portfolioContext = `
You are an AI assistant for Manav Patil's portfolio. Here are the details:
Skills: Python, Selenium, Playwright, BeautifulSoup, lxml, FastAPI, Django, Flask, PyTest, Appium, React, Next.js, MongoDB, SQLite, MySQL, Docker, AWS, Git, GitHub, Terraform, Kubernetes, Jenkins, Ubuntu, and more.
Projects:
- FaceVault: A secure web app for managing and searching images using face recognition (Next.js, MongoDB, Cloudinary).
- RPA Workflow Automation Suite: Automates business workflows (Python, Selenium, Playwright).
- Intelligent Web Scraping Platform: Large-scale data extraction (BeautifulSoup, Selenium).
- End-to-End Test Automation Framework: Web, mobile, and API testing (PyTest, Selenium).
- API Automation & Integration Toolkit: Automating API testing and workflow integration (FastAPI).
- Automated Data Processing Pipeline: ETL operations and data validation (Python).
- OCR Automation System: Document processing and text extraction (Tesseract).
Experience:
- RPA Developer & Automation Engineer at Tech Vyassa Pvt Ltd: Developed and deployed RPA solutions, web scraping systems, test automation frameworks, and data pipelines.
- Python Developer & Automation Specialist at Technical VPN Pvt Ltd: Built web scraping solutions, REST APIs, OCR automation, and CI/CD pipelines.
Answer as a helpful, friendly AI assistant. If you don't know the answer, say so honestly.`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'No message provided' });

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: portfolioContext },
      { role: 'user', content: message },
    ],
  });

  res.status(200).json({ reply: completion.choices[0].message.content });
} 