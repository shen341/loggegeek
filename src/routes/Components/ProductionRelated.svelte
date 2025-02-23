<script>
  import { onMount } from 'svelte';
  import LISTING from "$lib/img/production/listing.jpg";
  import HOUSEGUIDE from "$lib/img/production/houseguide.jpg";
  import DRAWING from "$lib/img/production/drawing.jpg";
  import FORM from "$lib/img/production/form.jpg";
  import Close from "svelte-material-icons/Close.svelte";

  export let showModal = true;
  
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

<!-- Modal Overlay -->
{#if showModal}
<div class="modal fade {showModal?"show":""}" tabindex="-1" style="{showModal?'display:block;':''}">
  <div class="modal-content modal-dialog modal-dialog-centered">
    <!-- Close Button -->
    <button class="close-button" on:click={() => showModal = false}>
      <Close size="24"/>
    </button>

    <!-- Modal Header -->
    <div class="text-center mb-5">
      <h2 class="modal-title">制作関連</h2>
    </div>

    <!-- Service Cards -->
    <div class="row g-4">
      <!-- Card 1 -->
      <div class="col-md-4">
        <div class="service-card">
          <img src={LISTING} alt="リスティングページ構築" class="service-image"/>
          <div class="service-content">
            <h3>リスティングページ構築</h3>
            <p>写真選定、施設詳細の入力、プロモーション設定など、リスティングページの作成を一括でサポートします。初動から高い完成度のリスティングで集客を実現したい方は、ぜひ弊社にお任せください。</p>
            <div class="price">料金 30,000円</div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-4">
        <div class="service-card">
          <img src={HOUSEGUIDE} alt="ハウスガイド制作" class="service-image"/>
          <div class="service-content">
            <h3>ハウスガイド制作</h3>
            <p>完璧に作り込んだハウスガイドがあれば、ゲストからの問い合わせに悩てることはありません。「ゲストからレビューでハウスガイドについて褒めてもらえる」そんな体験を提供します。</p>
            <div class="price">料金 70,000円</div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4">
        <div class="service-card">
          <img src={DRAWING} alt="間取り図製作" class="service-image"/>
          <div class="service-content">
            <h3>間取り図製作<sup>※1</sup></h3>
            <p>AUTOCADを使用し、デザイン性と機能性を兼ね備えた高品質な間取り図を作成します。図面と写真をお送りいただくだけで、細部にまでこだわったオリジナルの間取り図が仕上がります。</p>
            <div class="price">料金 10,000円</div>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="col-md-4">
        <div class="service-card">
          <img src={FORM} alt="宿泊名簿回収フォーム構築" class="service-image"/>
          <div class="service-content">
            <h3>宿泊名簿回収フォーム構築<sup>※2</sup></h3>
            <p>グレート・ファイアウォールの影響を受けないフォームツールを使用し、中国からでもパスポート情報の提出が可能です。また、機密情報は暗号化で保護され、高いセキュリティを確保しています。</p>
            <div class="price">料金 10,000円</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notes -->
    <div class="notes mt-4">
      <p>※1 間取り図製作のみのご依頼はお受けしておりません。</p>
      <p>※2 宿泊名簿フォーム構築のみのご依頼はお受けしておりません。</p>
      <p>※ 完全代行の場合上記料金はかかりません。</p>
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
    .notes p {
        margin-bottom: 0;
    }
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
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
  }

  .service-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .service-content {
    padding: 20px;
  }

  .service-content h3 {
    color: #063b71;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .service-content p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .price {
    color: #c8391e;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .notes {
    color: #666;
    font-size: 0.8rem;
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
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
