<script>
  import { onMount } from 'svelte';
  import MEETING from "$lib/img/consultant/meeting.png";
  import MESSAGE from "$lib/img/consultant/message.jpg";
  import PRESENTATION from "$lib/img/consultant/presentation.jpg";
  import ArrowRightCircle from "svelte-material-icons/ArrowRightCircle.svelte";
  import ProductionRelated from "../../Components/ProductionRelated.svelte";
  import HOUSE from "$lib/img/consultant/house.svg";
  import CONSULTANT from "$lib/img/consultant/consultant.svg";
  import InteriorDesignCoordination from "../../Components/InteriorDesignCoordination.svelte";


  let  productModalShow=false;
  let isInteriorModalVisible=false;
  onMount(() => {
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

  let mobilePlan="plan1"
  const mobilePlanClick=(plan="plan1")=>{
    if (plan=="plan1") {
      mobilePlan="plan1"
    }else{
      mobilePlan="plan2"
    }
  }

</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</svelte:head>

<section class="service-section py-5" id="consultant">
  <div class="container">
    <!-- Service Header -->
    <div class="text-center   py-5">
      <h1 class=" mb-3 big-title">民泊コンサル</h1>
      <div class="service-intro mb-5">
        <p class="lead">
          私たちは、民泊事業に特化し、オーナー様の成功を全力でサポートすることに専念しています。<br/>
          民泊以外の他の業務には手を広げず、民泊運営に関わるあらゆる業務をプロフェッショナルな視点から提供。<br/>
          私たちが提供するサービスは、大きく3つに分かれています。
        </p>
      </div>
    </div>

    <!-- Main Services -->
    <div class="row g-4 mb-5">
      <!-- Service 1 -->
      <div class="col-lg-6">
        <div class="service-card bg-white rounded-4 p-4 h-100">
          <div class="row align-items-center">
            <div class="col-md-6">
              <img src={MEETING} alt="民泊完全代行業" class="img-fluid rounded-3 mb-4 mb-md-0"/>
            </div>
            <div class="col-md-6">
              <div class="service-content">
                <h3 class="service-title  mb-3">
                  <span class="material-icons">maps_home_work</span>
                  民泊完全代行業
                </h3>
                <p class="service-description">
                  価格調整、メッセージ対応、清掃手配、緊急時の現地駆けつけ手配などオーナー様の負担をほぼゼロにし、
                  ストレスのない運営を実現します。これにより、オーナー様は運営の細かな部分に気を取られることなく、安心して事業の拡大や他の取り組みに集中できます。
                </p>
                <a href="#plan" class="btn btn-outline-danger rounded-pill">
                  料金プランはこちら
                  <ArrowRightCircle/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service 2 -->
      <div class="col-lg-6">
        <div class="service-card bg-white rounded-4 p-4 h-100">
          <div class="row align-items-center">
            <div class="col-md-6">
              <img src={MESSAGE} alt="民泊メッセージ代行業" class="img-fluid rounded-3 mb-4 mb-md-0"/>
            </div>
            <div class="col-md-6">
              <div class="service-content">
                <h3 class="service-title mb-3">
                  <span class="material-icons">maps_home_work</span>
                  民泊メッセージ代行業
                </h3>
                <p class="service-description">
                  メッセージのやり取りが苦手な方や、即レスが難しい方のために、迅速でホスピタリティ溢れる対応を提供する「メッセージ代行サービス」。外国語でのやり取りにも対応しており、ゲストとのスムーズなコミュニケーションを実現し、予約率や満足度の向上に貢献します。
                </p>
                <a href="#plan" class="btn btn-outline-danger rounded-pill">
                  料金プランはこちら
                  <ArrowRightCircle/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service 3 -->
      <div class="col-lg-6">
        <div class="service-card bg-white rounded-4 p-4 h-100">
          <div class="row align-items-center">
            <div class="col-md-6">
              <img src={PRESENTATION} alt="民泊コンサル業" class="img-fluid rounded-3 mb-4 mb-md-0"/>
            </div>
            <div class="col-md-6">
              <div class="service-content">
                <h3 class="service-title mb-3">
                  <span class="material-icons">maps_home_work</span>
                  民泊コンサル業
                </h3>
                <p class="service-description">
                  民泊運営で培った実践的なノウハウを活かし、民泊立ち上げや収益最大化を支援する「コンサルティングサービス」を提供しています。物件購入型の民泊や転貸民泊の運営経験を持ち、物件選び、トラブル対応、リスティング構築、収益改善まで幅広くサポートします。
                </p>
                <a href="#plan" class="btn btn-outline-danger rounded-pill">
                  料金プランはこちら
                  <ArrowRightCircle/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>

  </div>
</section>


<section class="service-section py-5" id="plan">
  <div class="container">
    <!-- Plan Header -->
    <div class="text-center">
      <h2 class="important_red mb-3">料金プラン </h2>
      <div class="service-intro mb-5">
        <p class="lead">
          <span class="material-icons">maps_home_work</span>
          民泊運営代行
        </p>
        <hr/>
      </div>
    </div>
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
      <div class="p-tb-pc__item p-tb-pc__detail">
          <div class="p-tb-pc__detail-wrap">
              <h4 class="p-tb-pc__detail-ttl">完全代行</h4>
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
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li class="p-tb-sp__tab-item {mobilePlan=="plan1"?"is-open":""}" id="plan1" on:click={()=>{mobilePlanClick("plan1")}}>完全代行</li>
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

    <div id="service-detail" class="my-5">
      <div class="row">
        <!-- Card 1 -->
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <h5 class="card-title">
                <span class="material-icons">maps_home_work</span> 民泊設備
              </h5>
              <img src="{HOUSE}" alt="House Icon" class="img-fluid my-3" />
              <p class="card-text">
               インテリアコーディネートやカメラ撮影、旅館業申請など、民泊運営に欠かせないサービスを専門パートナーと協力して提供しています。経験豊富なチームでゲストの満足度向上を支援します。詳細は、以下をご確認ください。
              </p>
              <button on:click={()=>{isInteriorModalVisible=!isInteriorModalVisible}} class="btn btn-outline-danger rounded-pill">詳しくはこちら</button>
            </div>
          </div>
        </div>
    
        <!-- Card 2 -->
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <h1 class="card-title">
                <span class="material-icons">maps_home_work</span> 民泊コンサル業
              </h1>

              <img src="{CONSULTANT}" alt="Consultant Icon" class="img-fluid my-3" />
              <p class="card-text">
                初めての民泊立ち上げから運営改善、収益最大化まで、オーナー様のニーズに合わせたコンサルティングを実施しています。詳しくはお問い合わせください。
              </p>
              <p class="text-danger font-weight-bold">料金 30分 5,000円（税抜）</p>
              <p class="text-muted">※初回限り 2回目以降は顧問コンサルをご案内</p>
              <a href="/#contact" class="btn btn-outline-danger rounded-pill">お問い合わせはこちら</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<ProductionRelated bind:showModal={productModalShow}/>
<InteriorDesignCoordination bind:showModal={isInteriorModalVisible} />
<!-- End Extra Large Modal-->
{#if productModalShow}
    <div class="modal-backdrop fade show"></div>  
{/if}    

<style>
  .img-fluid {
    width: 96px;
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

  .service-section {
    background-color: #f8f9fa;
    position: relative;
    overflow: hidden;
  }

  .important_red {
    color: #c8391e;
    font-weight: 900;
    font-size: 1.5rem;
  }

  .service-intro {
    max-width: 900px;
    margin: 0 auto;
  }

  .service-intro p {
    color: #063b71;
    line-height: 1.8;
  }

  .service-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(0,0,0,0.1);
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  .service-title {
    color: #063b71;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .service-description {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.7;
  }


  .lead{
    font-size: 18px;
    margin-top: 20px;
    padding: 0 20px;
    font-weight: 700;
    color: #4e4e4e;
  }

  /* Animation for images */
  img {
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  .p-tb-pc {
    display: flex;
    justify-content: space-between;
    width: 858px;
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
    background-color: rgba(244, 214, 203, 0.3);
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
    background-color: rgba(244, 214, 203, 0.3);
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
    background-color: #E85832;
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
    background-color: rgba(244, 214, 203, 0.3);
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
    width: 49%;
    height: 73px;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.4);
    border-radius: 15px 15px 0 0;
    background-color: #fff;
}
.p-tb-sp__tab-item.is-open {
    color: #fff;
    background-color: #E85832;
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

.p-tb-pc__ct-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 30px;
    font-size: 13px;
    color: #E85832;
    border-radius: 28px;
    border: 2px solid #E85832;
    transition: all 0.3s;
    line-height: 1;
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
}

@media screen and (max-width: 767px) {
    .p-tb-pc {
        display: none;
    }
}
@media screen and (max-width: 767px) {
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

</style>
