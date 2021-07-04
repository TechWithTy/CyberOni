// import '../app.css'
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/App.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>CyberOni</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Engage your online presence while attracting new customers and lightening your workload."
        />
        <meta
          name="description"
          content="A company that helps businesses establish their online presence through Web-Applications, and Mobile applications, attract new customers through SEO and Marketing, and also lighten their workload by creating custom software."
        />
        <meta
          name="keywords"
          content="Websites,Apps,Applications,Software,Business,Small Business"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}, {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
    </>
  );
}
