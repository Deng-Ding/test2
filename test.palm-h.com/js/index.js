/**
 * Created by liuli-pc on 12/26/2018
 * Description:
 */
var musicAudio = document.getElementById('musicAudio'),
    clickAudio = document.getElementById('clickAudio'),
    tagAudio = document.getElementById('tagAudio'),
    bgAudio = document.getElementById('bgAudio');
function trigger(e) {
    $(document.body).trigger(e);
}
function anim(target, cls, e, infinite) {
    $(target).addClass(cls + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass(cls + ' animated');
        !!e && trigger(e);
      infinite && $(target).addClass('infinite-animation');
    });
}
function show(target) {
    $(target).removeClass('hidden');
}
function hide(target) {
    $(target).addClass('hidden');
}

window.onload = function () {
    this.count = 1;
    var timer = setInterval(function () {
        if(this.count >= 100) {
            clearInterval(timer);
            trigger('show:button:0')
        }
        (function (that) {
            $('.p0-text').text(count);
            that.count ++;
        })(this);
    }, 20);
    $(document).on('show:button:0', function () {
        show('.btn-img');
    });
    $('.btn-img').on('click', function () {
        bgAudio.play();
        hide('.p0');
        show('.page0');
        setTimeout(function () {
            show('.page0-img2')
            anim('.page0-img2', 'bounceInDown', 'show:page0:first2');
        }, 500);
    });
    $(document).on('show:page0:first2', function () {
        show('.page0-img3')
        anim('.page0-img3', 'bounceInDown', 'switch:page1');
    });
    $(document).on('switch:page1', function () {
        setTimeout(function () {
            hide('.page0')
            show('.page1')
            anim('.page1', 'fadeIn', 'page1:show');
        }, 2000)
    });
    $(document).on('page1:show', function () {
        show('.page1-img1')
        setTimeout(function () {
            show('.page1-img2')
            anim('.page1-img2', 'flash');
        }, 500);
    });
    $('.page1').on('click', function () {
      clickAudio.play();
      // if(bgAudio.paused) {
      //     bgAudio.play();
      // }
      setTimeout(function () {
          hide('.page1')
          show('.page2')
          anim('.page2', 'fadeIn', 'switch:page2');
      }, 500)
        setTimeout(function () {
            tagAudio.play();
        }, 1000);
    });
    $(document).on('switch:page2', function () {
        $('.page2-img2').addClass('page2-img2-animation');
        $('.page2-img3').removeClass('hidden').addClass('page2-img3-animation');
      setTimeout(function () {
          show('.page2-btn')
      }, 1000)
    });
    $('.page2-btn').on('click', function () {
        show('.third3-img');
        anim('.third3-img', 'wobble', 'switch:page3');
    });
    $(document).on('switch:page3', function () {
        hide('.page2');
        show('.page3')
        anim('.page3', 'fadeIn');
      setTimeout(function () {
          show('.page3-img');
        setTimeout(function () {
            show('.page3-img2');
          anim('.page3-img2', 'flash');
        }, 500);
      }, 500);
    });
    $('.page3').on('click', function () {
      clickAudio.play();
      setTimeout(function () {
          hide('.page3');
          show('.page4')
          anim('.page4', 'fadeIn', 'switch:page4');
      }, 500);
        setTimeout(function () {
            tagAudio.play();
        }, 1000);
    });
    $(document).on('switch:page4', function () {
        $('.page4').addClass('page4-animation');
      setTimeout(function () {
          show('.page4-btn')
      }, 1000);
    });
    $('.page4-btn').on('click', function () {
        show('.page4-img6');
        anim('.page4-img6', 'wobble', 'switch:page5');
    });
    $(document).on('switch:page5', function () {
        hide('.page4');
        show('.page5')
      anim('.page5', 'fadeIn');
      setTimeout(function () {
          show('.page5-img')
        setTimeout(function () {
            show('.page5-img2')
          anim('.page5-img2', 'flash');
        }, 500);
      }, 500);
    });
    $('.page5').on('click', function () {
      clickAudio.play();
      setTimeout(function () {
          hide('.page5')
          show('.page6')
          anim('.page6', 'fadeIn', 'switch:page6');
      }, 500)
        setTimeout(function () {
            tagAudio.play();
        }, 1000);
    });
    $(document).on('switch:page6', function () {
        $('.page6').addClass('page6-animation');
      setTimeout(function () {
          show('.page6-btn')
      }, 2000);
    });
    $('.page6-btn').on('click', function () {
        show('.page6-img6')
        anim('.page6-img6', 'wobble', 'switch:page7');
    });
    $(document).on('switch:page7', function () {
        hide('.page6')
        show('.page7')
        anim('.page7', 'fadeIn', 'page7:show:tag1');
    });
    $(document).on('page7:show:tag1', function () {
        show('.page7-img')
        anim('.page7-img', 'fadeIn', 'page7:show:tag2');
        setTimeout(function () {
            show('.page7-text1')
        }, 200)
    })
    $(document).on('page7:show:tag2', function () {
        show('.page7-img2')
        anim('.page7-img2', 'fadeIn', 'page7:show:tag3');
        setTimeout(function () {
            show('.page7-text2');
        }, 200)
    });
    $(document).on('page7:show:tag3', function () {
        show('.page7-img3')
        anim('.page7-img3', 'fadeIn', 'page7:show:btn');
        setTimeout(function () {
            show('.page7-text3')
        }, 200)
    });
    $(document).on('page7:show:btn', function () {
        show('.page7-btn')
        anim('.page7-btn', 'fadeIn');
    });
    $('.page7-btn').on('click', function () {
        hide('.page7')
        show('.page8')
        anim('.page8', 'fadeIn', 'switch:page8');
    });
    $(document).on('switch:page8', function () {
      show('.page8-img6')
      anim('.page8-img6', 'flipInY', 'page8:show:text');
    });
    $(document).on('page8:show:text', function () {
        show('.page8-img7')
        anim('.page8-img7', 'fadeIn', 'page8:show:btn');
    });
    $(document).on('page8:show:btn', function () {
        show('.page8-btn')
    });
    $('.page8-btn').on('click', function () {
        hide('.page8')
        show('.page9')
        anim('.page9', 'fadeIn', 'switch:page9');
    });
    $('.page9-btn1').on('click', function () {
        window.location.reload();
    });
    $('.page9-btn2').on('click', function () {
        show('.page9-share');
    });
    $('.page9-share').on('click', function () {
        hide('.page9-share')
    });
    $('.page9-img7').on('click', function () {
        if(musicAudio.paused) {
            musicAudio.play();
            bgAudio.pause();
        } else {
            musicAudio.pause();
            bgAudio.play();
        }
    });
    musicAudio.addEventListener('ended', function () {
        bgAudio.play();
    })
    bgAudio.addEventListener('ended', function () {
        bgAudio.play();
    })
};