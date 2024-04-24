import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SelectComponent from "../../elements/select.element";

import { AppDispatch } from "../../store";
import { selectFilter } from "../../selector/filter.selector";

import { appConstants } from "../../config/appConstants";
import { setGender, setInput } from "../../reducers/filterSlice";
import DebouncedInput from "../../elements/debouncedInput.element";


const ListingFilter = () => {

    const dispatch = useDispatch<AppDispatch>();
    const filters = useSelector(selectFilter);
    const { gender } = filters;

    const setOption = (value: IOption | null) => {
        dispatch(setGender({ gender: value }));
    }

    const setSearchInput = (value: string) => {
        dispatch(setInput({input: value})) 
    }

    return (
        <div>
            <div>
                <SelectComponent
                    options={appConstants.genderOptions}
                    selectedOption={gender}
                    selectOption={(value: IOption | null) => setOption(value)}
                />
            </div>

            <div>
                <DebouncedInput 
                    action={(val: string) => setSearchInput(val)}
                 />
            </div>
        </div>
    )

}

export default ListingFilter