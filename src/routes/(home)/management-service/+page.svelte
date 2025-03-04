<script>
  import { onMount } from 'svelte';
  import TOPRIGHT from "$lib/img/manage/illustration/410516-114187.png"
  import TOPLEFT from "$lib/img/manage/illustration/teacher-isolated-transparent-background_879541-1630.png";
  import ArrowRightCircle from "svelte-material-icons/ArrowRightCircle.svelte"
  import WALL1 from "$lib/img/manage/1.jpg";
  import WALL2 from "$lib/img/manage/2.png";
  import WALL4 from "$lib/img/manage/4.jpg";  

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
	import EmailOutline from "svelte-material-icons/EmailOutline.svelte"
	import MapMarkerRadius from "svelte-material-icons/MapMarkerRadius.svelte"
	import Cellphone from "svelte-material-icons/Cellphone.svelte"
  import ProductionRelated from "../../Components/ProductionRelated.svelte";
  import InteriorDesignCoordination from "../../Components/InteriorDesignCoordination.svelte";



  
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
        <h1 class="display-4  mb-4 mt-4 big-title">月額<span class="important_red">6,000</span>円～</h1>
        <h2 class="h2  mb-4 big-title">業界最安値の民泊管理代行</h2>
        <p class="lead mb-4">
          住宅宿泊管理業者に払う管理代行用を抑えて<br>
          自分で民泊運営をしたいオーナー様をサポートするサービスです。
        </p>
        <div>
          <p class="important_red text-center mb-2">問い合わせで簡単！30秒で完了</p>
          <a href="#contact" class="btn btn-danger btn-lg rounded-pill">
            問い合わせ
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
  </div>
</section>

<section class="py-5 bg-light" id="plan">
  <div class="container text-center">
    <h6 class="mb-4">民泊運営代行</h6>
    <h2 class="mb-5">料金プラン</h2>
    <div class="p-tb-pc fadeInTrigger fadeIn">
      <div class="p-tb-pc__item">
          <div class="p-tb-pc__ttl-wrap p-tb-pc__ttl-wrap--mt">
              <h4 class="p-tb-pc__ttl">料&emsp;金</h4>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--mid">
              <div class="p-tb-pc__ct-flex">
                  <div class="p-tb-pc__ct-ttl-wrap">
                      <h4 class="p-tb-pc__ct-ttl">ゲスト対応</h4>
                  </div>
                  <div class="p-tb-pc__ct-txt-wrap">
                      <p class="p-tb-pc__ct-txt">- メッセージ</p>
                      <p class="p-tb-pc__ct-txt">- 電話対応</p>
                      <p class="p-tb-pc__ct-txt">- レビュー対応</p>
                      <p class="p-tb-pc__ct-txt">- ご宿泊者様情報の回収</p>
                  </div>
              </div>
          </div>
          <div class="p-tb-pc__ct">
              <div class="p-tb-pc__ct-flex">
                  <div class="p-tb-pc__ct-ttl-wrap">
                      <h4 class="p-tb-pc__ct-ttl">製作&amp;構築関連</h4>
                  </div>
                  <div class="p-tb-pc__ct-txt-wrap">
                      <p class="p-tb-pc__ct-txt">- リスティングページ構築</p>
                      <p class="p-tb-pc__ct-txt">- ハウスガイド製作</p>
                      <p class="p-tb-pc__ct-txt">- 間取り図作成</p>
                      <p class="p-tb-pc__ct-txt">- 宿泊名簿フォーム構築</p>
                      <p class="p-tb-pc__ct-txt">
                          <span id="modalOpen1">
                            <button class="btn btn-outline-danger rounded-pill" on:click={()=>{productModalShow=true}}>詳しくはこちら</button>
                          </span>
                      </p>
                  </div>
              </div>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--mid">
              <div class="p-tb-pc__ct-flex">
                  <div class="p-tb-pc__ct-ttl-wrap">
                      <h4 class="p-tb-pc__ct-ttl">運営メンテナンス</h4>
                  </div>
                  <div class="p-tb-pc__ct-txt-wrap">
                      <p class="p-tb-pc__ct-txt">- 価格調整</p>
                      <p class="p-tb-pc__ct-txt">- サイトコントローラー設定</p>
                      <p class="p-tb-pc__ct-txt">- 清掃手配</p>
                      <p class="p-tb-pc__ct-txt">- 現地駆けつけ手配</p>
                  </div>
              </div>
          </div>
      </div>
      <!--一部代行-->
      <div class="p-tb-pc__item p-tb-pc__detail">
          <div class="p-tb-pc__detail-wrap">
              <h4 class="p-tb-pc__detail-ttl">一部代行</h4>
              <div class="p-tb-pc__detail-price-wrap">
                  <p class="p-tb-pc__detail-price">
                      売上×15％<span class="p-tb-pc__detail-price-note p-tb-pc__detail-price-note01">(OTA手数料除く)&ensp;※1</span>
                  </p>
              </div>
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
          <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
          </div>
      </div>
      
      <!--完全代行-->
      <div class="p-tb-pc__item p-tb-pc__detail">
        <div class="p-tb-pc__detail-wrap">
            <h4 class="p-tb-pc__detail-ttl">完全代行</h4>
            <div class="p-tb-pc__detail-price-wrap">
                <p class="p-tb-pc__detail-price">
                    売上×20％<span class="p-tb-pc__detail-price-note p-tb-pc__detail-price-note01">(OTA手数料除く)&ensp;※1</span>
                </p>
            </div>
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
            <p class="p-tb-pc__ct-txt"></p>
        </div>
        <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
            <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
        </div>
      </div>

      <!--メッセージ代行-->
      <div class="p-tb-pc__item p-tb-pc__detail">
          <div class="p-tb-pc__detail-wrap">
              <h4 class="p-tb-pc__detail-ttl">メッセージ代行</h4>
              <div class="p-tb-pc__detail-price-wrap">
                  <p class="p-tb-pc__detail-price">
                      月額35,000円<span class="p-tb-pc__detail-price-note p-tb-pc__detail-price-note02">※2</span>
                  </p>
              </div>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
              <p class="p-tb-pc__ct-txt">月額5,000円</p>
              <p class="p-tb-pc__ct-txt"><span class="material-icons">check_circle</span></p>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--detail">
              <p class="p-tb-pc__ct-txt p-tb-pc__ct-txt--price">30,000円&emsp;</p>
              <p class="p-tb-pc__ct-txt p-tb-pc__ct-txt--price">70,000円〜</p>
              <p class="p-tb-pc__ct-txt p-tb-pc__ct-txt--price">10,000円&emsp;</p>
              <p class="p-tb-pc__ct-txt p-tb-pc__ct-txt--price">10,000円&emsp;</p>
              <p class="p-tb-pc__ct-txt"></p>
          </div>
          <div class="p-tb-pc__ct p-tb-pc__ct--detail p-tb-pc__ct--mid">
              <p class="p-tb-pc__ct-txt">ー</p>
              <p class="p-tb-pc__ct-txt">ー</p>
              <p class="p-tb-pc__ct-txt">ー</p>
              <p class="p-tb-pc__ct-txt">ー</p>
          </div>
      </div>
    </div>

    <div class="p-tb-sp fadeInTrigger fadeIn">
      <ul class="p-tb-sp__tab">
           <!--完全代行 -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li class="p-tb-sp__tab-item {mobilePlan=="plan1"?"is-open":""}" id="plan1" on:click={()=>{mobilePlanClick("plan1")}}>一部代行</li>
           <!--完全代行 -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li class="p-tb-sp__tab-item {mobilePlan=="plan3"?"is-open":""}" id="plan3" on:click={()=>{mobilePlanClick("plan3")}}>完全代行</li>
          <!--メッセージ代行 -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li class="p-tb-sp__tab-item {mobilePlan=="plan2"?"is-open":""}" id="plan2" on:click={()=>{mobilePlanClick("plan2")}}>メッセージ代行</li>
      </ul>
      <div class="p-tb-sp__item" id="plan1Item" style="{mobilePlan=="plan1"?"display: block;":"display: none;"}">
          <div class="p-tb-sp__ct p-tb-sp__ct--item">
              <h4 class="p-tb-sp__ct-ttl">料&emsp;金</h4>
              <div class="p-tb-sp__price-wrap">
                  <p class="p-tb-sp__price p-tb-sp__price--ty">
                      売上×15％<span class="p-tb-sp__price-note p-tb-sp__price-note01">(OTA手数料除く)&ensp;※1</span>
                  </p>
              </div>
          </div>
          <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">ゲスト対応</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- メッセージ</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 電話対応</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- レビュー対応</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 宿泊様情報の回収</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
        </div>
        <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">製作&amp;構築関連</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- リスティングページ構築</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- ハウスガイド製作</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 間取り図作成</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 宿泊名簿フォーム構築</p>
                <p class="p-tb-sp__ct-item-txt">ー</p>
            </div>
            <span id="modalOpen4" class="p-tb-sp__ct-item-link"><button class="btn btn-outline-danger rounded-pill" on:click={()=>{productModalShow=true}}>詳しくはこちら</button></span>
        </div>
        <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">運営メンテナンス</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 価格調整</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- サイトコントローラー設定</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 清掃手配</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 現地駆けつけ手配</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
        </div>
      </div>
      <div class="p-tb-sp__item" id="plan3Item" style="{mobilePlan=="plan3"?"display: block;":"display: none;"}">
        <div class="p-tb-sp__ct p-tb-sp__ct--item">
            <h4 class="p-tb-sp__ct-ttl">料&emsp;金</h4>
            <div class="p-tb-sp__price-wrap">
                <p class="p-tb-sp__price p-tb-sp__price--ty">
                    売上×20％<span class="p-tb-sp__price-note p-tb-sp__price-note01">(OTA手数料除く)&ensp;※1</span>
                </p>
            </div>
        </div>
        <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">ゲスト対応</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- メッセージ</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 電話対応</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- レビュー対応</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 宿泊様情報の回収</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
        </div>
        <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">製作&amp;構築関連</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- リスティングページ構築</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- ハウスガイド製作</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 間取り図作成</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 宿泊名簿フォーム構築</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <span id="modalOpen4" class="p-tb-sp__ct-item-link"><button class="btn btn-outline-danger rounded-pill" on:click={()=>{productModalShow=true}}>詳しくはこちら</button></span>
        </div>
        <div class="p-tb-sp__ct">
            <h4 class="p-tb-sp__ct-ttl">運営メンテナンス</h4>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 価格調整</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- サイトコントローラー設定</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 清掃手配</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
            <div class="p-tb-sp__ct-item">
                <p class="p-tb-sp__ct-item-ttl">- 現地駆けつけ手配</p>
                <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
            </div>
        </div>
      </div>
      
      <div class="p-tb-sp__item" id="plan2Item" style="{mobilePlan=="plan2"?"display: block;":"display: none;"}">
          <div class="p-tb-sp__ct p-tb-sp__ct--item">
              <h4 class="p-tb-sp__ct-ttl">料&emsp;金</h4>
              <div class="p-tb-sp__price-wrap">
                  <p class="p-tb-sp__price">
                      月額35,000円<span class="p-tb-sp__price-note p-tb-sp__price-note02">※2</span>
                  </p>
              </div>
          </div>
          <div class="p-tb-sp__ct">
              <h4 class="p-tb-sp__ct-ttl">ゲスト対応</h4>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- メッセージ</p>
                  <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- 電話対応</p>
                  <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- レビュー対応</p>
                  <p class="p-tb-sp__ct-item-txt">月額5,000円&emsp;</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- 宿泊様情報の回収</p>
                  <p class="p-tb-sp__ct-item-txt"><span class="material-icons">check_circle</span></p>
              </div>
          </div>
          <div class="p-tb-sp__ct">
              <h4 class="p-tb-sp__ct-ttl">製作&amp;構築関連</h4>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- リスティングページ構築</p>
                  <p class="p-tb-sp__ct-item-txt">30,000円&emsp;</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- ハウスガイド製作</p>
                  <p class="p-tb-sp__ct-item-txt">70,000円〜</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- 間取り図作成</p>
                  <p class="p-tb-sp__ct-item-txt">10,000円&emsp;</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- 宿泊名簿フォーム構築</p>
                  <p class="p-tb-sp__ct-item-txt">10,000円&emsp;</p>
              </div>
              <span id="modalOpen4" class="p-tb-sp__ct-item-link"><button class="btn btn-outline-danger rounded-pill" on:click={()=>{productModalShow=true}}>詳しくはこちら</button></span>
          </div>
          <div class="p-tb-sp__ct">
              <h4 class="p-tb-sp__ct-ttl">運営メンテナンス</h4>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- 価格調整</p>
                  <p class="p-tb-sp__ct-item-txt">ー</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- サイトコントローラー設定</p>
                  <p class="p-tb-sp__ct-item-txt">ー</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- 清掃手配</p>
                  <p class="p-tb-sp__ct-item-txt">ー</p>
              </div>
              <div class="p-tb-sp__ct-item">
                  <p class="p-tb-sp__ct-item-ttl">- 現地駆けつけ手配</p>
                  <p class="p-tb-sp__ct-item-txt">ー</p>
              </div>
          </div>
      </div>
      <ul class="p-plan__items p-plan__items--sp">
          <li class="p-plan__item" id="note1" style="">
              <p class="p-plan__item-txt">※1&ensp;OTA手数料を除く売上の15%（最低料金: 70,000円）</p>
          </li>
          <li class="p-plan__item" id="note2" style="display: none;">
              <p class="p-plan__item-txt">※2&ensp;OTAの追加など、ゲストと連絡手段が増える場合は1つにつき＋月額10,000円</p>
          </li>
          <li class="p-plan__item">
              <p class="p-plan__item-txt">※&ensp;&ensp;備品、清掃費用、駆けつけ費用など業務にかかる必要経費はオーナー様にて負担</p>
          </li>
          <li class="p-plan__item">
              <p class="p-plan__item-txt">※&ensp;&ensp;価格表記はすべて税抜</p>
          </li>
      </ul>
    </div>

    <ul class="p-plan__items p-plan__items--pc">
        <li class="p-plan__item">
            <p class="p-plan__item-txt">※1&ensp;OTA手数料を除く売上の15%（最低料金: 70,000円）</p>
        </li>
        <li class="p-plan__item">
            <p class="p-plan__item-txt">※2&ensp;OTAの追加など、ゲストと連絡手段が増える場合は1つにつき＋月額10,000円</p>
        </li>
        <li class="p-plan__item">
            <p class="p-plan__item-txt">※&ensp;&ensp;備品、清掃費用、駆けつけ費用など業務にかかる必要経費はオーナー様にて負担</p>
        </li>
        <li class="p-plan__item">
            <p class="p-plan__item-txt">※&ensp;&ensp;価格表記はすべて税抜</p>
        </li>
    </ul>



  </div>
</section>


<!-- Features Section -->
<section class="py-5 bg-light" id="service">
  <div class="container text-center">
    <h6 class="mb-4">SOLUTION</h6>
    <h2 class="mb-5">再委託型</h2>
    <div class="mb-5">
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


    <div>
      <h3 class="important_red text-center mb-2 mt-5">再委託運営とは？</h3>
      <a href="/subcontracting" class="btn btn-danger btn-lg rounded-pill">
        詳しくは知りたい方へ
        <ArrowRightCircle width="32" height="32"/>
      </a>
    </div>
  </div>
</section>

<!-- Property Showcase Section -->
<section class="py-5">
  <div class="container text-center">
    <h6 class="mb-4">SHOW</h6>
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
    <h2 class="mb-4 big-title">今すぐ問い合わせ</h2>
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
    .big-title{
      font-size: 48px;
    }
  }


</style>