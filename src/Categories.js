import React, { useState } from 'react';

const Categories = ({ allCategories, filterBtn }) => {
  return (
    <>
      <div className='btn-container'>
        {allCategories.map((cate, index) => {
          return (
            <button
              key={index}
              className='filter-btn'
              onClick={() => filterBtn(cate)}
            >
              {cate}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
