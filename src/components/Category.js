import React, { useState } from "react";
import categoryData from "components/CategoryData.json";
import "./Category.css";

function Category() {
  const [isOpenCategory, setToggleCategory] = useState(false);
  const [checkedItem, setCheckedItem] = useState([]);

  const toggleCategory = () => {
    setToggleCategory((isOpenCategory) => !isOpenCategory);
  };
  /* 추후 수정 예정 api추가하여 fetch로 받아온 다음 작업해야함 */

  const checkItemHandler = (checked, id) => {
    if (checked) {
      setCheckedItem([...checkedItem, id]);
    } else {
      setCheckedItem(checkedItem.filter((el) => el !== id));
    }
  };

  const genre = categoryData.category.map((item, index) => {

    return (
      <>
        <li key={"category"+index}>
          <input
            type="checkbox"
            id={item}
            checked={checkedItem.includes(item) ? true : false}
            onChange={(e) => checkItemHandler(e.currentTarget.checked, item)}
          />
          {item}
        </li>
      </>
    );
  });
  return (
    <>
      <li key="categories">
        <a onClick={() => toggleCategory()}>카테고리</a>
        <ul className={isOpenCategory ? "show-category" : "hide-category"}>
          {genre}
        </ul>
      </li>
    </>
  );
}
export default Category;
