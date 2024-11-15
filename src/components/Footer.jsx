const Footer = () => {
  return (
    <>
      <footer className="bg-color-background-dark rounded-t-xl md:rounded-t-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="text-base">
              <h1 className="text-color-primary-text-dark uppercase mb-5">
                elmiere photo & films
              </h1>
              <p className="text-color-secondary-text-dark">
                We are part of your life`s awaited moments, who will capture all
                your beautiful images in every second. We believe that the
                photos of your moments will become precious memories. We are
                here to put all your memories in an attractive visual form.
              </p>
            </div>
            <div className="text-base">
              <h1 className="text-color-primary-text-dark font-semibold uppercase mb-5">
                link
              </h1>
              <ul className="flex flex-col gap-2 capitalize text-color-secondary-text-dark">
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-dark transition-all"
                  >
                    home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-dark transition-all"
                  >
                    about
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-dark transition-all"
                  >
                    client
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-dark transition-all"
                  >
                    gallery
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:text-color-primary-text-dark transition-all"
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
