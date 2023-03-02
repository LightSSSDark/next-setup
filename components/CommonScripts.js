// This will be used in all the pages except pages\blog.js

// This is list of all the scripts that are used in the template

// <Script src="" strategy="worker" strategy="worker" /> - format for loading scripts in worker
export default function CommonScripts() {
  return (
    <>
      <script src="assets/js/jquery-3.6.0.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/menu/menu.js"></script>
      <script src="assets/js/slick.js"></script>
      <script src="assets/js/isotope.pkgd.min.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/swiper-bundle.min.js"></script>
      <script src="assets/js/countdown.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyArZVfNvjnLNwJZlLJKuOiWHZ6vtQzzb1Y"></script>
      <script src="assets/js/app.js"></script>
    </>
  );
}
