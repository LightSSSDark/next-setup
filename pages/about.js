import Head from "next/head";
import CommonScripts from "../components/CommonScripts";
import CommonStyles from "../components/CommonStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Follow a good structure for your code
// Paragraphs should use <p>, not a heading tag
// Headings should use <h1> to <h6>, whatever is appropriate
export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Us</title>
        <meta name="description" content="" />
        <CommonStyles />
      </Head>
      <Header />
      <div>
        <div className="fugu-breadcrumb-section">
          <div className="container">
            <div className="breadcrumbs">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                About Us
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
                    About Us
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
        {/* End breadcrumb */}
        <div className="fugu-about-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="fugu-about-thumb">
                  <img
                    className="wow fadeInLeft"
                    data-wow-delay=".10s"
                    src="assets/images/all-img/about/about-thumb1.png"
                    alt
                  />
                  <div className="fugu-about-thumb2">
                    <img
                      className="wow fadeInUpX"
                      data-wow-delay=".30s"
                      src="assets/images/all-img/about/about-thumb2.png"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center">
                <div className="fugu-default-content">
                  <h2>
                    Introducing Airygo - The New Era of Freight Transportation
                  </h2>
                  <p>
                    At Airygo, we offer the ultimate air freight and air cargo
                    transportation service booking platform through our
                    easy-to-use online system. By partnering with over 200+
                    logistics companies, Airygo provides customers with global
                    freight forwarding solutions that are tailored to meet their
                    needs. We cover all modes of transportation including road,
                    rail, air, and sea transport to thousands of cities
                    worldwide.
                  </p>
                  {/* <p>Being memorable is hard, but worth it if you want a brand for that will resonate with customers, colleagues, and investors.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End about section */}
        <div className="section bg-warning-300 fugu-section-padding3">
          <div className="container">
            <div className="fugu-section-title">
              <h2>Our comprehensive services include: </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="fugu-iconbox-wrap4 wow fadeInUpX"
                  data-wow-delay=".10s"
                >
                  <div className="fugu-iconbox-icon4">
                    <img src="assets/images/all-img/about/icon1.png" alt />
                  </div>
                  <div className="fugu-iconbox-data4">
                    <h4>Door Pickup &amp; Delivery Across the Globe</h4>
                    <p>
                      With Airygo's door-to-door pickup and delivery, you can be
                      sure that your freight is transported safely and arrives
                      on time. This online platform allows customers to choose
                      from over 200+ logistics companies, so they can find the
                      right fit for their needs. Plus, Airygo offers global
                      freight forwarding with all modes of transport—air, sea,
                      rail, and road—and covers thousands of cities around the
                      world, making it perfect for businesses that need reliable
                      international shipping solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="fugu-iconbox-wrap4 wow fadeInUpX"
                  data-wow-delay=".20s"
                >
                  <div className="fugu-iconbox-icon4">
                    <img src="assets/images/all-img/about/icon2.png" alt />
                  </div>
                  <div className="fugu-iconbox-data4">
                    <h4>Live Tracking for Real-Time Updates</h4>
                    <p>
                      Get peace of mind knowing exactly where your shipment is
                      at anytime! Airygo's advanced tracking system lets you
                      keep an eye on your freight in real-time as it moves from
                      origin to destination without worrying about delays (best
                      tried but not guaranteed) or misplacements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="fugu-iconbox-wrap4 wow fadeInUpX"
                  data-wow-delay=".20s"
                >
                  <div className="fugu-iconbox-icon4">
                    <img src="assets/images/all-img/about/icon3.png" alt />
                  </div>
                  <div className="fugu-iconbox-data4">
                    <h4>Professional Logistics Team At Your Service</h4>
                    <p>
                      Airygo has a professional team of logistics experts who
                      are dedicated to helping customers get their shipments
                      delivered quickly and efficiently at competitive rates.
                      The company also provides consultations to make sure
                      clients select the best possible solution for their needs
                      and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End section */}
        <div className="section fugu-section-padding2">
          <div className="container">
            <div className="fugu-section-title2">
              <div className="row">
                <div className="">
                  <h2>Experience The Future Of Transport With AiryGo Today!</h2>
                </div>
                <div className="pt-3 d-flex align-items-center">
                  <p>
                    AiryGo is revolutionising personalised freight
                    transportation offering unmatched convenience when it comes
                    down to booking various transport solutions anywhere in the
                    world quickly and hassle free!. Our user friendly online
                    system allows you access all modes of delivery ranging from
                    overnight express mail couriers right through traditional
                    ocean carriers enabling you manage your supply chain needs
                    exactly how you want it anytime,anywhere!. Our goal remains
                    ensuring secure movement delivering valuable items assigned
                    by clients reliably promptly while controlling costs at
                    every stage! We are proud members International Federation
                    Logistics (IFL) trying best that everything comply strongly
                    high standards set Aviation authorities around world
                    furthermore fully insured through Lloyd's London protecting
                    against losses handling risks associated transfers goods
                    cross borders come into contact new cultures environments
                    professionals!. Come experience future today join millions
                    satisfied happy customers choosing number provider globally
                    sign up here enjoy exclusive discounts first look latest
                    offers promotions get ready fly sky high!!
                  </p>
                </div>
              </div>
            </div>
            {/* End section */}
            <div className="fugu-go-top">
              <img src="assets/images/svg/arrow-black-right.svg" alt />
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
