<script>
  import { onMount } from 'svelte';
  import TagCheck from "svelte-material-icons/TagCheck.svelte"
  import SAITAKU from "$lib/img/backgroud/saiitaku.jpg";
	import Cellphone from "svelte-material-icons/Cellphone.svelte"
	import EmailOutline from "svelte-material-icons/EmailOutline.svelte"
	import MapMarkerRadius from "svelte-material-icons/MapMarkerRadius.svelte"
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
  <style>
    @keyframes slideInFromTop {
      0% {
        transform: translateY(-50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes floatAnimation {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .animate-on-scroll {
      opacity: 0;
      transition: all 0.8s ease-out;
    }

    .animate-on-scroll.animate {
      opacity: 1;
      transform: translateY(0);
    }

    .float-animation {
      animation: floatAnimation 3s ease-in-out infinite;
    }
  </style>
</svelte:head>

<section class="solution-section" id="solution">
  <div class="container py-5">
    <!-- Solution Header -->
    <div class="text-center  animate-on-scroll">
      <h6 class="important_red mb-3 text-center">SOLUTION</h6>
      <h1 class="big-title  mb-4">
        「再委託型」民泊運営業務
      </h1>
    </div>

    <!-- background -->
    <div class="summary_top animate-on-scroll">
      <h2><span class="txt">民泊運営方法における背景</span></h2>
    </div>
    <div class="mt-3 comment_box animate-on-scroll">
      <p>
        民泊の運営には、大きく分けて「家主居住型」と「家主不在型」の2つのスタイルがあります。
      </p>
      <strong>
        ■家主居住型（ホームステイ型）
      </strong>

      <ul class="mt-3">
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>ホストが普段住んでいる家の一部をゲストに貸し出すスタイルです。</span></li>
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>ホストとゲストが同じ家で生活を共にします。</span></li>
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>50㎡以下の部屋を貸し出す場合、消防設備の設置義務が緩和されることがあります。</span></li>
      </ul>

      <p>
        ただし、ホストの外出時間に制限があるなど、ルールが厳しく設定されています。
      </p>
      <strong>
        ■家主不在型（空き家活用型）
      </strong>

      <ul class="mt-3">
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>ホストが常に家にいる必要がないスタイルです。</span></li>
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>空き家などを有効活用する場合に適しています。</span></li>
      </ul>

      <p>
        ホストの時間の自由度は高いですが、以下の点が義務付けられています。
      </p>
      <ul class="mt-3">
				<li><div style="margin-right:0.5rem;"><TagCheck color="#FF5722" width=24 height=24/></div> <span>消防設備の設置</span></li>
				<li><div style="margin-right:0.5rem;"><TagCheck color="#FF5722" width=24 height=24/></div> <span>ゲスト対応、清掃、緊急時の駆けつけなど、民泊運営に関する全ての業務を住宅宿泊管理業者に委託
        </span></li>
      </ul>
      

    </div>

    <!-- 再委託型民泊運営とは？ -->
    <div class="summary_top animate-on-scroll">
      <h2><span class="txt">再委託型民泊運営とは？</span></h2>
    </div>
    <div class="mt-3 comment_box animate-on-scroll">
      <p>
        現在、民泊の多くは家主が不在で、運営を管理会社に委託する「家主不在型」です。しかし、多くの家主は「もっと自分で運営に関わりたい」と感じています。
      </p>
     <p style="line-height: 1.5rem;">
      この問題を解決する運営方法が「再委託型」の民泊運営になります。<br>
      再委託型運営とは、ホストが住宅宿泊管理業者に委託した民泊業務の一部をホストおよびホストが選んだ業者に戻す形で再委託するという運営方法です。
     </p>

     <div class="d-flex justify-content-center">
      <img src="{SAITAKU}" alt="再委託型民泊運営" class="img-fluid custom_img" />
     </div>

     <div class="mt-4 text-center">
      <p class="lead mb-4">まずは気軽にお問い合わからはじめませんか？</p>
      <a href="#contact" class="btn btn-danger btn-lg rounded-pill px-5">
        問い合わせ
        <ArrowRightCircle/>
      </a> 
     </div>

    </div>

    <!-- Merit-->
  </div>
</section>

<!-- Merit-->
<section class="py-5 bg-light" id="Merit">
    <div class="container text-center">
        <h6 class="mb-4">MERIT</h6>
        <h2 class="mb-5">再委託型民泊管理のメリット</h2>
        <div class="row mb-4">
            <div class="col-md-6 col-lg-3 mb-3">
              <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                <div class="card-body">
                  <span class="material-icons" style="font-size: 96px;color:#063b71">trending_down</span>
                  <p class="text-center">コストカットができる</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-3">
              <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                <div class="card-body">
                    <span class="material-icons">phone_disabled</span>                  
                    <p  class="text-center">面倒な連絡も一切なし</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-3">
              <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                <div class="card-body">
                    <span class="material-icons"> room_preferences </span>
                    <p class="text-center">自分スタイルでできる</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-3">
              <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                <div class="card-body">
                    <span class="material-icons">support_agent</span>
                    <p  class="text-center">本当に必要な箇所だけサポートを受けられる</p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 mb-3">
                <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                  <div class="card-body">
                      <span class="material-icons">thumb_up_alt</span>
                      <p  class="text-center">各業務のプロに依頼することも可能</p>
                  </div>
                </div>
              </div>

        </div>        
    </div>

</section>

<!-- Contact Section -->
<section id="contact" class="py-5 bg-light">
  <div class="container">
    <h6 class="mb-4 text-center">CONTACT</h6>
    <h2 class="mb-5 text-center">問い合わせ</h2>
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

<style>

.summary_top {
    background: url(/background.jpg) repeat-x center top;
    padding: 20px 0;
    border-radius: 10px;
}

.summary_top h2 {
    border-left: 8px solid #314c50;
    width: 985px;
    margin: 0 5px;
    font-size: 24px;
}

.comment_box ul{
  list-style: none;
  padding: 0;
}

.comment_box ul li{
  display: flex;
  margin-left: 20px;
}



#Merit h6,#contact h6 {
  color: #c8391e;
  font-weight: bold;
}
#Merit h2,#contact h2 {
  color: #063b71;
  font-weight: bold;
}

#Merit  .card-body span{
	font-size: 96px;
	color:#063b71;
}


#Merit .card-body p{
    color: #c8391e;
    font-weight: 700;
    font-size: 1.5rem;
    height: auto;
    line-height: 1.4;
}


.big-title{
    color: #063b71;
    font-size: 48px;
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

  .important_red{
    color: #FF5722;
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


  .solution-section {
    position: relative;
    overflow: hidden;
  }

  .solution-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,56,118,0.9) 0%, rgba(0,56,118,1) 100%);
    z-index: -1;
  }

  @media only screen and (min-width: 768px){
			.custom_img{
        max-width: 600px;
			}
		}  


  
</style>