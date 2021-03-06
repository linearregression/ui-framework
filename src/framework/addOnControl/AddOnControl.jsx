
import React, {
  PropTypes,
} from 'react';

export {
  default as AddOnDropdown,
} from './dropdown/AddOnDropdown.jsx';

export {
  default as AddOnDropdownOption,
} from './dropdown/AddOnDropdownOption.jsx';

export {
  default as AddOnLabel,
} from './label/AddOnLabel.jsx';

const AddOnControl = props => (
  <div className="addOnControl">
    {props.children}
  </div>
);

AddOnControl.propTypes = {
  children: PropTypes.any,
};

export default AddOnControl;
