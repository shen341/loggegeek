<script>
  import { onMount } from 'svelte';

  export let visible = false;

  $: if (visible) {
    initializeTally();
  }

  const initializeTally = () => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    
    // Remove existing script
    const existingScript = d.querySelector('script[src="' + w + '"]');
    if (existingScript) {
      existingScript.remove();
    }

    const v = function() {
      // @ts-ignore
      if (typeof Tally !== "undefined") {
        // @ts-ignore
        Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
          // @ts-ignore
          e.src = e.dataset.tallySrc;
        });
      }
    };

    const s = d.createElement("script");
    s.src = w;
    s.onload = v;
    s.onerror = v;
    d.body.appendChild(s);
  };

  onMount(() => {
    if (visible) {
      initializeTally();
    }
  });
</script>

<div class="contact-form" class:visible>
  <iframe
    data-tally-src="https://tally.so/embed/meBRqQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
    loading="lazy"
    width="100%"
    height="313"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    referrerpolicy="no-referrer-when-downgrade"
    title="Contact Form"
  ></iframe>
</div>

<style>
  .contact-form {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .contact-form.visible {
    opacity: 1;
  }
</style> 