<script>
  import { onMount } from 'svelte';
  import SMARTLOCKER from "$lib/img/iot/smartlocker.webp";
  import UNLOCK from "$lib/img/iot/unlock.jpg";
  import CAMERA from "$lib/img/iot/camera.jpg";
  import ArrowRightCircle from "svelte-material-icons/ArrowRightCircle.svelte"

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
</svelte:head>

<section class="service-section py-5" id="consultant">
    <div class="container">
        <!-- Service Header -->
        <div class="text-center   py-5">
            <h1 class=" mb-3 big-title">IoT</h1>
            <div class="service-intro mb-5">
                <h2 style="color: #FF9800;">民宿運営、もっと楽に、もっと安全に</h2>
                <!-- <p class="lead" style=";">
                    私たちは、最新なIot技術を活用し、民泊物件の管理をサポートすることで、オーナーとゲストの皆様、
                    より快適で安心な民泊体験を提供します。
                    <br>
                </p> -->
            </div>
            <div class="row gy-4">
                <div class="col-lg-6 order-1 order-lg-2">
                    <img src="{SMARTLOCKER}" class="img-fluid" alt="">
                </div>
                <div class="col-lg-6 order-2 order-lg-1 content">
                    <h3>スマートロック</h3>
                    <p class="mb-3" style="font-weight: bold;">
                        鍵の受け渡し不要です！<br>
                        1滞在1パスワード！ <br>
                        鍵紛失失敗不要！
                    </p>
                    <h4>解除スタイル</h4>
                    <div class="mt-2">
                        <img src="{UNLOCK}" class="img-fluid" alt="unlock" style="max-height: 240px;">

                    </div>
                </div>

            </div>

            <hr/>
            <div class="row gy-4 mt-4">
                <div class="col-lg-6 order-1 order-lg-1">
                    <img src="{CAMERA}" class="img-fluid" alt="">
                </div>
                <div class="col-lg-6 order-2 order-lg-2 content">
                    <h3>カメラ</h3>
                    <p class="mb-3" style="font-weight: bold;">
                        リアルタイム監視！<br>
                        予約者全員顔チェック！<br>
                        不審者検知！
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="mt-4 text-center">
                <p class="lead mb-4" style="color:#2196F3">IoTの取付け又はソリューション提案は、今すぐ問い合わせしませんか。</p>
                <a href="/#contact" class="btn btn-danger btn-lg rounded-pill px-5">
                  問い合わせ
                  <ArrowRightCircle/>
                </a> 
            </div>
        </div>
    </div>
</section>


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
  

    .service-intro {
      max-width: 900px;
      margin: 0 auto;
    }
  
    .service-intro p {
      color: #063b71;
      line-height: 1.8;
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
  
    
  
  </style>
  