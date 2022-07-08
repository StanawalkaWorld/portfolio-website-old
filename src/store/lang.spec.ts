// TODO: Create tests for LanguageStore

import { expect } from "chai";
import { setActivePinia, createPinia } from "pinia";
import { beforeEach, describe, it } from "vitest";
import { useLanguageStore } from "./lang";

import Translations from '../assets/Translations.json';

describe('Language Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    it('switches language', () => {
        const lang = useLanguageStore();
        expect(lang.current_lang).toBe("en");
        lang.switchLanguage();
        expect(lang.current_lang).toBe("pl");
        lang.switchLanguage();
        expect(lang.current_lang).toBe("en");
        
    })

    it('returns english translations', () => {
        const lang = useLanguageStore();
        
        // Test english translations
        expect(lang.translationFor('content', 'goal.paragraph')).toBe(Translations.content["goal.paragraph"].en);
        expect(lang.translationFor('skeleton', 'navlink.about')).toBe(Translations.skeleton["navlink.about"].en);
    })

    it('returns polish translations', () => {
        const lang = useLanguageStore();

        // Switch to polish
        lang.switchLanguage();
        
        // Test polish translations
        expect(lang.translationFor('content', 'landing.mainheader')).toBe(Translations.content["landing.mainheader"].pl);
        expect(lang.translationFor('skeleton', 'navlink.contact')).toBe(Translations.skeleton["navlink.contact"].pl);
    })

    it('returns invalid string if not found', () => {
        const lang = useLanguageStore();

        // Test invalid translations
        expect(lang.translationFor('content', 'shop.header')).toBe("<TRANSLATION NOT FOUND>");
        expect(lang.translationFor('sidebar', 'navlink.home')).toBe("<TRANSLATION NOT FOUND>");
    })
});