import imageDua from "../assets/images/about/about-1.jpg";
import imageSatu from "../assets/images/about/about-2.jpg";

const About = () => {
  return (
    <>
      <section>
        <div className="container mx-auto p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
            <div className="order-1 md:order-1 lg:order-1">
              <img src={imageSatu} alt="" className="w-auto" />
            </div>
            <div className="text-center order-2 md:order-3 lg:order-2 md:col-span-2 lg:col-span-1">
              <h1 className="text-2xl italic font-medium text-color-primary-text-light dark:text-color-primary-text-dark mb-4">
                Capturing Emotion, Crafting Artistry, <br /> Creating Memories
              </h1>
              <div className="text-base font-light text-color-secondary-text-light dark:text-color-secondary-text-dark space-y-3">
                <p>
                  We specialize in crafting cinematic artistry that goes beyond
                  mere videography and Photography. With a passion for capturing
                  raw emotion, we create narratives that resonate deeply,
                  telling your story with a touch of luxury and artistry.
                </p>
                <p>
                  With every frame, we seek to tell a unique story—one that
                  encapsulates the genuine intimacy, real connections, and
                  meaningful narratives that make the day unforgettable.
                </p>
                <p>
                  Let us be your storytellers, your memory keepers, and your
                  guides into the realm where every breath is an emotion, every
                  scene is an artwork, and every video is a living, breathing
                  time capsule.
                </p>
              </div>
            </div>
            <div className="order-3 md:order-2 lg:order-3">
              <img src={imageDua} alt="" className="w-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
