
const HomeBanner = () => {

    return( 
        <>
        <div className="homeBannerSection">
             <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                 <div className="carousel-inner">
                    <div className="carousel-item active">
                       <img src="https://img.freepik.com/free-psd/geometric-sales-discount-banner-template_23-2149929912.jpg" className="d-block w-100  slide1" alt="slide1"/>
                      </div>

                      <div className="carousel-item">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-offer-headphones-banner-design-template-dcc4def09d0d65327ccc7658aa0f6bd7_screen.jpg?ts=1692774059" className="d-block w-100 slide1" alt="slide2"/>
                       </div>

                      <div className="carousel-item">
                         <img src="https://img.freepik.com/premium-vector/promotional-speaker-sale-banner-design-with-sound-system-discount-offer_848676-7757.jpg" className="d-block w-100 slide2" alt="slide3"/>
                      </div>

                       <div className="carousel-item">
                         <img src="https://img.freepik.com/premium-vector/hands-holding-smartphones-with-word-sale-screen_74855-20130.jpg" className="d-block w-100 slide1" alt="slide3"/>
                      </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Previous</span>
                     </button>
 
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                
                </div>
              </div>
        
      </>
    )
    }
    

export default HomeBanner;