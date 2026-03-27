import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  name?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, name = "TNXBD IT Solution", type = "website" }) => {
  // Use a tagline version of the description for the browser tab
  // Extracting only the first sentence and trimming it
  const tagline = description.split('.')[0].trim();
  const titleDisplay = `${title} - ${tagline} | ${name}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title key="title">{titleDisplay}</title>
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      
      {/* End of standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End of Facebook tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End of Twitter tags */}
    </Helmet>
  );
};

export default SEO;
