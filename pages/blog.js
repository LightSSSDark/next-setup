import Head from "next/head";
import BlogScripts from "../components/BlogScripts";
import BlogStyles from "../components/BlogStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blog</title>
        <meta name="description" content="" />
        <BlogStyles />
      </Head>
      <Header />
      {}
      <div>
        <div className="fugu-breadcrumb-section">
          <div className="container">
            <div className="breadcrumbs">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                This is H1
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
                    Blog
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
        <div className="fugu-blog-section fugu-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="fugu-blog-single-wrap">
                  <img
                    className="wow fadeInUpX"
                    src="assets/images/all-img/blog/blog-single-thumb.png"
                    alt
                  />
                  <div className="mb-3 mt-5">
                    {}
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Perferendis, quisquam. Possimus omnis corporis quo. Cumque
                      quod fuga, cum harum officia, blanditiis ad aliquam
                      corrupti voluptatem esse saepe hic, fugit velit? Repellat
                      possimus perspiciatis saepe nam expedita reprehenderit
                      numquam alias aperiam dolorum est cumque, rem earum minima
                      magni asperiores corporis tenetur quia nesciunt? Ducimus
                      quo aliquid, facere quisquam numquam quis omnis! Hic id
                      nostrum culpa autem. Magnam possimus laboriosam tempore
                      neque sapiente nostrum sint veritatis magni ab numquam
                      velit tempora maiores, fugiat praesentium iste ut, beatae
                      reprehenderit voluptatem quod reiciendis eveniet. Officiis
                      rerum a incidunt explicabo reprehenderit voluptates ad.
                      Odio aperiam culpa veniam voluptates laborum iure debitis
                      quisquam dignissimos, praesentium odit consequuntur libero
                      repudiandae corrupti mollitia sint! Asperiores voluptates
                      obcaecati optio! Nihil, eaque ipsa! Libero itaque
                      adipisci, architecto magnam esse aliquam accusamus!
                      Voluptates, numquam commodi, ex porro, quasi ut corporis
                      dignissimos ratione deserunt architecto sequi magnam
                      velit! Nemo vero tempore laudantium.
                    </p>
                  </div>
                  {/* <Form/> */}
                  <div className="mt-5">
                    <h4>
                      <b>Get a quote</b>
                    </h4>
                    <form action="#">
                      <div className="choice-list mb-3 mt-3 border">
                        <span className="input-title p-3">Type Of Service</span>
                        <select
                          className="select-product p-2 mt-1 mb-1"
                          name="type"
                          id="select-area"
                        >
                          <option value="Life Insurance">Life Insurance</option>
                          <option value="Car Insurance">Car Insurance</option>
                          <option value="House Insurance">
                            House Insurance
                          </option>
                          <option value="Accident Insurance">
                            Accident Insurance
                          </option>
                        </select>
                      </div>
                      <div className="fugu--comment-field">
                        <span className="p-2">From City</span>
                        <input type="text" placeholder="From City*" />
                      </div>
                      <div className="fugu--comment-field">
                        <span className="p-2">To City</span>
                        <input type="text" placeholder="To City*" />
                      </div>
                      <div className="fugu--comment-field">
                        <span className="p-2">Good details</span>
                        <textarea
                          name="textarea"
                          placeholder=""
                          defaultValue={""}
                        />
                      </div>
                      <div className="fugu--comment-field">
                        <span className="p-2">Contact</span>
                        <input type="number" placeholder="Contact*" />
                      </div>
                      <button id="fugu--form-submit-btn" type="submit">
                        Start a quote
                      </button>
                    </form>
                    <p className="review-text pt-4 ">
                      Been here before? <a href="#">Review your quotes.</a>
                    </p>
                  </div>
                  <hr className="mt-4"></hr>
                </div>
                <div className="fugu-icon-list">
                  {}
                  <ul>
                    <li>
                      <img src="assets/images/svg/check1.svg" alt />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      <img src="assets/images/svg/check1.svg" alt />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      <img src="assets/images/svg/check1.svg" alt />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      <img src="assets/images/svg/check1.svg" alt />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      <img src="assets/images/svg/check1.svg" alt />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </div>

                {/* </div> */}
              </div>

              <div className="col-xl-4 col-lg-5">
                <div className="fugu-blog-sidebar">
                  <div className="fugu-sidebar-item">
                    <form action="#">
                      <div className="fugu-product-search">
                        <input type="search" placeholder="Type to search..." />
                        <button id="fugu-search-btn">
                          <img src="assets/images/svg/search.svg" alt />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="fugu-sidebar-item">
                    <div className="fugu-sidebar-item-title">
                      <h5>Blog Categories</h5>
                    </div>
                    <div className="fugu-categories">
                      <ul>
                        <li>
                          <a href="/blog">Blog1</a>
                        </li>
                        <li>
                          <a href="/blog">Blog2</a>
                        </li>
                        <li>
                          <a href="/blog">Blog3</a>
                        </li>
                        <li>
                          <a href="/blog">Blog4</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="fugu-sidebar-item">
                    <div className="fugu-sidebar-item-title">
                      <h5>Recent</h5>
                    </div>
                    <div className="fugu-recent-post-item">
                      <a href="#">
                        <img
                          src="assets/images/all-img/blog/recent-post1.png"
                          alt
                        />
                      </a>
                      {}
                      <h6>
                        <a href="#">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Incidunt perferendis tenetur numquam, quisquam
                          qui, atque nesciunt libero consequatur architecto
                          nulla ipsa et porro ad. Praesentium in enim porro ex
                          reiciendis.
                        </a>
                      </h6>
                    </div>
                    <div className="fugu-recent-post-item">
                      <a href="#">
                        <img
                          src="assets/images/all-img/blog/recent-post2.png"
                          alt
                        />
                      </a>
                      <h6>
                        <a href="#">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Facere dicta sequi, sint voluptates aliquam
                          veniam libero exercitationem vero facilis neque
                          tempora debitis illum explicabo ab! Eveniet laborum
                          porro unde cupiditate.
                        </a>
                      </h6>
                    </div>
                    <div className="fugu-recent-post-item">
                      <a href="#">
                        <img
                          src="assets/images/all-img/blog/recent-post3.png"
                          alt
                        />
                      </a>
                      <h6>
                        <a href="#">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Cum, temporibus rem excepturi id quia fugit at!
                          Nesciunt reiciendis ut labore saepe quae. Beatae quae
                          quidem veniam, harum totam odio ut!
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="fugu-sidebar-item">
                    <div className="fugu-sidebar-item-title">
                      <h5>Tags</h5>
                    </div>
                    <div className="fugu-tags">
                      <ul>
                        <li>
                          <a href="#">#blog</a>
                        </li>
                        <li>
                          <a href="#">#blog</a>
                        </li>
                        <li>
                          <a href="#">#blog</a>
                        </li>
                        <li>
                          <a href="#">#blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-5"></hr>
        <div className="container mb-5">
        <div className="mt-5 mb-4 d-flex">
          <table className="table table-dark p-3 ">
            <tbody className>
              <tr>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="mt-5 col-lg-8">This is H2</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          maiores consequuntur rem doloremque facere, aperiam ducimus corporis,
          quo autem distinctio officiis. Cum voluptatibus sunt eligendi illo
          nemo eos soluta omnis. Rerum labore sit atque, quod tempore vero sint
          animi ipsum adipisci? Adipisci architecto unde aperiam deserunt dicta
          numquam, similique vitae recusandae cum ducimus inventore dolore.
          Reprehenderit optio pariatur ex accusamus? Voluptas voluptatum
          cupiditate vitae, laboriosam atque a quaerat amet inventore officia
          velit excepturi, quam ipsa magni corporis, praesentium consectetur
          aspernatur ipsam sequi pariatur sunt labore soluta? Amet eaque aut
          nemo. Dignissimos, cum dolores? Exercitationem amet a adipisci
          reprehenderit qui repellendus accusamus quae quod minima voluptatum
          rerum inventore cum, enim doloribus officia perferendis dolorum vel,
          eius, error ratione ipsum optio fugiat.
        </p>
        <h3 className="mt-4">This is H3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui
          totam repudiandae, labore expedita magni aperiam corrupti eveniet
          nihil cumque voluptatibus similique magnam, natus est distinctio sequi
          ducimus, eum quos? Reiciendis, nostrum delectus neque dolorem soluta
          porro cumque et quo non nesciunt totam dignissimos reprehenderit enim
          asperiores itaque! Repellat sunt numquam quidem? Pariatur dolorum
          beatae eos. Hic quia velit ipsa. Natus delectus nisi blanditiis
          pariatur porro necessitatibus eaque quos laboriosam dolore, dolores
          sequi, nesciunt provident odit laborum magni? Laudantium, similique
          sed. Neque quia iure itaque praesentium quaerat dolore culpa
          architecto!
        </p>
        </div>

        <div className="fugu-go-top">
          <img src="assets/images/svg/arrow-black-right.svg" alt />
        </div>
      </div>

      <Footer />
      <BlogScripts />
    </>
  );
}
