import React from 'react';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import styles from './styles.module.css';
import ListItem from './ListItem';

export default function BlogListPage(props) {
  const { metadata, items } = props;

  const { blogDescription, blogTitle } = metadata;

  const posts = [...items];

  return (
    <Layout
      title={blogTitle}
      description={blogDescription}
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
      pageClassName={ThemeClassNames.page.blogListPage}
    >
      <main className={styles.root}>
        <h1>{blogTitle}</h1>
        <h2 className={styles.description}>{blogDescription}</h2>
        <div className="row">
          {posts.map(({ content }) => (
            <ListItem key={content.metadata.permalink} content={content} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
