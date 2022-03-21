import Head from 'next/head';

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Mediajams_challenge',
  keywords: 'jamstack,mediajams',
  description: 'mediajam community challenge 1',
};

export default Meta;
