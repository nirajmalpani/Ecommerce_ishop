import React from "react";
import { Link } from "react-router-dom";
/**
 * @author
 * @function StoreProduct
 **/

const StoreProduct = ({
  imageUrl,
  description,
  price,
  name,
  productId,
  rating,
  content,
  color,
  price_value,
  color_value,
}) => {
  if (color_value !== color || price < price_value[0] || price > price_value[1])
    return null;
  return (
    <div>
      {color_value === color &&
        price > price_value[0] &&
        price < price_value[1] && (
          <div className="product">
            <img src={imageUrl} alt={name} className="image_change" />

            <div className="product__info">
              <p className="info__name">{name}</p>

              <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p>🌟</p>
                  ))}
              </div>

              <p className="info__price">${price}</p>

              <Link to={`/product/${productId}`} className="info__button">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
          </div>
        )}
    </div>
  );
};

export default StoreProduct;
