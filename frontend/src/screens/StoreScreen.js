import React from "react";
import "./StoreScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
// Components

import StoreProduct from "../components/StoreProduct";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
/**
 * @author
 * @function StoreScreen
 **/

const StoreScreen = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([10, 4000]);
  const [colors, setColor] = React.useState("grey");
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const changeColor = (newColor) => {
    setColor(newColor);
    console.log();
  };
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="StoreScreen_main">
      <h2 className="store_heading">Store - Accesories</h2>
      <div className="Store_top">
        <div className="top_left_store">
          <div className="Accesories_selector">
            <h2>Accesories</h2>
            <button className="NoStyle">
              Apple car <p className="Gap">99</p>
            </button>
            <button className="NoStyle">
              Cable & docks<p className="Gap4">9</p>
            </button>
            <button className="NoStyle">
              Charging Devices <p className="Gap5">29</p>
            </button>
            <button className="NoStyle">
              Headphones <p className="Gap6">99</p>
            </button>
            <button className="NoStyle">
              Wireless <p className="Gap7">99</p>
            </button>
          </div>
          <div className="Price_range">
            <h2> PRICES</h2>
            <div className="Ranger_div">
              <p>
                <h3>Ranger</h3>
                <h3>
                  ${value[0]}&nbsp;-&nbsp;${value[1]}
                </h3>
              </p>
            </div>
            <Typography id="range-slider" gutterBottom></Typography>
            <Slider
              max={5000}
              min={20}
              value={value}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="Colour_selector">
            <h2>COLOR</h2>
            <div className="Selecting_solor">
              <button
                value="rose"
                className="circleButton1"
                onClick={(e) => changeColor(e.target.value)}
              ></button>
              <button
                value="blue"
                className="circleButton2"
                onClick={(e) => changeColor(e.target.value)}
              ></button>
              <button
                value="grey"
                className="circleButton3"
                onClick={(e) => changeColor(e.target.value)}
              ></button>
              <button
                value="red"
                className="circleButton4"
                onClick={(e) => changeColor(e.target.value)}
              ></button>
              <button
                value="green"
                className="circleButton5"
                onClick={(e) => changeColor(e.target.value)}
              ></button>
            </div>
          </div>
          <div className="Brand_Selector">
            <h2>Brand</h2>
            <button className="NoStyle">
              Apple <p className="Gap">99</p>
            </button>
            <button className="NoStyle">
              LG <p className="Gap1">99</p>
            </button>
            <button className="NoStyle">
              Samsung <p className="Gap2">99</p>
            </button>
            <button className="NoStyle">
              Siemens <p className="Gap3">99</p>
            </button>
          </div>
          <div className="More_item">MORE</div>
        </div>
        <div className="top_right_store">
          <div className="iphone_addvertisement">
            <div className="iphone_add_text">
              <h2> Iphone 12 Pro</h2>
              <h4>Performance and design taken right through the edge.</h4>
            </div>
            <div className="iphone_add_pic">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery1-2021_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=80&.v=1617122866000"
                alt="iphone12"
                className="iphone_add_pic_image"
              />
            </div>
          </div>
          <div className="StoreFeature">
            <h5>Sort by</h5>
            <select id="sort_by" name="sort_by" className="store_dropdown">
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="popularity">Popular</option>
              <option value="Most_used">Most Used</option>
            </select>
            <h5>Show</h5>
            <select id="number" name="number" className="store_dropdown">
              <option value="12">12</option>
              <option value="14">16</option>
              <option value="18">18</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="Store_mobile_header">
            <h2 className="store_mobile_heading">Store / Accesories</h2>
            <div className="mobile_store_feature">
              <h5 className="dots">
                <i class="fas fa-ellipsis-v"></i>
                <i class="fas fa-ellipsis-v"></i>
                <i class="fas fa-ellipsis-v"></i>
              </h5>
              <h5>
                <i class="fas fa-bars"></i>
              </h5>
              <h5>Sort by</h5>
              <select
                id="sort_by"
                name="sort_by"
                className="mobile_store_dropdown"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="popularity">Popular</option>
                <option value="Most_used">Most Used</option>
              </select>
              <h5>
                <i class="fas fa-filter"></i> Filter
              </h5>
            </div>
          </div>
          <div className="storescreen__products">
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              products.map((product) => (
                <StoreProduct
                  key={product._id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  productId={product._id}
                  rating={product.rating}
                  content={product.content}
                  color={product.color}
                  price_value={value}
                  color_value={colors}
                />
              ))
            )}
          </div>
          <div className="page_number">
            <button className="pagebutton">1</button>
            <button className="pagebutton">2</button>
            <button className="pagebutton">3</button>
            <button className="pagebutton">4</button>
            <button className="pagebutton">5</button>
          </div>
          <div className="mobile_page_number">
            <button className="mobile_pagebutton">Previous</button>
            <button className="mobile_pagebutton">Next</button>
          </div>
        </div>
      </div>
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

export default StoreScreen;
