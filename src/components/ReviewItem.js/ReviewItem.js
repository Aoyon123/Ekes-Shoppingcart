import React from 'react';

const ReviewItem = (props) => {
   // console.log(props);

    const {name,quantity,key}=props.product;
    const reviewItemStyle={
        borderBottom:'2px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'17px',
        marginLeft:'200px'
    };

    return (
        <div style={reviewItemStyle} className="review-item">
            <h2 className="product-name">{name}</h2>
            <p>Quantity:{quantity}</p>
        <br>
        </br>
        <button className="main-button"
            onClick={()=>props.removeProduct(key)}
            >Remove Item</button>
        </div>
    );
};

export default ReviewItem;