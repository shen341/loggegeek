import { derived,writable } from "svelte/store";
import language from "./language";

export const locale = writable("日本語")
export const locales = Object.keys(language)

// @ts-ignore
function translate(locale,key) {
    if (!key) throw new Error("no key provided to $t()")
    if (!locale) throw new Error(`no translation for key "${key}"`)
    
    // @ts-ignore
    let text = language[locale][key]
    if (!text)  throw new Error(`no translation found for ${locale}.${key}`)

    return text
    
}

export const trans = derived(locale,($locale) =>(key="") => translate($locale,key));