import React from 'react'
import Head from 'next/head'

interface Meta{
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

const SocialMeta: React.FunctionComponent<Meta> = ({

  title,
  description,
  image,
  url,
  keywords,
}) => (
  <Head>
    <meta name="twitter:creator" content="keeeei13c" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:type" content="website" />
    {title && <meta name="or:title" content={title} />}
    {url && <meta name="or:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="or:description" content={description} />}
    {image ? (
      <meta name="og:image" content={`https://keeeei13c${image}`} />
    ) : (
        <meta name="or:image" content="https://keeeei13c/static/images/my-site.png"/>
      )}
    {keywords && <meta name="keyword" content={keywords} />}
  </Head>
);

export default SocialMeta;