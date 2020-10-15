import React from 'react'

const NewNavBar = () => {
    return (
       <div>
       <nav class="navbar navbar-expand-lg navbar-light navbar-floating">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="../assets/favicon.png" alt="" width="40"/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav ml-lg-5 mt-3 mt-lg-0">
              <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item active" href="index.html">Homepage 1</a>
                  <a class="dropdown-item" href="index-2.html">Homepage 2</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="updates.html">What's New</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
            <div class="ml-auto my-2 my-lg-0">
              <button class="btn btn-dark rounded-pill">Download Now</button>
            </div>
          </div>
        </div>
      </nav>



      <div class="page-hero-section bg-image hero-home-1" >
  <div class="hero-caption pt-5">
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-lg-6 wow fadeInUp">
          <div class="badge mb-2"><span class="icon mr-1"><span class="mai-globe"></span></span> #2 Editor Choice App of 2020</div>
          <h1 class="mb-4">Manage your Finance easier</h1>
          <p class="mb-4">Mobster has features to view and manage <br/>
          our finances, such as transfer, and statistics.</p>
          <a href="#" class="btn btn-primary rounded-pill">Get App Now</a>
        </div>
        <div class="col-lg-6 d-none d-lg-block wow zoomIn">
          <div class="img-place mobile-preview shadow floating-animate">
            <img src="../assets/img/app_preview_1.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    )
}

export default NewNavBar
