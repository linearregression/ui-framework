
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';

const PickedSummary = (props) => {
  let icon;

  if (props.type) {
    const typeToIconClassMap = {
      [PickedSummary.TYPE.ALLOWED]: 'icon-check-green',
      [PickedSummary.TYPE.NOT_ALLOWED]: 'icon-not-allowed-red',
    };

    const iconClasses = classNames(
      'pickedSummaryIcon icon',
      typeToIconClassMap[props.type]
    );

    icon = <div className={iconClasses} />;
  }

  return (
    <div className="pickedSummary">
      {icon}
      <div className="pickedSummary__label">
        {props.children}
      </div>
    </div>
  );
};

PickedSummary.TYPE = keyMirror({
  ALLOWED: null,
  NOT_ALLOWED: null,
});

PickedSummary.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};

export default PickedSummary;
