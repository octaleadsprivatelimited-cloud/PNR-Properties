import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords = [], image, url }) => {
  const metaTitle = title ? `${title} | PNR Properties` : "PNR Properties";
  const metaDescription =
    description ||
    "PNR Properties — Premium real estate properties and developments across India. Your trusted partner for quality homes and commercial spaces.";
  const metaKeywords = keywords.join(", ");
  const metaImage = image || "/images/logo.png";
  const metaUrl = url || "https://pnrproperties.com";

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;

