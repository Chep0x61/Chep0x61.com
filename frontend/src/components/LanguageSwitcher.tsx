import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import axios from 'axios';

import Languages from "@/components/icons/Languages";
import { useUrl } from "@/hooks/useUrl";
import { useLanguage } from '../hooks/useLanguage';

interface LanguageData {
    id: string;
    flag: string;
    translations: {
        languageCode: string;
        languageName: string;
    }[];
}

export function LanguageSwitcher() {
    const { theme } = useTheme();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [languages, setLanguages] = useState<{ id: string; flag: string; code: string; name: string; }[]>([]);
    const currentLanguage = useLanguage();
    const url = useUrl();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const changeLanguage = (languageCode: string) => {
        setMenuOpen(false);
        localStorage.setItem('lang', languageCode);
        window.location.reload();
    };

    const handleOutsideClick = (e: MouseEvent | KeyboardEvent) => {
        if (isMenuOpen && (e.target as HTMLElement).closest('.language-menu') === null) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        axios.get(`${url}/languages?lang=${currentLanguage}`)
            .then(response => {
                const languagesWithCodes = response.data.languages.map((lang: LanguageData) => ({
                    id: lang.id,
                    flag: lang.flag,
                    code: lang.translations[0].languageCode,
                    name: lang.translations[0].languageName
                }));
                setLanguages(languagesWithCodes);
            })
            .catch(error => {
                console.error('Erreur lors de la requête :', error);
            });
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isMenuOpen]);

    return (
        <div className="">
            {isMenuOpen && (
                <div className="fixed z-[999] top-[calc(100%-12rem)]">
                    <div
                        className="language-menu bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-md">
                        <ul className="p-2 text-center">
                            {languages.map((lang, index) => (
                                <li key={index} onClick={() => changeLanguage(lang.code)}
                                    className="flex flex-row items-center gap-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg dark:hover:bg-gray-700 p-2">
                                    <img className="w-6" src={lang.flag} alt={lang.name}/>
                                    {lang.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            <button
                onClick={toggleMenu}
                className="gap-2 rounded-full relative flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] dark:bg-gray-800 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#D5D5D6] dark:before:bg-[#374151] before:duration-700 before:ease-out hover:before:h-24 hover:before:w-24">
                <span className="relative z-10 text-center">
                    <Languages/>
                </span>
            </button>
        </div>
    );
}
