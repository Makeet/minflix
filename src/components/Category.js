import React, { useState } from "react";
import categoryData from "DB/CategoryData.json";

function Category() {
  const [isOpenCategory, setToggleCategory] = useState(false);
  const [checkedItem, setCheckedItem] = useState([]);

  const toggleCategory = () => {
    setToggleCategory((isOpenCategory) => !isOpenCategory);
  };

  const checkItemHandler = (checked, id) => {
    if (checked) {
      setCheckedItem([...checkedItem, id]);
    } else {
      setCheckedItem(checkedItem.filter((el) => el !== id));
    }
  };

  return (
    <>
      <li key="categories">
        <div onClick={() => toggleCategory()}>카테고리</div>
        {isOpenCategory ? (
          <div className="category">
            <ul className="like-table">
              {categoryData.category.map((item, index) => {
                return (
                  <li key={"category" + index}>
                    <input
                      type="checkbox"
                      id={item}
                      checked={checkedItem.includes(item) ? true : false}
                      onChange={(e) =>
                        checkItemHandler(e.currentTarget.checked, item)
                      }
                    />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
}
export default Category;
