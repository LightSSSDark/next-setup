import Head from "next/head";
import CommonScripts from "../components/CommonScripts";
import CommonStyles from "../components/CommonStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Follow a good structure for your code
// Paragraphs should use <p>, not a heading tag
// Headings should use <h1> to <h6>, whatever is appropriate
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage</title>
        <meta name="description" content="" />
        <CommonStyles />
      </Head>
      <Header />
      <div>
        <div className="fugu-hero-section2">
          <div className="container">
            <div className="fugu-hero-content fugu-hero-content2">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Airygo – Global Freight Forwarding Made Easy
              </h1>
              <p className="wow fadeInUpX" data-wow-delay="0.25s">
                Welcome to Airygo, the one-stop online platform for booking air
                freight or air cargo transportation services. With over 200+
                logistics companies, we provide access to cost efficient and
                reliable solutions for businesses of every size. Our advanced
                technology enables you to keep your goods moving safely and
                securely across land, sea and air. Our top features include :{" "}
              </p>
              <div
                className="fugu-hero-btn-wrap wow fadeInUpX"
                data-wow-delay="0.40s"
              >
                <a className="fugu-btn fugu-round-btn active" href="/contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="fugu-shape4">
            <img src="assets/images/shape/shape3.png" alt />
          </div>
          <div className="fugu-shape5">
            <img src="assets/images/shape/shape4.png" alt />
          </div>
        </div>
        {}
        {}
        {}
        <div className="section bg-warning-200 fugu-section-padding3 col-lg-12">
          <div className="container">
            <div className="mt-5 ">
              <h2>Global Reach with Local Touch</h2>
            </div>
            <div className="row">
              <div className=" ">
                <div
                  className="fugu-iconbox-wrap2 wow fadeInUpX"
                  data-wow-delay="0s"
                >
                  <div className="fugu-iconbox-data2">
                    {}
                    <p>
                      Our wide array of global partners allows us to extend our
                      reach across multiple modes of transport, so that you can
                      book freight forwarding services in thousands of cities
                      worldwide. Whether you're shipping documents between two
                      different countries or transporting a full container's
                      worth of goods between continents, Airygo will get it done
                      quickly and professionally.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {}
              <div className="fugu-text-slider-section mt-5">
                <div className="fugu-text-slider-area1">
                  <div className="fugu-text-slider1">
                    <div className="fugu-text-slider-data">
                      <div className="fugu-text-slider-icon">
                        <img src="assets/images/all-img/v2/star.png" alt />
                      </div>
                      <h3>Global Freight Forwarding with Airygo </h3>
                    </div>
                    <div className="fugu-text-slider-data">
                      <div className="fugu-text-slider-icon">
                        <img src="assets/images/all-img/v2/star.png" alt />
                      </div>
                      <h3>Pickup and Delivery at Your Doorstep </h3>
                    </div>
                    <div className="fugu-text-slider-data">
                      <div className="fugu-text-slider-icon">
                        <img src="assets/images/all-img/v2/star.png" alt />
                      </div>
                      <h3>Live Tracking for Easy Monitoring </h3>
                    </div>
                  </div>
                </div>
                <div className="fugu-text-slider-area2">
                  <div className="fugu-text-slider2" dir="rtl">
                    <div className="fugu-text-slider-data">
                      <div className="fugu-text-slider-icon">
                        <img src="assets/images/all-img/v2/star.png" alt />
                      </div>
                      <h3>Professional Team on Your Side </h3>
                    </div>
                    <div className="fugu-text-slider-data">
                      <div className="fugu-text-slider-icon">
                        <img src="assets/images/all-img/v2/star.png" alt />
                      </div>
                      <h3>Pickup and Delivery at Your Doorstep </h3>
                    </div>
                    <div className="fugu-text-slider-data">
                      <div className="fugu-text-slider-icon">
                        <img src="assets/images/all-img/v2/star.png" alt />
                      </div>
                      <h3>Live Tracking for Easy Monitoring </h3>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="section bg-warning-200 fugu-section-padding2">
                <div className="container">
                  <div className="fugu-section-title2">
                    <div className="row">
                      <div className="col-lg-6">
                        <h2>Door Pickup/Delivery Services</h2>
                      </div>
                      <div className="col-lg-5 offset-lg-1 d-flex align-items-center">
                        <p>
                          In addition to traditional freight forwarding services
                          covering road, rail, sea and air networks we offer
                          door pickup/delivery services too; meaning you don't
                          have to visit a depot or manage paperwork yourself!
                          This is especially useful if the shipment requires
                          customs clearance as the document processing can be
                          done entirely through our platform.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End video section */}
                  <div className="section bg-warning-100 fugu-section-padding overflow-hidden">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="fugu-trading-card">
                            <div className="fugu-trading-card-thumb">
                              <img
                                className="wow fadeInUpX"
                                data-wow-delay="0s"
                                src="assets/images/all-img/v2/card1.png"
                                alt
                              />
                              <div className="fugu-trading-card-thumb2">
                                <img
                                  className="wow fadeInLeft"
                                  data-wow-delay="0.20s"
                                  src="assets/images/all-img/v2/card2.png"
                                  alt
                                />
                              </div>
                              <div className="fugu-shape6">
                                <img src="assets/images/shape/shape5.png" alt />
                              </div>
                              <div className="fugu-shape7">
                                <img src="assets/images/shape/shape6.png" alt />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-10 d-flex align-items-center">
                          <div className="fugu-default-content z-index">
                            <h2>
                              Live Tracking &amp; Professional Team Support
                            </h2>
                            <p>
                              We understand how challenging it can be for
                              customers when their shipments are on the move
                              stiong distances so at Airygo we provide live
                              tracking facility on all orders booked through our
                              platform as standard trying best you always know
                              where your goods are and what stage they are at in
                              the process. Additionally, oue professional team
                              support offers a personalized service tailored
                              towards each customer's individual needs along
                              with 12/7 availability should any issue arise
                              during transit period.
                            </p>
                            <div className="fugu-icon-list fugu-icon-list3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fugu-go-top">
                    <img src="assets/images/svg/arrow-black-right.svg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Put Page Level Content Here */}
      <Footer />
      <CommonScripts />
    </>
  );
}
