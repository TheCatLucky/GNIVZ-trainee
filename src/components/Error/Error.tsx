import React from 'react';

import styles from './Error.module.scss';

type CustomErrorProps = {
  error: string;
};

const CustomError: React.FC<CustomErrorProps> = ({ error }) => <div className={styles.component}>{error}</div>;

export default CustomError;
