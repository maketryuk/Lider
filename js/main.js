let front = {
  init: function () {
      this.events();      
  },
  events: function () {
    let body = $('body');
    let overlay = $('.overlay');
    let searchOverlay = $('.search-overlay');
    let burger = $('.burger');
  
    let searchTrigger = $('.search__trigger');
    let categoriesTrigger = $('.categories__trigger');
    let filterTrigger = $('.filter__trigger');
    let dropdownTrigger = $('.dropdown__trigger');
    let slideTrigger = $('.slide__trigger');
    let cartTrigger = $('.cart__trigger');
  
    let cartClose = $('.cart-close');
  
    let header = $('.header')
    let nav = $('.nav');
    let cart = $('.cart-empty-wrapper')
  
    let categoriesList = $('.categories-list')
    let mobileSearch = $('.search-wrapper');
    let productFilter = $('.product-filter');
  
    let dropdownList = $('.dropdown-list');
    let slideList = $('.slide-list');
    
  
    $(".additional-text-toggler").on("click", function(e) {
      let content = $(this).parent().find('.additional-text');
      content.toggleClass('active');
      if (content.hasClass('active')) {
        $(this).prev('.additional-text').show();
        $(this).text('Ver Menos').toggleClass('active');
      } else {
        $(this).prev('.additional-text').hide();
        $(this).text('Ver Mas').toggleClass('active');
      }
    });
    // Remove class Active of all elements
    $(overlay).click(function () {
      $(this).removeClass('active');
      $(body).removeClass('lock categoriesOpen filterOpen searchOpen sortOpen searchVisible');
      $(burger).removeClass('active');
      $(mobileSearch).removeClass('active');
      $(productFilter).removeClass('active');
      $(dropdownList).removeClass('active');
      $(slideList).removeClass('active');
      $(categoriesList).removeClass('active');
      $(cart).removeClass('active');
    });

    $(searchOverlay).click(function () {
      $(searchOverlay).removeClass('active');
    });
  
    // Open Categories list
    $(categoriesTrigger).click(function () {
      $(burger).toggleClass('active');
      $(body).toggleClass('categoriesOpen')
      $(overlay).toggleClass('active');
      $(searchOverlay).removeClass('active');
      $(categoriesList).toggleClass('active');
  
      $(mobileSearch).removeClass('active');
      $(productFilter).removeClass('active');
      $(dropdownList).removeClass('active');
      $(slideList).removeClass('active');
      $(filterTrigger).removeClass('fixed');
      $(cart).removeClass('active');
    });
  
    // Open Mobile search
    $(searchTrigger).click(function () {
      $(body).toggleClass('lock searchOpen')
      $(overlay).toggleClass('active');
      $(mobileSearch).toggleClass('active');
  
      $(productFilter).removeClass('active');
      $(dropdownList).removeClass('active');
      $(slideList).removeClass('active');
      $(categoriesList).removeClass('active');
      $(filterTrigger).removeClass('fixed');
      $(cart).removeClass('active');
    });
  
    // Open Cart
    $(cartTrigger).click(function () {
      $(cart).toggleClass('active');
  
      $(mobileSearch).removeClass('active');
      $(productFilter).removeClass('active');
      $(dropdownList).removeClass('active');
      $(slideList).removeClass('active');
      $(categoriesList).removeClass('active');
      $(filterTrigger).removeClass('fixed');
    });
  
    // Close Cart
    $(cartClose).click(function () {
      $(cart).removeClass('active');
    });
  
    // Open Filters
    $(filterTrigger).click(function () {
      $(this).removeClass('fixed');
      $(body).addClass('lock filterOpen');
      $(productFilter).addClass('active');
      $(nav).addClass('disabled');
  
      $(overlay).removeClass('active');
      $(dropdownList).removeClass('active');
      $(slideList).removeClass('active');
      $(categoriesList).removeClass('active');
      $(mobileSearch).removeClass('active');
      $(cart).removeClass('active');
    })
    // Close Filters
    $('.close-filter').click(function () {
      $(body).removeClass('lock filterOpen');
      $(productFilter).removeClass('active');
      $(nav).removeClass('disabled');
    })
  
    // Dropdowns 
    $(dropdownTrigger).click(function () {
      $(this).toggleClass('active')
      $(this).next(dropdownList).toggleClass('active');
    });
    $(slideTrigger).click(function () {
      $(this).toggleClass('active')
      $(this).next(slideList).slideToggle(200);
    })
  
    // Change Text of Legal
    $(".legal__btn").on("click", function(e) {
      e.preventDefault();
      let content = $('.legal__btn');
      if (content.hasClass('active')) {
        $(this).text('Ocultar Información Legal');
      } else {
        $(this).text('Ver Información Legal');
      }
    });
  
    // Show/Hide filter trigger on scroll
    $(window).scroll(function () {
      let offsetItem1 = $('.product-table__header').height()
      let offsetItem2 = $('.breadcrumbs-wrapper').height()
      let offsetItem3 = $('.intro-text').height()
  
      if ($(this).scrollTop() > offsetItem1 + offsetItem2 + offsetItem3 + 88 ) {
        $('.filter__trigger').addClass('fixed');
      } else {
        $('.filter__trigger').removeClass('fixed');
      }
    });
  
    // Media 768px //
    if(window.matchMedia('(max-width: 768px)').matches){
      $('.filter-card__title').removeClass('active');
      $(categoriesTrigger).click(function() {
        $(body).toggleClass('lock');
      });
      // Add Overlay at open
      $(dropdownTrigger).click(function () {
        $(overlay).toggleClass('active');
        $(body).toggleClass('sortOpen');
      });
    } else {
      // Close Dropdowns on click outside
      $(document).click(function (e){ 
        var div = $(".dropdown__trigger"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
          $('.dropdown-list').removeClass('active');
          $('.dropdown__trigger').removeClass('active');
        }
      });
      $('.header__search').click(function () {
        $(burger).removeClass('active');
        $(categoriesList).removeClass('active');
        $(body).toggleClass('categoriesOpen')
        $(overlay).removeClass('active');
        $(searchOverlay).addClass('active');
        $(body).addClass('searchVisible');
      });
    };
  }
};

jQuery(function () {
  front.init();
});

