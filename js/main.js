// HEADER SCROLL
document.addEventListener("scroll", () => {
    if (scrollY > 80) {
      document.querySelector("header").classList.add("header_shadow");

    }
    else {
      document.querySelector("header").classList.remove("header_shadow");
    }
  });

// CONVENIENT COLLAPSE
const convenientCollapseTrigger = document.querySelectorAll('.convenient_collapse_list_item_plus_trigger');
convenientCollapseTrigger.forEach(itm => {
  itm.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.toggle('active');
    if (e.target.parentElement.parentElement.classList.contains('active')) {
      e.target.parentElement.nextElementSibling.style.maxHeight = e.target.parentElement.nextElementSibling.scrollHeight + 35 + 'px';
    }
    else {
      e.target.parentElement.nextElementSibling.style.maxHeight = 0;
    }
  });
});