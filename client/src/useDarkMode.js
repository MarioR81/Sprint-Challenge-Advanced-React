import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkmode, setDarkmode] = useLocalStorage('darkmode', false)
    useEffect(() => {
    if (darkmode){
        document.querySelector('body').classList.add('dark-mode')
    } else {
        document.querySelector('body').classList.remove('dark-mode')
    }

    }, [darkmode])
return [darkmode, setDarkmode];
}