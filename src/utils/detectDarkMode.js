const detectDarkMode = () => {
    if (window.matchMedia && window.matchMedia('(preders-color-scheme: dark)').matches) {
        return 'dark'
    }
    return 'light'
};

export default detectDarkMode;