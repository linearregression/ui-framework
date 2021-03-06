
import {
  FilterOption,
  ComparisonTypes,
} from '../../../framework/services.js';

export default [
  new FilterOption({
    name: 'Max ID',
    getValue: item => item.id,
    comparisonType: ComparisonTypes.MAX,
  }),
  new FilterOption({
    name: 'Min ID',
    getValue: item => item.id,
    comparisonType: ComparisonTypes.MIN,
  }),
  new FilterOption({
    name: 'Name',
    getValue: item => item.name,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
  new FilterOption({
    name: 'Status',
    getValue: item => item.status,
    comparisonType: ComparisonTypes.ONE_OF,
    comparisonParameters: {
      oneOfOptions: ['Active', 'Stopped', 'Archived'],
    },
  }),
  new FilterOption({
    name: 'Fuel',
    getValue: item => item.fuel,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
  new FilterOption({
    name: 'Maximum Number of Passengers',
    getValue: item => item.passengers,
    comparisonType: ComparisonTypes.MAX,
  }),
  new FilterOption({
    name: 'Minimum Number of Passengers',
    getValue: item => item.passengers,
    comparisonType: ComparisonTypes.MIN,
  }),
  new FilterOption({
    name: 'Maximum Number of Cylinders',
    getValue: item => item.cylinders,
    comparisonType: ComparisonTypes.MAX,
  }),
  new FilterOption({
    name: 'Minimum Number of Cylinders',
    getValue: item => item.cylinders,
    comparisonType: ComparisonTypes.MIN,
  }),
  new FilterOption({
    name: 'Fuel Economy',
    getValue: item => item.fuelEconomy,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
  new FilterOption({
    name: 'Kpi Sold',
    getValue: item => item.kpiSold,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
  new FilterOption({
    name: 'Kpi Registered',
    getValue: item => item.kpiRegistered,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
];
