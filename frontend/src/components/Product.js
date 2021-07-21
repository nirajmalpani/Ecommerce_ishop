import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({
  imageUrl,
  description,
  price,
  name,
  productId,
  rating,
  content,
}) => {
  if (content !== "all") return null;
  return (
    <div>
      {content === "all" && (
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

export default Product;
