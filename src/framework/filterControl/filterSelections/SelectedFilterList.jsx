
import React, {
  PropTypes,
} from 'react';

import Entity from '../../services/string/Entity';
import Filter from '../../services/filter/Filter';

const SelectedFilterList = (props) => {
  const filterItems = props.selectedFilters.map((filter, index) => {
    const onRemoveSelectedFilter =
      props.onRemoveSelectedFilter.bind(null, filter);

    const filterName = filter.filterOption.name;
    const title = `${filterName}: ${filter.humanizeComparisonValue()}`;

    return (
      <div className="selectedFilterListItem" key={index}>
        <span
          className="selectedFilterListItem__label"
          title={title}
        >
          <strong className="selectedFilterListItem__name">
            {filterName}:
          </strong>
          {Entity.nbsp}
          {filter.humanizeComparisonValue()}
        </span>

        <div className="selectedFilterListItem__removeButtonContainer">
          <span
            className="selectedFilterListItem__removeButton"
            onClick={onRemoveSelectedFilter}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="selectedFilterList">
      {filterItems}
    </div>
  );
};

SelectedFilterList.propTypes = {
  onRemoveSelectedFilter: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(
    PropTypes.instanceOf(Filter)
  ).isRequired,
};

export default SelectedFilterList;
