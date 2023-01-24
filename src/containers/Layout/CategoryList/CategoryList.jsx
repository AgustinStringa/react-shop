import React from 'react'
import LinkHeader from "Containers/Layout/LinksHeader/LinkHeader";
const CategoryList = () => {
  return (

    <ul>
      <li className="category-item">
        <LinkHeader text={"All"} href={"/"} />
      </li>
      <li>
        <LinkHeader text={"Clothes"} href={"/"} />
      </li>
      <li>
        <LinkHeader text={"Electronics"} href={"/"} />
      </li>
      <li>
        <LinkHeader text={"Furnitures"} href={"/"} />
      </li>
      <li>
        <LinkHeader text={"Toys"} href={"/"} />
      </li>
      <li>
        <LinkHeader text={"Others"} href={"/"} />
      </li>
    </ul>
 
  )
}

export default CategoryList