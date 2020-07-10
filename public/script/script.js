var perf = 0;
var question = '';


var wordChange = function () {
    var q = '#word' + question;
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
    } else if (50 < perf && perf <= 60) {
        $(q).text('pretty okay')
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

var wordChangeSet2 = function () {
    var q = '#word' + question;
    if (perf <= 10) {
        $(q).text('inarguably better than')
    } else if (10 < perf && perf <= 20) {
        $(q).text('1000x better than')
        console.log('')
    } else if (20 < perf && perf <= 30) {
        $(q).text('above and beyond')
        console.log('vile')
    } else if (30 < perf && perf <= 40) {
        $(q).text('way better than')
        console.log('fine')
    } else if (40 < perf && perf <= 60) {
        $(q).text('about the same as')
        console.log('okay')
    } else if (60 < perf && perf <= 70) {
        $(q).text('not as good as')
        console.log('fun')
    } else if (70 < perf && perf <= 80) {
        $(q).text('way worst')
        console.log("child's play compared to")
    } else if (80 < perf && perf <= 90) {
        $(q).text("child's play compared to")
        console.log('')
    } else {
        $(q).text('inarguably worse than')
    }

};

var jazzChange = function () {
    var q = '#word' + question;
    if (perf <= 10) {
        $(q).css({"color": "red",'font-family': 'Rambla, san-serif', 'font': '3rem bold italic', 'transition': 'width 2s',
        'transition-timing-function': 'linear'})
        console.log('hell')
    } else if (10 < perf && perf <= 20) {
        $(q).css({"color": "red",'font-family': 'Rambla, san-serif', 'font': '2rem bold italic', 'transition': 'width 2s',
        'transition-timing-function': 'linear'})
        console.log('worst')
    } else if (20 < perf && perf <= 30) {
        $(q).css({"color": "red",'font-family': "Rambla, san-serif", 'font': '1.5rem', 'transition': 'width 2s',
        'transition-timing-function': 'linear'})
        console.log('vile')
    } else if (30 < perf && perf <= 40) {
        $(q).css({"color": "red",'font-family': "Rambla, san-serif", 'font': '1.5rem, #C38D9E'})
        console.log('fine')
    } else if (40 < perf && perf <= 50) {
        $(q).css({"color": "#C38D9E",'font-family': "Rambla, san-serif", 'font': '1.5rem, #C38D9E'})
        console.log('okay')
    } else if (50 < perf && perf <= 60) {
        $(q).css({"color": "#C38D9E",'font-family': "Rambla, san-serif", 'font': '1.5rem, #C38D9E'})
        console.log('okay')
    } else if (60 < perf && perf <= 70) {
        $(q).css({"color": "#C38D9E",'font-family': "Rambla, san-serif", 'font': '1.5rem, #C38D9E'})
        console.log('fun')
    } else if (70 < perf && perf <= 80) {
        $(q).css({"color": "#C38D9E",'font-family': "Rambla, san-serif", 'font': '1.5rem, #C38D9E'})
        console.log('fun')
    } else if (80 < perf && perf <= 90) {
        $(q).css({"color": "#C38D9E",'font-family': "Rambla, san-serif", 'font': '1.5rem, #C38D9E'})
        console.log('awesome')
    } else {
        $(q).css({"color": "#C38D9E",'font-family': "Rambla, san-serif", 'font': '1.5rem, #C38D9E'})
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
    question = $(this).attr('id');
    perf = $(this).val();
    wordChange(perf)
});

$('#q2').on('change', function () {
    question = $(this).attr('id');
    perf = $(this).val();
    wordChange(perf)
});

$('#q3').on('change', function () {
    question = $(this).attr('id');
    perf = $(this).val();
    wordChangeSet2(perf)
});

$('#q4').on('change', function () {
    question = $(this).attr('id');
    perf = $(this).val();
    wordChangeSet2(perf)
});

$('#q5').on('change', function () {
    question = $(this).attr('id');
    perf = $(this).val();
    wordChange(perf)
});

$('#q6').on('change', function () {
    question = $(this).attr('id');
    perf = $(this).val();
    wordChange(perf)
});

$('#q7').on('change', function () {
    question = $(this).attr('id');
    perf = $(this).val();
    wordChange(perf)
});

$('#q8').on('change', function () {
    question = $(this).attr('id');
    perf = $(this).val();
    jazzChange(perf)
});