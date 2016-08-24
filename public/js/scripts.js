$(function() {

    var LandingPage = {};

    LandingPage.App = function () {

      this.mainMenu = $('.navbar-default');
      this.scrollToTopBtn = $('.up');

      this.init = function() {

      };

      this.setMenuTheme = function() {
        var topOffset = $(window).scrollTop();
        var alternativeTheme = 'navbar-scrolled';

        if($(window).width() > 769) {
            if(topOffset > 0) {
                this.mainMenu.addClass(alternativeTheme, 1000);
            } else {
                this.mainMenu.removeClass(alternativeTheme, 1000);
            }
        } else {
            this.mainMenu.removeClass(alternativeTheme);
        }
      };

      this.scrollToTopBtn.on('click', function(e) {
          e.preventDefault();

          $('html, body').animate({scrollTop : 0}, 800);
      });

    }
        LandingPage = new LandingPage.App();
        LandingPage.init();

        $(window).scroll(function() {
          LandingPage.setMenuTheme();
        });

});
