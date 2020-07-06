var perf = 0;
var question = '';


var wordChange = function () {
    console.log('questino inside word change ' + question)
    var q = '#word' + question;
    console.log(q)
    if (perf <= 10) {
        $(q).text('hell')
        console.log('hell')
    } else if (10 < perf && perf <= 20) {
        $(q).text('the worst')
        console.log('worst')
    } else if (20 < perf && perf <= 30) {
        $(q).text('vile')
        console.log('vile')
    } else if (30 < perf && perf <= 40) {
        $(q).text('fine')
        console.log('fine')
    } else if (40 < perf && perf <= 50) {
        $(q).text('okay')
        console.log('okay')
    } else if (60 < perf && perf <= 70) {
        $(q).text('fun')
        console.log('fun')
    } else if (70 < perf && perf <= 80) {
        $(q).text('ideal')
        console.log('fun')
    } else if (80 < perf && perf <= 90) {
        $(q).text('awesome')
        console.log('awesome')
    } else {
        $(q).text('the best')
    }

};

$('.base').on('click', function () {
    $('this').attr('id');
    console.log('fuck yeah')
})

$('#submit').on('click', function () {
    console.log('submited')
    function validateForm() {
        var isValid = true;
        $('.userInput').each(function () {
            console.log($(this).val())
            if ($(this).val() === '') {
                isValid = false;
            }
        });
        return isValid
    };

    if (validateForm()) {
        console.log('validate form');
        console.log($('#q1').val());
        var userData = {
            name: $('#userPhoto').val(),
            photo: $('#userPhoto').val(),
            choice: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val()
            ]
        };



        $.post('/api/friends', userData, function (userData) {
            console.log(userData);
        })
    } else {
        console.log('not working')
    }
})

$('#q1').on('change', function () {
    console.log($(this).attr('id'))
    question = $(this).attr('id');
    perf = $(this).val();
    wordChange(perf)
});

$('#q2').on('change', function () {
    console.log($(this).attr('id'));
    question = $(this).attr('id');
    perf = $(this).val();
    wordChange(perf)
});