<script>
  import { onMount } from 'svelte';
  import Close from "svelte-material-icons/Close.svelte";
  import FloorPlan from "svelte-material-icons/FloorPlan.svelte";
  import Sofa from "svelte-material-icons/Sofa.svelte";
  import Camera from "svelte-material-icons/Camera.svelte";
  import Broom from "svelte-material-icons/Broom.svelte";
  import Web from "svelte-material-icons/Web.svelte";
  import Monitor from "svelte-material-icons/Monitor.svelte";
  import FileDocument from "svelte-material-icons/FileDocument.svelte";
	import { trans,locale } from "$lib/language/i18n";
  import ArrowRightCircle from "svelte-material-icons/ArrowRightCircle.svelte"
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
      <h2 class="modal-title">{$trans("interiorDesign.big.title")}</h2>
    </div>

    <!-- Service Cards -->
    <div class="row g-4">
      <!-- Interior Coordination -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <FloorPlan size="48"/>
          </div>
          <h3>{$trans("interiorDesign.card1.title")}</h3>
          <p>{$trans("interiorDesign.card1.detail")}</p>
          <div class="price">{$trans("interiorDesign.card1.price")}</div>
        </div>
      </div>

      <!-- Setup -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <Sofa size="48"/>
          </div>
          <h3>{$trans("interiorDesign.card2.title")}</h3>
          <p>{$trans("interiorDesign.card2.detail")}</p>
          <div class="price">{$trans("interiorDesign.card2.price")}</div>
        </div>
      </div>

      <!-- Camera -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <Camera size="48"/>
          </div>
          <h3>{$trans("interiorDesign.card3.title")}</h3>
          <p>{$trans("interiorDesign.card3.detail")}</p>
          <div class="price">{$trans("interiorDesign.card3.price")}</div>
        </div>
      </div>

      <!-- Cleaning -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <Broom size="48"/>
          </div>
          <h3>{$trans("interiorDesign.card4.title")}</h3>
          <p>{$trans("interiorDesign.card4.detail")}</p>
          <div class="price">{$trans("interiorDesign.card4.price")}</div>
        </div>
      </div>

      <!-- Application1 -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <FileDocument size="48"/>
          </div>
          <h3>{$trans("interiorDesign.card5.title")}</h3>
          <p>{$trans("interiorDesign.card5.detail")}</p>
          <div class="price">{$trans("interiorDesign.card5.price")}</div>
        </div>
      </div>

      <!-- Application2 -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <FileDocument size="48"/>
          </div>
          <h3>{$trans("interiorDesign.card6.title")}</h3>
          <p>{$trans("interiorDesign.card6.detail")}</p>
          <div class="price">{$trans("interiorDesign.card6.price")}</div>
        </div>
      </div>

      <!-- home page -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <Web size="48"/>
          </div>
          <h3>{$trans("interiorDesign.card7.title")}</h3>
          <p>{$trans("interiorDesign.card7.detail")}</p>
          <div class="price">{$trans("interiorDesign.card7.price")}</div>
        </div>
      </div>

      <!-- Reservation system -->
      <div class="col-md-3">
        <div class="service-card text-center">
          <div class="icon-wrapper mb-3">
            <Monitor size="48"/>  
          </div>
          <h3>{$trans("interiorDesign.card8.title")}</h3>
          <p>{$trans("interiorDesign.card8.detail")}</p>
          <div class="price">{$trans("interiorDesign.card8.price")}</div>
        </div>
      </div>

    </div>

    <!-- CTA Button -->
    <div class="text-center mt-5">
      <a href="/#contact" class="btn btn-danger btn-lg rounded-pill px-5">
        {$trans("interiorDesign.contact.us")}
        <ArrowRightCircle/>
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
