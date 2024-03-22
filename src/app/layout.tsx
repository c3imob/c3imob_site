"use client";
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <title>
          C3 Imob - Imobiliária em São Paulo | Compra, Venda e Aluguel de
          Imóveis
        </title>
        <meta
          name="keywords"
          content="C3 Imob, imobiliária São Paulo, compra de imóveis, venda de imóveis, aluguel de imóveis, casas em São Paulo, apartamentos São Paulo, imóveis comerciais"
        />

        <meta
          name="description"
          content="Encontre as melhores ofertas de imóveis em São Paulo com a C3 Imob. Especialistas em compra, venda e aluguel de casas, apartamentos e imóveis comerciais."
        />

        <meta property="og:site_name" content="C3 Imob" />
        <meta
          property="og:title"
          content="C3 Imob - Sua Imobiliária de Confiança em São Paulo"
        />
        <meta
          property="og:description"
          content="Descubra imóveis para compra, venda e aluguel em toda a São Paulo com a C3 Imob. Navegue pelas nossas listagens e encontre seu lar ideal ou próximo investimento."
        />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="https://www.c3imob.com.br" />
        <meta property="og:type" content="website" />
        <meta charSet="utf-8" />
        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* For Resposive Device */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* For Window Tab Color */}
        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#0D1A1C" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#0D1A1C" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#0D1A1C" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="main-page-wrapper">
          <Provider store={store}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
