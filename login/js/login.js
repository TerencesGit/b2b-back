$(function() {
        var supportPlaceholder = 'placeholder' in document.createElement('input'),
            placeholder = function(input) {
                var text = input.attr('placeholder'),
                    defaultValue = input.defaultValue;
                if (!defaultValue) {
                    input.val(text).addClass("phcolor");
                }
                input.focus(function() {
                    if (input.val() == text) {
                        $(this).val("");
                    }
                });
                input.blur(function() {
                    if (input.val() == "") {
                        $(this).val(text).addClass("phcolor");
                    }
                });
                input.keydown(function() {
                    $(this).removeClass("phcolor");
                });
            };
        if (!supportPlaceholder) {
            $('input').each(function() {
                text = $(this).attr("placeholder");
                if ($(this).attr("type") == "text") {
                    placeholder($(this));
                }
            });
        }
        $('#submit').click(function() {
            var tip = $('.error-tip').find('span');
            if (!(/^1[3|4|5|7|8]\d{9}/.test($('.username').val()))) {
                tip.text("请输入正确手机号码");
                $('.error-tip').show();
                $('.username').parent().addClass('border-error').siblings().removeClass('border-error');
                return false;
            } else if ($.trim($('.passwd').val()) == '' || $('.passwd').val() == '请输入密码') {
                tip.text("请输入密码");
                $('.error-tip').show();
                $('.passwd').parent().addClass('border-error').siblings().removeClass('border-error');
                return false;
            } else if ($.trim($('.vercode').val()) == '' || $('.vercode').val() == '请输入验证码') {
                tip.text("请填写图片中的验证码");
                $('.error-tip').show();
                $('.vercode').parent().siblings().removeClass('border-error');
                return false;
            } else {
                $('.error-tip').hide();
                $(".login-form").attr('onsubmit', 'ture')
            }
        })

        $('.form-item input[type=text]').focus(function() {
            $(this).parent().addClass('border-hover');
        }).blur(function() {
            $(this).parent().removeClass('border-hover');
        })
         $('#captcha').click(function () {  
            $(this).attr('src', 'http://passport.opcta.com/auth/recode' + '?' + Math.random());      
        });
        $(".login-banner").slide({
            mainCell: ".login-banner-list",
            autoPlay: true
        });
        $(".online-news-scroll").slide({
            mainCell: ".online-news-list",
            autoPlay: true
        });
        $(".report-content").slide({
            mainCell: ".picwrap ul",
            autoPage: true,
            effect: "left",
            autoPlay: true,
            vis: 5
        })
        $('.switch a').click(function() {
            if ($(this).hasClass('on')) {
                $('.footer').animate({
                    'bottom': -400
                }, 200);
                $(this).removeClass('on');
            } else {
                $(this).addClass('on');
                $('.footer').animate({
                    'bottom': 0
                }, 200);
            }
        });
    })
    // (function() {
    //     var _kxs = document.createElement('script');
    //     _kxs.id = 'kx_script';
    //     _kxs.async = true;
    //     _kxs.setAttribute('cid', 'kx_verify');
    //     _kxs.src = ('https:' == document.location.protocol ? 'https://ss.knet.cn' : 'http://rr.knet.cn') + '/static/js/icon3.js?sn=e15020611010557644yqeu000000&tp=icon3';
    //     _kxs.setAttribute('size', 0);
    //     var _kx = document.getElementById('kx_verify');
    //     _kx.parentNode.insertBefore(_kxs, _kx);
    // })();
// (function() {
//     document.getElementById('___szfw_logo___').oncontextmenu = function() {
//         return false;
//     }
// })();
