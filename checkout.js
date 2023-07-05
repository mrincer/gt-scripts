
const stateOptions = {
    USA: [
        { text: "Select your State", value: "" },
        { text: "Alabama", value: "AL" },
        { text: "Alaska", value: "AK" },
        { text: "Arizona", value: "AZ" },
        { text: "Arkansas", value: "AR" },
        { text: "California", value: "CA" },
        { text: "North Carolina", value: "NC" },
        { text: "South Carolina", value: "SC" },
        { text: "Colorado", value: "CO" },
        { text: "Connecticut", value: "CT" },
        { text: "North Dakota", value: "ND" },
        { text: "South Dakota", value: "SD" },
        { text: "Delaware", value: "DE" },
        { text: "Florida", value: "FL" },
        { text: "Georgia", value: "GA" },
        { text: "Hawaii", value: "HI" },
        { text: "Idaho", value: "ID" },
        { text: "Illinois", value: "IL" },
        { text: "Indiana", value: "IN" },
        { text: "Iowa", value: "IA" },
        { text: "Kansas", value: "KS" },
        { text: "Kentucky", value: "KY" },
        { text: "Louisiana", value: "LA" },
        { text: "Maine", value: "ME" },
        { text: "Maryland", value: "MD" },
        { text: "Massachusetts", value: "MA   " },
        { text: "Michigan", value: "MI" },
        { text: "Minnesota", value: "MN" },
        { text: "Mississippi", value: "MS" },
        { text: "Missouri", value: "MO" },
        { text: "Montana", value: "MT" },
        { text: "Nebraska", value: "NE" },
        { text: "Nevada", value: "NV" },
        { text: "New Jersey", value: "NJ" },
        { text: "New York", value: "NY" },
        { text: "New Hampshire", value: "NH" },
        { text: "New Mexico", value: "NM" },
        { text: "Ohio", value: "OH" },
        { text: "Oklahoma", value: "OK" },
        { text: "Oregon", value: "OR" },
        { text: "Pennsylvania", value: "PA" },
        { text: "Rhode Island", value: "RI" },
        { text: "Tennessee", value: "TN" },
        { text: "Texas", value: "TX" },
        { text: "Utah", value: "UT" },
        { text: "Vermont", value: "VT" },
        { text: "Virginia", value: "VA" },
        { text: "West Virginia", value: "WV" },
        { text: "Washington", value: "WA" },
        { text: "Wisconsin", value: "WI" },
        { text: "Wyoming", value: "WY" },
    ],
    MEX: [
        { text: "Select your State", value: "" },
        { text: "Aguascalientes", value: "Aguascalientes" },
        { text: "Baja California", value: "Baja California" },
        { text: "Baja California Sur", value: "Baja California Sur" },
        { text: "Campeche", value: "Campeche" },
        { text: "Chiapas", value: "Chiapas" },
        { text: "Chihuahua", value: "Chihuahua" },
        { text: "Coahuila de Zaragoza", value: "Coahuila de Zaragoza" },
        { text: "Colima", value: "Colima" },
        { text: "Durango", value: "Durango" },
        { text: "Guanajuato", value: "Guanajuato" },
        { text: "Guerrero", value: "Guerrero" },
        { text: "Hidalgo", value: "Hidalgo" },
        { text: "Jalisco", value: "Jalisco" },
        { text: "México", value: "México" },
        { text: "Ciudad de México", value: "Ciudad de México" },
        { text: "Michoacán de Ocampo", value: "Michoacán de Ocampo" },
        { text: "Morelos", value: "Morelos" },
        { text: "Nayarit", value: "Nayarit" },
        { text: "Nuevo León", value: "Nuevo León" },
        { text: "Oaxaca", value: "Oaxaca" },
        { text: "Puebla", value: "Puebla" },
        { text: "Querétaro de Arteaga", value: "Querétaro de Arteaga" },
        { text: "Quintana Roo", value: "Quintana Roo" },
        { text: "San Luis Potosí", value: "San Luis Potosí" },
        { text: "Sinaloa", value: "Sinaloa" },
        { text: "Sonora", value: "Sonora" },
        { text: "Tabasco", value: "Tabasco" },
        { text: "Tamaulipas", value: "Tamaulipas" },
        { text: "Tlaxcala", value: "Tlaxcala" },
        { text: "Veracruz", value: "Veracruz" },
        { text: "Yucatán", value: "Yucatán" },
        { text: "Zacatecas", value: "Zacatecas" }
    ],
    CAN: [
        { text: "Select your State", value: "" },
        { text: "Ontario", value: "OT" },
        { text: "Quebec", value: "QC" },
        { text: "Nova Scotia", value: "NS" },
        { text: "New Brunswick", value: "NB" },
        { text: "Manitoba", value: "MB" },
        { text: "Northwest Territories", value: "NT" },
        { text: "British Columbia", value: "BC" },
        { text: "Prince Edward Island", value: "PE" },
        { text: "Yukon", value: "YT" },
        { text: "Saskatchewan", value: "SK" },
        { text: "Alberta", value: "AB" },
        { text: "Newfoundland and Labrador", value: "NL" },
        { text: "Nunavut", value: "NU" }
    ],
};

function getUrlData() {
    // Get the current URL
    const url = new URL(window.location.href);
    // Initialize an empty object to store the URL data
    const urlData = {};
    // Loop through all the URL parameters and add them to the urlData object
    for (const [key, value] of url.searchParams.entries()) {
        urlData[key] = value;
    }
    // Convert the urlData object to a JSON string
    const jsonData = JSON.stringify(urlData);

    return jsonData;
}
function changeStateOptions(options) {
    console.log("changeStateOptions")
    const selectElement = $("#shippingState");
    selectElement.empty();
    options.forEach(option => {
        const $option = $("<option></option>")
            .attr("value", option.value)
            .text(option.text);
        selectElement.append($option);
    });
}
const setUpMask = () => {
    console.log("setUpMask")
    // $("#phone").mask("000-000-0000");
    $("#x_cvv").mask("0000");
    $("#x_card_num").mask("0000000000000000");
}
const setTouchClass = () => {
    const isTouchDevice = () => !!("ontouchstart" in window);
    $("body").addClass(isTouchDevice() ? "touchevents" : "no-touchevents");
}
function setUpTooltips() {
    console.log("setUpTooltips")
    var tipPosition = "";
    if (window.innerWidth <= 825) {
        tipPosition = "bottom";
    } else {
        tipPosition = "bottom";
    }

    $('input[type="text"], input[type="email"], input[type="tel"], select, .form-control, .field_design').tooltipster({
        trigger: "custom",
        onlyOne: false,
        position: tipPosition,
        theme: "tooltipster-punk",
        offsetY: -4,
        animation: "grow",
        updateAnimation: false
    });
}

const getOfferSelection = () => {
    const selectedValue = $("input[name='offer-option']:checked").val();
    return selectedValue;
};

$("input[name='offer-option']").on("click", () => {
    const value = getOfferSelection();
    console.log(value);

    if (value === "month") {
        $("#product_id").val('388');
        $("#package299Modal").modal("show");
        $("#gold-upgrade").contents().last().replaceWith("$39.95/Monthly Gold includes up to 90% commission");
        $("#platinum-upgrade").contents().last().replaceWith("$49.95/Monthly Platinum includes up to 90% commission");

    } else {
        $("#product_id").val('389');
        $("#platinum-upgrade").contents().last().replaceWith("$399/Annually Platinum includes up to 90% commission");
        $("#gold-upgrade").contents().last().replaceWith("$299/Annually Gold includes up to 70% commision");
    }

});
const updateHiddenFields = () => {
    const offerOption = getOfferSelection();
    let upgradeProduct = "";
    let upgradeCampaign = "";

    if (offerOption === "month") {
        upgradeProduct = "572";
        upgradeCampaign = "123";
    } else if (offerOption === "annual") {
        upgradeProduct = "576";
        upgradeCampaign = "123";
    }

    const upgradeOption = $("input[name='upgrade-option']:checked").val();
    if (upgradeOption === "plat-month") {
        upgradeProduct = "573";
        upgradeCampaign = "125";
    }

    $("#upgrade_product").val(upgradeProduct);
    $("#upgrade_campaign").val(upgradeCampaign);
};

const getSelectedUpgrade = () => {
    const selectedUpgrade = $("input[name='upgrade-option']:checked").val();
    return selectedUpgrade;
};

$("input[name='upgrade-option']").on("click", () => {
    const upgradeValue = getSelectedUpgrade();
    console.log(upgradeValue);

    if (upgradeValue === "gold-month") {
        $("#upgrade_product").val('572');
        $("#upgrade_campaign").val('123');


    } else if (upgradeValue === "plat-month") {
        $("#product_id").val('389');
    } else if (upgradeValue === "") {
        // No upgrade selected, do something else if needed
    }
});



function setUpValidation() {
    $('#threeDForm').validate({
        errorPlacement: function (error, element) {
            $(element).tooltipster('update', $(error).text());
            $(element).tooltipster('show');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        rules: {
            shippingAddress1: {
                required: true
            },
            shippingCity: {
                required: true
            },
            shippingZip: {
                required: true
            },
            x_card_num: {
                required: true,
                creditcard: true
            },
            creditCardType: {
                required: true
            },
            x_cvv: {
                required: true
            },
            x_exp_month: {
                required: true
            },
            x_exp_year: {
                required: true
            }
        },
        onkeyup: false,
        submitHandler: async function (form, event) {
            event.preventDefault();
            $(".billing-info").LoadingOverlay("show", {
                text: "Please wait..."
            });

            const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

            var BreakException = {};

            try {
                for (let i = 1; i <= 15; i++) {
                    await sleepNow(1000);
                    console.log("waiting... " + i);

                    var isProcessing = $("#threeds_processing").val();
                    if (isProcessing === "0") {
                        console.log("Inside If");
                        throw BreakException;
                    }
                }
            } catch (e) {
                if (e !== BreakException) {
                    throw e;
                }
                else {
                    $(".billing-info").LoadingOverlay("hide");
                    form.submit();
                }
            }


        }
    });
}
function changePackage() {
    var packageID = $(this).attr("id");
    $(".package-item").removeClass("checked");
    $(this).parent("label").addClass("checked");
    console.log(packageID)
    if (packageID == "paymentPackage39_95") {
        $("#product_id").val($("#product_monthly_id").val());
        $("#package299Modal").modal("show");
    }
    else {
        $("#product_id").val($("#product_full_id").val());
    }
}

function paymentPackage299(event) {
    // event.preventDefault();
    $("#package299Modal").modal("hide");


    var getYesID = $(this).attr("href");

    console.log(getYesID)


    $(getYesID).prop("checked", true);
    $(".package-item").removeClass("checked");
    $(".package-b").addClass("checked");
    $("#product_id").val($("#product_full_id").val());
}
function SetCreditCardImage() {
    var ccType = $("#creditCardType").val();
    console.log(ccType);
    const cardClasses = {
        amex: "amex",
        discover: "discover",
        master: "mastercard",
        visa: "visa",
        default: "cc-default"
    };

    const cardClass = cardClasses[ccType] || cardClasses["default"];

    $("#x_card_num").removeClass("cc-default visa visa-electron mastercard maestro discover amex").addClass(cardClass);
}
function threeDSprocessing() {
    const expMonth = $("#x_exp_month").val();
    const expYear = $("#x_exp_year").val();
    const cardNum = $("#x_card_num").val();
    const expMonthHid = $("#x_exp_month_hid").val();
    const expYearHid = $("#x_exp_year_hid").val();
    const cardNumHid = $("#x_card_num_hid").val();

    const isInputChanged = expMonth !== expMonthHid || expYear !== expYearHid || cardNum !== cardNumHid;
    const allInputsFilled = expMonth && expYear && cardNum;

    if (isInputChanged && allInputsFilled) {
        $("#x_exp_month_hid").val(expMonth);
        $("#x_exp_year_hid").val(expYear);
        $("#x_card_num_hid").val(cardNum);

        $("#threeds_processing").val("1");
        setTimeout(() => $("#threeds_processing").val("0"), 15000);
    }
}
function getUserIp() {
    return new Promise(function (resolve, reject) {
        $.get("https://ipv4.jsonip.com/")
            .done(function (data) {
                resolve(data.ip);
            })
            .fail(function (error) {
                reject(error);
            });
    });
}

function createContactSalesmate() {
    console.log("createContactSalesmate");
    var firstname = $("#shippingFirstName").val();
    var lastname = $("#shippingLastName").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var address1 = $("#shippingAddress1").val();
    var address2 = $("#shippingAddress2").val();
    var country = $("#Country_label").val();
    var state = $("#shippingState").val();
    var city = $("#shippingCity").val();
    var zip = $("#shippingZip").val();
    var campaign = $("#campaign_id").val();
    var affid = $("#AFFID").val();
    var afid = $("#AFID").val();

    if (firstname && lastname && (email || phone)) {
        var url = "https://hooks.zapier.com/hooks/catch/2695602/3uwycf9/?step1=&campaign_id=" + campaign + "&afid=" + afid + "&AFFID=" + affid + "&or_afid=&or_affid=&fbclid=&first_name=" + firstname + "&last_name=" + lastname + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone);
        console.log(url);
        jQuery.ajax({
            type: "GET",
            url: url,
            success: function (data) {
                console.log("The Contact has been created correctly on Salesmate")
            },
            error: function (data) {
                console.log("error during Contact creation")
            },
            dataType: "jsonp"
        });
    }

}
function validateCoupon() {
    console.log("function is running")
    $("#promoCode").next("span").remove();
    var discount = $("#promoCode").val();
    var email = $("#email").val();
    console.log(discount)
    if (discount) {
        console.log("Discount Value inserted")
        var coupon = {
            campaignId: $("#campaign_id").val(),
            productId: $("#product_id").val(),
            email: email,
            promoCode: discount
        }
        jQuery.ajax({
            url: "https://globaltravel.com/wp-content/themes/bridge-child/limelight/coupon_validation.php",
            type: "POST",
            dataType: "json",
            data: JSON.stringify(coupon),
            success: function (response) {
                var response_code = response.response_code;
                if (response_code == 100) {
                    var coupon_amount = response.coupon_amount;
                    $("#promoCode").next("span").remove();
                    $("<span style='color:#3A98B9; font-weight:600; text-align: center'>You have a $" + coupon_amount + " discount</span>").insertAfter("#promoCode");
                } else {
                    $("#promoCode").next("span").remove();
                    $("<span style='color:#FC2947; font-weight:600; text-align: center'>The Coupon you used is not Valid for this product</span>").insertAfter("#promoCode");
                }
            }
        });
    }
}

$(document).ready(function () {
    const urlData = JSON.parse(getUrlData());
    console.log(urlData);

    $("#shippingFirstName").val(urlData.first_name);
    $("#shippingLastName").val(urlData.last_name);
    $("#email").val(urlData.email);
    $("#phone").val(urlData.phone);
    $("#AFFID").val(urlData.AFFID);
    $("#AFID").val(urlData.afid);

    $("#shippingCountry").on("change", function () {
        console.log("changeStateOptions executed")
        const country = $(this).val();
        const options = stateOptions[country] || stateOptions.USA;
        changeStateOptions(options);
    });

    $("#cardHolderName").val(urlData.first_name + " " + urlData.last_name);

    setUpMask();
    setTouchClass();
    setUpValidation();
    createContactSalesmate();
    $("input[name='paymentPackage']").on('change', function () {
        var packageID = $(this).attr("id");
        //$("#btn_submit_form").prop("disabled", false);
        //$("#threeDForm button").prop("disabled", false);\
        validateCoupon();

        $(".package-item").removeClass("checked");
        $(this).parent("label").addClass("checked");

        if (packageID == "paymentPackage39_95") {
            $("#product_id").val($("#product_monthly_id").val());
            $("#package299Modal").modal("show");
            $("#next_step_page").val("https://enroll.globaltravel.com/perfmax-thank-you");

        }
        else {
            $("#product_id").val($("#product_full_id").val());
            $("#next_step_page").val("https://enroll.globaltravel.com/perfmax-upgrade-offer-yearly");
        }
    });

    $(".pack-content__buttons .btn-yes").click(function (e) {
        e.preventDefault();
        $("#package299Modal").modal("hide");


        var getYesID = $(this).attr("href");

        $(getYesID).prop("checked", true);
        $(".package-item").removeClass("checked");
        $(".package-b").addClass("checked");
        $("#product_id").val($("#product_full_id").val());

    });
    $(".pack-content__buttons .btn-no").click(function (e) {
        e.preventDefault();
        $("#package299Modal").modal("hide")

        var getYesID = $(this).attr("href");

        $(getYesID).prop("checked", true);
        $(".package-item").removeClass("checked");
        $(".package-a").addClass("checked");
        $("#product_id").val($("#product_monthly_id").val());
    })

    $("#promoCode").keyup(validateCoupon());

});
$(document).ready(function () {

    $("#promoCode").keyup(function () {
        let coupon_amount;
        var discount = $(this).val();
        console.log(discount);
        var coupon = {
            campaignId: $("#campaign_id").val(),
            productId: $("#product_id").val(),
            email: email,
            promoCode: discount
        }
        jQuery.ajax({
            url: "https://globaltravel.com/wp-content/themes/bridge-child/limelight/coupon_validation.php",
            type: "POST",
            dataType: "json",
            data: JSON.stringify(coupon),
            success: function (response) {
                var response_code = response.response_code;
                if (response_code == 100) {
                    coupon_amount = response.coupon_amount;
                    $("#coupon_amount").val(coupon_amount);
                    $("#promoCode").next("span").remove();
                    $("<span style='color:#3A98B9; font-weight:600; text-align: center'>You have a $" + coupon_amount + " discount</span>").insertAfter("#promoCode");
                } else {
                    $("#promoCode").next("span").remove();
                    $("<span style='color:#FC2947; font-weight:600; text-align: center'>The Coupon you used is not Valid for this product</span>").insertAfter("#promoCode");
                }
            }
        });

    });
});
$(document).ready(function () {
    document.querySelectorAll('[data-bs-toggle="popover"]')
        .forEach(popover => {
            new bootstrap.Popover(popover)
        })

    $('#benefit-popover').on('show.bs.dropdown', function () {
        console.log('Dropdown shown');
    });
    $("#btn_submit_form").click(function () {
        $(".billing-info").LoadingOverlay("show", {
            text: "Please wait..."
        });
    });
    $(".close").click(function () {
        $("#package299Modal").modal("hide");
    });
});
