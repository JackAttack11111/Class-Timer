$(document).ready(() => {
    const class1 = "Spanish";
    const class2 = "Gym";
    const class3 = "Web Design";
    const class4 = "Financial Lit.";
    const class5 = "English";
    const class6 = "Pre-Calc";
    const class7 = "Band";
    const block1 = $('#block1')
    const block2 = $('#block2')
    const block3 = $('#block3')
    const block4 = $('#block4')
    const block5 = $('#block5')
    const teacher1 = $('#teacher1')
    const teacher2 = $('#teacher2')
    const teacher3 = $('#teacher3')
    const teacher4 = $('#teacher4')
    const teacher5 = $('#teacher5')
    const period1 = $('#class1')
    const period2 = $('#class2')
    const period3 = $('#class3')
    const period4 = $('#class4')
    const period5 = $('#class5')
    const room1 = $('#place1')
    const room2 = $('#place2')
    const room3 = $('#place3')
    const room4 = $('#place4')
    const room5 = $('#place5')

    function currentPeriod() {
        var date = new Date();

        var hours = date.getHours();
        var min = date.getMinutes();

        if(hours == 8 && min == 21) {
            $('#per1').addClass('per-active')
            $('#per1').siblings().removeClass('per-active')
        } else if(hours == 9 && min == 21) {
            $('#per2').addClass('per-active')
            $('#per2').siblings().removeClass('per-active')
        }
    }


    $('.btn').on('mouseenter', event => {
        $(event.currentTarget).addClass('btn-hover');
        $(event.currentTarget).siblings().removeClass('btn-hover');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('btn-hover');
    })

    $('.btn').on('click', event => {
        $(event.currentTarget).addClass('btn-active');
        $(event.currentTarget).siblings().removeClass('btn-active');
        $(event.currentTarget).removeClass('btn-hover');
    })

    $('#ADay').on('click', () => {
        block1.html('1');
        period1.html(class1)
        teacher1.html('Profe');
        room1.html('E215');
        //
        block2.html('2');
        period2.html(class2);
        teacher2.html('Hastings');
        room2.html('Gym');
        //
        block3.html('3');
        period3.html(class3);
        teacher3.html('Herbert');
        room3.html('B114');
        //
        block4.html('5');
        period4.html(class5);
        teacher4.html('Danza');
        room4.html('E101');
        //
        block5.html('6');
        period5.html(class6);
        teacher5.html('Thwaits');
        room5.html('D205');
    })

    $('#BDay').on('click', () => {
        block1.html('4');
        period1.html(class4);
        teacher1.html('Smith');
        room1.html('D107');
        //
        block2.html('1');
        period2.html(class1);
        teacher2.html('Profe');
        room2.html('E215');
        //
        block3.html('2');
        period3.html(class2);
        teacher3.html('Hastings');
        room3.html('Gym');
        //
        block4.html('7');
        period4.html(class7);
        teacher4.html('Gattsek');
        room4.html('A105');
        //
        block5.html('5');
        period5.html(class5);
        teacher5.html('Danza');
        room5.html('E101');
    })

    $('#CDay').on('click', () => {
        block1.html('3');
        period1.html(class3);
        teacher1.html('Herbert');
        room1.html('B114');
        //
        block2.html('4');
        period2.html(class4);
        teacher2.html('Smith');
        room2.html('D107');
        //
        block3.html('1');
        period3.html(class1);
        teacher3.html('Profe');
        room3.html('E215');
        //
        block4.html('6');
        period4.html(class6);
        teacher4.html('Thwaits');
        room4.html('D205');
        //
        block5.html('7');
        period5.html(class7);
        teacher5.html('Gattsek');
        room5.html('A105');
    })

    $('#DDay').on('click', () => {
        block1.html('2');
        period1.html(class2);
        teacher1.html('Hastings');
        room1.html('Gym');
        //
        block2.html('3');
        period2.html(class3);
        teacher2.html('Herbert');
        room2.html('B114');
        //
        block3.html('4');
        period3.html(class4);
        teacher3.html('Smith');
        room3.html('D107');
        //
        block4.html('5');
        period4.html(class5);
        teacher4.html('Danza');
        room4.html('E101');
        //
        block5.html('6');
        period5.html(class6);
        teacher5.html('Thwaits');
        room5.html('D205');
    })

    $('#EDay').on('click', () => {
        block1.html('1');
        period1.html(class1);
        teacher1.html('Profe');
        room1.html('E215');
        //
        block2.html('2');
        period2.html(class2);
        teacher2.html('Hastings');
        room2.html('Gym');
        //
        block3.html('3');
        period3.html(class3);
        teacher3.html('Herbert');
        room3.html('B114');
        //
        block4.html('7');
        period4.html(class7);
        teacher4.html('Gattsek');
        room4.html('A105');
        //
        block5.html('5');
        period5.html(class5);
        teacher5.html('Danza');
        room5.html('E101');
    })

    $('#FDay').on('click', () => {
        block1.html('4');
        period1.html(class4);
        teacher1.html('Smith');
        room1.html('D107');
        //
        block2.html('1');
        period2.html(class1);
        teacher2.html('Profe');
        room2.html('E215');
        //
        block3.html('2');
        period3.html(class2);
        teacher3.html('Hastings');
        room3.html('Gym');
        //
        block4.html('6');
        period4.html(class6);
        teacher4.html('Thwaits');
        room4.html('D205');
        //
        block5.html('7');
        period5.html(class7);
        teacher5.html('Gattsek');
        room5.html('A105');
    })

    $('#GDay').on('click', () => {
        block1.html('3');
        period1.html(class3);
        teacher1.html('Herbert');
        room1.html('B114');
        //
        block2.html('4');
        period2.html(class4);
        teacher2.html('Smith');
        room2.html('D107');
        //
        block3.html('7');
        period3.html(class7);
        teacher3.html('Gattsek');
        room3.html('A105');
        //
        block4.html('5');
        period4.html(class5);
        teacher4.html('Danza');
        room4.html('E101');
        //
        block5.html('6');
        period5.html(class6);
        teacher5.html('Thwaits');
        room5.html('D205');
    })

    currentPeriod()
});

