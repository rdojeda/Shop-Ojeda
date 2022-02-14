import { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    //count >= stock ? alert("STOCK AGOTADO") : setCount(count + 1);
    if(count < stock) { setCount(count + 1) }
    
  };

  function handleSubstract() {
    //count <= initial ? alert("STOCK EN CERO") : setCount(count - 1);
    if (count > initial) {setCount(count -1) }
  }

  return (
    <>
      <div className="container">
        <h5 className="display-5 text-center">
          Stock {stock} - Clicks {count}
        </h5>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button
            className="btn btn-primary me-md-2"
            type="button"
            onClick={handleSubstract}
          >
            -
          </button>
          <button
            className="btn btn-success"
            type="button"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <div className="-grid gap-2 d-md-flex justify-content-md-center mt-2">
          <button className="btn btn-primary" type="button">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};
