import React from "react";

const ProductView = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href="#" className="block group">
              <img
                src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />

              <div className="mt-1.5">
                <p className="text-xs text-gray-500">Space Grey</p>

                <div className="mt-1.5 flex gap-1">
                  <form>
                    <fieldset>
                      <legend className="sr-only">Color</legend>
                    </fieldset>

                    <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                      <div>
                        <input
                          type="checkbox"
                          id="ColorSg"
                          className="sr-only"
                        />

                        <label
                          htmlFor="ColorSg"
                          className="block h-4 w-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                        >
                          <span className="sr-only"> Space Gray </span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="ColorS"
                          className="sr-only"
                        />

                        <label
                          htmlFor="ColorS"
                          className="block h-4 w-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                        >
                          <span className="sr-only"> Silver </span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="ColorP"
                          className="sr-only"
                        />

                        <label
                          htmlFor="ColorP"
                          className="block h-4 w-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                        >
                          <span className="sr-only"> Pink </span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="ColorG"
                          className="sr-only"
                        />

                        <label
                          htmlFor="ColorG"
                          className="block h-4 w-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                        >
                          <span className="sr-only"> Pink </span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          id="ColorSb"
                          className="sr-only"
                        />

                        <label
                          htmlFor="ColorSb"
                          className="block h-4 w-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                        >
                          <span className="sr-only"> Pink </span>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="flex justify-between mt-3 text-sm">
                  <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Small Headphones
                  </h3>

                  <p className="text-gray-900">$299</p>
                </div>
              </div>
            </a>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/421x261"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/422x262"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/424x264"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/425x265"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/427x267"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/428x268"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
