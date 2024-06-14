<script>
  	import Twitter from "svelte-material-icons/Twitter.svelte"
    import Facebook from "svelte-material-icons/Facebook.svelte"
    import Instagram from "svelte-material-icons/Instagram.svelte"
    import Linkedin from "svelte-material-icons/Linkedin.svelte"
</script>

<footer id="footer" class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <a href="/" class="logo d-flex align-items-center">
              <span class="sitename">LodgeGeek</span>
            </a>
            <div class="footer-contact pt-3">
              <p>西葛西2-22-45 542室
              </p>
              <p>東京都江戸川区</p>
              <p><strong>Phone:</strong> <span>03-6824-7905</span></p>
              <p><strong>Fax:</strong> <span> 03-4530-8790</span></p>
              <p><strong>Email:</strong> <span><a href="mailTo:contact@lodgegeek.com" class="__cf_email__" >contact@lodgegeek.com
              </a></span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href=""><Twitter color="white" width=36 height=36/></a>
              <a href=""><Facebook color="white" width=36 height=36/></a>
              <a href=""><Instagram color="white" width=36 height=36/></a>
              <a href=""><Linkedin color="white" width=36 height=36/></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>リンク</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="#"> ホーム</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/#about"> 概要</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/#services"> サービス</a></li>
              <!-- <li><i class="bi bi-chevron-right"></i> <a href="#"> Terms of service</a></li> -->
              <li><i class="bi bi-chevron-right"></i> <a href="/term" target="_blank"> プライバシーポリシー  </a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="/#services"> 宿泊施設</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/#services"> IoT機器の輸入販売</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/#services"> SIMカードの販売t</a></li>

            </ul>
          </div>


        </div>
      </div>
    </div>

    <div class="copyright">
      <div class="container text-center">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">GP</strong> <span>All Rights Reserved</span></p>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you've purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>

  </footer>