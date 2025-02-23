<script>
  import { onMount } from 'svelte';
  import Close from "svelte-material-icons/Close.svelte";
  import FloorPlan from "svelte-material-icons/FloorPlan.svelte";
  import Sofa from "svelte-material-icons/Sofa.svelte";
  import Camera from "svelte-material-icons/Camera.svelte";
  import Broom from "svelte-material-icons/Broom.svelte";
  import FileDocument from "svelte-material-icons/FileDocument.svelte";

  export let showModal = false;
</script>

{#if showModal}
<div class="modal fade {showModal ? 'show' : ''}" tabindex="-1" style="{showModal ? 'display:block;' : ''}">
  <div class="modal-content modal-dialog modal-dialog-centered modal-xl">
    <!-- Close Button -->
    <button class="close-button" on:click={() => showModal = false}>
      <Close size="24"/>
    </button>

    <!-- Modal Header -->
    <div class="text-center mb-5">
      <h2 class="modal-title">民泊設営</h2>
    </div>

    <!-- Service Cards -->
    <div class="row g-4">
      <!-- Interior Coordination -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <FloorPlan size="48"/>
          </div>
          <h3>インテリアコーディネート</h3>
          <p>業界歴13年、200件以上の実績を誇るコーディネーターが、稼働率UPに繋がるお部屋づくりを目指します。デザイン性と機能性を両立させ、ゲストが喜ぶ空間を提供します。</p>
          <div class="price">料金 77,000円〜</div>
        </div>
      </div>

      <!-- Setup -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <Sofa size="48"/>
          </div>
          <h3>設営</h3>
          <p>家具の組み立てから小物の設置まで、すべてをお任せください。ゲストがすぐに宿泊できる完璧な状態を整え、心地よい滞在を演出します。</p>
          <div class="price">料金 300,000円〜</div>
        </div>
      </div>

      <!-- Camera -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <Camera size="48"/>
          </div>
          <h3>カメラ</h3>
          <p>撮影歴20年、300件以上の民泊撮影実績を持つカメラマンが、マンションタイプからリゾート民泊まで、最大限魅力を引き出し高単価を狙える写真をお撮りします。</p>
          <div class="price">料金 121,000円〜</div>
        </div>
      </div>

      <!-- Cleaning -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <Broom size="48"/>
          </div>
          <h3>清掃</h3>
          <p>民泊清掃歴9年の経験豊富な清掃チームが、きめ細やかな清掃と備品補充、駆けつけ対応までトータルでサポートします。常に清潔な空間を維持し、ゲスト満足度を高めます。</p>
          <div class="price">料金 お見積もり</div>
        </div>
      </div>

      <!-- Application -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <FileDocument size="48"/>
          </div>
          <h3>申請関係</h3>
          <p>全国多数の自治体での申請実績のある行政書士と連携し、迅速かつ的確に申請手続きをサポートします。豊富な経験に基づき、民泊申請の複雑な手続きを安心してお任せいただけます。</p>
          <div class="price">料金 150,000円〜</div>
        </div>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="text-center mt-5">
      <a href="/#contact" class="btn btn-danger btn-lg rounded-pill px-5">
        お問い合わせはこちら
      </a>
    </div>
  </div>
</div>
{/if}

<style>
  .modal-content {
    background: white;
    padding: 40px;
    border-radius: 20px;
    max-width: 1200px;
    width: 100%;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    color: #063b71;
  }

  .modal-title {
    font-size: 40px;
    line-height: 1;
    color: #E85832;
    letter-spacing: 0.3em;
    text-align: center;
    font-weight: 900;
  }

  .service-card {
    background: white;
    border-radius: 15px;
    padding: 20px;
    height: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
  }

  .icon-wrapper {
    color: #E85832;
  }

  .service-card h3 {
    color: #063b71;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .service-card p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .price {
    color: #E85832;
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: auto;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .modal-content {
      padding: 20px;
    }

    .service-card {
      margin-bottom: 20px;
    }
  }
</style>
