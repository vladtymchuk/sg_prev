const tabs = document.querySelector('.tabs');

const tabButtons = tabs.querySelectorAll('[role="tab"]');

const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {

    document.getElementById('mainPage').addEventListener('click', (e) => {
        //double click
            // location.reload();
        //double click

//Если кликаем на кнопку "Головна"
        tabPanels.forEach(panel => {
            panel.hidden = false;
        });

        tabButtons.forEach(tab => {
            tab.setAttribute('aria-selected', true);
        });

        e.currentTarget.setAttribute('aria-selected', true);

//Ищем все табы
        const tabPanelErp = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'erpSystem');
        // const tabPanelProjects = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'projects');
        const tabPanelMaster = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'master');
        const tabPanelNewsPage = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'newsPage');
        const tabPanelPublicServices = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'publicServices');
        const tabPanelItSolution = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'itSolution');
        const tabPanelCreationOfDesign = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'creationOfDesign');
        const tabPanelAboutUs = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'aboutUs');
        const tabPanelPilgi = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'pilgi');
        const tabPanelEprop = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'e-prop');
        const tabPanelId14 =  tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'id-14');
        const tabKovalska =  tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'kovalska');
        const tabMakosh =  tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'makosh');
        const tabSms =  tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'sms');
        const tabPanelRtg = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'Rtg');
        const tabPanelEmal = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'eMal');
        const tabPanelKm = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'Km');
        const tabPanelPayVnBot = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'payVn-bot');
        const tabPanelDog = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'dog');
        const tabPanelPayConverter = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'PayConverter');
        const tabPanelEDoc = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'eDoc');
        const tabPanelMBfunc = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'MBfunc');
        const tabPanelMoreProjectsButton = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'moreProjects');
        const tabPanelOrenda = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'MBor');
        const tabPanelMBenerg = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'MBenerg');
        const tabPanelDesignSolution = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'DesignSolution');
        const tabPanelSubs = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === 'subs');

//Скрываем все табы кроме главной страницы
        tabPanelErp.hidden = true;
        // tabPanelProjects.hidden = true;
        tabPanelMaster.hidden = true;
        tabPanelNewsPage.hidden = true;
        tabPanelPublicServices.hidden = true;
        tabPanelItSolution.hidden = true;
        tabPanelCreationOfDesign.hidden = true;
        tabPanelAboutUs.hidden = true;
        tabPanelPilgi.hidden = true;
        tabPanelEprop.hidden = true;
        tabPanelId14.hidden = true;
        tabKovalska.hidden = true;
        tabMakosh.hidden = true;
        tabSms.hidden = true;
        tabPanelRtg.hidden = true;
        tabPanelEmal.hidden = true;
        tabPanelKm.hidden = true;
        tabPanelPayVnBot.hidden = true;
        tabPanelDog.hidden = true;
        tabPanelPayConverter.hidden = true;
        tabPanelEDoc.hidden = true;
        tabPanelMBfunc.hidden = true;
        tabPanelMoreProjectsButton.hidden = true;
        tabPanelOrenda.hidden = true;
        tabPanelMBenerg.hidden = true;
        tabPanelDesignSolution.hidden = true;
        tabPanelSubs.hidden = true;

        scrollTo(0, 0);
        // console.log(e.target);
    });

//Кликаем по любым другим табам
        tabPanels.forEach(panel => {
            panel.hidden = true;
        });

        tabButtons.forEach(tab => {
            tab.setAttribute('aria-selected', false);
        });

        e.currentTarget.setAttribute('aria-selected', true);

        const {id} = e.currentTarget;
        const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
        // console.log(tabPanel);
        tabPanel.hidden = false;
        scrollTo(0, 0);
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
