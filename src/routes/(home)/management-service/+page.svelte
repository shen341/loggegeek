<script>
  import { onMount } from 'svelte';
  import TOPRIGHT from "$lib/img/manage/illustration/410516-114187.png"
  import TOPLEFT from "$lib/img/manage/illustration/teacher-isolated-transparent-background_879541-1630.png";
  import ArrowRightCircle from "svelte-material-icons/ArrowRightCircle.svelte"
  import WALL1 from "$lib/img/manage/1.jpg";
  import WALL2 from "$lib/img/manage/2.png";
  import WALL3 from "$lib/img/manage/3.jpg";
  import WALL4 from "$lib/img/manage/4.jpg";  
  import WALL5 from "$lib/img/manage/5.jpg";  

  import WALL6 from "$lib/img/manage/6.jpg";
  import WALL7 from "$lib/img/manage/7.jpg";
  import WALL8 from "$lib/img/manage/8.jpg";
  import WALL10 from "$lib/img/manage/10.jpg";
  import WALL11 from "$lib/img/manage/11.png";
  import WALL12 from "$lib/img/manage/Image_20250222170109.jpg";
  import WALL14 from "$lib/img/manage/Image_20250222170306.jpg";



  import ASK1 from "$lib/img/manage/illustration/2110.jpg";
  import ASK2 from "$lib/img/manage/illustration/2111.jpg";
  import ASK3 from "$lib/img/manage/illustration/2115.jpg";
  import ASK4 from "$lib/img/manage/illustration/2119.png";
  import Reception from "$lib/img/manage/illustration/Reception.svg";
  import Cleaner from "$lib/img/manage/illustration/cleaner.svg";
  import Security from "$lib/img/manage/illustration/Security.svg";
  import TriangleSmallDown from "svelte-material-icons/TriangleSmallDown.svelte"
	import EmailOutline from "svelte-material-icons/EmailOutline.svelte"
	import MapMarkerRadius from "svelte-material-icons/MapMarkerRadius.svelte"
	import Cellphone from "svelte-material-icons/Cellphone.svelte"


  onMount(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    elements.forEach(el => observer.observe(el));
  });
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <style>
    /* Animation keyframes */
    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    .animate-on-scroll {
      opacity: 0;
      transition: all 0.8s ease-out;
    }

    .animate-on-scroll.animate {
      opacity: 1;
      transform: translateY(0);
    }

    .hero-section {
      background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9));
      padding: 80px 0;
      position: relative;
      overflow: hidden;
    }

    .feature-card {
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-10px);
    }

    .watermark {
      color: #063b71;
      flex: none;
      font-size: 160px;
      font-weight: 600;
      height: auto;
      letter-spacing: 0.02em;
      line-height: 1.4;
      margin: 0 0 0 0;
      opacity: 0.03;
      position: absolute;
      text-align: center;
      width: 100%;
      max-width: 100%;
      justify-content: center;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
</svelte:head>

<!-- Hero Section -->
<section class="hero-section" id="top">
  <div class="container">
    <div class="row justify-content-center text-center mt-4">
      <p class="watermark">LODGEGEEK  QUALITY LODGEGEEK QUALITY</p>
    </div>
    <div class="row justify-content-center text-center mt-4">
      <div class="col-xl-3 col-lg-3 animate-on-scroll custom_img">
        <div class="d-flex justify-content-center">
          <img src="{TOPLEFT}" alt="consoltant right" class="img-fluid"/>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 animate-on-scroll" >
        <h1 class="display-4  mb-4 mt-4 big-title">月額<span class="important_red">1,000</span>円～</h1>
        <h2 class="h2  mb-4 big-title">業界最安値の民泊管理代行</h2>
        <p class="lead mb-4">
          住宅宿泊管理業者に払う管理代行用を抑えて<br>
          自分で民泊運営をしたいオーナー様をサポートするサービスです。
        </p>
        <div>
          <p class="important_red text-center mb-2">問い合わせで簡単！30秒で完了</p>
          <a href="#contact" class="btn btn-danger btn-lg rounded-pill">
            問い合わせ
            <ArrowRightCircle/>
          </a>
        </div>

      </div>
      <div class="col-xl-3 col-lg-3 animate-on-scroll custom_img">
        <div class="d-flex justify-content-center">
          <img src="{TOPRIGHT}" alt="consoltant right" class="img-fluid"/>
        </div>
      </div>

    </div>
    <!-- <div class="row">
      <div class="image-wall d-flex justify-content-center flwx-wrap">
        <img src="{WALL1}" alt="Wall image1" class="img-fluid m-2">
        <img src="{WALL1}" alt="Image 2" class="img-fluid m-2">
        <img src="{WALL1}" alt="Image 3" class="img-fluid m-2">
        <img src="{WALL1}" alt="Image 4" class="img-fluid m-2">
      </div>
    </div> -->

    <div class="row py-5">    
      <div class="gallery-wrap">
        <div class="item" style="background-image: url({WALL1});"></div>
        <div class="item" style="background-image: url({WALL7})"></div>
        <div class="item" style="background-image: url({WALL6})"></div>
        <div class="item" style="background-image: url({WALL4})"></div>
        <div class="item" style="background-image: url({WALL8})"></div>
      </div>    
    </div>    
  </div>
</section>


<!-- problem-->
<section class="py-5 bg-light" id="problem">
  <div class="container text-center">
    <h6 class="mb-4">PROBLEM</h6>
    <h2 class="mb-5">こんなお悩みありませんか？</h2>
    <div class="row mb-4">
      <div class="col-md-6 col-lg-3 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{ASK1}" alt="Person 1" class="rounded-circle mb-3" width="80">
            <p>住宅宿泊管理業者に支払う管理費が高い...</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{ASK2}" alt="Person 2" class="rounded-circle mb-3" width="80">
            <p>自分のやり方やルールで、民泊を運営したい...</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{ASK3}" alt="Person 3" class="rounded-circle mb-3" width="80">
            <p>管理会社に委託しているのになんだかんだ自分でやっていることも多い...</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{ASK4}" alt="Person 4" class="rounded-circle mb-3" width="80">
            <p>必要なところだけプロにサポートしてほしい...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-info mb-5">
      不在型の民泊運営では、住宅宿泊事業法で<span class="important_red">全ての業務を1つの住宅宿泊管理業者に委託しなければならない</span>と定められています。
    </div>
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{Reception}" alt="Icon 1" class="mb-3" width="64">
            <h4 class="important_red text-center">宿泊者等への対応に関する業務</h4>
            <p>カギの受け渡しや宿泊者等の対応業務</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{Cleaner}" alt="Icon 2" class="mb-3" width="64">
            <h4 class="important_red text-center">清掃・衛生業務</h4>
            <p>居室の清掃や備品の交換、ゴミの処理</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{Security}" alt="Icon 3" class="mb-3" width="64">
            <h4 class="important_red text-center">住宅・設備管理及び安全確保業務</h4>
            <p>ライフライン、設備の管理、事故の予防業務</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row py-5">
      <h2>従来の不在型民泊運営では、<br/>住宅宿泊事業法で<span class="important_red">オーナーが自分で運営することができない... </span></h2>
      <div class="text-center">
          <TriangleSmallDown width="256" height="256" color="#063b71" />
      </div>
      <h2 class="owner text-center"><span class="important_red">LodgeGeek</span>がまるっと<span class="important_red">解決！</span></h2>

    </div>
      
  </div>
</section>

<!-- Features Section -->
<section class="py-5 bg-light" id="features">
  <div class="container">
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body text-center p-4">
            <span class="material-icons">schedule</span>
            <h3 class="h4 mb-3">簡単申込み</h3>
            <p>無料で簡単！30秒で完了</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body text-center p-4">
            <span class="material-icons"> trending_down</span>
            <h3 class="h4 mb-3">コストパフォーマンス</h3>
            <p>業界最安値の月額1,000円～</p>
            <a href="/price" class="btn btn-warning btn-lg rounded-pill s-ttSqoVaYtCRE">料金プランはこちら</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body text-center p-4">
            <span class="material-icons"> support_agent </span>
            <h3 class="h4 mb-3">安心サポート</h3>
            <p>24時間365日対応可能</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Property Showcase Section -->
<section class="py-5">
  <div class="container">
    <h2 class="text-center mb-5">管理実績例</h2>
    <div class="row g-4">
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL7} alt="Property" class="card-img-top" style="height: 310px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">物件例1</h5>
            <p class="card-text">快適な空間で素敵な滞在を。</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL14} alt="Property" class="card-img-top" style="height: 310px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">物件例2</h5>
            <p class="card-text"> 高級寝具セット</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL10} alt="Property" class="card-img-top" style="height: 310px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">物件例3</h5>
            <p class="card-text">観光地や交通の便が良い場所</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL11} alt="Property" class="card-img-top" style="height:310px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">物件例4</h5>
            <p class="card-text">現地の生活を体験できること</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL12} alt="Property" class="card-img-top" style="height: 300px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">物件例5</h5>
            <p class="card-text">コストパフォーマンス</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL2} alt="Property" class="card-img-top" style="height: 300px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">物件例6</h5>
            <p class="card-text">キッチンや洗濯機など、便利な設備が整っている</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-5 bg-light">
  <div class="container">
    <h6 class="mb-4 text-center">まずは無料相談からはじめませんか？</h6>
    <h2 class="mb-4 big-title">お気軽にお問い合わせください</h2>
    <div class="row gy-4">
      <div class="col-lg-4">
        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <div class="icon">
          <MapMarkerRadius color="#ffc451" width=36 height=36/>
        </div>

        <div>
          <h3>Address</h3>
          <p>〒134-0088 東京都江戸川区西葛西2-22-45 542室</p>
          <p>Room.542, 2-22-45, Nishikasai, Edogawaku, Tokyo, 134-0088, Japan</p>
        </div>
        </div><!-- End Info Item -->
  
        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
        <div class="icon">
          <Cellphone color="#ffc451" width=36 height=36/>
        </div>
        <div>
          <h3>Call Us</h3>
          <p><a href="tel:03-6824-7905">Japan Local: 03-6824-7905</a></p>
          <p><a href="tel:+81368247905">International: +81-368247905</a></p>
        </div>
        </div><!-- End Info Item -->
  
        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
        <div class="icon">
          <EmailOutline color="#ffc451" width=36 height=36/>
        </div>
        <div>
          <h3>Email Us</h3>
          <p><a href="mailTo:contact@lodgegeek.com" class="__cf_email__" >contact@lodgegeek.com
          </a>
        </p>
        </div>
        </div><!-- End Info Item -->
  
      </div>
      <!-- Start of Contact Form (Tallyを使用)-->
      <div class="col-lg-8">
        <div class="wrap">
          <iframe data-tally-src="https://tally.so/embed/meBRqQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="313" frameborder="0" marginheight="0" marginwidth="0" title="Contact Form"></iframe><script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>
        </div>
      </div>
      <!-- End of Contact Form (Tallyを使用)-->
    </div>

  </div>

</section>
<!-- /Contact Section -->


<style>

#features  .card-body span{
	font-size: 96px;
	color:#063b71;
}


#features .card-body p{
    color: #c8391e;
    font-weight: 700;
    font-size: 1.5rem;
    height: auto;
    line-height: 1.4;
}

  /* .image-wall{
    background: rgba(0, 0, 0, 0.0);
    flex: none;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 1900px;
    max-width: 100%;
  }

  .image-wall img{
    max-width: 500px; 
    height: auto;
  } */

  .big-title{
    color: #063b71;
    font-size: 64px;
    font-weight: 900;
    height: auto;
    letter-spacing: normal;
    line-height: 1.34;
    margin: 0px 0px 18px 0px;
    text-align: center;
    width: auto;
    max-width: 100%;
    justify-content: center;
  }
  .watermark {
    color: #063b71;
    font-size: 160px;
    font-weight: 600;
    opacity: 0.03; /* Adjust opacity for visibility */
    position: absolute; /* Absolute positioning */
    text-align: center;
    width: 600%; /* Cover the container */
    z-index: 0; /* Behind other content */
    top: 20%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust for centering */
  }

  .important_red{
    color: #c8391e;
    font-weight: 900;
    height: auto;
    letter-spacing: 0.05em;
    line-height: 1;
    margin: 0px 0px 0px 0px;
    text-align: left;
    width: auto;
    max-width: 100%;
    justify-content: flex-start;
  }

  .gallery-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
}

.item {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  transition: flex 0.8s ease;
  max-width: 500px;
  height: auto;
  &:hover{
    flex: 7;
  }
}  

#problem h6 {
  color: #c8391e;
  font-weight: bold;
}
#problem h2 {
  color: #063b71;
  font-weight: bold;
}
.card {
  border: none;
}
.alert-info {
  background-color: #e9f7fe;
  color: #063b71;
  font-weight: bold;
}

.card-body{
  color: #063b71;
  font-weight: bold;
}
.alert-info{
  font-size: 32px;
}
.owner{
    font-size: 48px;
    font-weight: 900;
    height: auto;
    line-height: 1.4;
    margin: 0px 0px -16px 4px;
    text-align: left;
}


.custom_img{
       display:none;
	}

@media only screen and (min-width: 768px){
			.custom_img{
       display:block;
			}
}

  /* スマホ */
  @media only screen and (max-width: 767px){
    .big-title{
      font-size: 48px;
    }
  }


</style>