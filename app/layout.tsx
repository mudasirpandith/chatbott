import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Providers } from "./provider";
import NextTopLoader from "nextjs-toploader";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Conversation Between {chat?.user?.name} and ChatBot`}
        />
        <meta name="keywords" content="chatBot, chatBot, chatBot" />
        <meta name="author" content={`{chat?.user.name}`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`{chat?.user.profileImage}`} />

        <meta property="og:title" content="ChatBot Powered By Gemini" />
        <meta
          property="og:description"
          content="This advanced chatbot is created using the powerful Next.js framework and is fueled by the expertise of Gemini Pro. It possesses the remarkable ability to engage in natural conversations with users, seamlessly adapting to the context of the discussion. Through its cutting-edge algorithms and access to vast knowledge, it can recall previous interactions, ensuring a continuous and personalized experience for each individual user. Whether its answering questions, resolving inquiries, or simply making conversation, this chatbot is designed to deliver a professional and user-centric interaction, providing an unparalleled chatbot experience."
        />
        <meta property="og:image" content={`{chat?.user.profileImage}`} />
        <meta property="og:url" content={`{chat?.user.profileImage}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChatBot Powered By Gemini" />
        <meta
          name="twitter:description"
          content="This advanced chatbot is created using the powerful Next.js framework and is fueled by the expertise of Gemini Pro. It possesses the remarkable ability to engage in natural conversations with users, seamlessly adapting to the context of the discussion. Through its cutting-edge algorithms and access to vast knowledge, it can recall previous interactions, ensuring a continuous and personalized experience for each individual user. Whether its answering questions, resolving inquiries, or simply making conversation, this chatbot is designed to deliver a professional and user-centric interaction, providing an unparalleled chatbot experience."
        />
        <meta name="twitter:image" content={`{chat?.user.profileImage}`} />
      </head>
      <body>
        <Providers>
          <NavBar />
          <NextTopLoader showSpinner={false} height={10} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
