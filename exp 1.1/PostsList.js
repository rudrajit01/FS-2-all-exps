import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredPosts, selectLanguage } from './selectors';
import translations from './translations';

const PostItem = React.memo(({ post, language }) => {
  const t = translations[language];
  const categoryClass = `category-${post.category.toLowerCase()}`;

  return (
    <div className={`post-card ${categoryClass}`}>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.content}</p>
      <span className="post-category-tag">{post.category}</span>
    </div>
  );
});

function PostsList() {
  const filteredPosts = useSelector(selectFilteredPosts);
  const language = useSelector(selectLanguage);
  const t = translations[language];

  return (
    <div className="posts-list-container">
      <h2 className="list-title">
        {t.listTitle}{' '}
        <span className="list-title-suffix">
          ({filteredPosts.length}
          {t.listTitleSuffix})
        </span>
      </h2>
      {filteredPosts.length === 0 ? (
        <p className="no-posts">{t.noPosts}</p>
      ) : (
        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <PostItem key={post.id} post={post} language={language} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostsList;

