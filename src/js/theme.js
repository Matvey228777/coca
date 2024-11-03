export const useTheme = () => {
    const themeTarget = document.querySelector('[data-theme]');
    const themeSwitcher = document.querySelector('[data-theme-switcher');

    themeSwitcher.addEventListener('click', () => {
        console.log(1)
        const themeTargetDataset = themeTarget.dataset;
        themeTargetDataset.theme = 'dark';
    });
};
