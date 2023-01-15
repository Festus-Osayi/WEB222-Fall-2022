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
 *      Date:       <11-28-2022>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
// For debugging, display all of our data in the console
// You can remove this once you start working...

//console.log({ products, categories }, "Store Data");
const { products, categories } = window;

function main() {
  // creating an array of description for samsung, apple and google pixels
  var arrApple = [];
  var arrSamsung = [];
  var arrGoogle = [];
  var arrPods = [];

  for (var interator = 0; i < products.length; i++) {
    products[interator].forEach((element) => {
      if (element === "Apple" && products[i].discontinued === false) {
        arrApple.push(products[interator].description);
      } else if (element === "Samsung" && products.discontinued === false) {
        arrSamsung.push(products[interator].description);
      } else if (element === "google-pixels" && products.discontinued === false) {
        arrGoogle.push(products[interator].description);
      } else if (element === "Airpods" && products.discontinued === false) {
        arrPods.push(products[interator].description);
      }
    });
  }
  //creating the navigation menu --> dynamically..

  var nav = document.querySelector("#category-menu");

  for (var i = 0; i < categories.length; i++) {
    let nav_menu = document.createElement("button");
    nav_menu.innerHTML = categories[i].description;
    nav_menu.id = categories[i].description;
    nav.appendChild(nav_menu);
  }
  var description = function (category) {
    // prints the description when a user click.
    let tableRows = document.getElementsByClassName("tbl-row");

    // Using the length as per the category and printing description by using the parallel array concept
    if (category === "Apple") {
      for (let i = 0; i < arrApple.length; i++) {
        tableRows[i].addEventListener("click", function () {
          console.log(arrApple[i]);
        });
      }
    } else if (category === "Samsung") {
      for (let i = 0; i < arrSamsung.length; i++) {
        tableRows[i].addEventListener("click", function () {
          console.log(arrSamsung[i]);
        });
      }
    } else if (category === "google-pixels") {
      for (let i = 0; i < arrGoogle.length; i++) {
        tableRows[i].addEventListener("click", function () {
          console.log(arrGoogle[i]);
        });
      }
    } else if (category === "Airpods") {
      for (let i = 0; i < arrGoogle.length; i++) {
        tableRows[i].addEventListener("click", function () {
          console.log(arrPods[i]);
        });
      }
    }
  };

  // Creates all the columns for a  category
  function createCells(category) {
    // Fetching the tbody element
    var tbodyRef = document.getElementById("products");
    var newRow, newCell, newText;

    // Iterating through the products and creating rows
    for (let i = 0; i < products.length; i++) {
      // creating a table row
      document.createElement("tr");

      // Iterating over array
      products[i].categories.forEach(function (element) {
        if (element === category && products[i].discontinued === false) {
          newRow = tbodyRef.insertRow();
          newRow.className = "tbl-row";

          // Insert cell at the end of the row
          newCell = newRow.insertCell();
          // Append a text node to the cell
          newText = document.createTextNode(products[i].title);
          newCell.appendChild(newText);

          // Insert a cell at the end of the row
          newCell = newRow.insertCell();
          newCell.id = i;
          // Append a text node to the cell
          newText = document.createTextNode(products[i].description);
          newCell.appendChild(newText);

          // Insert a cell at the end of the row
          newCell = newRow.insertCell();
          // Append a text node to the cell
          newText = document.createTextNode(
            (products[i].price / 100).toLocaleString("en-CA", {
              currency: "CAD",
              style: "currency"
            })
          ); // Converting to Cad
          newCell.appendChild(newText);
        }
      });
    }
  }

  // Displays apple products by defaults
  document.getElementById("products").innerHTML = "";
  document.getElementById("category").textContent = "Apple";
  createCells("Apple");

  // Function that shows a product list based on category and update the heading
  function showProductList(category) {
    // Clearing all the elements.
    document.getElementById("products").innerHTML = "";

    // Changing the human readable names to IDs
    for (let k = 0; k < categories.length; k++) {
      if (categories[k].description === category) {
        category = categories[k].id;
      }
    }

    // Creating columns for categories
    createCells(category);
    description(category);
  }

  // Change the heading and show product list
  let menuArr = document.querySelector("#category-menu").querySelectorAll("button");
  for (let i = 0; i < menuArr.length; i++) {
    menuArr[i].addEventListener("click", function () {
      document.getElementById("category").innerHTML = menuArr[i].textContent;
      showProductList(menuArr[i].textContent);
    });
  }

  // As the default category is Apple, we call the function by passing 'Apple' as the category
  description("Apple");
}
addEventListener("DOMContentLoaded", main);
