<script>
	import Header from '../Header.svelte';
	import Footer from "../Footer.svelte";
	import '../styltes/bootstrap.min.css';
	// import '../styltes/bootstrap-icons.css';
	// import './styltes/aos.css';
	import '../styltes/swiper-bundle.min.css';
	import '../styltes/glightbox.min.css';
	import '../styltes/main.css';

	import { ToastContainer, FlatToast } from "svelte-toasts";


</script>


<div class="app">
	<Header />
	<ToastContainer let:data>
		<FlatToast {data} />
	</ToastContainer>

	<main class="main">
		<slot />
	</main>

	<Footer />
</div>
