import image1 from "../assets/images/portfolio/portfolio-1.jpg";
import image2 from "../assets/images/portfolio/portfolio-2.jpg";
import image3 from "../assets/images/portfolio/portfolio-3.jpg";

const Client = () => {
  return (
    <>
      <section className="py-28">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-lg uppercase font-normal text-color-secondary-text-light dark:text-color-secondary-text-dark">
              portfolio
            </h1>
            <p className="text-3xl italic capitalize font-semibold text-color-primary-text-light dark:text-color-primary-text-dark">
              your living time capsule starts here
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-16">
            <a href="" className="relative">
              <img src={image1} alt="" className="w-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </a>
            <a href="" className="relative">
              <img src={image2} alt="" className="w-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </a>
            <a href="" className="relative">
              <img src={image3} alt="" className="w-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
