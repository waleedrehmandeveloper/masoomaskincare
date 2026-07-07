document.querySelector('nav').innerHTML += `
        <div class="top-nav">
            <div class="top-nav-container">
                <div class="contact-info">
                    <div class="watsapp">
                        <img src="assets/images/whatsapp.png" alt="">
                        <span>+92 300 1234567</span>
                    </div>
                    <div class="telephone">
                        <img src="assets/images/telephone.png" alt="">
                        <span>+92 300 1234567</span>
                    </div>
                </div>
                <div class="social-media">
                    <a href="https://www.facebook.com/profile.php?id=100093345254677"><img src="assets/images/facebook.png" alt=""></a>
                    <a href="https://www.instagram.com/skin_care_studio_by_masooma/"><img src="assets/images/instagram.png" alt=""></a>
            </div>
        </div>
        </div>
        <div class="center-nav">
           <a href="index.html">
            <div class="row">
                <img class="logo" src="assets/images/masooma.png" alt="">
            </div>
           </a>
        </div>
        <div class="last-nav">
            <ul class="nav-links">    
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About us</a></li>
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="treatment.html" id="treatmentDropdown" role="button">
                    Treatments
                </a>
                <ul class="dropdown-menu" aria-labelledby="treatmentDropdown">
                    <li><a class="dropdown-item" href="treatments.html">Dental</a></li>
                    <li><a class="dropdown-item" href="treatments.html#skin">Skin Care</a></li>
                    <li><a class="dropdown-item" href="treatments.html#hair">Hair Treatment</a></li>
                    <li><a class="dropdown-item" href="treatments.html#surgery">Minor Surgeries</a></li>
                </ul>
                </li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="review.html">Reviews</a></li>
                <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="d-flex justify-content-center"><img id="menuIcon" class="menu" src="assets/images/menubar.png" alt=""></div>
                </div>
`
document.querySelector('footer').innerHTML =  `
     <div class="footer-container">
        <div class="footer-box-1">
        <h2 class="foot-con-mb">Contact Us</h2>
        <div class="foot-box1">
        <div class="footer-info">
             <h2 class="foot-con-mb-block">Contact Us</h2>
            <span>+03152210948</span>
            <span>masooomaskin@gmail.com</span>
        </div>
        <div class="foot-logo">
            <img width="300px" src="assets/images/masooma.png" alt="">
        </div>
        </div>
    </div>
        <div class="footer-box-2">
        <h2>Find Us</h2>
        <div class="footer-info">
           <span>Birmingham City Centre
            3rd Floor, Avebury House
            55 Newhall Street
            Birmingham, B3 3RB</span>
        </div>
        <div class="foot-icons">
            <a href="https://www.facebook.com/profile.php?id=100093345254677"><img src="assets/images/facebook.png" alt=""></a>
            <a href="https://www.instagram.com/skin_care_studio_by_masooma/"><img src="assets/images/instagram.png" alt=""></a>
        </div>
    </div>
        <div class="footer-box-3">
        <h2>Opening Times</h2>
        <div class="footer-info">
           <span>Monday to Saturday - 10am – 7pm
            Sunday - Closed
            Closed on Bank Holidays.</span>
            <span>
             Privacy Policy | Compliance | Complaints Procedure</span>
        </div>
        <div class="foot-btn">
           <a href="book.html"><button class="button">Book a Consultant</button></a>   
        </div>
    </div>
    </div>
`