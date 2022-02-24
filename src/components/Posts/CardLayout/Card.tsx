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
      <button onClick={handleView}>
        {fullView ? 'Свернуть' : 'Подробнее'}
      </button>
    </div>
  );
};

export default Card;
