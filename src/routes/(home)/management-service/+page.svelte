<script>
  import { onMount } from 'svelte';
  import TOPRIGHT from "$lib/img/manage/illustration/410516-114187.png"
  import TOPLEFT from "$lib/img/manage/illustration/teacher-isolated-transparent-background_879541-1630.png";
  import ArrowRightCircle from "svelte-material-icons/ArrowRightCircle.svelte"
  import WALL2 from "$lib/img/manage/2.png";

  import WALL6 from "$lib/img/manage/6.jpg";
  import WALL7 from "$lib/img/manage/7.jpg";
  import WALL8 from "$lib/img/manage/8.jpg";
  import WALL10 from "$lib/img/manage/10.jpg";
  import WALL11 from "$lib/img/manage/11.png";
  import WALL12 from "$lib/img/manage/Image_20250222170109.jpg";
  import WALL14 from "$lib/img/manage/Image_20250222170306.jpg";
	import MetaTagComponent from "../../Components/MetaTagComponent.svelte";

  import ASK1 from "$lib/img/manage/illustration/2110.jpg";
  import ASK2 from "$lib/img/manage/illustration/2111.jpg";
  import ASK3 from "$lib/img/manage/illustration/2115.jpg";
  import ASK4 from "$lib/img/manage/illustration/2119.png";
  import Reception from "$lib/img/manage/illustration/Reception.svg";
  import Cleaner from "$lib/img/manage/illustration/cleaner.svg";
  import Security from "$lib/img/manage/illustration/Security.svg";
	import EmailOutline from "svelte-material-icons/EmailOutline.svelte"
	import MapMarkerRadius from "svelte-material-icons/MapMarkerRadius.svelte"
	import Cellphone from "svelte-material-icons/Cellphone.svelte"
  import ProductionRelated from "../../Components/ProductionRelated.svelte";
  import InteriorDesignCoordination from "../../Components/InteriorDesignCoordination.svelte";
	import { trans,locale } from "$lib/language/i18n";
  import Facebook from "svelte-material-icons/Facebook.svelte"
  import WECHAT from "$lib/img/socail/apps-wechat.svg";
  import LINE from "$lib/img/socail/icons8-line-96.png";

  
  let  productModalShow=false;
  let isInteriorModalVisible=false;

  let mobilePlan="plan1"
  const mobilePlanClick=(plan="plan1")=>{
    switch (plan) {
      case "plan1":
        mobilePlan="plan1"
        break;
      case "plan2":
        mobilePlan="plan2"
        break;   
      case "plan3":
        mobilePlan="plan3";
        break;
      default:
        mobilePlan="plan1"
        break;
    }
  }


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
	<MetaTagComponent/>
	<link href="https://fonts.googleapis.com" rel="preconnect">
	<link href="https://fonts.gstatic.com" rel="preconnect">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

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
        <h1 class="display-4  mb-4 mt-4 big-title">{$trans("manage.month.fee")}<span class="important_red">6,000</span>{$trans("manage.unit")}～</h1>
        <h2 class="h2  mb-4 big-title">{$trans("manage.title")}</h2>
        <p class="lead mb-4">
          {$trans("manage.lead1")}<br>
          {$trans("manage.lead2")}
        </p>
        <div>
          <p class="important_red text-center mb-2">{$trans("manage.contact")}</p>
          <a href="#contact" class="btn btn-danger btn-lg rounded-pill">
            {$trans("manage.contact.button")}
            <ArrowRightCircle width="32" height="32"/>
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
        <div class="item" style="background-image: url({WALL7})"></div>
        <div class="item" style="background-image: url({WALL6})"></div>
        <div class="item" style="background-image: url({WALL8})"></div>
      </div>    
    </div>    
  </div>
</section>


<!-- problem-->
<section class="py-5 bg-light" id="problem">
  <div class="container text-center">
    <h6 class="mb-4">PROBLEM</h6>
    <h2 class="mb-5">{$trans("manage.problem.title")}</h2>
    <div class="row mb-4">
      <div class="col-md-6 col-lg-3 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{ASK1}" alt="Person 1" class="rounded-circle mb-3" width="80">
            <p>{$trans("manage.problem.case1")}...</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{ASK2}" alt="Person 2" class="rounded-circle mb-3" width="80">
            <p>{$trans("manage.problem.case2")}...</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{ASK3}" alt="Person 3" class="rounded-circle mb-3" width="80">
            <p>{$trans("manage.problem.case3")}...</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{ASK4}" alt="Person 4" class="rounded-circle mb-3" width="80">
            <p>{$trans("manage.problem.case4")}...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-5 bg-light" id="plan">
  <div class="container text-center">
    <h6 class="mb-4">SERVICE PRICE MENU</h6>
    <h2 class="mb-5">{$trans("manage.plan.fee")}</h2>
    <div class="p-tb-pc fadeInTrigger fadeIn">
      <div class="p-tb-pc__item">
          <div class="p-tb-pc__ttl-wrap p-tb-pc__ttl-wrap--mt">
              <h4 class="p-tb-pc__ttl">{$trans("manage.fee_detail_tile")}</h4>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--mid">
              <div class="p-tb-pc__ct-flex">
                  <div class="p-tb-pc__ct-ttl-wrap">
                      <h4 class="p-tb-pc__ct-ttl">{$trans("manage.geust")}</h4>
                  </div>
                  <div class="p-tb-pc__ct-txt-wrap">
                      <p class="p-tb-pc__ct-txt">- {$trans("manage.geust.message")}</p>
                      <p class="p-tb-pc__ct-txt">- {$trans("manage.geust.telephone")}</p>
                      <p class="p-tb-pc__ct-txt">- {$trans("manage.geust.review")}</p>
                      <p class="p-tb-pc__ct-txt">- {$trans("manage.customer.collect.info")}</p>
                  </div>
              </div>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--mid">
            <div class="p-tb-pc__ct-flex">
                <div class="p-tb-pc__ct-ttl-wrap">
                    <h4 class="p-tb-pc__ct-ttl">{$trans("manage.maintenance")}</h4>
                </div>
                <div class="p-tb-pc__ct-txt-wrap">
                    <p class="p-tb-pc__ct-txt">- {$trans("manage.maintenance.price")}</p>
                    <p class="p-tb-pc__ct-txt">- PMS</p>
                    <p class="p-tb-pc__ct-txt">- {$trans("manage.maintenance.clean")}</p>
                    <p class="p-tb-pc__ct-txt">- {$trans("manage.maintenance.welcome")}</p>
                </div>
            </div>
        </div>

        <div class="p-tb-pc__ct">
            <div class="p-tb-pc__ct-flex">
                <div class="p-tb-pc__ct-ttl-wrap">
                    <h4 class="p-tb-pc__ct-ttl">{$trans("manage.maker")}</h4>
                </div>
                <div class="p-tb-pc__ct-txt-wrap">
                    <p class="p-tb-pc__ct-txt">- {$trans("manage.maker.listing.page")}</p>
                    <p class="p-tb-pc__ct-txt">- {$trans("manage.maker.house.guide")}</p>
                    <p class="p-tb-pc__ct-txt">- {$trans("manage.maker.floor.plan")}</p>
                    <p class="p-tb-pc__ct-txt">- {$trans("manage.maker.stay.form")}</p>
                    <p class="p-tb-pc__ct-txt">
                        <span id="modalOpen1">
                          <button class="btn btn-outline-danger rounded-pill" on:click={()=>{productModalShow=true}}>{$trans("manage.maker.detail.forward")}</button>
                        </span>
                    </p>
                </div>
            </div>
        </div>

      </div>
      <!--一部代行-->
      <div class="p-tb-pc__item p-tb-pc__detail">
          <div class="p-tb-pc__detail-wrap">
              <h4 class="p-tb-pc__detail-ttl">{$trans("manage.plan1")}</h4>
              <div class="p-tb-pc__detail-price-wrap">
                  <p class="p-tb-pc__detail-price">
                      {$trans("manage.sales")}×15％<span class="p-tb-pc__detail-price-note p-tb-pc__detail-price-note01">{$trans("manage.ota")}&ensp;※1</span>
                  </p>
              </div>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--detail">
            <p class="p-tb-pc__ct-txt">ー</p>
            <p class="p-tb-pc__ct-txt">ー</p>
            <p class="p-tb-pc__ct-txt">ー</p>
            <p class="p-tb-pc__ct-txt">ー</p>
            <p class="p-tb-pc__ct-txt"></p>
        </div>          
      </div>
      
      <!--完全代行-->
      <div class="p-tb-pc__item p-tb-pc__detail">
        <div class="p-tb-pc__detail-wrap">
            <h4 class="p-tb-pc__detail-ttl">{$trans("manage.plan2")}</h4>
            <div class="p-tb-pc__detail-price-wrap">
                <p class="p-tb-pc__detail-price">
                    {$trans("manage.sales")}×20％<span class="p-tb-pc__detail-price-note p-tb-pc__detail-price-note01">{$trans("manage.ota")}&ensp;※1</span>
                </p>
            </div>
        </div>
        <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
        </div>
        <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
          <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
          <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
          <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
          <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
        </div>
        <div class="p-tb-pc__ct p-tb-pc__ct--detail">
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
        </div>

      </div>

      <!--{$trans("manage.geust.message")}代行-->
      <div class="p-tb-pc__item p-tb-pc__detail">
          <div class="p-tb-pc__detail-wrap">
              <h4 class="p-tb-pc__detail-ttl">{$trans("manage.plan3")}</h4>
              <div class="p-tb-pc__detail-price-wrap">
                  <p class="p-tb-pc__detail-price">
                      {$trans("manage.month.fee")}35,000{$trans("manage.unit")}<span class="p-tb-pc__detail-price-note p-tb-pc__detail-price-note02">※2</span>
                  </p>
              </div>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt">{$trans("manage.month.fee")}5,000{$trans("manage.unit")}</p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
              <p class="p-tb-pc__ct-txt">ー</p>
              <p class="p-tb-pc__ct-txt">ー</p>
              <p class="p-tb-pc__ct-txt">ー</p>
              <p class="p-tb-pc__ct-txt">ー</p>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--detail">
            <p class="p-tb-pc__ct-txt p-tb-pc__ct-txt--price">30,000{$trans("manage.unit")}&emsp;</p>
            <p class="p-tb-pc__ct-txt p-tb-pc__ct-txt--price">70,000{$trans("manage.unit")}〜</p>
            <p class="p-tb-pc__ct-txt p-tb-pc__ct-txt--price">10,000{$trans("manage.unit")}&emsp;</p>
            <p class="p-tb-pc__ct-txt p-tb-pc__ct-txt--price">10,000{$trans("manage.unit")}&emsp;</p>
            <p class="p-tb-pc__ct-txt"></p>
        </div>          
      </div>
    </div>

    <div class="p-tb-sp fadeInTrigger fadeIn">
      <ul class="p-tb-sp__tab">
           <!--完全代行 -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li class="p-tb-sp__tab-item {mobilePlan=="plan1"?"is-open":""}" id="plan1" on:click={()=>{mobilePlanClick("plan1")}}>{$trans("manage.plan1")}</li>
           <!--完全代行 -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li class="p-tb-sp__tab-item {mobilePlan=="plan3"?"is-open":""}" id="plan3" on:click={()=>{mobilePlanClick("plan3")}}>{$trans("manage.plan2")}</li>
          <!--{$trans("manage.geust.message")}代行 -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li class="p-tb-sp__tab-item {mobilePlan=="plan2"?"is-open":""}" id="plan2" on:click={()=>{mobilePlanClick("plan2")}}>{$trans("manage.plan3")}</li>
      </ul>
      <div class="p-tb-sp__item" id="plan1Item" style="{mobilePlan=="plan1"?"display: block;":"display: none;"}">
          <div class="p-tb-sp__ct p-tb-sp__ct--item">
              <h4 class="p-tb-sp__ct-ttl">{$trans("manage.fee_detail_tile")}</h4>
              <div class="p-tb-sp__price-wrap">
                  <p class="p-tb-sp__price p-tb-sp__price--ty">
                    {$trans("manage.sales")}×15％<span class="p-tb-sp__price-note p-tb-sp__price-note01">{$trans("manage.ota")}&ensp;※1</span>
                  </p>
              </div>
          </div>
          <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">{$trans("manage.geust")}</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.geust.message")}</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.geust.telephone")}</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.geust.review")}</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.geust.collect.info")}</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
        </div>
        <!-- {$trans("manage.maintenance")} -->
        <div class="p-tb-sp__ct">
          <h4 class="p-tb-sp__ct-ttl">{$trans("manage.maintenance")}</h4>
          <div class="p-tb-sp__ct-item">
              <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maintenance.price")}</p>
              <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-sp__ct-item">
              <p class="p-tb-sp__ct-item-ttl">- PMS</p>
              <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-sp__ct-item">
              <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maintenance.clean")}</p>
              <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-sp__ct-item">
              <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maintenance.welcome")}</p>
              <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
          </div>
       </div>
        <!-- {$trans("manage.maker")} -->
        <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">{$trans("manage.maker")}</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.listing.page")}</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.house.guide")}</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.floor.plan")}</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.stay.form")}</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <span id="modalOpen4" class="p-tb-sp__ct-item-link"><button class="btn btn-outline-danger rounded-pill" on:click={()=>{productModalShow=true}}>{$trans("manage.maker.detail.forward")}</button></span>
        </div>

      </div>
      <div class="p-tb-sp__item" id="plan3Item" style="{mobilePlan=="plan3"?"display: block;":"display: none;"}">
        <div class="p-tb-sp__ct p-tb-sp__ct--item">
            <h4 class="p-tb-sp__ct-ttl">{$trans("manage.fee_detail_tile")}</h4>
            <div class="p-tb-sp__price-wrap">
                <p class="p-tb-sp__price p-tb-sp__price--ty">
                    {$trans("manage.sales")}×20％<span class="p-tb-sp__price-note p-tb-sp__price-note01">{$trans("manage.ota")}&ensp;※1</span>
                </p>
            </div>
        </div>
        <div class="p-tb-sp__ct">
          <h4 class="p-tb-sp__ct-ttl">{$trans("manage.maintenance")}</h4>
          <div class="p-tb-sp__ct-item">
              <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maintenance.price")}</p>
              <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-sp__ct-item">
              <p class="p-tb-sp__ct-item-ttl">- PMS</p>
              <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-sp__ct-item">
              <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maintenance.clean")}</p>
              <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-sp__ct-item">
              <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maintenance.welcome")}</p>
              <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
          </div>
        </div>
        <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">{$trans("manage.maker")}</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.listing.page")}</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.house.guide")}</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.floor.plan")}</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.stay.form")}</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <span id="modalOpen4" class="p-tb-sp__ct-item-link"><button class="btn btn-outline-danger rounded-pill" on:click={()=>{productModalShow=true}}>{$trans("manage.maker.detail.forward")}</button></span>
        </div>

      </div>
      
      <div class="p-tb-sp__item" id="plan2Item" style="{mobilePlan=="plan2"?"display: block;":"display: none;"}">
          <div class="p-tb-sp__ct p-tb-sp__ct--item">
              <h4 class="p-tb-sp__ct-ttl">{$trans("manage.fee_detail_tile")}</h4>
              <div class="p-tb-sp__price-wrap">
                  <p class="p-tb-sp__price">
                      {$trans("manage.month.fee")}35,000{$trans("manage.unit")}<span class="p-tb-sp__price-note p-tb-sp__price-note02">※2</span>
                  </p>
              </div>
          </div>
          <div class="p-tb-sp__ct">
              <h4 class="p-tb-sp__ct-ttl">{$trans("manage.geust")}</h4>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.geust.message")}</p>
                  <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.geust.telephone")}</p>
                  <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.geust.review")}</p>
                  <p class="p-tb-sp__ct-item-txt">{$trans("manage.month.fee")}5,000{$trans("manage.unit")}&emsp;</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.geust.collect.info")}</p>
                  <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
              </div>
          </div>
          <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">{$trans("manage.maintenance")}</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maintenance.price")}</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- PMS</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maintenance.clean")}</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maintenance.welcome")}</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
        </div>          
          <div class="p-tb-sp__ct">
              <h4 class="p-tb-sp__ct-ttl">{$trans("manage.maker")}</h4>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.listing.page")}</p>
                  <p class="p-tb-sp__ct-item-txt">30,000{$trans("manage.unit")}&emsp;</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.house.guide")}</p>
                  <p class="p-tb-sp__ct-item-txt">70,000{$trans("manage.unit")}〜</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.floor.plan")}</p>
                  <p class="p-tb-sp__ct-item-txt">10,000{$trans("manage.unit")}&emsp;</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- {$trans("manage.maker.stay.form")}</p>
                  <p class="p-tb-sp__ct-item-txt">10,000{$trans("manage.unit")}&emsp;</p>
              </div>
              <span id="modalOpen4" class="p-tb-sp__ct-item-link"><button class="btn btn-outline-danger rounded-pill" on:click={()=>{productModalShow=true}}>{$trans("manage.maker.detail.forward")}</button></span>
          </div>

      </div>
    </div>

    <ul class="p-plan__items p-plan__items--pc">
        <li class="p-plan__item">
            <p class="p-plan__item-txt">※1 {$trans("manage.comment1")} </p>
        </li>
        <li class="p-plan__item">
            <p class="p-plan__item-txt">※2&ensp;{$trans("manage.comment2")}</p>
        </li>
        <li class="p-plan__item">
            <p class="p-plan__item-txt">※&ensp;&ensp;{$trans("manage.comment3")}</p>
        </li>
        <li class="p-plan__item">
            <p class="p-plan__item-txt">※&ensp;&ensp;{$trans("manage.comment4")}</p>
        </li>
    </ul>



  </div>
</section>


<!-- service Section -->
<section class="py-5 bg-light" id="service">
  <div class="container text-center">
    <h6 class="mb-4">SOLUTION</h6>
    <h2 class="mb-5">{$trans("manage.subcontract")}</h2>
    <div class="mb-5">
      {$trans("manage.subcontract.comment")}
    </div>
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{Reception}" alt="Icon 1" class="mb-3" width="64">
            <h4 class="important_red text-center">{$trans("manage.subcontract.guest")}</h4>
            <p>{$trans("manage.subcontract.guest.key")}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{Cleaner}" alt="Icon 2" class="mb-3" width="64">
            <h4 class="important_red text-center">{$trans("manage.subcontract.clean")}</h4>
            <p>{$trans("manage.subcontract.clean.detail")}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
          <div class="card-body">
            <img src="{Security}" alt="Icon 3" class="mb-3" width="64">
            <h4 class="important_red text-center">{$trans("manage.subcontract.security")}</h4>
            <p>{$trans("manage.subcontract.security.detail")}</p>
          </div>
        </div>
      </div>
    </div>


    <div>
      <h3 class="important_red text-center mb-2 mt-5">{$trans("manage.subcontract.why")}</h3>
      <a href="/subcontracting" class="btn btn-danger btn-lg rounded-pill">
        {$trans("manage.subcontract.detail")}
        <ArrowRightCircle width="32" height="32"/>
      </a>
    </div>
  </div>
</section>

<!-- Property Showcase Section -->
<section class="py-5">
  <div class="container text-center">
    <h6 class="mb-4">SHOW</h6>
    <h2 class="text-center mb-5">{$trans("manage.actual.results")}</h2>
    <div class="row g-4">
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL7} alt="Property" class="card-img-top" style="height: 310px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">{$trans("manage.actual.results.example")}1</h5>
            <p class="card-text">{$trans("manage.actual.results.detail1")}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL14} alt="Property" class="card-img-top" style="height: 310px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">{$trans("manage.actual.results.example")}2</h5>
            <p class="card-text"> {$trans("manage.actual.results.detail2")}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL10} alt="Property" class="card-img-top" style="height: 310px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">{$trans("manage.actual.results.example")}3</h5>
            <p class="card-text">{$trans("manage.actual.results.detail3")}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL11} alt="Property" class="card-img-top" style="height:310px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">{$trans("manage.actual.results.example")}4</h5>
            <p class="card-text">{$trans("manage.actual.results.detail4")}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL12} alt="Property" class="card-img-top" style="height: 300px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">{$trans("manage.actual.results.example")}5</h5>
            <p class="card-text">{$trans("manage.actual.results.detail5")}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate-on-scroll" style="transform: translateY(50px);">
        <div class="card border-0 shadow-sm">
          <img src={WALL2} alt="Property" class="card-img-top" style="height: 300px;width:auto;">
          <div class="card-body">
            <h5 class="card-title">{$trans("manage.actual.results.example")}6</h5>
            <p class="card-text">{$trans("manage.actual.results.detail6")}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-5 bg-light">
  <div class="container">
    <!-- <h6 class="mb-4 text-center">まずは無料相談からはじめませんか？</h6> -->
    <h2 class="mb-4 big-title">{$trans("manage.problem.contact")}</h2>
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
  
        <!-- End Info Item -->
			  <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
          <div class="icon">
            <Facebook color="#ffc451" width=36 height=36/>
          </div>
          <div>
            <h3>Social Media</h3>
            <p>
            <a href="weixin://dl/chat?dinzzz" target="_blank"><img src="{WECHAT}" style="width: 36px;height:36px" alt="" />dinzzz</a>
            <a href="https://line.me/R/ti/p/@834rjqcs" target="_blank"><img src="{LINE}" style="width: 36px;height:36px" alt="" />834rjqcs</a>
            </p>				  
          </div>
        </div>

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


<ProductionRelated bind:showModal={productModalShow}/>
<InteriorDesignCoordination bind:showModal={isInteriorModalVisible} />
<!-- End Extra Large Modal-->
{#if productModalShow}
    <div class="modal-backdrop fade show"></div>  
{/if}    


<style>


.rounded-pill {
  font-weight: 700;
}


#features .card-body p{
    color: #c8391e;
    font-weight: 700;
    font-size: 1.5rem;
    height: auto;
    line-height: 1.4;
}


  .big-title{
    color: #063b71;
    /* font-size: 64px; */
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

section div.container h6{
  color: #c8391e;
  font-weight: bold;
}
section div.container h2 {
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


  .p-tb-pc {
    display: flex;
    justify-content: space-between;
    width: 1144px;
    margin: 40px auto 0;
    position: relative;
}

  .p-tb-pc__ttl-wrap--mt {
    margin-top: 83px;
  }
  .p-tb-pc__ttl-wrap {
      padding: 11px;
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 0 0 17px rgba(232, 88, 50, 0.16);
}
.p-tb-pc__ttl {
    display: flex;
    justify-content: center;
    font-size: 19px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1;
    color: #E85832;
    background-color: #E3F2FD;
    padding: 16px 0;
    margin: 0;
    border-radius: 15px;
}

.p-tb-pc__ct {
    height: 230px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 17px rgba(232, 88, 50, 0.16);
    padding: 14px 10px;
    margin-top: 10px;
}
.p-tb-pc__ct--mid {
    height: 195px;
}
.p-tb-pc__ct-flex {
    display: flex;
    height: 100%;
}
.p-tb-pc__ct-ttl-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #E3F2FD;
    border-radius: 15px;
}

.p-tb-pc__ct-ttl {
    display: flex ;
    align-items: center;
    width: 52px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 19px;
    color: #E85832;
}
.p-tb-pc__ct-txt-wrap {
    margin-left: 10px;
}
.p-tb-pc__ct-txt {
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 41px;
}
.p-tb-pc__item {
    width: 300px;
    border-radius: 15px;
}
.p-tb-pc__detail {
    width: 270px;
    background-color: #F6E3DD;
}
.p-tb-pc__detail-wrap {
    background-color: color-mix(in srgb, #063b71, transparent 30%);
    border-radius: 15px;
}
.p-tb-pc__detail-ttl {
    display: flex;
    justify-content: center;
    font-size: 27px;
    color: #fff;
    line-height: 1;
    margin: 0;
    padding: 26px 0 30px;
    font-weight: 700;
}
.p-tb-pc__detail-price-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 73px;
    background-color: #fff;
    border-radius: 15px;
}
.p-tb-pc__detail-price {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1;
    color: #E85832;
    position: relative;
}

.p-tb-pc__detail-price-note01 {
    display: block;
    width: 135px;
    top: 23px;
    left: 0;
}

.p-tb-pc__detail-price-note {
    position: absolute;
    font-size: 11px;
    font-weight: 400;
    color: #4E4E4E;
}
.p-tb-pc__ct--detail .p-tb-pc__ct-txt {
    color: #E85832;
    justify-content: center;
}
.p-tb-pc__ct--detail .p-tb-pc__ct-txt:nth-of-type(even) {
    background-color: #E3F2FD;
    border-radius: 15px;
}

p.p-tb-pc__ct-txt{
    margin-bottom: 0;
    font-weight: 700;
    font-size: 14px;
}

.p-plan__items {
    margin: 15px 0 0 500px;
    position: relative;
    list-style: none;
}
.p-plan__item-txt {
    font-size: 11px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    text-indent: -1em;
    padding-left: 1em;
    margin-bottom: 0;

}

.p-tb-sp {
    display: none;
}

.p-tb-sp__tab {
    display: flex;
    justify-content: space-between;
    position: relative;
}
.p-tb-sp__tab-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 73px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.4);
    border-radius: 15px 15px 0 0;
    background-color: #fff;
    font-weight: 700;
}
.p-tb-sp__tab-item.is-open {
    color: #fff;
    background-color: color-mix(in srgb, #063b71, transparent 30%);
}

.p-tb-sp__ct {
    font-family: Arial, Helvetica, sans-serif;
    padding: 13px 25px 25px;
    margin-top: 13px;
    border-radius: 15px;
    background-color: #fff;
}
.p-tb-sp__ct--item {
    padding-bottom: 0;
}

.p-tb-sp__ct-ttl {
    font-size: 19px;
    text-align: center;
    line-height: 1;
    color: #E85832;
    padding: 16px 0;
    margin: 0;
    background-color: rgba(232, 88, 50, 0.1);
    border-radius: 15px;
}

.p-tb-sp__price-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    height: 65px;
}

.p-tb-sp__price-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    height: 65px;
}

.p-tb-sp__price {
    display: inline-block;
    font-size: 20px;
    line-height: 1;
    color: #E85832;
    position: relative;
}

.p-tb-sp__price--ty {
    transform: translateY(-8px);
}

.p-tb-sp__price-note {
    position: absolute;
    font-size: 11px;
    font-weight: 400;
    color: #4E4E4E;
}
.p-tb-sp__price-note01 {
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 130px;
    text-align: center;
}

.p-tb-sp__ct-ttl {
    font-size: 19px;
    text-align: center;
    line-height: 1;
    color: #E85832;
    padding: 16px 0;
    margin: 0;
    background-color: rgba(232, 88, 50, 0.1);
    border-radius: 15px;
}
.p-tb-sp__ct-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
    padding: 12px;
    border-bottom: 1px solid #DDDDDD;
}
.p-tb-sp__ct-item:first-of-type {
    margin-top: 10px;
}
.p-tb-sp__ct-item-ttl {
    font-size: 14px;
}
.p-tb-sp__ct-item p{
  margin-bottom: 0;
}
.p-tb-sp__ct-item-txt {
    font-size: 14px;
    color: #E85832;
}




@media screen and (max-width: 767px) {
    .p-plan__items--pc {
        display: none;
    }
}

.p-plan__items--sp {
        display: none;
    }
@media screen and (max-width: 767px) {
    .p-plan__items--sp {
        display: block;
    }
    .p-plan__items {
        margin: 20px 0 0 0;
    }
    .p-tb-sp {
        display: block;
        width: 100vw;
        margin: 0 calc(50% - 50vw);
        padding: 14px 15px 19px;
        margin-top: 30px;
        background-color: rgba(232, 88, 50, 0.1);
        cursor: pointer;
        position: relative;
    }
}

@media screen and (max-width: 767px) {
    .p-tb-pc {
        display: none;
    }
}  

@media only screen and (min-width: 768px){
			.custom_img{
       display:block;
			}
}

  /* スマホ */
  @media only screen and (max-width: 767px){
    /* .big-title{
      font-size: 48px;
    } */
  }


</style>