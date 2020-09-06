import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'laptop', label: 'Laptop' },
  { value: 'computer', label: 'Computer' },
  { value: 'phone', label: 'Phone' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'cables', label: 'Cables' },
  { value: 'hardware', label: 'Hardware' },
];

// Overriding the theme
const theme = (theme) => ({
  ...theme,
  padding: '56px',
  borderRadius: '4px',
  colors: {
    ...theme.colors,
    primary50: '#f8f8f8',
    primary25: '#f4f4f4',
    primary: '#65068a',
  },
});

function select(props) {
  return (
    <Select
      isMulti
      name="items"
      options={options}
      isSearchable={false}
      placeholder={props.placeHolder}
      theme={theme}
    />
  );
}

export default select;
