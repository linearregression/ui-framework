
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const PrimaryButton = props => {
  const classes = classNames('button--primary', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

PrimaryButton.propTypes = Button.propTypes;

export default PrimaryButton;