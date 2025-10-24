// Minimal JS: filters and random suggestion
document.addEventListener('DOMContentLoaded', function(){
  const filters = Array.from(document.querySelectorAll('.filter'));
  const items = Array.from(document.querySelectorAll('.menu-item'));
  const randomBtn = document.getElementById('randomBtn');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  function setFilter(category){
    filters.forEach(f=>f.classList.toggle('active', f.dataset.filter===category));
    items.forEach(it=>{
      if(category==='all' || it.dataset.category===category){
        it.style.display = '';
      } else {
        it.style.display = 'none';
      }
    });
  }

  filters.forEach(f=>{
    f.addEventListener('click', ()=> setFilter(f.dataset.filter));
  });

  randomBtn.addEventListener('click', ()=>{
    const visible = items.filter(it => it.style.display !== 'none');
    const pool = visible.length ? visible : items;
    const pick = pool[Math.floor(Math.random()*pool.length)];
    if(pick){
      // simple visual highlight
      items.forEach(i=>i.style.boxShadow='none');
      pick.style.boxShadow = '0 6px 18px rgba(0,0,0,.12)';
      pick.scrollIntoView({behavior:'smooth',block:'center'});
    }
  });

  navToggle.addEventListener('click', ()=>{
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });

});
