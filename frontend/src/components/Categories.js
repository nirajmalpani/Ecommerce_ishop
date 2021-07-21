import React from "react";
import "./Categories.css";
/**
 * @author
 * @function Categories
 **/

const Categories = (props) => {
  return (
    <div className="Category_main">
      <ul className="Categorymenu">
        <button className="NoStyles">
          <a href="/">Home</a>
        </button>
        <button className="NoStyles">
          <a href="/store" className="Store">
            Store
          </a>
        </button>
        <button className="NoStyles">
          <a href="/">Iphone</a>
        </button>
        <button className="NoStyles">
          <a href="/">Ipod</a>
        </button>
        <button className="NoStyles">
          <a href="/">Macbook</a>
        </button>
        <button className="NoStyles">
          <a href="/">Accessories</a>
        </button>
        <div className="List_categories">
          <div className="acc_category">
            <div className="Header_Category">Acccesories</div>
            <div className="List">
              <div className="Listing">
                <li>Airpods & Wireless</li>
                <li>Applecare</li>
                <li>Bag , Shells & Sleeves</li>
                <li>Business & Securities</li>
                <li>Airpods & Wireless</li>
                <li>Airpods</li>
              </div>
              <div className="Listing">
                <li>Airpods & Wireless</li>
                <li>Applecare</li>
                <li>Bag , Shells & Sleeves</li>
              </div>
            </div>
          </div>
          <div className="acc_category">
            <div className="Header_Category">Category</div>
            <div className="List">
              <div className="Listing">
                <li>Airpods & Wireless</li>
                <li>Applecare</li>
                <li>Bag , Shells & Sleeves</li>
                <li>Business & Securities</li>
                <li>Airpods & Wireless</li>
                <li>Airpods</li>
              </div>
              <div className="Listing">
                <li>Airpods & Wireless</li>
                <li>Applecare</li>
                <li>Bag , Shells & Sleeves</li>
              </div>
            </div>
          </div>
          <div className="acc_category">
            <div className="Header_Category">Category</div>
            <div className="List">
              <div className="Listing">
                <li>Airpods & Wireless</li>
                <li>Applecare</li>
                <li>Bag , Shells & Sleeves</li>
                <li>Business & Securities</li>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Categories;
