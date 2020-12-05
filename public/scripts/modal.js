$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'Identity Ownership Management',
      tag: 'Blockchain Smart contract Javascript',
      detail:
        'Blockchain driven application that prevents data leaks from companies and performs validation and verification of individuals(KYC process) by keeping the record of accessing the data of the customer in the form of transactions in a block of the blockchain' ,
      link: 'https://github.com/jatinbharadwaj/IOM'
    },
    ordering: {
      title: 'Babble -A social media app',
      tag: 'Django ReactJS Python JavaScript Bootstrap MySQl',
      detail:
      'A twitter like web application with basic functionalities like tweets, comments, likes, follow and followers, It is a microblogging social media app similar to twitter. Backend is developed using Django and REST Framework and frontend is developed using ReactJS and BootStrap having all the basic features of microblogging social media app ',
      link: 'https://babble-social-media.herokuapp.com/'
    },
    newrelic: {
      title: 'Breathe',
      tag: 'IOT Android',
      detail:
      'Growing up in delhi which is also entitled as the most polluted capital in the world, we have a firsthand experience of living essentially in a gas chamber. Hence we are targeting air pollution as ',
      link: 'https://github.com/jatinbharadwaj/Breathe'
    },
    roambi: {
      title: 'Dr.Spoof',
      tag: 'Cybersecurity Shell ',
      detail:
       ' A complete tool that checks and prevents DNS as well as ARP spoofing in home routers. We plan to deliver a tool that automizes the process of detecting DNS and ARP SPOOFING in home rout',
      link: 'https://github.com/jatinbharadwaj'
    },
    walker: {
      title: 'Tic Tac Toe',
      tag: 'ReactJS Javascript',
      detail: 'Square.js- Smallest component of React Board.js- Board consist 9 small Squares Game.Js- Game consist logic of the game App.Js- Render Game.js',
      link: 'https://github.com/jatinbharadwaj/tictactoe-reactJS'

    },
    powur: {
      title: 'Asteroid Game',
      tag: 'C++ SFML',
      detail: 'SFML library for graphics and collision detection of asteroid & space ship, bullets & Asteroid is used with c++',
      link: 'https://github.com/jatinbharadwaj/GAME'
    },
    mystand: {
      title: 'Pokedex',
      tag: 'Javascript transitions',
      detail:'A pokemon data and quirk guide that contains all the information regarding pokemon',
      link:'https://github.com/jatinbharadwaj/pokedex'
    },
    never: {
      title: 'ChatApp',
      tag: 'WebSocket ExpressJs Sessions',
      detail:'A chatApp using Socket.io and expressJS, User Authentication with password and username, Broadcasting to all the users and Private Chat to a username',
      link:'https://github.com/jatinbharadwaj/ChatApp'
    },
    themall: {
      title: 'Snake Game',
      tag: 'NodeJS Canvas',
      detail:'A simple 90\'s game build using NodeJs and Canvas',
      link:'https://github.com/jatinbharadwaj/SnakeGame'

      
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
