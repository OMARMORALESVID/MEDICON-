function changeTab(tabId) {
    const allTabs = document.querySelectorAll('.tab-content');
    for (let tab of allTabs) {
        tab.classList.remove('active');
    }
    document.getElementById('tab' + tabId).classList.add('active');
}

