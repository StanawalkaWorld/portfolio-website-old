import { usePreferredLanguages } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref, Ref, unref } from 'vue';
import Translations from '../assets/Translations.json';

type TextType = "skeleton" | "content";
type Language = "pl" | "en";

export const useLanguageStore = defineStore("LanguageStore", () => {
    const preferred = usePreferredLanguages();
    const current_lang: Ref<Language> = ref(
        preferred.value[0].includes("pl") 
        ? "pl" 
        : "en"
    );

    function switchLanguage() {
        current_lang.value = current_lang.value == "pl" ? "en" : "pl";
    }

    const translationFor = computed(() => {
        return (string_type: TextType, string_name: string | Ref<string>) => {
            if(string_type in Translations && unref(string_name) in Translations[string_type])
                return Translations[string_type][unref(string_name)][current_lang.value];
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