const ob = new IntersectionObserver((entries) =>  {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})



const hiddenelements = document.querySelectorAll(".hidden")
hiddenelements.forEach((el) => ob.observe(el))