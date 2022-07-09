import { expect } from "chai";
import { setActivePinia, createPinia } from "pinia";
import { beforeEach, describe, it } from "vitest";
import { useLanguageStore } from "./lang";

import Translations from '../assets/Translations.json';

describe('Language Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    it('creates successfully', () => {
        const lang = useLanguageStore();

        expect(lang).toBeDefined();
        expect(lang.current_lang).toBe("en");
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
        expect(lang.current_lang).toBe("en");
        
        // Test english translations
        Object.keys(Translations).forEach(category => {
            Object.keys(Translations[category]).forEach(lang_string => {
                expect(lang.translationFor(category, lang_string)).toBe(Translations[category][lang_string].en);
            })
        });
    })

    it('returns polish translations', () => {
        const lang = useLanguageStore();

        // Switch to polish
        lang.switchLanguage();
        expect(lang.current_lang).toBe("pl");
        
        // Test polish translations
        Object.keys(Translations).forEach(category => {
            Object.keys(Translations[category]).forEach(lang_string => {
                expect(lang.translationFor(category, lang_string)).toBe(Translations[category][lang_string].pl);
            })
        });
    })

    it('returns invalid string if not found', () => {
        const lang = useLanguageStore();

        // Test invalid translations
        expect(lang.translationFor('content', 'shop.header')).toBe("<TRANSLATION NOT FOUND>");
        expect(lang.translationFor('sidebar', 'navlink.home')).toBe("<TRANSLATION NOT FOUND>");
    })
});