/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Festus Osayi>
 *      Student ID: <170276216>
 *      Date:       <11-27-2022>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
// For debugging, display all of our data in the console
// You can remove this once you start working...

//console.log({ products, categories }, "Store Data");

const { products, categories } = window;
let categories_card = document.querySelector(".display-categories");
const categoryMenu = document.querySelector("#category-menu");
//creating a product cards and display each prices in a human readable format..
function ProductCard(product) {
  return `<article class="card">
    <img src=${product.imageUrl} alt="photo images">
    <div class="render-cards">
    <header>
      <h4>${product.description}</h4>
      <h5 class="price">${(product.price / 100).toLocaleString("en-CA", {
        currency: "CAD",
        style: "currency"
      })}</h5>
    </header>
    <p class="card_description">${product.description}</p>
    </div>
  </article>`;
}
//load the respective items and everything is set to Apple by defaults.
function main() {
  document.getElementById("category").innerHTML = "Apple";
  categories_lists(
    products.filter(function (product) {
      if (product.categories.includes("Apple")) {
        return product;
      }
    })
  );

  Buttons_Menu();
}
addEventListener("DOMContentLoaded", main);

function categories_lists(products) {
  let createProducts = products.map(function (product) {
    return ProductCard(product);
  });

  createProducts = createProducts.join("");
  categories_card.innerHTML = createProducts;
}
//creating and manipulating the buttons tags with --> DOM
function Buttons_Menu() {
  const buttonCategories = categories
    .map(function (category) {
      return `<button data-id="${category.description}" class="btns" type="button">${category.description}</button>`;
    })
    .join("");

  categoryMenu.innerHTML = buttonCategories;
  const btns = document.querySelectorAll(".btns");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (items_categories) {
      let category = items_categories.currentTarget.dataset.id;
      document.getElementById("category").textContent = items_categories.currentTarget.dataset.id;

      if (category === "Apple") {
        category = "Apple";
      } else if (category === "Samsung") {
        category = "Samsung";
      } else if (category === "google-pixels") {
        category = "google-pixels";
      } else if (category === "Airpods") {
        category = "Airpods";
      }

      const productCategory = products.filter(function (item) {
        if (item.categories.includes(category)) {
          return item;
        }
      });

      categories_lists(productCategory);
    });
  });
}
