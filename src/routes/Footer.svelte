<script>
  	import Twitter from "svelte-material-icons/Twitter.svelte"
    import Facebook from "svelte-material-icons/Facebook.svelte"
    import Instagram from "svelte-material-icons/Instagram.svelte"
    import Linkedin from "svelte-material-icons/Linkedin.svelte"
    import { trans,locale, locales } from "$lib/language/i18n";

</script>

<footer id="footer" class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <a href="/" class="logo d-flex align-items-center">
              <!--
              <span class="sitename">株式会社LodgeGeek</span>
              -->
              <span class="sitename">{$trans("footer.section.companyName")}</span>
            </a>
            <div class="footer-contact pt-3">
              <p>{$trans("footer.section.address1")}
              </p>
              <p>{$trans("footer.section.address2")}</p>
              <p><strong>Phone(Japan Local):</strong> <span><a href="tel:03-6824-7905">03-6824-7905</a></span></p>
              <p><strong>Phone(International):</strong> <span><a href="tel:+81368247905">+81-368247905</a></span></p>
              <p><strong>Fax(Japan Local):</strong> <span> 03-4530-8790</span></p>
              <p><strong>Email:</strong> <span><a href="mailTo:contact@lodgegeek.com" class="__cf_email__" >contact@lodgegeek.com
              </a></span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href="#"><Twitter color="white" width=36 height=36/></a>
              <a href="#"><Facebook color="white" width=36 height=36/></a>
              <a href="#"><Instagram color="white" width=36 height=36/></a>
              <a href="#"><Linkedin color="white" width=36 height=36/></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Link</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="/#"> {$trans("memu.title.home")}</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/#about"> {$trans("memu.title.about")}</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/#services"> {$trans("memu.title.service")}</a></li>
              <!-- <li><i class="bi bi-chevron-right"></i> <a href="#"> Terms of service</a></li> -->
              <li><i class="bi bi-chevron-right"></i> <a href="/term" target="_blank"> {$trans("footer.section.privacyPolicy")}   </a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="/#services"> {$trans("services.section.job1")}</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/#services"> {$trans("services.section.job2")}</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="/#services"> {$trans("services.section.job3")}</a></li>

            </ul>
          </div>


        </div>
      </div>
    </div>

    <div class="copyright">
      <div class="container text-center">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">LodgeGeek Co., Ltd.</strong> <span>All Rights Reserved</span></p>
        <div class="credits">
          Designed by <a href="/">LodgeGeek Co., Ltd.</a> with ❤️️
        </div>
      </div>
    </div>

</footer>