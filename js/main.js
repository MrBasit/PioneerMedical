// --- GLOBAL
// HEADER SCROLL
document.addEventListener("scroll", () => {
  if (scrollY > 80) {
    document.querySelector("header").classList.add("header_shadow");

  }
  else {
    document.querySelector("header").classList.remove("header_shadow");
  }
});

try {
  // --- HOME PAGE 
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


  // PAGINATION
  let allTiles = true;
  let cur = 0;
  const numOfItemsPerPage = 12;
  let allTilesOnDom;
  // ALL TILES
  const tiles = [
    {
      "link": "Erectile Dysfunction",
      "num": 01
    },
    {
      "link": "Birth Control",
      "num": 02
    },
    {
      "link": "Cold Sore",
      "num": 03
    },
    {
      "link": "Muscle Pain Relief",
      "num": 04
    },
    {
      "link": "Flu",
      "num": 05
    },
    {
      "link": "Acne",
      "num": 06
    },
    {
      "link": "Testosterone Therapy",
      "num": 07
    },
    {
      "link": "Hair Loss",
      "num": 08
    },
    {
      "link": "Stop Smoking",
      "num": 09
    },
    {
      "link": "Primary Care Video Visit",
      "num": 10
    },
    {
      "link": "Irritable Bowel Syndrome",
      "num": 11
    },
    {
      "link": "Hyperhidrosis",
      "num": 12
    },
    {
      "link": "Stop Smoking",
      "num": 13
    },
    {
      "link": "Acne",
      "num": 14
    },
    {
      "link": "Hair Loss",
      "num": 15
    },
    {
      "link": "Hyperhidrosis",
      "num": 16
    },
    {
      "link": "Primary Care Video Visit",
      "num": 17
    },
    {
      "link": "Erectile Dysfunction",
      "num": 18
    },
    {
      "link": "Irritable Bowel Syndrome",
      "num": 19
    },
    {
      "link": "Acne",
      "num": 20
    },
    {
      "link": "Acne",
      "num": 21
    },
    {
      "link": "Hair Loss",
      "num": 22
    },
    {
      "link": "Birth Control",
      "num": 23
    },
    {
      "link": "Cold Sore",
      "num": 24
    },
    {
      "link": "Primary Care Video Visit",
      "num": 25
    },
    {
      "link": "Erectile Dysfunction",
      "num": 26
    },
    {
      "link": "Irritable Bowel Syndrome",
      "num": 27
    },
    {
      "link": "Stop Smoking",
      "num": 28
    },
    {
      "link": "Acne",
      "num": 29
    },
    {
      "link": "Hair Loss",
      "num": 30
    },
    {
      "link": "Hyperhidrosis",
      "num": 31
    },
    {
      "link": "Stop Smoking",
      "num": 32
    },
    {
      "link": "Acne",
      "num": 34
    },
    {
      "link": "Hair Loss",
      "num": 35
    },
    {
      "link": "Hyperhidrosis",
      "num": 36
    },
    {
      "link": "Primary Care Video Visit",
      "num": 37
    },
    {
      "link": "Erectile Dysfunction",
      "num": 38
    }
  ];
  // MOST COMMON TILES
  const mostCommonTiles = [
    {
      "link": "Hyperhidrosis",
      "num": 1
    },
    {
      "link": "Stop Smoking",
      "num": 2
    },
    {
      "link": "Acne",
      "num": 4
    },
    {
      "link": "Hair Loss",
      "num": 5
    },
    {
      "link": "Hyperhidrosis",
      "num": 6
    },
    {
      "link": "Primary Care Video Visit",
      "num": 7
    },
    {
      "link": "Erectile Dysfunction",
      "num": 8
    }
  ]
  // PAGINATION EVENTS
  let showMoreBtn = document.querySelector('.show_tiles_btn');
  showMoreBtn.addEventListener('click', showTilesEvent);
  function showTilesEvent(e) {
    if (e.target.classList.contains('show_less')) {
      goLess();
    } else {
      goNext();
    }
  }
  // TTILES CATOGORIES
  let mstCmnTilesBtn = document.querySelector('.most_common_btn');
  mstCmnTilesBtn.addEventListener('click', showMostCommonTiles);
  let allTilesBTn = document.querySelector('.show_all_btn');
  allTilesBTn.addEventListener('click', showAllTilesEvent);
  let showingTilesHeading = document.querySelector('.trmentsTilesShowing');
 

  function showMostCommonTiles(e){
    showMoreBtn.classList.add('active');
    mstCmnTilesBtn.classList.add('active');
    allTilesBTn.classList.remove('active');
    showingTilesHeading.innerHTML = `${e.target.innerHTML}`;
    allTiles = false;
    renderTilse();
  }
  function showAllTilesEvent(e){
    showMoreBtn.classList.remove('active');
    mstCmnTilesBtn.classList.remove('active');
    allTilesBTn.classList.add('active');
    showingTilesHeading.innerHTML = `${e.target.innerHTML}`;
    allTiles = true;
    renderTilse();
  }
  // RENDER TILES
  document.addEventListener("DOMContentLoaded", renderTilse);
  function renderTilse() {
    if(!allTiles){
      // SHOW TILES
      showTiles(mostCommonTiles);
      cur = 0;
    }else{  
      // SHOW TILES
      showTiles(tiles);
      // HIDE ALL TILES
      hideAllTilse();

      goToPage(cur);
    }
 

   
  }
  // Show all tiles
  function showTiles(alltiles) {

    let output = '';
    allTilesOnDom = alltiles;

    alltiles.forEach((tiles) => {
      output += `
        <div class="treatment_offers_cards">
          <a href="#">${tiles.link}</a>
          <p>${tiles.num}</p>
        </div>
        `;
    });

    document.querySelector('.treatment_offers_main').innerHTML = output;

  }
  // Rest curPage to zero 
  this.cur = 0;



  //#region Pagination 
  function getNumberOfAllPages(n, m) {
    return Math.ceil(n / m);
  }
  function hideAllTilse() {
    const container = document.querySelector('.treatment_offers_main');

    for (let i of container.children) {
      i.style.display = 'none';
    }
  }
  function hideCur(n) {
    // Getting Contaienr 
    const container = document.querySelector('.treatment_offers_main');

    const N = Math.min(this.numOfItemsPerPage + n * this.numOfItemsPerPage, container.children.length);


    for (let i = n * this.numOfItemsPerPage; i < N; i++) {
      // normal element hiding
      container.children[i].style.display = 'none';
    }
  }
  function goToPage(n) {
    // delete old tiles
    hideCur(cur);
    const container = document.querySelector('.treatment_offers_main');


    // Settings cur to new page Number
    cur = n;

    const N = Math.min(numOfItemsPerPage + n * numOfItemsPerPage, container.children.length);
    for (let i = n * numOfItemsPerPage; i < N; i++) {
      container.children[i].style.display = 'flex';
    }
    if (cur === getNumberOfAllPages(allTilesOnDom.length, numOfItemsPerPage) - 1) {
      document.querySelector('.show_tiles_btn').classList.add('show_less');
      document.querySelector('.show_tiles_btn').innerHTML = 'show less';
    };

  }
  function goNext() {
    // Last page ? don't fucking go anyware
    if (cur === getNumberOfAllPages(allTilesOnDom.length, numOfItemsPerPage) - 1) return;
    if (allTilesOnDom.length != 0) {
      goToPage(cur + 1);
    }
  }
  function goLess() {
    cur = 0;
    document.querySelector('.show_tiles_btn').classList.remove('show_less');
    document.querySelector('.show_tiles_btn').innerHTML = 'show more';
    renderTilse();

  }

  // --- HOME PAGE END
} catch (err) {
  console.log('Home Page Not Found');
}


try {
  // FAQ PAGE

  // FAQ Q/A TABS
  var listItem = document.querySelectorAll('.faq_body_content aside .ques_catogoris_tabs');
  var contentList = document.querySelectorAll('.faq_body_content .con');
  var activefaqTabContent;

  document.querySelector('#tab-1-content').classList.add('active-content');
  activefaqTabContent = document.querySelector('.active-menu').textContent;
  document.querySelector('.ques_catogoris_tabs_text').innerText = activefaqTabContent;


  listItem.forEach(item => { item.addEventListener('click', changeMenu) });

  var FaqMenuShowBtn = document.querySelector('.faq_menu_btn');
  FaqMenuShowBtn.addEventListener('click', faqMenuShow);
  var closeFaqMenuBtn = document.querySelector('.ques_catogoris_title_btn button');
  closeFaqMenuBtn.addEventListener('click', hideFaqMenu);
  listItem.forEach(item => { item.addEventListener('click', hideFaqMenu) });

  function faqMenuShow() {
    document.querySelector('.ques_catogoris').classList.add('active');
  }
  function hideFaqMenu() {
    document.querySelector('.ques_catogoris').classList.remove('active');
  }

  function deacContent() {
    contentList.forEach(item => { item.classList.remove('active-content') })
  }

  function deacMenu() {
    listItem.forEach(item => { item.classList.remove('active-menu') })
  }

  function changeMenu(e) {
    deacMenu()
    this.classList.add('active-menu');
    activefaqTabContent = document.querySelector('.active-menu').textContent;
    document.querySelector('.ques_catogoris_tabs_text').innerText = activefaqTabContent;
    var activeContent = document.querySelector(`#${this.id}-content`);
    deacContent()
    activeContent.classList.add('active-content');
  }
  // FAQ Q/A COLLAPSE
  const faqQuesToggler = document.querySelectorAll('.faq_qu');
  faqQuesToggler.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.target.parentElement.classList.toggle('active');
      if (e.target.parentElement.classList.contains('active')) {
        e.target.parentElement.children[1].style.maxHeight = e.target.parentElement.children[1].scrollHeight + 'px';
      }
      else {
        e.target.parentElement.children[1].style.maxHeight = 0;
      }
    });
  });
  // FAQ PAGE END
} catch (err) {
  console.log('Faq Page Not Found');

}



// animated counter calculatio table
const counters = document.querySelectorAll('.count');
// // Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 1000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 10);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}



// side bar open and close
function openNav() {
  document.getElementById("s2").style.left= "0";
  document.getElementById("s2").style.position= "fixed";
  document.getElementById("s2").style.transition= "all .5s ease";
}

function closeNav() {
  document.getElementById("s2").style.left = "-100%";
  document.getElementById("s1").style.display= "block";
  document.getElementById("s2").style.transition= "left 1s ease-in-out";
}



