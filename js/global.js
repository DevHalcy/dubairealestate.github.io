var SITE_PATH = window.location.href + '/';

function GetPropertyTypeURL(val) {
    if (val) {
        $.ajax({
            url: "https://www.dubaihousing-ae.com/pages/GetBedCategory/" + val + "/",
            type: 'POST',
            contentType: !1,
            processData: !1,
            success: function(result) {
                $(".SetBedDetails").html(result)
            }
        })
    }
}

function countrycode(value) {
    if (value !== "") {
    $.ajax({
      url: "pages/getCountryAjax/"+escape(value)+"/",
      dataType: "json",
      success: function (result) {
        //var codeVal = "+" + result;
        var flagVal = result.flag_span;

        $(".phonecode").html(flagVal);   
        $(".phonecodeValue").val(result.phonecode);
      },
    });
    } else {
    $(".phonecode").text("");
    }
}
/*var country = {
    "2": "India",
    "8": "United States",
    "7": "United  Kingdom",
    "6": "United Arab Emirates",
    "173": "Singapore",
    "3": "Australia",
    "4": "Canada",
    "123": "Malaysia",
    "108": "Kuwait",
    "92": "Hong Kong",
    "77": "Germany",
    "168": "Saudi Arabia",
    "9": "Afghanistan",
    "10": "Albania",
    "11": "Algeria",
    "12": "American Samoa",
    "13": "Andorra",
    "14": "Angola",
    "15": "Anguilla",
    "16": "Antigua and Barbuda",
    "17": "Argentina",
    "18": "Armenia",
    "19": "Austria",
    "20": "Azerbaijan",
    "21": "Bahamas",
    "22": "Bahrain",
    "23": "Bangladesh",
    "24": "Barbados",
    "25": "Belarus",
    "26": "Belgium",
    "27": "Belize",
    "28": "Benin",
    "29": "Bermuda",
    "30": "Bhutan",
    "31": "Bosnia and Herzegovina",
    "32": "Botswana",
    "33": "Brazil",
    "34": "British Virgin Islands",
    "35": "Brunei",
    "36": "Bulgaria",
    "37": "Burkina Faso",
    "38": "Burundi",
    "39": "Cambodia",
    "40": "Cameroon",
    "41": "Canary Islands",
    "42": "Cape Verde",
    "43": "Cayman Islands",
    "44": "Central African",
    "45": "Chad",
    "46": "Chile",
    "47": "China",
    "48": "Colombia",
    "49": "Comoros",
    "50": "Congo",
    "51": "Cook Islands",
    "52": "Costa Rica",
    "53": "Cote Dlvoire",
    "54": "Croatia",
    "55": "Cuba",
    "56": "Cyprus",
    "57": "Czech Republic",
    "58": "Denmark",
    "59": "Dominica",
    "60": "Dominican Republic",
    "61": "East Timor",
    "62": "Ecuador",
    "63": "Egypt",
    "64": "El Salvador",
    "65": "Equatorial Guinea",
    "66": "Eritrea",
    "67": "Estonia",
    "68": "Ethiopia",
    "69": "Faeroe Islands",
    "70": "Fiji",
    "71": "Finland",
    "72": "France",
    "73": "French Guiana",
    "74": "French Polybesia",
    "75": "Gambia",
    "76": "Georgia",
    "78": "Ghana",
    "79": "Gibraltar",
    "80": "Greece",
    "81": "Greenland",
    "82": "Grenada",
    "83": "Guadeloupe",
    "84": "Guam",
    "85": "Guatemala",
    "86": "Guinea",
    "87": "Guinea-Bissau",
    "88": "Guyana",
    "89": "Haiti",
    "90": "Holland",
    "91": "Honduras",
    "93": "Hungary",
    "94": "Iceland",
    "95": "Indonesia",
    "96": "Iran",
    "97": "Iraq",
    "98": "Ireland",
    "99": "Isleof Man",
    "100": "Israel",
    "101": "Italy",
    "102": "Jamaica",
    "103": "Japan",
    "104": "Jordan",
    "105": "Kazakhstan",
    "106": "Kenya",
    "107": "Kiribati",
    "109": "Kyrgyzstan",
    "110": "Laos",
    "111": "Latvia",
    "112": "Lebanon",
    "113": "Lesotho",
    "114": "Liberia",
    "115": "Libya",
    "116": "Liechtenstein",
    "117": "Lithuania",
    "118": "Luxembourg",
    "119": "Macau",
    "120": "Macedonia",
    "121": "Madagascar",
    "122": "Malawi",
    "124": "Maldives",
    "125": "Mali",
    "126": "Malta",
    "127": "Martinique",
    "128": "Mauritius",
    "129": "Mexico",
    "130": "Moldova",
    "131": "Monaco",
    "132": "Mongolia",
    "133": "Montenegro",
    "134": "Montserrat",
    "135": "Morocco",
    "136": "Mozambique",
    "137": "Myanmar",
    "138": "Namibia",
    "139": "Nepal",
    "140": "Netherlands",
    "141": "Netherlands Antilles",
    "142": "New Caledonia",
    "143": "New Zealand",
    "144": "Nicaragua",
    "145": "Niger",
    "146": "Nigeria",
    "147": "North Korea",
    "148": "Norway",
    "149": "Oman",
    "151": "Panama",
    "152": "Papua New Guinea",
    "153": "Paraguay",
    "154": "Peru",
    "155": "Philippines",
    "156": "Poland",
    "157": "Portugal",
    "158": "Puerto Rico",
    "159": "Qatar",
    "160": "Reunion",
    "161": "Romania",
    "162": "Russia",
    "163": "Rwanda",
    "164": "Saint Kitts",
    "165": "Saint Lucia",
    "166": "San Marino",
    "167": "Sao Tome and Principe",
    "169": "Senegal",
    "170": "Serbia",
    "171": "Seychelles",
    "172": "Sierra Leone",
    "174": "Slovakia",
    "175": "Slovenia",
    "176": "Solomon Islands",
    "177": "Somalia",
    "178": "South Africa",
    "179": "South Korea",
    "180": "Spain",
    "181": "Sri Lanka",
    "182": "Sudan",
    "183": "Suriname",
    "184": "Swaziland",
    "185": "Sweden",
    "186": "Switzerland",
    "187": "Syrian Arab Republic",
    "188": "Tahiti",
    "189": "Taiwan",
    "190": "Tajikistan",
    "191": "Tanzania",
    "192": "Thailand",
    "193": "Togo",
    "194": "Trinidad and Tobago",
    "195": "Tunisia",
    "196": "Turkey",
    "197": "Turkmenistan",
    "198": "Uganda",
    "199": "Ukraine",
    "200": "Uruguay",
    "201": "Uzbekistan",
    "202": "Vanuatu",
    "203": "Vatican City State",
    "204": "Venezuela",
    "205": "Vietnam",
    "206": "Wallis and Futuna",
    "207": "Yemen",
    "208": "Yugoslavia",
    "209": "Zambia",
    "210": "Zimbabwe",
    "150": "Others"
};
for (var item in country) {
    $('<option value="' + item + '##' + country[item] + '">' + country[item] + '</option>').appendTo('.country')
}*/

function countrycode(value) {
    
    if (value !== "") {
    $.ajax({
      url: "https://www.dubaihousing-ae.com/pages/countryCode/"+escape(value)+"/",
      dataType: "json",
      success: function (result) {
        //var codeVal = "+" + result;
        var flagVal = result.flag_span;

        $(".phonecode").html(flagVal);   
        $(".phonecodeValue").val(result.phonecode);
      },
    });
    } else {
    $(".phonecode").text("");
    }
}

$(document).ready(function() {
    var value = 1;
    $.ajax({
        url: "https://www.dubaihousing-ae.com/pages/StoreIpInDataBase/" + value + "/",
        contentType: "html",
        cache: !1,
        dataType: "json",
        success: function(results) {
            var flagVal = results.flag_span;
            var id = results.id;
            var name = results.name;
            //console.log(flagVal);
            $(".phonecode").html(flagVal);   
            $(".phonecodeValue").val(results.phonecode);   
            var array = [
                { name: "India", id: 2 },
                { name: "United Arab Emirates", id: 6 },
                { name: "France", id: 72 },
                { name: "United States", id: 8 },
                { name: "Russia", id: 162 },
                { name: "United  Kingdom", id: 7 },
                { name: "Bangladesh", id: 23 },
                { name: "Pakistan", id: 5 },
                { name: "Singapore", id: 173 },
                { name: "Australia", id: 3 },
                { name: "Canada", id: 4 },
                { name: "Malaysia", id: 123 },
                { name: "Kuwait", id: 108 },
                { name: "Hong Kong", id: 92 },
                { name: "Germany", id: 77 },
                { name: "Saudi Arabia", id: 168 },
                { name: "Afghanistan", id: 9 },
                { name: "Albania", id: 10 },
                { name: "Algeria", id: 11 },
                { name: "American Samoa", id: 12 },
                { name: "Andorra", id: 13 },
                { name: "Angola", id: 14 },
                { name: "Anguilla", id: 15 },
                { name: "Antigua and Barbuda", id: 16 },
                { name: "Argentina", id: 17 },
                { name: "Armenia", id: 18 },
                { name: "Austria", id: 19 },
                { name: "Azerbaijan", id: 20 },
                { name: "Bahamas", id: 21 },
                { name: "Bahrain", id: 22 },
                { name: "Barbados", id: 24 },
                { name: "Belarus", id: 25 },
                { name: "Belgium", id: 26 },
                { name: "Belize", id: 27 },
                { name: "Benin", id: 28 },
                { name: "Bermuda", id: 29 },
                { name: "Bhutan", id: 30 },
                { name: "Bosnia and Herzegovina", id: 31 },
                { name: "Botswana", id: 32 },
                { name: "Brazil", id: 33 },
                { name: "British Virgin Islands", id: 34 },
                { name: "Brunei", id: 35 },
                { name: "Bulgaria", id: 36 },
                { name: "Burkina Faso", id: 37 },
                { name: "Burundi", id: 38 },
                { name: "Cambodia", id: 39 },
                { name: "Cameroon", id: 40 },
                { name: "Canary Islands", id: 41 },
                { name: "Cape Verde", id: 42 },
                { name: "Cayman Islands", id: 43 },
                { name: "Central African", id: 44 },
                { name: "Chad", id: 45 },
                { name: "Chile", id: 46 },
                { name: "China", id: 47 },
                { name: "Colombia", id: 48 },
                { name: "Comoros", id: 49 },
                { name: "Congo", id: 50 },
                { name: "Cook Islands", id: 51 },
                { name: "Costa Rica", id: 52 },
                { name: "Cote Dlvoire", id: 53 },
                { name: "Croatia", id: 54 },
                { name: "Cuba", id: 55 },
                { name: "Cyprus", id: 56 },
                { name: "Czech Republic", id: 57 },
                { name: "Denmark", id: 58 },
                { name: "Dominica", id: 59 },
                { name: "Dominican Republic", id: 60 },
                { name: "East Timor", id: 61 },
                { name: "Ecuador", id: 62 },
                { name: "Egypt", id: 63 },
                { name: "El Salvador", id: 64 },
                { name: "Equatorial Guinea", id: 65 },
                { name: "Eritrea", id: 66 },
                { name: "Estonia", id: 67 },
                { name: "Ethiopia", id: 68 },
                { name: "Faeroe Islands", id: 69 },
                { name: "Fiji", id: 70 },
                { name: "Finland", id: 71 },
                { name: "France", id: 72 },
                { name: "French Guiana", id: 73 },
                { name: "French Polybesia", id: 74 },
                { name: "Gambia", id: 75 },
                { name: "Georgia", id: 76 },
                { name: "Ghana", id: 78 },
                { name: "Gibraltar", id: 79 },
                { name: "Greece", id: 80 },
                { name: "Greenland", id: 81 },
                { name: "Grenada", id: 82 },
                { name: "Guadeloupe", id: 83 },
                { name: "Guam", id: 84 },
                { name: "Guatemala", id: 85 },
                { name: "Guinea", id: 86 },
                { name: "Guinea-Bissau", id: 87 },
                { name: "Guyana", id: 88 },
                { name: "Haiti", id: 89 },
                { name: "Holland", id: 90 },
                { name: "Honduras", id: 91 },
                { name: "Hungary", id: 93 },
                { name: "Iceland", id: 94 },
                { name: "Indonesia", id: 95 },
                { name: "Iran", id: 96 },
                { name: "Iraq", id: 97 },
                { name: "Ireland", id: 98 },
                { name: "Isleof Man", id: 99 },
                { name: "Israel", id: 100 },
                { name: "Italy", id: 101 },
                { name: "Jamaica", id: 102 },
                { name: "Japan", id: 103 },
                { name: "Jordan", id: 104 },
                { name: "Kazakhstan", id: 105 },
                { name: "Kenya", id: 106 },
                { name: "Kiribati", id: 107 },
                { name: "Kyrgyzstan", id: 109 },
                { name: "Laos", id: 110 },
                { name: "Latvia", id: 111 },
                { name: "Lebanon", id: 112 },
                { name: "Lesotho", id: 113 },
                { name: "Liberia", id: 114 },
                { name: "Libya", id: 115 },
                { name: "Liechtenstein", id: 116 },
                { name: "Lithuania", id: 117 },
                { name: "Luxembourg", id: 118 },
                { name: "Macau", id: 119 },
                { name: "Macedonia", id: 120 },
                { name: "Madagascar", id: 121 },
                { name: "Malawi", id: 122 },
                { name: "Maldives", id: 124 },
                { name: "Mali", id: 125 },
                { name: "Malta", id: 126 },
                { name: "Martinique", id: 127 },
                { name: "Mauritius", id: 128 },
                { name: "Mexico", id: 129 },
                { name: "Moldova", id: 130 },
                { name: "Monaco", id: 131 },
                { name: "Mongolia", id: 132 },
                { name: "Montenegro", id: 133 },
                { name: "Montserrat", id: 134 },
                { name: "Morocco", id: 135 },
                { name: "Mozambique", id: 136 },
                { name: "Myanmar", id: 137 },
                { name: "Namibia", id: 138 },
                { name: "Nepal", id: 139 },
                { name: "Netherlands", id: 140 },
                { name: "Netherlands Antilles", id: 141 },
                { name: "New Caledonia", id: 142 },
                { name: "New Zealand", id: 143 },
                { name: "Nicaragua", id: 144 },
                { name: "Niger", id: 145 },
                { name: "Nigeria", id: 146 },
                { name: "North Korea", id: 147 },
                { name: "Norway", id: 148 },
                { name: "Oman", id: 149 },
                { name: "Panama", id: 151 },
                { name: "Papua New Guinea", id: 152 },
                { name: "Paraguay", id: 153 },
                { name: "Peru", id: 154 },
                { name: "Philippines", id: 155 },
                { name: "Poland", id: 156 },
                { name: "Portugal", id: 157 },
                { name: "Puerto Rico", id: 158 },
                { name: "Qatar", id: 159 },
                { name: "Reunion", id: 160 },
                { name: "Romania", id: 161 },
                { name: "Rwanda", id: 163 },
                { name: "Saint Kitts", id: 164 },
                { name: "Saint Lucia", id: 165 },
                { name: "San Marino", id: 166 },
                { name: "Sao Tome and Principe", id: 167 },
                { name: "Senegal", id: 169 },
                { name: "Serbia", id: 170 },
                { name: "Seychelles", id: 171 },
                { name: "Sierra Leone", id: 172 },
                { name: "Slovakia", id: 174 },
                { name: "Slovenia", id: 175 },
                { name: "Solomon Islands", id: 176 },
                { name: "Somalia", id: 177 },
                { name: "South Africa", id: 178 },
                { name: "South Korea", id: 179 },
                { name: "Spain", id: 180 },
                { name: "Sri Lanka", id: 181 },
                { name: "Sudan", id: 182 },
                { name: "Suriname", id: 183 },
                { name: "Swaziland", id: 184 },
                { name: "Sweden", id: 185 },
                { name: "Switzerland", id: 186 },
                { name: "Syrian Arab Republic", id: 187 },
                { name: "Tahiti", id: 188 },
                { name: "Taiwan", id: 189 },
                { name: "Tajikistan", id: 190 },
                { name: "Tanzania", id: 191 },
                { name: "Thailand", id: 192 },
                { name: "Togo", id: 193 },
                { name: "Trinidad and Tobago", id: 194 },
                { name: "Tunisia", id: 195 },
                { name: "Turkey", id: 196 },
                { name: "Turkmenistan", id: 197 },
                { name: "Uganda", id: 198 },
                { name: "Ukraine", id: 199 },
                { name: "Uruguay", id: 200 },
                { name: "Uzbekistan", id: 201 },
                { name: "Vanuatu", id: 202 },
                { name: "Vatican City State", id: 203 },
                { name: "Venezuela", id: 204 },
                { name: "Vietnam", id: 205 },
                { name: "Wallis and Futuna", id: 206 },
                { name: "Yemen", id: 207 },
                { name: "Yugoslavia", id: 208 },
                { name: "Zambia", id: 209 },
                { name: "Zimbabwe", id: 210 },
            ];
    
            $.each(array, function (key, value) {
                $('<option '+ ((value.id==results.id)?'selected':'') +'  value="'+value.id+'">'+value.name+'</option>').appendTo(
                  ".country"
                );
            });
          
        },
        error: function() {}
    })
});

var url = $(location).attr('href');
var segments = url.split('/');
if (segments[3] === "project" && segments[3] === "area-guide") {} else {
    $(function() {
        $("#search_prop").autocomplete({
            minLength: 0,
            source: "https://www.dubaihousing-ae.com/users/autosuggest/",
            focus: function(a, b) {
                return $("#search_prop").val(b.item.label), !1
            },
            select: function(a, b) {
                return $("#search_prop").val(b.item.label), $("#project-id").val(b.item.value), !1
            }
        }).data("ui-autocomplete")._renderItem = function(a, b) {
            return $("<li>").append("<a href='" + b.value + "/'>" + b.label + "</a>").appendTo(a)
        }
    })
    $(document).ready(function() {
        $("#search_prop").on("autocompleteselect", function(a, b) {
            window.location.href = b.item.value + "/"
        })
    })
}
/*var input = document.querySelector(".phone");
window.intlTelInput(input, {
    utilsScript: "js/utils.js",
});
var input = $('.phone');
var phonecodeValue = $('.phonecodeValue');
var iti = intlTelInput(input.get(0))
input.on('countrychange', function(e) {
    phonecodeValue.val(iti.getSelectedCountryData().dialCode)
});*/

/*var input = document.querySelector(".phonenew");
window.intlTelInput(input, {
    utilsScript: "js/utils.js",
});
var input = $('.phonenew');
var phonecodeValuenew = $('.phonecodeValuenew');
var iti = intlTelInput(input.get(0))
input.on('countrychange', function(e) {
    phonecodeValuenew.val(iti.getSelectedCountryData().dialCode)
})*/

function setprojectname(proname) {
    $(".projectname").val(proname);
}

const mediaQueryValue = window.matchMedia('(min-width:1180px)');
if (mediaQueryValue.matches) {
    function GetWhatsappNumber(phone,url) {
        var idval = '#'+url;
        $(idval).html(phone);
    }
}