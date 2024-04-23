import axios, { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { setUsers } from "../../reducers/userSlice";
import { selectUser } from "../../selector/user.selector";



const Listing = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector(selectUser);
    debugger;


    useEffect(() => {
        axios.get('https://randomuser.me/api?page=3&results=10&seed=foo')
            .then((response: AxiosResponse) => {
                const {data} : {data: IusersResponse} = response;
                dispatch(setUsers(data));
            })
            .catch((error : any) => {
                console.error('Error fetching data:', error);
            });
    }, [])


    return (
        <div>
            <h1>Listing</h1>
        </div>
    );
};

export default Listing;