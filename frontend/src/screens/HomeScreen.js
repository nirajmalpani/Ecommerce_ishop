import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";
import SlideProduct from "../components/SlideProduct";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <div className="Main_home">
        <div className="grad1">
          <img
            src="https://www.cnet.com/a/img/VtkCAauEtNHZ39mChHq184urDqY=/1092x614/2016/05/11/41ef8056-2190-400f-bf04-ae03c38c1c84/screen-shot-2016-05-11-at-15-26-30.png"
            alt="iphone-basic"
            className="image-size"
          />
        </div>
        <div className="iphone_addvert12">
          <div className="iphone_12">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery1-2021_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=80&.v=1617122866000"
              alt="iphone12"
            />
          </div>
          <div className="iphone_add_text12">
            <h2> Iphone 12 Pro</h2>
            <h4>Performance and design taken right through the edge.</h4>
          </div>
        </div>
      </div>
      <div>
        <div className="Best_seller_heading">
          <h2 className="homescreen__title">Best Seller</h2>
          <div className="Choosing_bar">
            <ul className="ChoosingMenu">
              <li>
                <a href="/">ALL</a>
              </li>
              <li>
                <a href="/">MacBook</a>
              </li>
              <li>
                <a href="/">Iphone</a>
              </li>
              <li>
                <a href="/">Ipad</a>
              </li>
              <li>
                <a href="/">Accesories</a>
              </li>
            </ul>
            <div className="mobile_DropDown">
              <select id="Options" name="Device" className="device_dropdown">
                <option value="ALL">ALL</option>
                <option value="Macbook">Macbook</option>
                <option value="Iphone">Iphone</option>
                <option value="Ipad">Ipad</option>
                <option value="Accesories">Accesories</option>
              </select>
            </div>
          </div>
        </div>
        <div className="homescreen__products">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
                rating={product.rating}
                content={product.content}
              />
            ))
          )}
        </div>
        <a href="/" className="load_more">
          Load More
        </a>
      </div>
      <div className="iphone_addvertisement">
        <div className="iphone_add_text">
          <h2> Iphone 12 Pro</h2>
          <h4>Performance and design taken right through the edge.</h4>
          <a href="/">Shop Now</a>
        </div>
        <div className="iphone_add_pic">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery1-2021_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=80&.v=1617122866000"
            alt="iphone12"
            className="iphone_add_pic_image"
          />
        </div>
      </div>
      <div className="Ishop_Support">
        <div className="Shipping_Refund_Support">
          <div className="Shipping">
            <div className="size-ship">
              <i className="fas fa-shipping-fast fa-5x"></i>
            </div>
            <h2>Free Shipping </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="Shipping">
            <div className="size-ship">
              <i className="fas fa-undo-alt fa-5x"></i>
            </div>
            <h2>100% Refund </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="Shipping">
            <div className="size-ship">
              <i className="fas fa-shipping-fast fa-5x"></i>
            </div>
            <h2>Support 24/7</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="Featured_products">
          <h2>FEATURED PRODUCTS</h2>
          <SlideProduct />
        </div>
      </div>
      <hr></hr>
      <div className="Footer">
        <div className="Footer_head">
          <div className="Ishop_end">
            <h2>iSHOP</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="Ishop_end">
            <h3>Follow US</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <br></br>
            &nbsp; &nbsp;<i class="fab fa-facebook-f"> &nbsp; &nbsp;</i>
            <i class="fab fa-twitter"></i>
          </div>
          <div className="Ishop_end">
            <h3>Contact US</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>
        <div className="Footer_end">
          <div className="Row_element">
            <ul>
              Information
              <li>About</li>
              <li>Information</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="Row_element">
            <ul>
              Service
              <li>About</li>
              <li>Information</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="Row_element">
            <ul>
              Extras
              <li>About</li>
              <li>Information</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="Row_element">
            <ul>
              MyAccount
              <li>About</li>
              <li>Information</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="Row_element">
            <ul>
              Useful Links
              <li>About</li>
              <li>Information</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="Row_element">
            <ul>
              Our Offers
              <li>About</li>
              <li>Information</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <p className="Cards">
          <i class="fab fa-cc-paypal"></i>&nbsp;
          <i class="fab fa-cc-paypal"></i>&nbsp;
          <i class="fab fa-cc-mastercard"></i>&nbsp;
          <i class="fab fa-cc-mastercard"></i>
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
