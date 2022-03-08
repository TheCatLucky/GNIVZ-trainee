import { Button } from 'antd';
import React, { useState } from 'react';

import classes from './Card.module.scss';

type CardProps = {
  title: string;
  body: string;
};

const Card: React.FC<CardProps> = ({ title, body }) => {
  const [fullView, setFullView] = useState(false);
  const handleView = () => {
    setFullView(!fullView);
  };
  return (
    <div className={classes.component}>
      <h3>{title}</h3>
      {fullView && <div className={classes.body}>{body}</div>}
      <Button size="small" onClick={handleView}>
        {fullView ? 'Свернуть' : 'Подробнее'}
      </Button>
    </div>
  );
};

export default Card;
