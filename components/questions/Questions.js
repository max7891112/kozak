class Questions{
    addListener() {
        document.addEventListener('click', function(event) {
            let vector = event.target
            if(!vector.hasAttribute('data-vector')) return
            let target = vector.parentNode.nextElementSibling
            target.classList.toggle('hidden__question')
            if(target.classList.contains('hidden__question')) {
                vector.style.transform = 'rotate(0deg)'
            } else {
                vector.style.transform = 'rotate(-180deg)'
            }
        })
    }
};

export default new Questions();