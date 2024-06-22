<script>
    import { Button,Hr,Html,Text  } from "svelte-email";

    export let customerName="",customerEmail="",title="",customerMessage=""
</script>

<Html lang="jp">
	<Text>
        <br>
        新しい問い合わせがありました。
        <br>
        <br>
        <br>
        Subject:{title}    
        <br>
        customerMessage:{customerMessage} 
        <br>    
        Name：{customerName}
        <br>
        Email:{customerEmail}
        <br>
        <br>
        ※ 当メールは送信専用アドレスからお送りしています。返信頂いてもご回答できませんのでご了承ください。
        <br>
        <br>
	</Text>
	<Hr />
</Html>