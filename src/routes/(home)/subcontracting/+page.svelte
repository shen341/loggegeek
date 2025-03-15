<script>
  import { onMount } from 'svelte';
  import TagCheck from "svelte-material-icons/TagCheck.svelte"
  import SAITAKU from "$lib/img/backgroud/saiitaku.jpg";
	import Cellphone from "svelte-material-icons/Cellphone.svelte"
	import EmailOutline from "svelte-material-icons/EmailOutline.svelte"
	import MapMarkerRadius from "svelte-material-icons/MapMarkerRadius.svelte"
  import ArrowRightCircle from "svelte-material-icons/ArrowRightCircle.svelte"
	import { trans,locale } from "$lib/language/i18n";
  import Facebook from "svelte-material-icons/Facebook.svelte"
  import WECHAT from "$lib/img/socail/apps-wechat.svg";
  import LINE from "$lib/img/socail/icons8-line-96.png";

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
        {$trans("subcontracting.big.title")}
      </h1>
    </div>

    <!-- background -->
    <div class="summary_top animate-on-scroll">
      <h2><span class="txt">{$trans("subcontracting.section1.title")}</span></h2>
    </div>
    <div class="mt-3 comment_box animate-on-scroll">
      <p>
        {$trans("subcontracting.section1.detail")}
      </p>
      <strong>
        ■{$trans("subcontracting.section1.list1.start")}
      </strong>

      <ul class="mt-3">
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>{$trans("subcontracting.section1.list1.one")}</span></li>
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>{$trans("subcontracting.section1.list1.two")}</span></li>
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>{$trans("subcontracting.section1.list1.three")}</span></li>
      </ul>

      <p>
        {$trans("subcontracting.section1.list1.end")}
      </p>
      <strong>
        ■{$trans("subcontracting.section1.list2.start")}
      </strong>

      <ul class="mt-3">
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>{$trans("subcontracting.section1.list2.one")}</span></li>
				<li><div style="margin-right:0.5rem;"><TagCheck color="#105092" width=24 height=24/></div> <span>{$trans("subcontracting.section1.list2.two")}</span></li>
      </ul>

      <p>
        {$trans("subcontracting.section1.list2.three")}
      </p>
      <ul class="mt-3">
				<li><div style="margin-right:0.5rem;"><TagCheck color="#FF5722" width=24 height=24/></div> <span>{$trans("subcontracting.section1.list2.four")}</span></li>
				<li><div style="margin-right:0.5rem;"><TagCheck color="#FF5722" width=24 height=24/></div> <span>
          {$trans("subcontracting.section1.list2.five")}
        </span></li>
      </ul>
      

    </div>

    <!-- 再委託型民泊運営とは？ -->
    <div class="summary_top animate-on-scroll">
      <h2><span class="txt">{$trans("subcontracting.section2.title")}</span></h2>
    </div>
    <div class="mt-3 comment_box animate-on-scroll">
      <p>
        {$trans("subcontracting.section2.detail1")}
      </p>
     <p style="line-height: 1.5rem;">
      {$trans("subcontracting.section2.detail2")}
     </p>

     <div class="d-flex justify-content-center">
      <img src="{SAITAKU}" alt="{$trans("subcontracting.section2.title")}" class="img-fluid custom_img" />
     </div>

     <div class="mt-4 text-center">
      <p class="lead mb-4">{$trans("subcontracting.contact.title")}</p>
      <a href="/#contact" class="btn btn-danger btn-lg rounded-pill px-5">
        {$trans("manage.contact.button")}
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
        <h2 class="mb-5">{$trans("subcontracting.merit.title")}</h2>
        <div class="row mb-4">
            <div class="col-md-6 col-lg-3 mb-3">
              <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                <div class="card-body">
                  <span class="material-icons" style="font-size: 96px;color:#063b71">trending_down</span>
                  <p class="text-center">{$trans("subcontracting.merit1")}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-3">
              <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                <div class="card-body">
                    <span class="material-icons">phone_disabled</span>                  
                    <p  class="text-center">{$trans("subcontracting.merit2")}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-3">
              <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                <div class="card-body">
                    <span class="material-icons"> room_preferences </span>
                    <p class="text-center">{$trans("subcontracting.merit3")}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-3">
              <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                <div class="card-body">
                    <span class="material-icons">support_agent</span>
                    <p  class="text-center">{$trans("subcontracting.merit4")}</p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 mb-3">
                <div class="card feature-card h-100 border-0 shadow-sm animate-on-scroll">
                  <div class="card-body">
                      <span class="material-icons">thumb_up_alt</span>
                      <p  class="text-center">{$trans("subcontracting.merit5")}</p>
                  </div>
                </div>
              </div>

        </div>        
    </div>

</section>


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