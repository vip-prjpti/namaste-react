import React from 'react'

const itemList = ({ items }) => {
    console.log(items)
    return (
        <div>
            <div>Category itemList</div>
            {items.map(item => (
                <div key={item.card.info.id}></div>
            ))}
                {/* <div><span>{items.card.info.name}</span></div> */}
        </div>
    )
}

export default itemList