<script>
  import { onMount } from 'svelte';
  import PROCESSALL from "$lib/img/subcontracting/all.png";
  import OWNERALL from "$lib/img/subcontracting/owner_all.png";
  import OWNERPART from "$lib/img/subcontracting/owner_part.png";
  import OWNERSLECT from "$lib/img/subcontracting/owner_select.png";

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

<section class="solution-section">
  <div class="container py-5">
    <!-- Solution Header -->
    <div class="text-center mb-5 animate-on-scroll">
      <h6 class="important_red mb-3 text-center">SOLUTION</h6>
      <h2 class="big-title  mb-4">
       オーナー主体型民泊管理代行なら、<br/>
        法律を遵守してオーナー自身が自由に運営可能
      </h2>
    </div>

    <!-- Main Content Box -->
    <div class="bg-white rounded-4 p-5 mb-5 animate-on-scroll">
      <div class="text-center mb-5">
        <h3 class="section-title mb-4">
          再委託型の運営で、<span class="important_red">ほとんど全ての民泊業務</span>をオーナー及び<br/>
          オーナーが選んだ業者に<span class="important_red">「再委託」</span>できます。
        </h3>
        <div class="row">
            <div class="col-md-8 offset-md-2  col-sm-12 ">
                <div class="alert alert-light border">
                    <p class="mb-0">
                      住宅宿泊事業法には、民泊業務を住宅宿泊管理業者に委託した上で、一部をオーナーが<br/>
                      <span class="text-danger">担うことができる</span>と記載されています。
                    </p>
                  </div>
            </div>
            <div class="col-md-10 offset-md-1">
                <div class="d-flex justify-content-center">
                    <img src="{PROCESSALL}" alt="all process" class="img-fluid"/>
                  </div>
            </div>
        </div>
      </div>

    
      <div class="text-center mb-5">
        <h3 class="section-title mb-4">
            オーナーの方針によって運用方法は<span class="important_red">自由自在</span>様々なパターンでの運用が可能に
        </h3>    
        <!-- Flow Diagram1 owner_all -->
        <div class="row text-center">
            <div class="d-flex justify-content-center">
                <h4 class="subtitle text-white">
                    ① オーナーにほとんど全ての業務を再委託
                </h4>
            </div>

            <div class="col-md-10 offset-md-1">
                <div class="d-flex justify-content-center">
                    <img src="{OWNERALL}" alt="オーナーにほとんど全ての業務を再委託" class="img-fluid"/>
                  </div>
            </div>
        </div>
        
        <!-- Flow Diagram1 owner_part -->
        <hr>
        <div class="row text-center">
            <div class="d-flex justify-content-center">
                <h4 class="subtitle text-white">
                    ② オーナー ＋ 一部の業務のみを業者に再委託
                </h4>
            </div>

            <div class="col-md-10 offset-md-1">
                <div class="d-flex justify-content-center">
                    <img src="{OWNERPART}" alt="オーナー ＋ 一部の業務のみを業者に再委託" class="img-fluid"/>
                  </div>
            </div>
        </div>    
        
        <!-- Flow Diagram1 owner_select -->
        <hr>
        <div class="row text-center">
            <div class="d-flex justify-content-center">
                <h4 class="subtitle text-white">
                    ③ オーナーが選定した業者に各業務を再委託
                </h4>
            </div>

            <div class="col-md-10 offset-md-1">
                <div class="d-flex justify-content-center">
                    <img src="{OWNERSLECT}" alt="オーナーが選定した業者に各業務を再委託" class="img-fluid"/>
                  </div>
            </div>
        </div>           
      </div>
    </div>

    <!-- Merit-->
  </div>
</section>

<!-- Merit-->
<section class="py-5 bg-light" id="Merit">
    <div class="container text-center">
        <h6 class="mb-4">MERIT</h6>
        <h2 class="mb-5">再委託型民泊管理代行のメリット</h2>
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

<style>


#Merit h6 {
  color: #c8391e;
  font-weight: bold;
}
#Merit h2 {
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

.subtitle{
    align-items: center;
    background: #063b71;
    border-radius: 8px 8px 0px 0px;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 56px;
    justify-content: center;
    width: 480px;
    max-width: 100%;
    padding: 15px 0 10px 0;
    font-size: 20px;
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

  .section-title{
    align-items: center;
    background: #105092;
    border-radius: 8px 8px 8px 8px;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    color: white;
    padding: 10px;
}    
  
</style>