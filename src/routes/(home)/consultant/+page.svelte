<script>
  import { onMount } from 'svelte';
  import PRESENTATION from "$lib/img/consultant/presentation.jpg";
  import ProductionRelated from "../../Components/ProductionRelated.svelte";
  import HOUSE from "$lib/img/consultant/house.svg";
  import CONSULTANT from "$lib/img/consultant/consultant.svg";
  import InteriorDesignCoordination from "../../Components/InteriorDesignCoordination.svelte";
	import MetaTagComponent from "../../Components/MetaTagComponent.svelte";
	import { trans,locale } from "$lib/language/i18n";


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



</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <MetaTagComponent/>
	<link href="https://fonts.googleapis.com" rel="preconnect">
	<link href="https://fonts.gstatic.com" rel="preconnect">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">  
</svelte:head>

<section class="service-section py-5" id="consultant">
  <div class="container">
    <!-- Service Header -->
    <div class="text-center   py-5">
      <h1 class=" mb-3 big-title">{$trans("consultant.big.title")}
</h1>
      <div class="service-intro mb-5">
        <p class="lead">
          {$trans("consultant.title.comment")}<br/>
        </p>
      </div>
    </div>

    <!-- Main Services -->
    <div class="row g-4 mb-5">
      <!-- Service 1 -->
      <!-- <div class="col-lg-6">
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
                  {$trans("consultant.consultant.plan.price")}はこちら
                  <ArrowRightCircle/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Service 2 -->
      <!-- <div class="col-lg-6">
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
                  {$trans("consultant.consultant.plan.price")}はこちら
                  <ArrowRightCircle/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Service 3 -->
      <div class="col-lg-8 offset-lg-2">
        <div class="service-card bg-white rounded-4 p-4 h-100">
          <div class="row align-items-center">
            <div class="col-md-6">
              <img src={PRESENTATION} alt="{$trans("consultant.consultant1")}" class="img-fluid rounded-3 mb-4 mb-md-0"/>
            </div>
            <div class="col-md-6">
              <div class="service-content">
                <h3 class="service-title mb-3">
                  <span class="material-icons">maps_home_work</span>
                  {$trans("consultant.consultant1")}
                </h3>
                <p class="service-description">
                  {$trans("consultant.consultant1.detail")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>

  </div>
</section>

<section class="py-5 bg-light" id="price">
  <div class="container text-center">
    <h6 class="mb-4">{$trans("consultant.big.title")}
</h6>
    <h2 class="mb-5">{$trans("consultant.consultant.plan.price")}</h2>
    <div class="p-tb-pc fadeInTrigger fadeIn">
      <div id="service-detail" class="my-5">
        <div class="row">
          <!-- Card 1 -->
          <div class="col-md-6 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <span class="material-icons">maps_home_work</span> {$trans("consultant.homestay.facility")}
                </h5>
                <img src="{HOUSE}" alt="House Icon" class="img-fluid my-3" style="width: 96px;" />
                <p class="card-text">
                 {$trans("consultant.homestay.facility.detail")}
                </p>
                <button on:click={()=>{isInteriorModalVisible=!isInteriorModalVisible}} class="btn btn-outline-danger rounded-pill">{$trans("manage.maker.detail.forward")}</button>
              </div>
            </div>
          </div>
      
          <!-- Card 2 -->
          <div class="col-md-6 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <span class="material-icons">maps_home_work</span> {$trans("consultant.big.title")}
                </h5>
  
                <img src="{CONSULTANT}" alt="Consultant Icon" class="img-fluid my-3"  style="width: 96px;" />
                <p class="card-text">
                  {$trans("consultant.homestay.consultant.detail")}
                </p>
                <p class="text-danger font-weight-bold">{$trans("consultant.homestay.consultant.detail.price")}</p>
                <p class="text-muted">{$trans("consultant.homestay.consultant.detail.comment")}</p>
                <a href="/#contact" class="btn btn-outline-danger rounded-pill">{$trans("consultant.homestay.consultant.contact")}</a>
              </div>
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

   #price h6 {
    color: #c8391e;
    font-weight: bold;
  }
 #price h2 {
    color: #063b71;
    font-weight: bold;
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
    width: 1144px;
    margin: 40px auto 0;
    position: relative;
}




@media screen and (max-width: 767px) {
    .p-tb-pc {
        display: none;
    }
}


</style>
