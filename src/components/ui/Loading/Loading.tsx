import React from 'react';

import loader from './Loader.svg';
import styles from './Loading.module.scss';

const Loading: React.FC = () => (
  <div className={styles.component}>
    <img src={loader} alt="Loader" className={ styles.loader}/>
  </div>
);

export default Loading;
