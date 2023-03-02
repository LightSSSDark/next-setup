import Head from "next/head";
import CommonScripts from "../components/CommonScripts";
import CommonStyles from "../components/CommonStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Us</title>
        <meta name="description" content="" />
        <CommonStyles />
      </Head>
      <Header />
      {}
      <div>
        <div className="fugu-breadcrumb-section">
          <div className="container">
            <div className="breadcrumbs">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Get in touch
              </h1>
              <nav
                aria-label="breadcrumb"
                className="wow fadeInUpX"
                data-wow-delay="0.15s"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    Get in touch
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="fugu-shape8">
            <img src="assets/images/shape/shape7.png" alt />
          </div>
          <div className="fugu-shape9">
            <img src="assets/images/shape/shape8.png" alt />
          </div>
        </div>
        {}
        <div className="section fugu-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="fugu-default-content contact-page">
                  <h2>
                    Have any questions? We will talk to you sincerely anytime
                  </h2>
                  <p>
                    If you have any questions about subscription or usage,
                    please fill out the form and our team will get back to you
                    within 24 hours.
                  </p>
                  <div className="fugu-contact-info">
                    <ul>
                      <li>
                        <a href="tel:123">
                          <div className="fugu-contact-info-icon">
                            <img src="assets/images/social/call.svg" alt />
                          </div>
                          <h5>Call us</h5>
                          <p>+088-234-6534-563</p>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:name@email.com">
                          <div className="fugu-contact-info-icon">
                            <img src="assets/images/social/email.svg" alt />
                          </div>
                          <h5>Email us</h5>
                          <p>example@gmail.com</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="fugu-contact-info-icon">
                            <img src="assets/images/social/map.svg" alt />
                          </div>
                          <h5>Office address</h5>
                          <p>4132 Thornridge City, New York.</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 offset-xl-1">
                <div className="fugu-contact-wrap  wow fadeInUpX">
                  <div className="fugu-input-field">
                    <label>Your name</label>
                    <input type="text" placeholder="Enter your full name" />
                  </div>
                  <div className="fugu-input-field">
                    <label>Email address</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                  <div className="fugu-input-field">
                    <label>Write your message</label>
                    <textarea
                      name="textarea"
                      placeholder="Write us your question here..."
                      defaultValue={""}
                    />
                  </div>
                  <button id="fugu-input-submit">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="section bg-warning-300 fugu-section-padding3">
          <div className="container">
            <div className="fugu-section-title">
              <h2>Want communicate directly?</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="fugu-iconbox-wrap4 wow fadeInUpX"
                  data-wow-delay="0s"
                >
                  <div className="fugu-iconbox-icon4">
                    <img src="assets/images/all-img/contact/icon1.png" alt />
                  </div>
                  <div className="fugu-iconbox-data4">
                    <h4>Careers</h4>
                    <p>
                      the job or series of jobs that you do during your working
                      making progress
                    </p>
                    <a className="fugu-icon-btn" href="#">
                      Discover More{" "}
                      <img src="assets/images/svg/arrow-black-right.svg" alt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="fugu-iconbox-wrap4 wow fadeInUpX"
                  data-wow-delay=".10s"
                >
                  <div className="fugu-iconbox-icon4">
                    <img src="assets/images/all-img/contact/icon2.png" alt />
                  </div>
                  <div className="fugu-iconbox-data4">
                    <h4>Help &amp; Support</h4>
                    <p>
                      the job or series of jobs that you do during your working
                      making progress
                    </p>
                    <a className="fugu-icon-btn" href="#">
                      Discover More{" "}
                      <img src="assets/images/svg/arrow-black-right.svg" alt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                <div
                  className="fugu-iconbox-wrap4 wow fadeInUpX"
                  data-wow-delay=".20s"
                >
                  <div className="fugu-iconbox-icon4">
                    <img src="assets/images/all-img/contact/icon3.png" alt />
                  </div>
                  <div className="fugu-iconbox-data4">
                    <h4>Ask Question</h4>
                    <p>
                      the job or series of jobs that you do during your working
                      making progress
                    </p>
                    <a className="fugu-icon-btn" href="#">
                      Discover More{" "}
                      <img src="assets/images/svg/arrow-black-right.svg" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="fugu-map">
          <div id="map" />
        </div>
        {}
        <div className="section fugu-section-padding2">
          <div className="container">
            <div className="fugu-section-title">
              <h2>
                Ask us if you have any <br /> other questions
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="nexto-accordion-one" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Q. What is cryptocurrency in general?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        A cryptocurrency is a digital currency, which is an
                        alternative form of payment created using encryption
                        algorithms.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Q. What other types of cryptocurrency are out there?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        A cryptocurrency is a digital currency, which is an
                        alternative form of payment created using encryption
                        algorithms.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Q. What can you buy with cryptocurrency, and how?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        A cryptocurrency is a digital currency, which is an
                        alternative form of payment created using encryption
                        algorithms.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Q. What support and service packages are available?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        A cryptocurrency is a digital currency, which is an
                        alternative form of payment created using encryption
                        algorithms.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="nexto-accordion-one two" id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Q. Will my data and information be safe?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        A cryptocurrency is a digital currency, which is an
                        alternative form of payment created using encryption
                        algorithms.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Q. What regulation and requirements govern bitcoin?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        A cryptocurrency is a digital currency, which is an
                        alternative form of payment created using encryption
                        algorithms.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Q. What is the biggest problem with cryptocurrency?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        A cryptocurrency is a digital currency, which is an
                        alternative form of payment created using encryption
                        algorithms.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        Q. Will my data and information be safe?
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        A cryptocurrency is a digital currency, which is an
                        alternative form of payment created using encryption
                        algorithms.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fugu-center-btn">
              <a className="fugu-btn small-btn" href="#">
                Ask More
              </a>
            </div>
          </div>
        </div>
        {}
        <div className="fugu-go-top">
          <img src="assets/images/svg/arrow-black-right.svg" alt />
        </div>
      </div>

      <Footer />
      <CommonScripts />
    </>
  );
}
