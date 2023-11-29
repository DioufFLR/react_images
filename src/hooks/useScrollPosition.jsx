import {useEffect, useState} from 'react';

const useScrollPosition = () =>
{
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() =>
    {
        const listener = window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener(listener);
        }
    }, []);

    const handleScroll = () => {
        setIsBottom(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight);
    }

    return {isBottom}
};

export default useScrollPosition;