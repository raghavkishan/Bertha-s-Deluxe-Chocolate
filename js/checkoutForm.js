/*
    Sunku Ravindranath, Raghav Kishan
    Project #4
    Fall 2017
    820174908
    jadrn063

*/
function isEmpty(fieldValue) {
    return $.trim(fieldValue).length == 0;
}

function isValidState(enteredState) {
    var stateArray = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
    for(var i=0; i < stateArray.length; i++)
        if(stateArray[i] == $.trim(enteredState))
            return true;
    return false;
}


$(document).ready(function () {

    var formValidFlag = true;
    var billingFormValidFlag = true;
    var formErrorStatus = $('.messageLine');
    var elementHandle = new Array(15);
    elementHandle[0] = $('[name="FirstName"]');
    elementHandle[1] = $('[name="LastName"]');
    elementHandle[2] = $('[name="AddressLine1"]');
    elementHandle[3] = $('[name="CityTown"]');
    elementHandle[4] = $('[name="State"]');
    elementHandle[5] = $('[name="ZipCode"]');
    elementHandle[6] = $('[name="PhoneAreaCode"]');
    elementHandle[7] = $('[name="PhonePrefixNumber"]');
    elementHandle[8] = $('[name="PhoneNumber"]');
    elementHandle[9] = $('[role="alert"]');
    elementHandle[9].hide();

    elementHandle[10] = $('[name="NameOnCard"]');
    elementHandle[11] = $('[name="CardNumber"]');
    elementHandle[12] = $('[name="ValidMonth"]');
    elementHandle[13] = $('[name="ValidYear"]');
    elementHandle[14] = $('[name="CardCVV"]');

    elementHandle[15] = $('[name="FirstNameBilling"]');
    elementHandle[16] = $('[name="LastNameBilling"]');
    elementHandle[17] = $('[name="AddressLine1Billing"]');
    elementHandle[18] = $('[name="CityTownBilling"]');
    elementHandle[19] = $('[name="StateBilling"]');
    elementHandle[20] = $('[name="ZipCodeBilling"]');
    elementHandle[21] = $('[name="PhoneAreaCodeBilling"]');
    elementHandle[22] = $('[name="PhonePrefixNumberBilling"]');
    elementHandle[23] = $('[name="PhoneNumberBilling"]');

    elementHandle[0].on('blur', function() {
        if(isEmpty(elementHandle[0].val())){
            elementHandle[0].addClass("is-invalid");
            $(".nameMessageLine").show();
            //elementHandle[0].focus();
            formValidFlag = false;
            return;
        }
        $(".nameMessageLine").hide();
        elementHandle[0].removeClass("is-invalid");
        formValidFlag = true;
    });

    elementHandle[1].on('blur', function() {
        if(isEmpty(elementHandle[1].val())){
            elementHandle[1].addClass("is-invalid");
            $(".lastNameMessageLine").show();
            //elementHandle[1].focus();
            formValidFlag = false;
            return;
        }
        $(".lastNameMessageLine").hide();
        elementHandle[1].removeClass("is-invalid");
        formValidFlag = true;
    });

    elementHandle[2].on('blur', function() {
        if(isEmpty(elementHandle[2].val())){
            elementHandle[2].addClass("is-invalid");
            $(".addressOneMessageLine").show();
            //elementHandle[2].focus();
            formValidFlag = false;
            return;
        }
        $(".addressOneMessageLine").hide();
        elementHandle[2].removeClass("is-invalid");
        formValidFlag = true;
    });

    elementHandle[3].on('blur', function() {
        if(isEmpty(elementHandle[3].val())){
            elementHandle[3].addClass("is-invalid");
            $(".cityTownMessageLine").show();
            //elementHandle[3].focus();
            formValidFlag = false;
            return;
        }
        $(".cityTownMessageLine").hide();
        elementHandle[3].removeClass("is-invalid");
        formValidFlag = true;
    });

    elementHandle[4].on('keyup', function() {
        elementHandle[4].val(elementHandle[4].val().toUpperCase());
    });

    elementHandle[4].on('blur', function() {
        if(isEmpty(elementHandle[4].val())){
            elementHandle[4].addClass("is-invalid");
            $(".stateMessageLineOne").show();
            $(".stateMessageLineTwo").hide();
            //elementHandle[4].focus();
            formValidFlag = false;
            return;
        }
        if(!isValidState(elementHandle[4].val())) {
            elementHandle[4].addClass("is-invalid");
            $(".stateMessageLineOne").hide();
            $(".stateMessageLineTwo").show();
            //elementHandle[4].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[4].removeClass("is-invalid");
        $(".stateMessageLineOne").hide();
        $(".stateMessageLineTwo").hide();
        formValidFlag = true;
    });

    elementHandle[5].on('blur', function() {
        if(isEmpty(elementHandle[5].val())){
            elementHandle[5].addClass("is-invalid");
            $(".zipCodeMessageLineOne").show();
            $(".zipCodeMessageLineTwo").hide();
            //elementHandle[5].focus();
            formValidFlag = false;
            return;
        }
        if(!$.isNumeric(elementHandle[5].val())) {
            elementHandle[5].addClass("is-invalid");
            $(".zipCodeMessageLineOne").hide();
            $(".zipCodeMessageLineTwo").show();
            //elementHandle[5].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[5].removeClass("is-invalid");
        $(".zipCodeMessageLineOne").hide();
        $(".zipCodeMessageLineTwo").hide();
        formValidFlag = true;
    });

    elementHandle[6].on('keyup', function() {
        if(elementHandle[6].val().length == 3)
            elementHandle[7].focus();
    });

    elementHandle[7].on('keyup', function() {
        if(elementHandle[7].val().length == 3)
            elementHandle[8].focus();
    });

    elementHandle[6].on('blur', function() {
        if(isEmpty(elementHandle[6].val())){
            elementHandle[6].addClass("is-invalid");
            $(".areaCodeMessageLineOne").show();
            $(".areaCodeMessageLineTwo").hide();
            //elementHandle[6].focus();
            formValidFlag = false;
            return;
        }
        if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("is-invalid");
            $(".areaCodeMessageLineOne").hide();
            $(".areaCodeMessageLineTwo").show();
            //elementHandle[6].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[6].removeClass("is-invalid");
        $(".areaCodeMessageLineOne").hide();
        $(".areaCodeMessageLineTwo").hide();
        formValidFlag = true;
    });

    elementHandle[7].on('blur', function() {
        if(isEmpty(elementHandle[7].val())){
            elementHandle[7].addClass("is-invalid");
            $(".phonePrefixMessageLineOne").show();
            $(".phonePrefixMessageLineTwo").hide();
            //elementHandle[7].focus();
            formValidFlag = false;
            return;
        }
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("is-invalid");
            $(".phonePrefixMessageLineOne").hide();
            $(".phonePrefixMessageLineTwo").show();
            //elementHandle[7].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[7].removeClass("is-invalid");
        $(".phonePrefixMessageLineOne").hide();
        $(".phonePrefixMessageLineTwo").hide();
        formValidFlag = true;
    });

    elementHandle[8].on('blur', function() {
        if(isEmpty(elementHandle[8].val())){
            elementHandle[8].addClass("is-invalid");
            $(".phoneMessageLineOne").show();
            $(".phoneMessageLineTwo").hide();
            //elementHandle[8].focus();
            formValidFlag = false;
            return;
        }
        if(!$.isNumeric(elementHandle[8].val())) {
            elementHandle[8].addClass("is-invalid");
            $(".phoneMessageLineOne").hide();
            $(".phoneMessageLineTwo").show();
            //elementHandle[8].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[8].removeClass("is-invalid");
        $(".phoneMessageLineOne").hide();
        $(".phoneMessageLineTwo").hide();
        formValidFlag = true;
    });

    elementHandle[10].on('blur', function() {
        if(isEmpty(elementHandle[10].val())){
            elementHandle[10].addClass("is-invalid");
            $(".nameCardMessageLine").show();
            //elementHandle[10].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[10].removeClass("is-invalid");
        $(".nameCardMessageLine").hide();
        formValidFlag = true;
    });

    elementHandle[11].on('blur', function() {
        if(isEmpty(elementHandle[11].val())){
            elementHandle[11].addClass("is-invalid");
            $(".cardNumberMessageLineOne").show();
            $(".cardNumberMessageLineTwo").hide();
            //elementHandle[11].focus();
            formValidFlag = false;
            return;
        }
        if(!$.isNumeric(elementHandle[11].val())) {
            elementHandle[11].addClass("is-invalid");
            $(".cardNumberMessageLineOne").hide();
            $(".cardNumberMessageLineTwo").show();
            //elementHandle[11].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[11].removeClass("is-invalid");
        $(".cardNumberMessageLineOne").hide();
        $(".cardNumberMessageLineTwo").hide();
        formValidFlag = true;
    });

    elementHandle[12].on('blur', function() {
        if(isEmpty(elementHandle[12].val())){
            elementHandle[12].addClass("is-invalid");
            $(".cardMonthMessageLineOne").show();
            $(".cardMonthMessageLineTwo").hide();
            $(".cardMonthMessageLineThree").hide();
            //elementHandle[12].focus();
            formValidFlag = false;
            return;
        }
        if(!$.isNumeric(elementHandle[12].val())) {
            elementHandle[12].addClass("is-invalid");
            $(".cardMonthMessageLineOne").hide();
            $(".cardMonthMessageLineTwo").show();
            $(".cardMonthMessageLineThree").hide();
            //elementHandle[12].focus();
            formValidFlag = false;
            return;
        }
        if((elementHandle[12].val()) < 0 || (elementHandle[12].val()) > 12 ){
            elementHandle[12].addClass("is-invalid");
            $(".cardMonthMessageLineOne").hide();
            $(".cardMonthMessageLineTwo").hide();
            $(".cardMonthMessageLineThree").show();
            //elementHandle[12].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[12].removeClass("is-invalid");
        $(".cardMonthMessageLineOne").hide();
        $(".cardMonthMessageLineTwo").hide();
        $(".cardMonthMessageLineThree").hide();
        formValidFlag = true;
    });

    elementHandle[13].on('blur', function() {
        if(isEmpty(elementHandle[13].val())){
            elementHandle[13].addClass("is-invalid");
            $(".cardYearMessageLineOne").show();
            $(".cardYearMessageLineTwo").hide();
            $(".cardYearMessageLineThree").hide();
            //elementHandle[13].focus();
            formValidFlag = false;
            return;
        }
        if(!$.isNumeric(elementHandle[13].val())) {
            elementHandle[13].addClass("is-invalid");
            $(".cardYearMessageLineOne").hide();
            $(".cardYearMessageLineTwo").show();
            $(".cardYearMessageLineThree").hide();
            //elementHandle[13].focus();
            formValidFlag = false;
            return;
        }
        if((elementHandle[13].val()) < 2017 || (elementHandle[13].val()) > 9999){
            elementHandle[13].addClass("is-invalid");
            $(".cardYearMessageLineOne").hide();
            $(".cardYearMessageLineTwo").hide();
            $(".cardYearMessageLineThree").show();
            //elementHandle[13].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[13].removeClass("is-invalid");
        $(".cardYearMessageLineOne").hide();
        $(".cardYearMessageLineTwo").hide();
        $(".cardYearMessageLineThree").hide();
        formValidFlag = true;
    });

    elementHandle[14].on('blur', function() {
        if(isEmpty(elementHandle[14].val())){
            elementHandle[14].addClass("is-invalid");
            $(".cardCVVMessageLineOne").show();
            $(".cardCVVMessageLineTwo").hide();
            //elementHandle[14].focus();
            formValidFlag = false;
            return;
        }
        if(!$.isNumeric(elementHandle[14].val())) {
            elementHandle[14].addClass("is-invalid");
            $(".cardCVVMessageLineOne").hide();
            $(".cardCVVMessageLineTwo").show();
            //elementHandle[14].focus();
            formValidFlag = false;
            return;
        }
        elementHandle[14].removeClass("is-invalid");
        $(".cardCVVMessageLineOne").hide();
        $(".cardCVVMessageLineTwo").hide();
        formValidFlag = true;
    });

    $('input[type="checkbox"]').click(function() {
        if ($(this).is(":checked")) {

            elementHandle[15].on('blur', function() {
                if(isEmpty(elementHandle[15].val())){
                    elementHandle[15].addClass("is-invalid");
                    $(".billingNameMessageLine").show();
                    //elementHandle[0].focus();
                    billingFormValidFlag = false;
                    return;
                }
                $(".billingNameMessageLine").hide();
                elementHandle[15].removeClass("is-invalid");
                billingFormValidFlag = true;
            });

            elementHandle[16].on('blur', function() {
                if(isEmpty(elementHandle[16].val())){
                    elementHandle[16].addClass("is-invalid");
                    $(".billingLastNameMessageLine").show();
                    //elementHandle[1].focus();
                    billingFormValidFlag = false;
                    return;
                }
                $(".billingLastNameMessageLine").hide();
                elementHandle[16].removeClass("is-invalid");
                billingFormValidFlag = true;
            });

            elementHandle[17].on('blur', function() {
                if(isEmpty(elementHandle[17].val())){
                    elementHandle[17].addClass("is-invalid");
                    $(".billingAddressOneMessageLine").show();
                    //elementHandle[2].focus();
                    billingFormValidFlag = false;
                    return;
                }
                $(".billingAddressOneMessageLine").hide();
                elementHandle[17].removeClass("is-invalid");
                billingFormValidFlag = true;
            });

            elementHandle[18].on('blur', function() {
                if(isEmpty(elementHandle[18].val())){
                    elementHandle[18].addClass("is-invalid");
                    $(".billingCityTownMessageLine").show();
                    //elementHandle[3].focus();
                    billingFormValidFlag = false;
                    return;
                }
                $(".billingCityTownMessageLine").hide();
                elementHandle[18].removeClass("is-invalid");
                billingFormValidFlag = true;
            });

            elementHandle[19].on('keyup', function() {
                elementHandle[19].val(elementHandle[19].val().toUpperCase());
            });

            elementHandle[19].on('blur', function() {
                if(isEmpty(elementHandle[19].val())){
                    elementHandle[19].addClass("is-invalid");
                    $(".billingStateMessageLineOne").show();
                    $(".billingStateMessageLineTwo").hide();
                    //elementHandle[4].focus();
                    billingFormValidFlag = false;
                    return;
                }
                if(!isValidState(elementHandle[19].val())) {
                    elementHandle[19].addClass("is-invalid");
                    $(".billingStateMessageLineOne").hide();
                    $(".billingStateMessageLineTwo").show();
                    //elementHandle[19].focus();
                    billingFormValidFlag = false;
                    return;
                }
                elementHandle[19].removeClass("is-invalid");
                $(".billingStateMessageLineOne").hide();
                $(".billingStateMessageLineTwo").hide();
                billingFormValidFlag = true;
            });

            elementHandle[20].on('blur', function() {
                if(isEmpty(elementHandle[20].val())){
                    elementHandle[20].addClass("is-invalid");
                    $(".billingZipCodeMessageLineOne").show();
                    $(".billingZipCodeMessageLineTwo").hide();
                    //elementHandle[20].focus();
                    billingFormValidFlag = false;
                    return;
                }
                if(!$.isNumeric(elementHandle[20].val())) {
                    elementHandle[20].addClass("is-invalid");
                    $(".billingZipCodeMessageLineOne").hide();
                    $(".billingZipCodeMessageLineTwo").show();
                    //elementHandle[20].focus();
                    billingFormValidFlag = false;
                    return;
                }
                elementHandle[20].removeClass("is-invalid");
                $(".billingZipCodeMessageLineOne").hide();
                $(".billingZipCodeMessageLineTwo").hide();
                billingFormValidFlag = true;
            });

            elementHandle[21].on('keyup', function() {
                if(elementHandle[21].val().length == 3)
                    elementHandle[22].focus();
            });

            elementHandle[22].on('keyup', function() {
                if(elementHandle[22].val().length == 3)
                    elementHandle[23].focus();
            });

            elementHandle[21].on('blur', function() {
                if(isEmpty(elementHandle[21].val())){
                    elementHandle[21].addClass("is-invalid");
                    $(".billingAreaCodeMessageLineOne").show();
                    $(".billingAreaCodeMessageLineTwo").hide();
                    //elementHandle[21].focus();
                    billingFormValidFlag = false;
                    return;
                }
                if(!$.isNumeric(elementHandle[21].val())) {
                    elementHandle[21].addClass("is-invalid");
                    $(".billingAreaCodeMessageLineOne").hide();
                    $(".billingAreaCodeMessageLineTwo").show();
                    //elementHandle[21].focus();
                    billingFormValidFlag = false;
                    return;
                }
                elementHandle[21].removeClass("is-invalid");
                $(".billingAreaCodeMessageLineOne").hide();
                $(".billingAreaCodeMessageLineTwo").hide();
                billingFormValidFlag = true;
            });

            elementHandle[22].on('blur', function() {
                if(isEmpty(elementHandle[22].val())){
                    elementHandle[22].addClass("is-invalid");
                    $(".billingPhonePrefixMessageLineOne").show();
                    $(".billingPhonePrefixMessageLineTwo").hide();
                    //elementHandle[22].focus();
                    billingFormValidFlag = false;
                    return;
                }
                if(!$.isNumeric(elementHandle[22].val())) {
                    elementHandle[22].addClass("is-invalid");
                    $(".billingPhonePrefixMessageLineOne").hide();
                    $(".billingPhonePrefixMessageLineTwo").show();
                    //elementHandle[22].focus();
                    billingFormValidFlag = false;
                    return;
                }
                elementHandle[22].removeClass("is-invalid");
                $(".billingPhonePrefixMessageLineOne").hide();
                $(".billingPhonePrefixMessageLineTwo").hide();
                billingFormValidFlag = true;
            });

            elementHandle[23].on('blur', function() {
                if(isEmpty(elementHandle[23].val())){
                    elementHandle[23].addClass("is-invalid");
                    $(".billingPhoneMessageLineOne").show();
                    $(".billingPhoneMessageLineTwo").hide();
                    //elementHandle[23].focus();
                    billingFormValidFlag = false;
                    return;
                }
                if(!$.isNumeric(elementHandle[23].val())) {
                    elementHandle[23].addClass("is-invalid");
                    $(".billingPhoneMessageLineOne").hide();
                    $(".billingPhoneMessageLineTwo").show();
                    //elementHandle[23].focus();
                    billingFormValidFlag = false;
                    return;
                }
                elementHandle[23].removeClass("is-invalid");
                $(".billingPhoneMessageLineOne").hide();
                $(".billingPhoneMessageLineTwo").hide();
                billingFormValidFlag = true;
            });

        }

        if($(this).is(":not(:checked)")){
            billingFormValidFlag = true;
        }
    });

    $(':submit').on('click', function(){
        if (formValidFlag == true && billingFormValidFlag == true){
            return true;
        }
        else {
            return false;
        }
    });

});