function scrollToSection(id){
    const section = document.getElementById(id);
    if(section){
    section.scrollIntoView({behavior:'smooth', block:'nearest', inline:'start'});
    }
}

function handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msgEl = document.getElementById('formMsg');
    if(!name || !email || !message){
    msgEl.style.display='block';
    msgEl.textContent='Please fill in all required fields.';
    return false;
    }
    msgEl.style.display='block';
    msgEl.textContent='Thank you! Your message has been sent (simulation).';
    document.getElementById('contactForm').reset();
    setTimeout(()=>{msgEl.style.display='none'},4000);
    return false;
}

function scrollLeftBtn() {
    const main = document.querySelector('main');
    const width = getSectionWidth();
    if(main.scrollLeft <= 0) return;
    main.scrollBy({ left: -width, behavior: 'smooth' });
}
function scrollRightBtn() {
    const main = document.querySelector('main');
    const width = getSectionWidth();
    main.scrollBy({ left: width, behavior: 'smooth' });
}

function getSectionWidth() {
    const section = document.querySelector('section');
    if(section) return section.getBoundingClientRect().width;
    return window.innerWidth;
}
