![](https://i.postimg.cc/mrhyRnt9/730-1x-shots-so.webp)

# Webbie - Chat to Any Website

Webbie is a versatile RAG (Retrieval-Augmented Generation) chatbot that can be trained on any website. It leverages Upstash vector database, Redis, and Next.js to create a fast, efficient, and scalable chatbot. With Webbie, you can easily add chatbot functionality to any website and train it on relevant data.

## Features

- **RAG Model**: Uses Retrieval-Augmented Generation to provide relevant, accurate responses based on website content.
- **Customizable**: Can be trained on any website's data, offering flexibility and personalization.
- **Upstash Vector DB**: Efficient vector storage and retrieval with Upstash.
- **Redis Integration**: Fast in-memory data storage and caching with Redis.
- **Next.js Powered**: Built using Next.js for modern web performance and server-side rendering.

## Tech Stack

- **Upstash Vector Database**: For storing and retrieving vector embeddings of website content.
- **Redis**: In-memory data store used for fast caching and session management.
- **Next.js**: A React framework for server-side rendering and API routes.
- **TypeScript**
- **TailwindCSS**
  
## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v16+)
- Redis (or use Upstash Redis)
- Upstash account (for Vector DB)

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/subhadeeproy3902/webbie.git
    cd webbie
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables. Create a `.env.local` file in the root of the project and add the following:
    ```bash
    UPSTASH_VECTOR_REST_URL="your upstash vector rest url"
    UPSTASH_VECTOR_REST_TOKEN="your upstash vector rest token"
    QSTASH_TOKEN="your qstash token"
    UPSTASH_REDIS_REST_URL="your upstash redis rest url"
    UPSTASH_REDIS_REST_TOKEN="your upstash redis rest token"
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

The application will be running on `http://localhost:3000`.

### Training Webbie on a Website

1. Add the URL of the website you want to train Webbie on.
2. The system will automatically crawl the website and extract relevant content.
3. The content is stored as vector embeddings in Upstash for quick retrieval during conversations.

### Usage

- **Chat Interface**: Once trained, Webbie can answer questions based on the website’s content.
- **Customization**: Modify the chatbot’s behavior by adjusting the prompt or adding more custom training data.

## Deployment

You can deploy Webbie to any platform that supports Node.js applications, such as:

- Vercel
- Netlify
- DigitalOcean

To deploy on Vercel:

1. Install Vercel CLI:
    ```bash
    npm i -g vercel
    ```

2. Run the deployment command:
    ```bash
    vercel
    ```

3. Follow the prompts to complete the deployment.

## Contributing

If you'd like to contribute to Webbie, feel free to submit a pull request or raise an issue. All contributions are welcome!

---

Made with ❤️ by Subhadeep Roy
