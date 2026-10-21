// HNST Interactive Script
function showToast(msg) {
  const toast = document.getElementById('hnstToast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

document.addEventListener('DOMContentLoaded', () => {
  let cart = 0;
  const cartBadge = document.getElementById('cartBadge');
  const fitBtns = document.querySelectorAll('.fit-btn');
  const fitTitle = document.getElementById('fitTitle');
  const fitDesc = document.getElementById('fitDesc');
  const fitPrice = document.getElementById('fitPrice');

  const fitsData = {
    'straight': {
      title: 'Klassik To\'g\'ri (Straight Leg)',
      desc: 'Vaqt sinovidan o\'tgan universal qolip. Har qanday poyabzal va uslub bilan mos tushadi. 13.5 oz zichlikdagi qayta ishlangan xom denim.',
      price: '$165.00'
    },
    'wide': {
      title: 'Erkin Keng (Wide Leg)',
      desc: 'Zamonaviy bo\'sh qolip, erkin harakatlanish uchun mukammal. 90-yillar ko\'cha modasi uslubida qayta yaratilgan.',
      price: '$175.00'
    },
    'slim': {
      title: 'Tana Bo\'ylab (Slim Fit)',
      desc: 'Ixcham, nozik siluet. 2% tabiiy elastan tolasi qulaylikni ta\'minlaydi, hech qanday poliestersiz.',
      price: '$160.00'
    },
    'flared': {
      title: 'Retro Klesh (Flared)',
      desc: 'Tizzadan pastga qarab kengayuvchi nafis 70-yillar silueti. Oyoqlarni vizual uzunroq ko\'rsatadi.',
      price: '$180.00'
    }
  };

  fitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fitBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const fit = btn.getAttribute('data-fit');
      if (fitsData[fit]) {
        fitTitle.textContent = fitsData[fit].title;
        fitDesc.textContent = fitsData[fit].desc;
        fitPrice.textContent = fitsData[fit].price;
      }
    });
  });

  const btnAdd = document.getElementById('btnAddFitToCart');
  if (btnAdd) {
    btnAdd.addEventListener('click', () => {
      cart++;
      cartBadge.textContent = cart;
      showToast(fitTitle.textContent + ' savatga qo\'shildi!');
    });
  }
});