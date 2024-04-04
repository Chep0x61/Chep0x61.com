import { useEffect } from 'react';

export function useLanguage() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang');
            if (!storedLang) {
                const userLang = navigator.language;
                if (userLang.startsWith("fr")) {
                    localStorage.setItem('lang', "fr");
                } else if (userLang.startsWith("en")) {
                    localStorage.setItem('lang', "en");
                } else {
                    localStorage.setItem('lang', "en");
                }
            }
        }
    }, []);

    return typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
}
