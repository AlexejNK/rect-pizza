import React from 'react';

export default function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {items && items.map((item, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            key={`${item}_${index}`}
            onClick={() => setActiveItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
