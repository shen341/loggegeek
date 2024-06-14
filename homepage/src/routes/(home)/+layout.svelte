<script>
	import Header from '../Header.svelte';
	import Footer from "../Footer.svelte";
	import '../styltes/bootstrap.min.css';
	// import './styltes/aos.css';
	import '../styltes/swiper-bundle.min.css';
	import '../styltes/glightbox.min.css';
	import '../styltes/main.css';
</script>

<div class="app">
	<Header />

	<main class="main">
		<slot />
	</main>

	<Footer />
</div>
