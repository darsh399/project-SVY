import React from 'react';

const Card = (props) => {
  const { title, img, about, content } = props.data;
  return (
    <div className={props.className} {...props}>
      <div className="image-container">
        <img className='product-img' src={img} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <div className="tags">
          {content &&
            content.map((data) => {
              return (
                <div className="tag">{data.name}</div>
              )
            })
          }

        </div>
        <p>
            {about}
          <span className="see-more"> See more</span>
        </p>
        <div className="price"></div>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
}

export default Card;
