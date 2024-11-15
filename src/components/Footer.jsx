const Footer = () => {
  return (
    <>
      <footer className="bg-color-background-dark">
        <div className="container mx-auto p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div className=" text-color-primary-text-dark">
              <h1>elmiere photo & films</h1>
              <p>
                We are part of your life`s awaited moments, who will capture all
                your beautiful images in every second. We believe that the
                photos of your moments will become precious memories. We are
                here to put all your memories in an attractive visual form.
              </p>
            </div>
            <div className="">
              <h1>test</h1>
              <ul className="flex flex-col gap-2 capitalize text-lg text-color-primary-text-light dark:text-color-primary-text-dark">
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-light dark:hover:text-white transition-all"
                  >
                    home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-light dark:hover:text-white transition-all"
                  >
                    about
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-light dark:hover:text-white transition-all"
                  >
                    client
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-light dark:hover:text-white transition-all"
                  >
                    gallery
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-light dark:hover:text-white transition-all"
                  >
                    testimonial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
