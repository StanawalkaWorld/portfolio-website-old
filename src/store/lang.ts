import { defineStore } from 'pinia';
import { computed, ref, Ref, unref } from 'vue';

import Translations from '../assets/Translations.json';

export const useLanguageStore = defineStore("LanguageStore", () => {
    const current_lang: Ref<"pl" | "en"> = ref("en");

    function switchLanguage() {
        current_lang.value = current_lang.value == "pl" ? "en" : "pl";
    }

    const translationFor = computed(() => {
        return (string_name: string | Ref<string>) => {
            if(unref(string_name) in Translations["skeleton"])
                return Translations["skeleton"][unref(string_name)][current_lang.value];
            else
                return "<TRANSLATION NOT FOUND>";
        }
    })

    return {
        current_lang,
        switchLanguage,
        translationFor
    }
});