import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const allCategories = [
    'all',
    ...new Set(
      items.map((cate) => {
        return cate.category;
      })
    ),
  ];
  const filterBtn = (category) => {
    const filter = items.filter((item) => {
      return item.category === category;
    });
    if (category === 'all') {
      setMenu(items);
    }
    return setMenu(filter);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        <Categories allCategories={allCategories} filterBtn={filterBtn} />
        <div className='section-center'>
          {menu.map((items) => {
            const { category, desc, id, img, price, title } = items;
            return (
              <article className='menu-item' key={id}>
                <img src={img} alt={title} className='photo' />
                <div className='item-info'>
                  <header>
                    <h4>{title}</h4>
                    <h4 className='price'>${price}</h4>
                  </header>
                  <p className='item-text'>{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
