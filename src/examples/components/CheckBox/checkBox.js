
import React from 'react';
import renderComponent from '../../renderComponent.js';
import { CheckBox } from '../../../framework/index.js';

export default function() {
  renderComponent(
    'check-box',
    <CheckBox id="checkboxExample" />
  );
}
