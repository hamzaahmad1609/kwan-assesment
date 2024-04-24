import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios, { AxiosResponse } from "axios";

import ListingCard from "./card.component";
import ListingFilter from "./filter.component";

import { AppDispatch } from "../../store";
import { selectedUser, setUsers } from "../../reducers/userSlice";
import { selectUser } from "../../selector/user.selector";
import { selectFilter } from "../../selector/filter.selector";


const Listing = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const filters = useSelector(selectFilter);
    const user = useSelector(selectUser);
    debugger;

    const getUsers = (pageNo?: number) => {
        let url = `https://randomuser.me/api?&results=10`;
        url += `&page=${pageNo ?? 1}`
        if (filters.gender) url += `&gender=${filters.gender.value}`
        axios.get(url)
            .then((response: AxiosResponse) => {
                const { data }: { data: IusersResponse } = response;
                dispatch(setUsers(data));
            })
            .catch((error: any) => {
                console.error('Error fetching data:', error);
            });
    }


    useEffect(() => {
        getUsers();
    }, [filters.gender])

    const selecteUser = (user: IUser) => {
        dispatch(selectedUser(user));
        navigate("/profile");
    }

    const getFilteredData = () => {
        const newFilteredUsers = filters.input
            ? user?.users?.filter((user: IUser) => {
                const searchTerm = filters.input.toLowerCase();
                return (
                    user.name.first.toLowerCase().includes(searchTerm) ||
                    user.name.last.toLowerCase().includes(searchTerm)
                );
            })
            : user.users;

        return newFilteredUsers;
    }

    const usersData: IUser[] = useMemo(() => getFilteredData(), [filters.input, filters.gender?.value, user.users])



    return (
        <div id="listing">
            <ListingFilter />
            <ul>
                {usersData?.map((user: IUser, index: number) => (
                    <ListingCard key={index} user={user} selecteUser={selecteUser} />
                ))}
            </ul>
        </div>

    );
};

export default Listing;
