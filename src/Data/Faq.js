const faqData = {
  general: [
    {
      question: "What is DataCove AI?",
      answer:
        "DataCove AI is an AI-powered document intelligence platform that automates document validation, compliance checks, and strategic insights using agentic workflows.",
    },
    {
      question: "How does DataCove AI work?",
      answer:
        "Users upload documents, and DataCove AI processes them using multiple AI agents, extracting insights, summarizing content, checking compliance, and generating structured reports.",
    },
    {
      question: "What industries can use DataCove AI?",
      answer:
        "DataCove AI is designed for legal professionals, supply chain managers, recruiters, real estate agents, and other industries requiring automated document intelligence.",
    },
  ],

  privacyAndSecurity: [
    {
      question: "How is my data secured?",
      answer:
        "All documents are stored securely using AES-256 encryption and processed in compliance with GDPR and PIPEDA. Personally identifiable information (PII) is automatically redacted before being processed by AI models.",
    },
    {
      question: "Do you sell or share my data?",
      answer:
        "No, DataCove AI does not sell, share, or rent user data. Your documents remain private and are only processed within our secure environment.",
    },
    {
      question: "What happens to my documents after processing?",
      answer:
        "Documents are automatically deleted from our servers within [Insert Duration] unless users choose to retain them. AI-generated reports are stored securely for retrieval.",
    },
  ],

  technologyAndAiModels: [
    {
      question: "What AI models does DataCove use?",
      answer:
        "DataCove AI leverages cutting-edge language models such as OpenAI GPT-4, Claude AI, and domain-specific NLP models, ensuring accurate and compliant document processing.",
    },
    {
      question: "Can I choose an AI agent for my specific needs?",
      answer:
        "Yes! DataCove AI allows users to select AI agents tailored to different domains, such as Legal AI, Supply Chain AI, and Recruitment AI, ensuring relevant document analysis.",
    },
  ],

  pricingAndSubscription: [
    {
      question: "How does the subscription model work?",
      answer:
        "We offer a Basic (Free), Business ($49.99/month), and Enterprise ($499.99/month) plan. Each plan includes varying levels of document processing, AI insights, and collaboration features.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, DataCove AI offers a free trial with limited functionality so users can test the platform before upgrading to a paid plan.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "Users can cancel their subscription at any time through their account settings. Cancellations take effect at the end of the billing cycle.",
    },
  ],

  usageAndCollaboration: [
    {
      question: "Can I share AI-generated reports with my clients?",
      answer:
        "Yes, DataCove AI provides options to securely share reports with clients via email or a protected link.",
    },
    {
      question:
        "What if my document contains sensitive legal or financial data?",
      answer:
        "Our system automatically redacts sensitive information before AI processing, ensuring compliance and confidentiality.",
    },
    {
      question: "What file types are supported?",
      answer:
        "DataCove AI supports PDFs, DOCX, TXT, and image formats for OCR-based text extraction.",
    },
    {
      question: "How long does it take for AI to process documents?",
      answer:
        "Processing time varies based on document length and complexity but generally takes a few seconds to a couple of minutes.",
    },
    {
      question: "Can multiple users collaborate on the same case?",
      answer:
        "Yes, Business and Enterprise users can invite team members or clients to collaborate on document analysis and reports.",
    },
  ],

  supportAndContact: [
    {
      question: "How do I contact support?",
      answer:
        "For support, email us at info@datacove.ai or visit our Help Center for FAQs and troubleshooting guides.",
    },
  ],
};

export default faqData;
