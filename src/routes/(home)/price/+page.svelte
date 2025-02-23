<script>
  import { onMount } from 'svelte';
  import RunFast from "svelte-material-icons/RunFast.svelte";
  import EmailOutline from "svelte-material-icons/EmailOutline.svelte";
  import HandClap from "svelte-material-icons/HandClap.svelte";

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

<section class="price-section py-5">
  <div class="container">
    <!-- Price Header -->
    <div class="text-center mb-5 animate-on-scroll">
      <h6 class="important_red mb-3">PRICE</h6>
      <h2 class="big-title mb-4">料金</h2>
    </div>

    <!-- Price Cards -->
    <div class="row justify-content-center g-4 mb-5">
      <!-- Initial Fee Card -->
      <div class="col-md-5">
        <div class="card price-card h-100 border-0 shadow-sm ">
          <div class="card-header bg-danger text-white text-center py-3">
            <h4 class="mb-0 text-white">初期費用</h4>
          </div>
          <div class="card-body text-center p-4">
            <h2 class="price-amount mb-0">
              <span class="currency">¥</span>
              <span class="amount">10,000</span>
              <span class="tax">(税抜)</span>
            </h2>
          </div>
        </div>
      </div>

      <!-- Plus Sign -->
      <div class="col-md-1 d-flex align-items-center justify-content-center">
        <span class="plus-sign">+</span>
      </div>

      <!-- Monthly Fee Card -->
      <div class="col-md-5">
        <div class="card price-card h-100 border-0 shadow-sm ">
          <div class="card-header bg-danger text-white text-center py-3">
            <h4 class="mb-0 text-white">月額料金</h4>
          </div>
          <div class="card-body text-center p-4">
            <h2 class="price-amount mb-0">
              <span class="currency">¥</span>
              <span class="amount">1,000</span>
              <span class="tax">(税抜)</span>
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional Services -->
    <div class="optional-services">
      <h3 class="text-center mb-4">オプションサービス</h3>
      <div class="row justify-content-center g-4">
        <!-- Service 1 -->
        <div class="col-md-4">
          <div class="card service-card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <RunFast size="48" class="service-icon mb-3"/>
              <h5 class="service-title">駆けつけ対応代行</h5>
              <p class="price-tag">¥20,000〜</p>
            </div>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="col-md-4">
          <div class="card service-card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <EmailOutline size="48" class="service-icon mb-3"/>
              <h5 class="service-title">メッセージ対応代行</h5>
              <p class="price-tag">ASK</p>
            </div>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="col-md-4">
          <div class="card service-card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <HandClap size="48" class="service-icon mb-3"/>
              <h5 class="service-title">民泊清掃業務</h5>
              <p class="price-tag">¥16,500〜</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-4">
        <p class="mb-4">オプションサービスについて、詳しくはお問い合わせください。</p>
        <a href="/#contact" class="btn btn-danger btn-lg rounded-pill px-5">
          お問い合わせはこちら
        </a>
      </div>
    </div>

    <!-- Notes -->
    <div class="price-notes mt-5">
      <ul class="list-unstyled">
        <li>・料金は全て税抜の表示となります。</li>
        <li>・お支払いはクレジットカードのみとなります（月額委託契約料はクレジット自動引き落としとなります）</li>
        <li>・初期登録料につきましては、申請が通らない場合におきましてもご返金は出来ませんのでご了承ください。</li>
      </ul>
    </div>
  </div>
</section>

<style>
  .price-section {
    background-color: #f8f9fa;
  }

  .big-title {
    color: #063b71;
    font-size: 48px;
    font-weight: 900;
    line-height: 1.34;
  }

  .important_red {
    color: #c8391e;
    font-weight: 900;
  }

  .price-card {
    transition: transform 0.3s ease;
  }

  .price-card:hover {
    transform: translateY(-5px);
  }

  .price-amount {
    color: #063b71;
    font-weight: 900;
  }

  .price-amount .amount {
    font-size: 3.5rem;
  }

  .price-amount .currency {
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  .price-amount .tax {
    font-size: 1rem;
    color: #6c757d;
  }

  .plus-sign {
    color: #c8391e;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .service-card {
    transition: transform 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
  }

  .service-icon {
    color: #063b71;
  }

  .service-title {
    color: #c8391e;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .price-tag {
    color: #063b71;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }

  .price-notes {
    color: #6c757d;
    font-size: 0.9rem;
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
  }

  .animate-on-scroll.animate {
    opacity: 1;
    transform: translateY(0);
  }
</style>
