/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import categoryData from "DB/CategoryData.json";

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

  /*
   *  Category를 3개로 나눠서 표 형식으로 적용해 줄 것
   *    가설 1 : Pagination 이용하면 가능하지 않을까???
   *    - li 태그 안에 div 넣고
   *    - ul 3개 들어가도록
   */
  const genre = categoryData.category.map((item, index) => {
    return (
      <>
        <li key={"category" + index}>
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
        {isOpenCategory ? (
          <div className="category">
            <ul className="like-table">{genre}</ul>
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
}
export default Category;
