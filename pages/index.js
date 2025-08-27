import Head from 'next/head'
import Link from 'next/link';
import { LegalChatBot } from '@/components/legal-chatbot';

export default function Home() {
  return (
    <>
      <Head>
        <title>Legal Advice Assistant</title>
        <meta name="description" content="Get legal information and guidance from our AI assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 min-h-[calc(100vh-80px)] bg-gradient-to-b from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-800">
        <LegalChatBot />
      </main>
    </>
  )
}