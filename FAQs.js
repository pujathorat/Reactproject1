import React from 'react';
import martex from './images/martex.png';

export default function FAQs() {
  return (
    <div class="container p-4">
        <h1 class="text-center text-Black fw-bolder fs-1">Questions & Answers
</h1> <p className=" text-center text-primary-emphasis fw-bolder">Some common questions we get about Martex</p>
        <div class="container">
  < div class="row align-items-start">
    <div class="col">
    <p> <h3 className="fw-bolder"> 1. Getting started with Martex</h3>
Etiam amet mauris suscipit in odio integer congue metus and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet</p>

<p><h3 className="fw-bolder">2. What's inside the package?</h3>
An enim nullam tempor sapien gravida donec ipsum and enim porta justo integer at velna vitae auctor integer congue undo magna laoreet augue pretium purus pretium ligula</p>

<p><h3 className="fw-bolder"> 3. How do I choose a plan?</h3>
Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus pretium rutrum tempor sapien

Nemo ipsam egestas volute undo turpis purus lipsum primis aliquam sapien quaerat sodales pretium a purus</p>
    </div>
    < div class="col">
    <p> <h3 className="fw-bolder"> 4. How does Martex handle my privacy?</h3>
    Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus dolor luctus
An enim nullam tempor sapien gravida donec congue metus. Vitae arcu mollis blandit integer nemo volute velna</p>

<p><h3 className="fw-bolder">5. I have an issue with my account</h3>
Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida donec neque blandit justo aliquam molestie nunc sapien justo</p>

<p><h3 className="fw-bolder"> 6. Can I cancel at anytime?</h3>
An enim nullam tempor sapien gravida donec ipsum and enim porta justo integer at velna vitae auctor integer congue undo magna laoreet augue pretium purus pretium ligula</p>
  </div>
</div>
        </div>
        <div className="container text-center mt-4">
        <button type="button" class="btn btn-light btn-large rounded-pill">Have any questions? <a href='/'>Get in Touch</a></button></div>
        
        <div className="container text-center mt-4">
        <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
   <p><img src={martex} alt="" /> <h4 className="fw-bolder">MARTEX</h4></p>
    </div>
    <div class="col">
    <h4>Company</h4>
<p>About Us</p>

<p>Careers</p>

<p>Our Blog</p>

<p>Contact Us</p>
    </div>
    <div class="col">
    <h4>Product</h4>
<p>Integration</p>

<p>Customers</p>

<p>Pricing</p>

<p>Help Center</p>
    </div>
    <div class="col">
    <h4>Legal</h4>
<p>Terms of Use</p>
<p>Privacy Policy</p>
<p>Cookie Policy</p>
<p>Site Map</p>
    </div><div class="col">
    <h4>Connect With Us</h4>
<p>hello@yourdomain.com</p>
<p>Privacy Policy</p>
<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-browser-chrome" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
</svg></p>
    </div>
  </div>
</div> 
        </div>
        </div>
  )
}
