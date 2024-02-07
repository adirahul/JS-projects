const tabs = document.querySelectorAll('[data-tab-target]')
console.log(tabs)

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        
        const contents = document.querySelectorAll('[data-tab-content]')
        contents.forEach(content => content.classList.remove('active'))
        
        const target = document.querySelector(tab.dataset.tabTarget)
        target.classList.add('active')
    })
})
