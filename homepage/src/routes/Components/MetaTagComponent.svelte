<script>
    import { MetaTags  } from "svelte-meta-tags";

    export let title="株式会社ロッジギーク"
    export let description="宿泊施設事業とIoT機器事業の融合,通信機器・SIMカード事業,民泊代行サービス,民宿スマートハウスシステム,革新的なサービスで豊かで快適な生活を創造"
    let keywords=["宿泊施設の企画、管理、運営","各種IoT機器の輸入販売","通信機器、SIMカードの販売"]
</script>
<MetaTags
  title="{title}"
  description="{description}"
  keywords="{keywords}"
  canonical="https://lodgegeek.com/"
  openGraph={{
    url: 'https://lodgegeek.com//',
    title: "株式会社ロッジギーク",
    type: 'website',
    description: '宿泊施設事業とIoT機器事業の融合,通信機器・SIMカード事業,民泊代行サービス,民宿スマートハウスシステム',
    images: [
      {
        url: "https://lodgegeek.com//src/lib/img/logo1.png",
        width: 800,
        height: 600,
        alt: 'LOGO'
      },
    ],
    siteName: '株式会社ロッジギーク'
  }}
/>