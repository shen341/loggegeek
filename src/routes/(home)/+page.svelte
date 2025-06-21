<script>
  import WALL7 from "$lib/img/manage/70.jpg";
  import CheckAll from "svelte-material-icons/CheckAll.svelte";
  import MapMarkerRadius from "svelte-material-icons/MapMarkerRadius.svelte";
  import Cellphone from "svelte-material-icons/Cellphone.svelte";
  import EmailOutline from "svelte-material-icons/EmailOutline.svelte";
  import ChartLine from "svelte-material-icons/ChartLine.svelte";
  import LockSmart from "svelte-material-icons/LockSmart.svelte";
  import AccountStar from "svelte-material-icons/AccountStar.svelte";
  import backgroundVideo from "$lib/video/boat.mp4";
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
		isContactVisible=true;
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

<!-- /Hero Section -->


<section id="hero" class=" section module">
	<video autoplay loop muted playsinline class="hero-video">
		<source src={backgroundVideo} type="video/mp4" />
	  </video>

	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-3 col-md-4 col-sm-6">
				<div class="card my-5">
					<img src="https://cdn.pixabay.com/photo/2024/01/25/12/30/mountain-8531778_960_720.jpg 1x, https://cdn.pixabay.com/photo/2024/01/25/12/30/mountain-8531778_1280.jpg" class="card-img-top" alt="...">
					<h5 class="card-title text-light">
            {$trans("hero.section.planning")}
					</h5>
					<a href="/management-service" class="btn btn-light">Link</a>
				</div>
			</div>
			<div class="col-12 col-lg-3 col-md-4 col-sm-6">
				<div class="card my-5">
					<img src="https://cdn.pixabay.com/photo/2022/10/23/13/43/canoe-7541311_960_720.jpg" class="card-img-top" alt="...">
					<h5 class="card-title text-light">
            {$trans("hero.section.consultant")}
					</h5>
					<a href="/consulting-service" class="btn btn-light">Link</a>
				</div>
			</div>
			<div class="col-12 col-lg-3 col-md-4 col-sm-6">
				<div class="card my-5">
					<img src="https://cdn.pixabay.com/photo/2019/07/04/18/49/city-4317139_960_720.jpg" alt="...">
					<h5 class="card-title text-light">
            {$trans("hero.section.iotSales")}
					</h5>
					<a href="/iot-service" class="btn btn-light">Link</a>
				</div>
			</div>
			<div class="col-12 col-lg-3 col-md-4 col-sm-6">
				<div class="card my-5">
					<img src="https://cdn.pixabay.com/photo/2016/11/21/16/32/boy-1846310_960_720.jpg" alt="...">
					<h5 class="card-title text-light">
            {$trans("photography_planning")}
					</h5>
					<a href="/homestay-photographing" class="btn btn-light">Link</a>
				</div>
			</div>
		</div>
	</div>
</section>

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
    /* background: color-mix(in srgb, #063b71, transparent 30%); */
	background: color-mix(in srgb, #739bc5, transparent 30%);
    padding: 5px;
    border-radius: 50px;
    max-width: 980px;
    -webkit-backdrop-filter: blur(5px);
    /* backdrop-filter: blur(5px); */
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
    box-shadow: 0 0 0 1px var(--bs-info-border-subtle) inset, 0 0 0 4px rgb(255 255 255 / 15%) inset, 0 8px 0 0 #3a9dbb, 0 8px 0 2px #ccc9c9, 0 10px 10px 8px rgba(0, 0, 0, 0.5);
    background-color: #3ad2f1;
  }

  .module, .module-small {
    position: relative;
    padding: 140px 0;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}

.module-title {
    position: relative;
    letter-spacing: 4px;
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    color: #111;
    margin: 0 0 70px;
}

.module-title + .module-subtitle {
    margin-top: -35px;
}
.module-subtitle {
    text-align: center;
    font-size: 16px;
    color: #111;
    margin-bottom: 70px;
}
.features-icon, .alt-features-icon {
 text-align: center;
}
.features-title, .alt-features-title {
	text-align: center;
}

.features-card {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(40px);
    background: hsl(0deg 0% 100% / 12%);
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
}
.features-card:hover {
	transform: scale(1.05);
	box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

.card-1{
  background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);
      background-repeat: no-repeat;
    background-position: right;
    background-size: 80px;
}


@-webkit-keyframes animation-bg {
0% {
  background-position: 50% 100%;
}
100% {
  background-position: 50% 0%;
}
}
@keyframes animation-bg {
0% {
  background-position: 50% 100%;
}
100% {
  background-position: 50% 0%;
}
}

section
{
  margin-top:5rem;
}

.card 
{
margin-top:5%;
  -webkit-transition: all .2s ease-out;
-moz-transition: all .2s ease-out;
-ms-transition: all .2s ease-out;
-o-transition: all .2s ease-out;
 transition: all .2s ease-out;
border-radius:15px;
border:none;
  background-color:white;
}


.btn 
{
opacity:0;  
position:absolute;
left:50%;
top: 110%;
 transform: translate(-50%, -50%);
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0);
-webkit-transition: all .2s ease-out;
-moz-transition: all .2s ease-out;
-ms-transition: all .2s ease-out;
-o-transition: all .2s ease-out;
 transition: all .2s ease-out;
border-radius: 10px;
padding:0.8rem 1.7rem;
border:none;
font-weight:bold;
}

.card:hover .btn
{
opacity:1;
top: 100%;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover
{
box-shadow: 0 4px 18px 0 rgba(0,0,0,0.7);

}

h5{
	position: absolute;
	left:50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 1rem;
	opacity:0.8;
	text-shadow: 1px 1px 2px black;
	-webkit-transition: all .2s ease-out;
	-moz-transition: all .2s ease-out;
	-ms-transition: all .2s ease-out;
	-o-transition: all .2s ease-out;
	transition: all .2s ease-out;
	font-family: 'Leckerli One', cursive;
}

.card:hover h5{
	opacity:1;
  font-size: 1.5rem;
}

.btn:hover 
{
	color:white;
	border:none;
}

div.col-12:nth-child(1) > .card:nth-child(1) > .btn:nth-child(3):hover
{
background-color:Navy;
}

div.col-12:nth-child(2) > .card:nth-child(1) > .btn:nth-child(3):hover
{
  background-color:SeaGreen;
}

div.col-12:nth-child(3) > .card:nth-child(1) > .btn:nth-child(3):hover
{
  background-color: PaleVioletRed;
}

.card img
{
filter:blur(0px);
  -webkit-transition: all .2s ease-out;
-moz-transition: all .2s ease-out;
-ms-transition: all .2s ease-out;
-o-transition: all .2s ease-out;
 transition: all .2s ease-out;
border-radius:15px;
}

.card:hover img{
	filter:blur(3px);
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
	.module, .module-small {
		padding: 40px 0;
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
