$(document).ready(() => {
    $('#time').on('input change', function() {
       let param = ($(this).val() - 10)*2;
       $(this).prev('p').children('span').text($(this).val());
       bg(param, $(this));
    });
    $('#count').on('input change', function() {
        let param = $(this).val();
        $(this).prev('p').children('span').text($(this).val());
        bg(param, $(this));
    });

    $('input[type="checkbox"]').change(function(){
        $(this).parent('label').children('span').toggleClass('checked');
    })

    $('select[name="sex"] option').each(function () {
        $(this).text("Пол: " + $(this).text());
    });
    $('select[name="age"] option').each(function () {
        $(this).text("Возраст: " + $(this).text());
    });
    $('select[name="income"] option').each(function () {
        $(this).text("Доход: " + $(this).text());
    });

    $('.params__list-mobile a').click(function() {
        if($(this).parent().hasClass('open')){
            $(this).text("Выбрать станцию")
        }
        else {
            $(this).text("Выбрать параметры")
        }
        $(this).parent().toggleClass('open');
        $('.stations').toggleClass('open');
    });
    function bg(n, elem) {
        elem.css({
            background: '-webkit-linear-gradient(left ,#9d9d9d 0%,#9d9d9d ' + n + '%,#fff ' + n + '%, #fff 100%)'
        }).css({
            background: '-moz-linear-gradient(left ,#9d9d9d 0%,#9d9d9d ' + n + '%,#fff ' + n + '%, #fff 100%)'
        });
    }
});