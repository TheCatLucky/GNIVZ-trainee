import React from 'react';

import classes from './Graphic.module.scss';

type GraphicProps = {};

const Graphic: React.FC<GraphicProps> = (props) => {
  return (
    <div className={classes.component}>
      Графическое отображенние
    </div>
  );
};

export default Graphic;
