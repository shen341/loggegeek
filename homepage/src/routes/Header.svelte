<script>
 	import FormatListBulleted from "svelte-material-icons/FormatListBulleted.svelte"
	let mobileMenuOpen = false;
</script>

<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">LodgeGeek</h1>
        <span>.</span>
      </a>

      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <nav id="navmenu" class="navmenu {mobileMenuOpen?'active_mobile_memu':""}">
        <ul>
          <li><a href="#hero" class="">Home<br></a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <!-- <li><a href="#team">Team</a></li> -->
          <!-- <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li> -->
          <li><a href="#contact">Contact</a></li>
        </ul>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="menu_icon" on:click={() => mobileMenuOpen =!mobileMenuOpen}>
			<FormatListBulleted color="white" width=32 height=32/>
		</div>		
      </nav>

    </div>
  </header>

  <style>
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

  @media (max-width: 480px) {
    .menu_icon{
      display: block;
    }
  }
  </style>

