import React from "react";

const ProductView = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center">
          {products.map((item) => {
            const { id, title, category, price, image } = item;
            return (
              <div
                className="lg:w-1/6 md:w-1/2 p-4 w-full border shadow rounded m-5 hover:scale-105 animation ease-linear transition-all"
                key={id}
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-xl font-medium">
                    {title}
                  </h2>
                  <p className="mt-1">${price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductView;
