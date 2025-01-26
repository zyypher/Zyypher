import Head from "next/head";

const SEO = ({
  title = "Zyypher - Your Technology Partner",
  description = "Empowering businesses with top-notch technology solutions.",
  url = "https://www.zyypher.com/",
  image = "https://www.zyypher.com/images/mainLogo3.png",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content="https://www.zyypher.com/images/mainLogo3.png" />


      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
