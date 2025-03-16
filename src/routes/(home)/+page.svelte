<script>
  import WALL7 from "$lib/img/manage/7.jpg";
  import CheckAll from "svelte-material-icons/CheckAll.svelte";
  import MapMarkerRadius from "svelte-material-icons/MapMarkerRadius.svelte";
  import Cellphone from "svelte-material-icons/Cellphone.svelte";
  import EmailOutline from "svelte-material-icons/EmailOutline.svelte";
  import ChartLine from "svelte-material-icons/ChartLine.svelte";
  import LockSmart from "svelte-material-icons/LockSmart.svelte";
  import AccountStar from "svelte-material-icons/AccountStar.svelte";
  import backgroundVideo from "$lib/video/backgroud4.mp4";
  import MetaTagComponent from "../Components/MetaTagComponent.svelte";
  import { trans, locale } from "$lib/language/i18n";
  import { browser, building, dev, version } from "$app/environment";
  import { onMount } from 'svelte';
  import ContactForm from '../Components/ContactForm.svelte';
  import { useForm } from "svelte-use-form";

  let isContactVisible = false;

  if (browser) {
	  isContactVisible = window?.location?.hash === '#contact';
	}

	onMount(() => {
		isContactVisible = window.location.hash === '#contact';
	
		const handleHashChange = () => {
			isContactVisible = window.location.hash === '#contact';
			if (isContactVisible) {
			const contactSection = document.getElementById('contact');
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: 'smooth' });
			}
			}
		};

		window.addEventListener('hashchange', handleHashChange);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	});

  if (browser) {
    // @ts-ignore
    let userLang = window.navigator.language || navigator.userLanguage;

    //   console.log(userLang);

    if (userLang === "ja") {
      $locale = "日本語";
    } else if (userLang === "zh-CN") {
      $locale = "中文";
    } else {
      $locale = "English";
    }
  }

  const inquireForm = useForm();
  let customerName = "",
    customerEmail = "",
    title = "",
    customerMessage = "";

  let status = "0";
  /**
   * @description お問い合わせフォームのバリデーション
   */

  console.log(import.meta.env.BASE_URL); // BASE_URLの値をコンソールに出力
</script>

<svelte:head>
  <MetaTagComponent />
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link href="https://fonts.gstatic.com" rel="preconnect" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />
</svelte:head>

<!-- Hero Section -->
<section id="hero" class="hero section">
  <!-- <img src="{HEROBG}" class="hero-bg" alt=""> -->
  <video autoplay loop muted playsinline class="hero-video">
    <source src={backgroundVideo} type="video/mp4" />
  </video>

  <div class="container custom-backgroud">
    <div class="row justify-content-center text-center">
      <div class="col-xl-12 col-lg-12">
        <!--
				<img src="/LodgeGeek_Logo_temp_by_canva.png" alt="ロゴ" class="hero-logo" onerror="console.log('ロゴ画像の読み込みに失敗しました')" onload="console.log('ロゴ画像が正常に読み込まれました')">
			    -->
        <h1 style="font-weight: bold;margin-top: 10px;">
          {$trans("hero.section.title")}
        </h1>
        <!-- <p>{$trans("hero.section.subtitle")}</p> -->
      </div>
    </div>

    <!--
		  <div class="row justify-content-center text-center">
			<div class="col-xl-12 col-lg-12">
			  <h2>{$trans("hero.section.title")}</h2>
			  <p>{$trans("hero.section.subtitle")}</p>
			</div>
		  </div>
		  -->

    <div class="row gy-4 justify-content-center" style="text-align: center;">
      <div class="col-xl-3 col-md-4">
        <a href="/management-service" class="btn btn-info btn-lg btn3d">
          <div class="icon-box">
            <ChartLine color="#ffc451" width="56" height="56" />
            <h3>{$trans("hero.section.planning")}</h3>
          </div>
        </a>
      </div>
    </div>
    <div
      class="row gy-4 mt-1 mb-5 justify-content-center"
      style="text-align: center;"
    >
      <div class="col-xl-3 col-md-3" data-aos="fade-up" data-aos-delay="500">
        <a href="/consultant" class="btn btn-info btn-lg btn3d">
          <div class="icon-box">
            <AccountStar color="#ffc451" width="56" height="56" />
            <h3>{$trans("hero.section.consultant")}</h3>
          </div>
        </a>
      </div>

      <div class="col-xl-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
        <a href="/iot" class="btn btn-info btn-lg btn3d">
          <div class="icon-box">
            <LockSmart color="#ffc451" width="56" height="56" />
            <h3>{$trans("hero.section.iotSales")}</h3>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
<!-- /Hero Section -->

<!-- About Section -->
<section id="about" class="about section">
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row gy-4">
      <div class="col-lg-6 order-1 order-lg-2">
        <img src={WALL7} class="img-fluid" alt="" />
      </div>
      <div class="col-lg-6 order-2 order-lg-1 content">
        <h3>About Us</h3>
        <p class="mb-3">
          {$trans("about.section.title")}
        </p>
        <ul>
          <li>
            <div style="margin-right:0.5rem;">
              <CheckAll color="#ffc451" width="32" height="32" />
            </div>
            <span>{$trans("about.section.vision1")}</span>
          </li>
          <li>
            <div style="margin-right:0.5rem;">
              <CheckAll color="#ffc451" width="32" height="32" />
            </div>
            <span>{$trans("about.section.vision2")}</span>
          </li>
          <li>
            <div style="margin-right:0.5rem;">
              <CheckAll color="#ffc451" width="32" height="32" />
            </div>
            <span>{$trans("about.section.vision3")}</span>
          </li>
        </ul>
        <p>
          {$trans("about.section.vision.end")}
        </p>
      </div>
    </div>
  </div>
</section>
<!-- /About Section -->

<!-- Clients Section -->
<!-- <section id="clients" class="clients section">
  
		<div class="container" data-aos="fade-up" data-aos-delay="100">
  
		  <div class="swiper">
			<div class="swiper-wrapper align-items-center">
			  <div class="swiper-slide"><img src="assets/img/clients/client-1.png" class="img-fluid" alt=""></div>
			  <div class="swiper-slide"><img src="assets/img/clients/client-2.png" class="img-fluid" alt=""></div>
			  <div class="swiper-slide"><img src="assets/img/clients/client-3.png" class="img-fluid" alt=""></div>
			  <div class="swiper-slide"><img src="assets/img/clients/client-4.png" class="img-fluid" alt=""></div>
			  <div class="swiper-slide"><img src="assets/img/clients/client-5.png" class="img-fluid" alt=""></div>
			  <div class="swiper-slide"><img src="assets/img/clients/client-6.png" class="img-fluid" alt=""></div>
			  <div class="swiper-slide"><img src="assets/img/clients/client-7.png" class="img-fluid" alt=""></div>
			  <div class="swiper-slide"><img src="assets/img/clients/client-8.png" class="img-fluid" alt=""></div>
			</div>
			<div class="swiper-pagination"></div>
		  </div>
  
		</div>
  
	  </section> -->
<!-- /Clients Section -->

<!-- Features Section -->
<!-- <section id="features" class="features section">
  
		<div class="container">
  
		  <div class="row gy-4">
			<div class="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100"><img src="{WALL12}" alt=""></div>
			<div class="col-lg-6">
  
			  <div class="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0" >
				<div class="icon-class1">
					<Creation color="#ffc451" width=48 height=48/>
				</div>
				<div>
				  <h4>{$trans("features.section.job1")}</h4>
				  <ul>
					<li>{$trans("features.section.job1.detail1")}</li>
					<li>{$trans("features.section.job1.detail2")}</li>
				  </ul>
				</div>
			  </div>	
  
			  <div class="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="300">
				<div class="icon-class1">
					<EarthPlus color="#ffc451" width=48 height=48/>
				</div>
				<div>
				  <h4>{$trans("features.section.job2")}</h4>
				  <ul>
					<li>{$trans("features.section.job2.detail1")}</li>
					<li>{$trans("features.section.job2.detail2")}</li>
				  </ul>				  
				</div>
			  </div>
  
			  <div class="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="400">
				<div class="icon-class1">
					<Numeric1Circle color="#ffc451" width=48 height=48/>
				</div>
				<div>
				  <h4>{$trans("features.section.job3")}</h4>
				  <ul>
					<li>{$trans("features.section.job3.detail1")}</li>
					<li>{$trans("features.section.job3.detail2")}</li>
				  </ul>					  
				</div>
			  </div>
			</div>
		  </div>
  
		</div>
  
	  </section> -->
<!-- /Features Section -->

<!-- Services Section -->
<!-- Call To Action Section -->
<!-- <section id="call-to-action" class="call-to-action section">
  
		<img src="{CTABG}" alt="">
  
		<div class="container">
		  <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
			<div class="col-xl-10">
			  <div class="text-center">
				<h3>{$trans("action.section.title")}</h3>
				<p>{$trans("action.section.subtitle")}</p>
				<a class="cta-btn" href="#">Call To Action</a>
			  </div>
			</div>
		  </div>
		</div>
  
	  </section><!-- /Call To Action Section -->

<!-- Portfolio Section -->

<!-- Stats Section -->
<!-- <section id="stats" class="stats section">
  
		<div class="container" data-aos="fade-up" data-aos-delay="100">
  
		  <div class="row gy-4 align-items-center justify-content-between">
  
			<div class="col-lg-5">
			  <img src="{STATSIMG}" alt="" class="img-fluid">
			</div>
  
			<div class="col-lg-6">
  
			  <h3 class="fw-bold fs-2 mb-3">Voluptatem dignissimos provident quasi</h3>
			  <p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
			  </p>
  
			  <div class="row gy-4">
  
				<div class="col-lg-6">
				  <div class="stats-item d-flex">
					<i class="bi bi-emoji-smile flex-shrink-0"></i>
					<div>
					  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
					  <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
					</div>
				  </div>
				</div>
  
				<div class="col-lg-6">
				  <div class="stats-item d-flex">
					<i class="bi bi-journal-richtext flex-shrink-0"></i>
					<div>
					  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
					  <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
					</div>
				  </div>
				</div>
  
				<div class="col-lg-6">
				  <div class="stats-item d-flex">
					<i class="bi bi-headset flex-shrink-0"></i>
					<div>
					  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
					  <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
					</div>
				  </div>
				</div>
  
				<div class="col-lg-6">
				  <div class="stats-item d-flex">
					<i class="bi bi-people flex-shrink-0"></i>
					<div>
					  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
					  <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
					</div>
				  </div>
				</div>
  
			  </div>
  
			</div>
  
		  </div>
  
		</div>
  
	  </section> -->
<!-- /Stats Section -->

<!-- Testimonials Section -->
<!-- <section id="testimonials" class="testimonials section">
  
		<img src="{TESTIMONIALSBG}" class="testimonials-bg" alt="">
  
		<div class="container" data-aos="fade-up" data-aos-delay="100">
  
		  <div class="swiper">
			<div class="swiper-wrapper">
  
			  <div class="swiper-slide">
				<div class="testimonial-item">
				  <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
				  <h3>Saul Goodman</h3>
				  <h4>Ceo &amp; Founder</h4>
				  <div class="stars">
					<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
				  </div>
				  <p>
					<i class="bi bi-quote quote-icon-left"></i>
					<span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
					<i class="bi bi-quote quote-icon-right"></i>
				  </p>
				</div>
			  </div>
  
			  <div class="swiper-slide">
				<div class="testimonial-item">
				  <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
				  <h3>Sara Wilsson</h3>
				  <h4>Designer</h4>
				  <div class="stars">
					<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
				  </div>
				  <p>
					<i class="bi bi-quote quote-icon-left"></i>
					<span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
					<i class="bi bi-quote quote-icon-right"></i>
				  </p>
				</div>
			  </div>
  
			  <div class="swiper-slide">
				<div class="testimonial-item">
				  <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
				  <h3>Jena Karlis</h3>
				  <h4>Store Owner</h4>
				  <div class="stars">
					<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
				  </div>
				  <p>
					<i class="bi bi-quote quote-icon-left"></i>
					<span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
					<i class="bi bi-quote quote-icon-right"></i>
				  </p>
				</div>
			  </div>
  
			  <div class="swiper-slide">
				<div class="testimonial-item">
				  <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
				  <h3>Matt Brandon</h3>
				  <h4>Freelancer</h4>
				  <div class="stars">
					<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
				  </div>
				  <p>
					<i class="bi bi-quote quote-icon-left"></i>
					<span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
					<i class="bi bi-quote quote-icon-right"></i>
				  </p>
				</div>
			  </div>
  
			  <div class="swiper-slide">
				<div class="testimonial-item">
				  <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
				  <h3>John Larson</h3>
				  <h4>Entrepreneur</h4>
				  <div class="stars">
					<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
				  </div>
				  <p>
					<i class="bi bi-quote quote-icon-left"></i>
					<span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
					<i class="bi bi-quote quote-icon-right"></i>
				  </p>
				</div>
			  </div>
  
			</div>
			<div class="swiper-pagination"></div>
		  </div>
  
		</div>
  
	  </section> -->
<!-- /Testimonials Section -->

<!-- Team Section -->
<!-- <section id="team" class="team section">
  
		<div class="container section-title" data-aos="fade-up">
		  <h2>Team</h2>
		  <p>our Team</p>
		</div>
		<div class="container">
  
		  <div class="row gy-4">
  
			<div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
			  <div class="team-member">
				<div class="member-img">
				  <img src="{TEAM1}" class="img-fluid" alt="">
				  <div class="social">
					<a href="">
						<div class="icon">
							<Twitter color="#ffc451" width=36 height=36/>
						</div>
					</a>
					<a href=""><i class="bi bi-facebook"></i></a>
					<a href=""><i class="bi bi-instagram"></i></a>
					<a href=""><i class="bi bi-linkedin"></i></a>
				  </div>
				</div>
				<div class="member-info">
				  <h4>Walter White</h4>
				  <span>Chief Executive Officer</span>
				</div>
			  </div>
			</div>
  
			<div class="col-lg-3 col-md-6 d-flex align-items-stretch" >
			  <div class="team-member">
				<div class="member-img">
				  <img src="{TEAM2}" class="img-fluid" alt="">
				  <div class="social">
					<a href=""><i class="bi bi-twitter-x"></i></a>
					<a href=""><i class="bi bi-facebook"></i></a>
					<a href=""><i class="bi bi-instagram"></i></a>
					<a href=""><i class="bi bi-linkedin"></i></a>
				  </div>
				</div>
				<div class="member-info">
				  <h4>Sarah Jhonson</h4>
				  <span>Product Manager</span>
				</div>
			  </div>
			</div>
  
			<div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
			  <div class="team-member">
				<div class="member-img">
				  <img src="{TEAM3}" class="img-fluid" alt="">
				  <div class="social">
					<a href=""><i class="bi bi-twitter-x"></i></a>
					<a href=""><i class="bi bi-facebook"></i></a>
					<a href=""><i class="bi bi-instagram"></i></a>
					<a href=""><i class="bi bi-linkedin"></i></a>
				  </div>
				</div>
				<div class="member-info">
				  <h4>William Anderson</h4>
				  <span>CTO</span>
				</div>
			  </div>
			</div>
  
			<div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
			  <div class="team-member">
				<div class="member-img">
				  <img src="{TEAM4}" class="img-fluid" alt="">
				  <div class="social">
					<a href=""><i class="bi bi-twitter-x"></i></a>
					<a href=""><i class="bi bi-facebook"></i></a>
					<a href=""><i class="bi bi-instagram"></i></a>
					<a href=""><i class="bi bi-linkedin"></i></a>
				  </div>
				</div>
				<div class="member-info">
				  <h4>Amanda Jepson</h4>
				  <span>Accountant</span>
				</div>
			  </div>
			</div>
  
		  </div>
  
		</div>
	  </section> -->
<!-- /Team Section -->

<!-- Contact Section -->
<section id="contact" class="contact section">
  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    <p>Contact Us</p>
  </div>
  <!-- End Section Title -->

  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="mb-5">
      <iframe
        style="border:0; width: 100%; height: 270px;"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6482.7408347996625!2d139.8547251!3d35.6678802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601888756278020d%3A0x58adabc057d1728b!2z44CSMTM0LTAwODgg5p2x5Lqs6YO95rGf5oi45bed5Yy66KW_6JGb6KW_77yS5LiB55uu77yS77yS4oiS77yU77yV!5e0!3m2!1sja!2sjp!4v1717805375116!5m2!1sja!2sjp"
        frameborder="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
		title="Google Maps"
      ></iframe>
    </div>
    <!-- End Google Maps -->

    <div class="row gy-4">
      <div class="col-lg-4">
        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
          <div class="icon">
            <MapMarkerRadius color="#ffc451" width="36" height="36" />
          </div>

          <div>
            <h3>Address</h3>
            <p>〒134-0088 東京都江戸川区西葛西2-22-45 542室</p>
            <p>
              Room.542, 2-22-45, Nishikasai, Edogawaku, Tokyo, 134-0088, Japan
            </p>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
          <div class="icon">
            <Cellphone color="#ffc451" width="36" height="36" />
          </div>
          <div>
            <h3>Call Us</h3>
            <p><a href="tel:03-6824-7905">Japan Local: 03-6824-7905</a></p>
            <p><a href="tel:+81368247905">International: +81-368247905</a></p>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
          <div class="icon">
            <EmailOutline color="#ffc451" width="36" height="36" />
          </div>
          <div>
            <h3>Email Us</h3>
            <p>
              <a href="mailTo:contact@lodgegeek.com" class="__cf_email__"
                >contact@lodgegeek.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- Start of Contact Form (Tallyを使用)-->
      <div class="col-lg-8">
        <!-- <div class="wrap">
          <iframe
            data-tally-src="https://tally.so/embed/meBRqQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="313"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
			referrerpolicy="no-referrer-when-downgrade"
            title="Contact Form"
          ></iframe>
		  <script>
            var d = document,
              w = "https://tally.so/widgets/embed.js",
              v = function () {
                "undefined" != typeof Tally
                  ? Tally.loadEmbeds()
                  : d
                      .querySelectorAll("iframe[data-tally-src]:not([src])")
                      .forEach(function (e) {
                        e.src = e.dataset.tallySrc;
                      });
              };
            if ("undefined" != typeof Tally) v();
            else if (d.querySelector('script[src="' + w + '"]') == null) {
              var s = d.createElement("script");
              (s.src = w),
                (s.onload = v),
                (s.onerror = v),
                d.body.appendChild(s);
            }
          </script>
        </div> -->
		<ContactForm visible={isContactVisible} />
	  </div>
      <!-- End of Contact Form (Tallyを使用)-->

      <!-- Start Contact Form 
			<div class="col-lg-8">
			  <form class="php-email-form"  use:inquireForm>
				<div class="row gy-4" style="{status=="1" || status=="2" ? "display:none" : ""}">
				  <div class="col-md-6">
					<input type="text" name="name" class="form-control" placeholder="Your Name" 
					 bind:value={customerName} 
					 use:validators={[required,minLength(2)]}
					 >
					 <div class="use-form-hint">
						<HintGroup for="name">
						  <Hint on="required">名前を入力ください。</Hint>
						  <Hint on="minLength">2文字を入力ください。</Hint>
						</HintGroup>
					  </div>					 
				  </div>
  
				  <div class="col-md-6 ">
					<input type="email" class="form-control" name="email" placeholder="Your Email" bind:value={customerEmail} use:validators={[required,email]} >
					<div class="use-form-hint">
						<HintGroup for="email">
						  <Hint on="required">Emailを入力ください。</Hint>
						  <Hint on="email">Emailが不正です。</Hint>
						</HintGroup>
					</div>
				  </div>
  
				  <div class="col-md-12">
					<input type="text" class="form-control" name="subject" placeholder="Subject" bind:value={title} use:validators={[required,minLength(4),maxLength(50)]} >
					<div class="use-form-hint">
						<HintGroup for="subject">
						  <Hint on="required">subjectを入力ください。</Hint>
						  <Hint on="minLength">4文字以上を入力ください。</Hint>
						  <Hint on="maxLength">50文字以下を入力ください。</Hint>
						</HintGroup>
					</div>
				  </div>
  
				  <div class="col-md-12">
					<textarea class="form-control" name="message" rows="6" placeholder="Message" bind:value={customerMessage} use:validators={[required,minLength(4),maxLength(200)]}></textarea>
					<div class="use-form-hint">
						<HintGroup for="message">
						  <Hint on="required">messageを入力ください。</Hint>
						  <Hint on="minLength">4文字以上を入力ください。</Hint>
						  <Hint on="maxLength">200文字以下を入力ください。</Hint>
						</HintGroup>
					</div>
				  </div>
				</div>

				<div class="col-md-12 text-center">
					<div class="loading" style="{status=="1" ? "display:block" : ""}">Loading</div>
					<div class="sent-message" style="{status=="2" ? "display:block" : ""}">Your message has been sent. Thank you!</div>
				  </div>				
			  </form>
			  <div class="col-md-12 text-center" style="{status=="2" ? "display:none" : ""}">
					<button class="submit" disabled={!$inquireForm.valid } on:click={()=>{inquireAction()}}>Send Message</button>
			  </div>			  
			</div>
			End of Contact Form -->
    </div>
  </div>
</section>

<!-- /Contact Section -->

<style>
  @keyframes square-in-center {
    from {
      clip-path: inset(100% 100% 100% 100%);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
  .hero:before {
    animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) square-in-center both;
  }

  .hero-video {
    position: absolute;
    left: 0;
    right: 0;
    /* top: 0; */
    /* bottom: 0; */
    /* z-index: -1; */
    /* width: 100vw; */
    object-fit: cover;
    margin-top: 160px;
    /* height: 300px; */
  }

  .custom-backgroud {
    background: color-mix(in srgb, #063b71, transparent 30%);
    padding: 5px;
    border-radius: 50px;
    max-width: 980px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  .btn3d {
    transition: all 0.08s linear;
    position: relative;
    outline: medium none;
    -moz-outline-style: none;
    border: 0px;
    margin-right: 10px;
    margin-top: 15px;
  }
  .btn3d:focus {
    outline: medium none;
    -moz-outline-style: none;
  }
  .btn3d:active {
    top: 9px;
  }

  .btn-info {
    box-shadow:
      0 0 0 1px #5bc0de inset,
      0 0 0 4px rgb(255 255 255 / 15%) inset,
      0 8px 0 0 #46b8da,
      0 8px 0 2px #ccc9c9,
      0 10px 10px 8px rgba(0, 0, 0, 0.5);
    background-color: #5bc0de;
  }

  .btn-primary {
    box-shadow:
      0 0 0 1px #428bca inset,
      0 0 0 4px rgba(255, 255, 255, 0.15) inset,
      0 8px 0 0 #357ebd,
      0 8px 0 2px #ccc9c9,
      0 10px 10px 8px rgba(0, 0, 0, 0.5);
    background-color: #428bca;
  }
  .btn-success {
    box-shadow:
      0 0 0 1px #5cb85c inset,
      0 0 0 4px rgba(255, 255, 255, 0.15) inset,
      0 8px 0 0 #4cae4c,
      0 8px 0 2px #ccc9c9,
      0 10px 10px 8px rgba(0, 0, 0, 0.5);
    background-color: #5cb85c;
  }

  /* スマホ */
  @media only screen and (max-width: 767px) {
    .hero-video {
      margin-top: 0px;
      top: 0;
    }

    .custom-backgroud {
      border-radius: 0px;
    }
  }

  @media only screen and (min-width: 768px) {
    .hero-video {
      bottom: 0;
      width: 100vw;
      margin-top: 160px;
    }
  }
</style>
