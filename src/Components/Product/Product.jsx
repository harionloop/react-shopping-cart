import "./product.css";

export default function Product({ pData, handleAddItem }) {
  return (
    <>
      <div className="product">
        <div className="p-left">
          <h3 className="p-name">{pData.item_name}</h3>
          <p className="p-price">${pData.price}</p>
          <p className="p-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis velit dolore modi pariatur! Sint tenetur beatae, magni
            nemo molestias recusandae iure vitae reprehenderit consequuntur
            praesentium consequatur voluptate. Amet, quas saepe!
          </p>
        </div>

        <div className="p-right">
          <img
            className="p-img"
            src="https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg"
            alt=""
          />
          <button className="p-add-butt" onClick={() => handleAddItem(pData)}>
            Add Item
          </button>
        </div>
      </div>
    </>
  );
}
