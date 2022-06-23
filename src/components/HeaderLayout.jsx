import React, { useState, useEffect, createElement } from "react";
import axios from "axios";
import "../styles/HeaderLayout.css";

function HeaderLayout({ domData }) {
  const store = domData.getAttribute("data-store");
  let href;

  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://s3.us-west-2.amazonaws.com/www.claners.com/uploads/site/cintillo.json",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [setList]);

  function mostrarTodo() {
    return Object.keys(list).map(function (key) {
      if (key === store) {
        const contenedor = document.getElementById("container");
        contenedor.innerHTML = list[key].title;
        const background = list[key].background;
        const color = list[key].color;
        contenedor.style.background = background;
        contenedor.style.color = color;

        const link = document.getElementById("link");
        href = `https://www.${store}.com${list[key].url}`;
        link.setAttribute("href", href);
      }
    });
  }

  return (
    <>
      <a id="link" target="_blank" rel="noreferrer">
        {<div id="container">{mostrarTodo()}</div>}
      </a>
    </>
  );
}

export default HeaderLayout;
