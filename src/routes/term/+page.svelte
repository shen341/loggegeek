<script>
     import Footer from "../Footer.svelte";
     import '../styltes/bootstrap.min.css';
	 import '../styltes/main.css';
     import  MetaTagComponent from "../Components/MetaTagComponent.svelte";
     import Header from '../Header.svelte';
     import { trans } from "$lib/language/i18n";

</script>

<svelte:head>
	<MetaTagComponent/>
</svelte:head>
<Header/>
<div class="container-fluid bg-light bg-icon my-5 py-6">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 bg-white" style="margin-top: 50px;">
            <h1 class="h3 mb-4 page-title" style="margin-top: 20px;text-align: center;">{$trans("privacy.policy.title")}</h1>
            <hr class="my-4">
            <p>{$trans("privacy.policy.summary1")}
            </p>
            <p>{$trans("privacy.policy.summary2")}</p>
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase1.title")}</h5>
            <p>{$trans("privacy.policy.phase1.content")}</p>
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase2.title")}</h5>
            <ul>
                <li>{$trans("privacy.policy.phase2.content1")}</li>
                <li>{$trans("privacy.policy.phase2.content2")}</li>
                <li>{$trans("privacy.policy.phase2.content3")}</li>
                <li>{$trans("privacy.policy.phase2.content4")} </li>
                <li>{$trans("privacy.policy.phase2.content5")}</li>
                <li>{$trans("privacy.policy.phase2.content6")}</li>
                <li>{$trans("privacy.policy.phase2.content7")}</li>
                <li>{$trans("privacy.policy.phase2.content8")}</li>
                <li>{$trans("privacy.policy.phase2.content9")}
                </li>
            </ul>
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase3.title")}</h5>
            <p>{$trans("privacy.policy.phase3.content1")}</p>
            <ul>
                <li>{$trans("privacy.policy.phase3.content2")}</li>
                <li>{$trans("privacy.policy.phase3.content3")}
                </li>
            </ul>
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase4.title")}</h5>
            <p>{$trans("privacy.policy.phase4.content1")}</p>
            <ul>
                <li>{$trans("privacy.policy.phase4.content2")}</li>
                <li>{$trans("privacy.policy.phase4.content3")} </li>
                <li>{$trans("privacy.policy.phase4.content4")}
                </li>
                <li>{$trans("privacy.policy.phase4.content5")}
                </li>
                <li>{$trans("privacy.policy.phase4.content6")}
                </li>
                <li>{$trans("privacy.policy.phase4.content7")}
                </li>
                <li>{$trans("privacy.policy.phase4.content8")}
                </li>
                <li>{$trans("privacy.policy.phase4.content9")}
                </li>
            </ul>
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase5.title")}</h5>
            <p>{$trans("privacy.policy.phase5.content1")}
            </p>
            <ul>
                <li>{$trans("privacy.policy.phase5.content2")}
                </li>
                <li>{$trans("privacy.policy.phase5.content3")}
                </li>
                <li>{$trans("privacy.policy.phase5.content4")}
                </li>
                <li>{$trans("privacy.policy.phase5.content5")}
                </li>
            </ul>            
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase6.title")}</h5>
            <p>{$trans("privacy.policy.phase6.content1")}
            </p>
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase7.title")}</h5>
            <p>{$trans("privacy.policy.phase7.content1")}
            </p>       
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase8.title")}</h5>
            <p>{$trans("privacy.policy.phase8.content1")}            </p>                  
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase9.title")}</h5>
            <p>{$trans("privacy.policy.phase9.content1")}
            </p> 
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase10.title")}</h5>
            <p>{$trans("privacy.policy.phase10.content1")}</p> 
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase11.title")}</h5>
            <p>{$trans("privacy.policy.phase11.content1")}</p> 
            <h5 class="mb-0 mt-5">{$trans("privacy.policy.phase12.title")}</h5>
            <p>{$trans("privacy.policy.phase12.content1")}</p> 
            <hr class="my-4">
        </div>
    </div>
</div>
<Footer />
<style>
    ul {
        list-style-type: decimal
    }

    p {
     margin-left: 10px;
     text-indent: 1.5em;
    }
</style>