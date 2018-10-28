import React from 'react';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames/bind';

import styles from './NotFound.scss';

const s = classNames.bind(styles);

const NotFound = () => {
  return (
    <DocumentTitle title={'Sidan kunde inte hittas'}>
      <main className={s({ container: true })}>
        <div className={s('content')}>
          <h1>404!</h1>
        </div>
      </main>
    </DocumentTitle>
  );
};

export default NotFound;
