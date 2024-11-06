export const useTheme = () => {
    const themeTarget = document.querySelector('[data-theme]');
    const themeSwitcher = document.querySelector('[data-theme-switcher');

    themeTarget.dataset.theme = localStorage.getItem('theme');
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        themeSwitcher.checked = true;
    }

    themeSwitcher.addEventListener('click', () => {
        const themeTargetDataset = themeTarget.dataset;
        if (themeTargetDataset.theme == 'dark') {
            themeTargetDataset.theme = 'light';
            localStorage.setItem('theme', 'light');
        } else {
            themeTargetDataset.theme = 'dark';
            localStorage.setItem('theme', 'dark');
        }
    });
};
