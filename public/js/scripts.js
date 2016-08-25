$(function() {

    var LandingPage = {};

    LandingPage.App = function () {

      this.mainMenu = $('.navbar-default');
      this.scrollToTopBtn = $('.up');
      this.homeBtn = $('.navbar-brand');
      this.omnichannelBtn = $('#btn-omnichannel');
      this.warrantyBtn = $('#btn-warranty');
      this.contactUsBtn = $('#btn-contact-us');
      this.contactBtn = $('.btn-contact');
      this.submitMessageBtn = $('.btn-send');

      this.init = function() {

      };

      this.setMenuTheme = function() {
        var topOffset = $(window).scrollTop();
        var alternativeTheme = 'navbar-scrolled';

        if($(window).width() > 992) {
            if(topOffset > 0) {
                this.mainMenu.addClass(alternativeTheme, 1000);
            } else {
                this.mainMenu.removeClass(alternativeTheme, 1000);
            }
        } else {
            this.mainMenu.removeClass(alternativeTheme);
        }
      };

      this.setActiveMenuItem = function(element) {
        $('.navbar-nav a').removeClass('active');
        element.addClass('active');
      };

      this.scrollToTopBtn.on('click', function(e) {
          e.preventDefault();

          $('html, body').animate({scrollTop : 0}, 800);
      });

      this.homeBtn.on('click', function(e) {
          e.preventDefault();

          $('.navbar-nav a').removeClass('active');
          $('html, body').animate({scrollTop : 0}, 800);
      });

      this.omnichannelBtn.on('click', function(e) {
          e.preventDefault();

          $('html, body').animate({scrollTop : $('.omnichannel').offset().top - 70}, 800);
          this.setActiveMenuItem(this.omnichannelBtn);
      });

      this.warrantyBtn.on('click', function(e) {
          e.preventDefault();

          $('html, body').animate({scrollTop : $('.warranty').offset().top - 70}, 800);
          this.setActiveMenuItem(this.warrantyBtn);
      });

      this.contactUsBtn.on('click', function(e) {
          e.preventDefault();

          $('html, body').animate({scrollTop : $('.contact-us').offset().top - 70}, 800);
          this.setActiveMenuItem(this.contactUsBtn);
      });

      this.contactBtn.on('click', function(e) {
          e.preventDefault();

          $('html, body').animate({scrollTop : $('.contact-us').offset().top - 70}, 800);
          this.setActiveMenuItem(this.contactUsBtn);
      });

      this.submitMessageBtn.on('click', function(e) {
          e.preventDefault();

          var company = $('#company').val();
          var email = $('#email').val();
          var phone = $('#phone').val();

          if(phone != '') {
            phone = ' (' + phone + ')';
          } else {
            phone = '';
          }

          if(company != '' && email != '') {
            window.location = 'mailto:' + email + '?subject=Wiadomość od: ' + company + phone + '&body=Twoje zapytanie.';
          }
      });

      if($(window).width() > 1024) {
        $('.circle .area').hover(
          function() {
            $('.circle img').attr('src', 'public/images/omnichannel/omnichannel-' + $(this).data('area') + '.png');
          }, function() {
            $('.circle img').attr('src', 'public/images/omnichannel/omnichannel-0.png');
          }
        );
      } else {
        $('.circle .area').on('click', function(e) {
          e.preventDefault();
        });
      }

    }

    LandingPage = new LandingPage.App();
    LandingPage.init();

    $(window).scroll(function() {
      LandingPage.setMenuTheme();
    });

    // APPEAR JS
    $('.animated').appear();

    $(document.body).on('appear', '.animated', function(e, $affected) {
        var element = $(this);
        var animation = element.data('animation');
        element.addClass( animation + " visible" );
        element.removeClass('hiding');
        if (element.hasClass('counter')) {
            element.children('.value').countTo();
        }
    });

});
