import React from 'react'
// import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
// import {MENU_API} from '../../utils/constants'
import useRestaurantMenu from '../../utils/useRestaurantMenu';


const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if (resInfo === null) {
        return <Shimmer />
    }

    const { name } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    return (

        <div>
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((itemCard) =>
                    <li key={itemCard.card.info.id}> {itemCard.card.info.name} - Rs. {(itemCard.card.info.price) / 100}</li>
                )}

            </ul>
        </div>
    )
}

export default RestaurantMenu