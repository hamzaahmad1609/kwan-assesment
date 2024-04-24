import React, { useState } from 'react';
import Select from 'react-select';

const SelectComponent = (props : ISelectComponentProps ) => {
  const { options, selectedOption, selectOption } = props;

  const handleChange = (selected: IOption | null) => {
    selectOption(selected);
  };

  return (
    <div className='select-wrapper'>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Select "
      />
    </div>
  );
};

export default SelectComponent;