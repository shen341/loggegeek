<script>
 	import FormatListBulleted from "svelte-material-icons/FormatListBulleted.svelte"
  import TranslateVariant from "svelte-material-icons/TranslateVariant.svelte"
  import "/node_modules/flag-icons/css/flag-icons.min.css";
  import { trans,locale, locales } from "$lib/language/i18n";
  import ChartLine from "svelte-material-icons/ChartLine.svelte"
	import LockSmart from "svelte-material-icons/LockSmart.svelte"
	import AccountStar from "svelte-material-icons/AccountStar.svelte"

	let mobileMenuOpen = false;

  function mobileClick() {
    if (mobileMenuOpen==true) {
      mobileMenuOpen=false;
    }
  }

  function mobileMenuAction() {
    mobileMenuOpen=!mobileMenuOpen;
  }

  let mobileActiveMenu = "";
  const mobileMenuDropdown = (menu="") => {
    if (mobileActiveMenu==menu) {
      mobileActiveMenu = "";
    } else {
      mobileActiveMenu = menu;
    }
  }

</script>

<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="/favicon.png" alt="">
        <h1 class="sitename">LodgeGeek</h1>
        <span>.</span>
      </a>

      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <nav id="navmenu" class="navmenu {mobileMenuOpen?'active_mobile_memu':""}">
        <ul>
          <li><a href="/#hero" class="" on:click={()=>{mobileClick()}}>{$trans("memu.title.home")}<br></a></li>
          <li><a href="/#about" on:click={()=>{mobileClick()}}>{$trans("memu.title.about")}</a></li>
          <!-- <li><a href="/#hero" on:click={()=>{mobileClick()}}>{$trans("memu.title.service")}</a></li> -->
          <li class="dropdown">
            <a href="#" on:click={()=>{mobileMenuDropdown("service")}} class="{mobileActiveMenu=="service"?"active":""}">
              <span>{$trans("memu.title.service")}</span> 
              <i class="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul class="{mobileActiveMenu=="service"?"dropdown-active":""}">
              <li><a href="/management-service" on:click={()=>{mobileMenuAction()}}><ChartLine color="#ffc451" width=20 height=20/><span style="margin-left: 5px;">{$trans("hero.section.planning")}</span></a></li>
              <li><a href="/consultant" on:click={()=>{mobileMenuAction()}} ><AccountStar color="#ffc451" width=20 height=20/><span style="margin-left: 5px;">{$trans("hero.section.consultant")}</span></a></li>
              <li><a href="/iot" on:click={()=>{mobileMenuAction()}}><LockSmart color="#ffc451" width=20 height=20/><span style="margin-left: 5px;">{$trans("hero.section.iotSales")}</span></a></li>
            </ul>
          </li>

          <!-- <li><a href="/#portfolio" on:click={()=>{mobileClick()}}>{$trans("memu.title.portfolio")}</a></li> -->
          <!-- <li><a href="#team">Team</a></li> -->
          <li><a href="/#contact" on:click={()=>{mobileClick()}}>{$trans("memu.title.contact")}</a></li>
          <li class="dropdown">
            <a href="#" on:click={()=>{mobileMenuDropdown("language")}} class="{mobileActiveMenu=="language"?"active":""}">
              <TranslateVariant color="{mobileMenuOpen==true?"#212529":"white"}" width=24 height=24/>
              <i class="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul class="{mobileActiveMenu=="language"?"dropdown-active":""}">
              {#each locales as language}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <li class="list-group-item" on:click={()=>{$locale=language}}>
                  <!-- svelte-ignore a11y-invalid-attribute -->
                  <a href="javascript:void(0);" on:click={()=>{mobileClick()}}>
                    <span class="fi {language=="日本語"?"fi-jp":(language=="中文"?"fi-cn":"fi-um")}"></span>
                    <span style="margin-left: 5px;">{language}</span>
                  </a>
               </li>                       
              {/each}

              <!-- <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li> -->
            </ul>
          </li>         
        </ul>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="menu_icon" on:click={() => mobileMenuOpen =!mobileMenuOpen}>
			<FormatListBulleted color="white" width=32 height=32/>
		</div>		
      </nav>

    </div>
  </header>

  <style>
  ul li.dropdown ul li a {
      justify-content: flex-start;
      font-size: 12px;
  }
	.active_mobile_memu {
		position: fixed;
		overflow: hidden;
		inset: 0;
		background: rgba(33, 37, 41, 0.8);
		transition: 0.3s;
	}
	.active_mobile_memu  ul {
		display: block;
	}
	.active_mobile_memu .menu_icon{
		position: absolute;
        font-size: 32px;
        top: 15px;
        right: 15px;
        margin-right: 0;
        z-index: 9999;
	}

  .menu_icon{
      display: none;
    }

  
  @media (max-width: 767px) {
    .fixed-top {
      position: absolute;
    }
  }

  @media (max-width: 480px) {
    .menu_icon{
      display: block;
    }

  }

  @media (max-width: 768px) {
    .navmenu .dropdown ul {
        position: static;
        display: none;
        z-index: 99;
        padding: 10px 0;
        margin: 10px 20px;
    }


    .navmenu .dropdown>.dropdown-active {
        display: block;
        background-color: rgba(33, 37, 41, 0.03);
    }
}

  </style>

