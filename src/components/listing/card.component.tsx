import React from 'react';

const ListingCard = (props: ListingCardProps) => {

    const { user, selecteUser } = props;

    return (
        <li>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            <p>{user.name.first} {user.name.last}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={() => selecteUser(user)}>View Profile</button>
        </li>
    );
};

export default ListingCard;