<script>
  import { onMount } from 'svelte';
  import LISTING from "$lib/img/production/listing.jpg";
  import HOUSEGUIDE from "$lib/img/production/houseguide.jpg";
  import DRAWING from "$lib/img/production/drawing.jpg";
  import FORM from "$lib/img/production/form.jpg";
  import Close from "svelte-material-icons/Close.svelte";
	import { trans,locale } from "$lib/language/i18n";

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
      <h2 class="modal-title">{$trans("product.big.title")}</h2>
    </div>

    <!-- Service Cards -->
    <div class="row g-4">
      <!-- Card 1 -->
      <div class="col-md-4">
        <div class="service-card">
          <img src={LISTING} alt="{$trans("product.card1.title")}" class="service-image"/>
          <div class="service-content">
            <h3>{$trans("product.card1.title")}</h3>
            <p>{$trans("product.card1.detail")}</p>
            <div class="price">{$trans("product.card1.price")}</div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-4">
        <div class="service-card">
          <img src={HOUSEGUIDE} alt="{$trans("product.card2.title")}" class="service-image"/>
          <div class="service-content">
            <h3>{$trans("product.card2.title")}</h3>
            <p>{$trans("product.card2.detail")}</p>
            <div class="price">{$trans("product.card2.price")}</div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4">
        <div class="service-card">
          <img src={DRAWING} alt="{$trans("product.card3.title")}" class="service-image"/>
          <div class="service-content">
            <h3>{$trans("product.card3.title")}<sup>※1</sup></h3>
            <p>{$trans("product.card3.detail")}</p>
            <div class="price">{$trans("product.card3.price")}</div>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="col-md-4">
        <div class="service-card">
          <img src={FORM} alt="{$trans("product.card4.title")}" class="service-image"/>
          <div class="service-content">
            <h3>{$trans("product.card4.title")}<sup>※2</sup></h3>
            <p>{$trans("product.card4.detail")}</p>
            <div class="price">{$trans("product.card3.price")}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notes -->
    <div class="notes mt-4">
      <p>※1 {$trans("product.comment1")}</p>
      <p>※2 {$trans("product.comment2")}</p>
      <p>※ {$trans("product.comment3")}</p>
    </div>

    <!-- CTA Button -->
    <div class="text-center mt-5">
      <a href="/#contact" class="btn btn-danger btn-lg rounded-pill px-5">
        {$trans("consultant.homestay.consultant.contact")}
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
