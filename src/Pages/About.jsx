import React from "react";

function About() {
  return (
    <>
      <main>
        {/*? Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>About Me</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/*? Team */}
        <section className="team-area pt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-cat text-center mb-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team1.png" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-cat text-center mb-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team2.png" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-cat text-center mb-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                >
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team3.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services End */}
        {/* About Area End */}
        {/*? Blog Area Start */}
        <section className="home-blog-area pt-10 pb-50">
          <div className="container">
            {/* Section Tittle */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div
                  className="home-blog-single mb-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/gallery/blog1.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div
                  className="home-blog-single mb-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/gallery/blog2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Area End */}
        {/* ? services-area */}
        <section className="services-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div
                  className="single-services mb-40 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  <div className="features-icon">
                    <img src="assets/img/icon/icon1.svg" />
                  </div>
                  <div className="features-caption">
                    <h3>Location</h3>
                    <p>
                      {" "}
                      12 / sukhmal, Nagar Society, Chandlodiya Rd, nr.
                      dhanjibhai no kuva Nr, opposite GHANSHYAM COMPLEX,
                      Dhanjibhai Kuva, Chandlodiya, Ahmedabad, Gujarat 382481
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div
                  className="single-services mb-40 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <div className="features-icon">
                    <img src="assets/img/icon/icon2.svg" />
                  </div>
                  <div className="features-caption">
                    <h3>Phone</h3>
                    <p>9662177303</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div
                  className="single-services mb-40 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".4s"
                >
                  <div className="features-icon">
                    <img src="assets/img/icon/icon3.svg" />
                  </div>
                  <div className="features-caption">
                    <h3>Email</h3>
                    <p>strongcoregym@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
