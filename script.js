$("#time, #angle, #length, #area, #volume, #mass, #energy, #force, #pressure, #temperature").hide();
//data
var data_prefix = ["Yotta", "Zetta", "Exa", "Peta", "Tera", "Giga", "Mega", "Kilo", "Hecto", "Deca", "Unit", 
                    "Deci", "Centi", "Milli", "Micro", "Nano", "Pico", "Femto", "Atto", "Zepto", "Yocto"];
var data_time = ["Centuries", "Decades", "Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"];
var data_angle = ["Radians", "Degrees", "Gradians"];
var data_length = ["Parsec", "Light-Years", "Astronomical-Units", "Nautical-Miles", "Miles", "Meters", "Yards", "Feet", "Inches"];
var data_area = ["Hectares", "Acres", "Square-Meters"];
var data_volume = ["Cubic-Meters", "Barrels", "Gallons", "Quarts", "Liters", "Pints"];
var data_mass = ["Tonnes", "Stones", "Pounds", "Ounces", "Grams", "Carats", "Grains"];
var data_energy = ["Horsepower-Hours", "Kilocalories", "Watt-Hours", "Joules", "Ergs", "Electronvolts"];
var data_force = ["Newtons", "Poundals", "Dynes"];
var data_pressure = ["Bars", "Torrs", "Pascals", "Baryes"];
var data_temperature = ["Celcius", "Fahrenheit", "Kelvin", "Rankine"];
//-------------------------

//inserting function
function insert_units(input, target_id) {
    for (var i = 0;i < input.length;i++) {
        var input_group = $("<div></div>").addClass("input-group flex-nowrap col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pb-2");
        var input_form = $("<input>").attr("id", input[i].toLowerCase()).attr("type", "number").addClass("form-control text-dark").attr("placeholder", "0");
        var input_group_append = $("<div></div>").addClass("input-group-append");
        var input_group_text = $("<span></span>").addClass("input-group-text bg-primary text-dark font-weight-bold border border-primary").text(input[i]);
        var button_id = "#button-" + input[i].toLowerCase();
        var convert_function = "convert_" + input[i].toLowerCase().replace("-","_") + "(this)";
        var input_group_button = $("<button></button>").attr("onclick", convert_function).attr("id", button_id).addClass("btn btn-outline-primary font-weight-bold");
        var input_group_button_icon = $("<i></i>").addClass("fas fa-exchange-alt");
    
        $(target_id).append(input_group);
        $(input_group).append(input_form);
        $(input_group).append(input_group_append);
        $(input_group_append).append(input_group_text);
        $(input_group_append).append(input_group_button);
        $(input_group_button).append(input_group_button_icon);
    }
}
//-------------------------

//inserting data
insert_units(data_prefix, "#prefix");
insert_units(data_time, "#time");
insert_units(data_angle, "#angle");
insert_units(data_length, "#length");
insert_units(data_area, "#area");
insert_units(data_volume, "#volume");
insert_units(data_mass, "#mass");
insert_units(data_energy, "#energy");
insert_units(data_force, "#force");
insert_units(data_pressure, "#pressure");
insert_units(data_temperature, "#temperature");
//-------------------------

//filtering function
function function_filter(input) {
    var selector = "#" + $(input).text().toLowerCase();
    $(input).removeClass("btn-outline-primary").addClass("btn-primary");
    $(input).siblings().removeClass("btn-primary").addClass("btn-outline-primary");
    $(input).parent().next().children().fadeOut("fast");
    $(input).parent().next().children(selector).fadeIn("fast");
}
//-------------------------

//global function
function get_value(input) {
    return $(input).parent().prev().val();
}
//-------------------------

//convert function prefix
function convert_yotta(input) {
    var input_value = get_value(input);
    $("#zetta").val(input_value * 10);
    $("#exa").val(input_value * 100);
    $("#peta").val(input_value * 1000);
    $("#tera").val(input_value * 10000);
    $("#giga").val(input_value * 100000);
    $("#mega").val(input_value * 1000000);
    $("#kilo").val(input_value * 10000000);
    $("#hecto").val(input_value * 100000000);
    $("#deca").val(input_value * 1000000000);
    $("#unit").val(input_value * 10000000000);
    $("#deci").val(input_value * 100000000000);
    $("#centi").val(input_value * 1000000000000);
    $("#milli").val(input_value * 10000000000000);
    $("#micro").val(input_value * 100000000000000);
    $("#nano").val(input_value * 1000000000000000);
    $("#pico").val(input_value * 10000000000000000);
    $("#femto").val(input_value * 100000000000000000);
    $("#atto").val(input_value * 1000000000000000000);
    $("#zepto").val(input_value * 10000000000000000000);
    $("#yocto").val(input_value * 100000000000000000000);
}
function convert_zetta(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 10);
    $("#exa").val(input_value * 10);
    $("#peta").val(input_value * 100);
    $("#tera").val(input_value * 1000);
    $("#giga").val(input_value * 10000);
    $("#mega").val(input_value * 100000);
    $("#kilo").val(input_value * 1000000);
    $("#hecto").val(input_value * 10000000);
    $("#deca").val(input_value * 100000000);
    $("#unit").val(input_value * 1000000000);
    $("#deci").val(input_value * 10000000000);
    $("#centi").val(input_value * 100000000000);
    $("#milli").val(input_value * 1000000000000);
    $("#micro").val(input_value * 10000000000000);
    $("#nano").val(input_value * 100000000000000);
    $("#pico").val(input_value * 1000000000000000);
    $("#femto").val(input_value * 10000000000000000);
    $("#atto").val(input_value * 100000000000000000);
    $("#zepto").val(input_value * 1000000000000000000);
    $("#yocto").val(input_value * 10000000000000000000);
}
function convert_exa(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 100);
    $("#zetta").val(input_value / 10);
    $("#peta").val(input_value * 10);
    $("#tera").val(input_value * 100);
    $("#giga").val(input_value * 1000);
    $("#mega").val(input_value * 10000);
    $("#kilo").val(input_value * 100000);
    $("#hecto").val(input_value * 1000000);
    $("#deca").val(input_value * 10000000);
    $("#unit").val(input_value * 100000000);
    $("#deci").val(input_value * 1000000000);
    $("#centi").val(input_value * 10000000000);
    $("#milli").val(input_value * 100000000000);
    $("#micro").val(input_value * 1000000000000);
    $("#nano").val(input_value * 10000000000000);
    $("#pico").val(input_value * 100000000000000);
    $("#femto").val(input_value * 1000000000000000);
    $("#atto").val(input_value * 10000000000000000);
    $("#zepto").val(input_value * 100000000000000000);
    $("#yocto").val(input_value * 1000000000000000000);
}
function convert_peta(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 1000);
    $("#zetta").val(input_value / 100);
    $("#exa").val(input_value / 10);
    $("#tera").val(input_value * 10);
    $("#giga").val(input_value * 100);
    $("#mega").val(input_value * 1000);
    $("#kilo").val(input_value * 10000);
    $("#hecto").val(input_value * 100000);
    $("#deca").val(input_value * 1000000);
    $("#unit").val(input_value * 10000000);
    $("#deci").val(input_value * 100000000);
    $("#centi").val(input_value * 1000000000);
    $("#milli").val(input_value * 10000000000);
    $("#micro").val(input_value * 100000000000);
    $("#nano").val(input_value * 1000000000000);
    $("#pico").val(input_value * 10000000000000);
    $("#femto").val(input_value * 100000000000000);
    $("#atto").val(input_value * 1000000000000000);
    $("#zepto").val(input_value * 10000000000000000);
    $("#yocto").val(input_value * 100000000000000000);
}
function convert_tera(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 10000);
    $("#zetta").val(input_value / 1000);
    $("#exa").val(input_value / 100);
    $("#peta").val(input_value / 10);
    $("#giga").val(input_value * 10);
    $("#mega").val(input_value * 100);
    $("#kilo").val(input_value * 1000);
    $("#hecto").val(input_value * 10000);
    $("#deca").val(input_value * 100000);
    $("#unit").val(input_value * 1000000);
    $("#deci").val(input_value * 10000000);
    $("#centi").val(input_value * 100000000);
    $("#milli").val(input_value * 1000000000);
    $("#micro").val(input_value * 10000000000);
    $("#nano").val(input_value * 100000000000);
    $("#pico").val(input_value * 1000000000000);
    $("#femto").val(input_value * 10000000000000);
    $("#atto").val(input_value * 100000000000000);
    $("#zepto").val(input_value * 1000000000000000);
    $("#yocto").val(input_value * 10000000000000000);
}
function convert_giga(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 100000);
    $("#zetta").val(input_value / 10000);
    $("#exa").val(input_value / 1000);
    $("#peta").val(input_value / 100);
    $("#tera").val(input_value / 10);
    $("#mega").val(input_value * 10);
    $("#kilo").val(input_value * 100);
    $("#hecto").val(input_value * 1000);
    $("#deca").val(input_value * 10000);
    $("#unit").val(input_value * 100000);
    $("#deci").val(input_value * 1000000);
    $("#centi").val(input_value * 10000000);
    $("#milli").val(input_value * 100000000);
    $("#micro").val(input_value * 1000000000);
    $("#nano").val(input_value * 10000000000);
    $("#pico").val(input_value * 100000000000);
    $("#femto").val(input_value * 1000000000000);
    $("#atto").val(input_value * 10000000000000);
    $("#zepto").val(input_value * 100000000000000);
    $("#yocto").val(input_value * 1000000000000000);
}
function convert_mega(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 1000000);
    $("#zetta").val(input_value / 100000);
    $("#exa").val(input_value / 10000);
    $("#peta").val(input_value / 1000);
    $("#tera").val(input_value / 100);
    $("#giga").val(input_value / 10);
    $("#kilo").val(input_value * 10);
    $("#hecto").val(input_value * 100);
    $("#deca").val(input_value * 1000);
    $("#unit").val(input_value * 10000);
    $("#deci").val(input_value * 100000);
    $("#centi").val(input_value * 1000000);
    $("#milli").val(input_value * 10000000);
    $("#micro").val(input_value * 100000000);
    $("#nano").val(input_value * 1000000000);
    $("#pico").val(input_value * 10000000000);
    $("#femto").val(input_value * 100000000000);
    $("#atto").val(input_value * 1000000000000);
    $("#zepto").val(input_value * 10000000000000);
    $("#yocto").val(input_value * 100000000000000);
}
function convert_kilo(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 10000000);
    $("#zetta").val(input_value / 1000000);
    $("#exa").val(input_value / 100000);
    $("#peta").val(input_value / 10000);
    $("#tera").val(input_value / 1000);
    $("#giga").val(input_value / 100);
    $("#mega").val(input_value / 10);
    $("#hecto").val(input_value * 10);
    $("#deca").val(input_value * 100);
    $("#unit").val(input_value * 1000);
    $("#deci").val(input_value * 10000);
    $("#centi").val(input_value * 100000);
    $("#milli").val(input_value * 1000000);
    $("#micro").val(input_value * 10000000);
    $("#nano").val(input_value * 100000000);
    $("#pico").val(input_value * 1000000000);
    $("#femto").val(input_value * 10000000000);
    $("#atto").val(input_value * 100000000000);
    $("#zepto").val(input_value * 1000000000000);
    $("#yocto").val(input_value * 10000000000000);
}
function convert_hecto(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 100000000);
    $("#zetta").val(input_value / 10000000);
    $("#exa").val(input_value / 1000000);
    $("#peta").val(input_value / 100000);
    $("#tera").val(input_value / 10000);
    $("#giga").val(input_value / 1000);
    $("#mega").val(input_value / 100);
    $("#kilo").val(input_value / 10);
    $("#deca").val(input_value * 10);
    $("#unit").val(input_value * 100);
    $("#deci").val(input_value * 1000);
    $("#centi").val(input_value * 10000);
    $("#milli").val(input_value * 100000);
    $("#micro").val(input_value * 1000000);
    $("#nano").val(input_value * 10000000);
    $("#pico").val(input_value * 100000000);
    $("#femto").val(input_value * 1000000000);
    $("#atto").val(input_value * 10000000000);
    $("#zepto").val(input_value * 100000000000);
    $("#yocto").val(input_value * 1000000000000);
}
function convert_deca(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 1000000000);
    $("#zetta").val(input_value / 100000000);
    $("#exa").val(input_value / 10000000);
    $("#peta").val(input_value / 1000000);
    $("#tera").val(input_value / 100000);
    $("#giga").val(input_value / 10000);
    $("#mega").val(input_value / 1000);
    $("#kilo").val(input_value / 100);
    $("#hecto").val(input_value / 10);
    $("#unit").val(input_value * 10);
    $("#deci").val(input_value * 100);
    $("#centi").val(input_value * 1000);
    $("#milli").val(input_value * 10000);
    $("#micro").val(input_value * 100000);
    $("#nano").val(input_value * 1000000);
    $("#pico").val(input_value * 10000000);
    $("#femto").val(input_value * 100000000);
    $("#atto").val(input_value * 1000000000);
    $("#zepto").val(input_value * 10000000000);
    $("#yocto").val(input_value * 100000000000);
}
function convert_unit(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 10000000000);
    $("#zetta").val(input_value / 1000000000);
    $("#exa").val(input_value / 100000000);
    $("#peta").val(input_value / 10000000);
    $("#tera").val(input_value / 1000000);
    $("#giga").val(input_value / 100000);
    $("#mega").val(input_value / 10000);
    $("#kilo").val(input_value / 1000);
    $("#hecto").val(input_value / 100);
    $("#deca").val(input_value / 10);
    $("#deci").val(input_value * 10);
    $("#centi").val(input_value * 100);
    $("#milli").val(input_value * 1000);
    $("#micro").val(input_value * 10000);
    $("#nano").val(input_value * 100000);
    $("#pico").val(input_value * 1000000);
    $("#femto").val(input_value * 10000000);
    $("#atto").val(input_value * 100000000);
    $("#zepto").val(input_value * 1000000000);
    $("#yocto").val(input_value * 10000000000);
}
function convert_deci(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 100000000000);
    $("#zetta").val(input_value / 10000000000);
    $("#exa").val(input_value / 1000000000);
    $("#peta").val(input_value / 100000000);
    $("#tera").val(input_value / 10000000);
    $("#giga").val(input_value / 1000000);
    $("#mega").val(input_value / 100000);
    $("#kilo").val(input_value / 10000);
    $("#hecto").val(input_value / 1000);
    $("#deca").val(input_value / 100);
    $("#unit").val(input_value / 10);
    $("#centi").val(input_value * 10);
    $("#milli").val(input_value * 100);
    $("#micro").val(input_value * 1000);
    $("#nano").val(input_value * 10000);
    $("#pico").val(input_value * 100000);
    $("#femto").val(input_value * 1000000);
    $("#atto").val(input_value * 10000000);
    $("#zepto").val(input_value * 100000000);
    $("#yocto").val(input_value * 1000000000);
}
function convert_centi(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 1000000000000);
    $("#zetta").val(input_value / 100000000000);
    $("#exa").val(input_value / 10000000000);
    $("#peta").val(input_value / 1000000000);
    $("#tera").val(input_value / 100000000);
    $("#giga").val(input_value / 10000000);
    $("#mega").val(input_value / 1000000);
    $("#kilo").val(input_value / 100000);
    $("#hecto").val(input_value / 10000);
    $("#deca").val(input_value / 1000);
    $("#unit").val(input_value / 100);
    $("#deci").val(input_value / 10);
    $("#milli").val(input_value * 10);
    $("#micro").val(input_value * 100);
    $("#nano").val(input_value * 1000);
    $("#pico").val(input_value * 10000);
    $("#femto").val(input_value * 100000);
    $("#atto").val(input_value * 1000000);
    $("#zepto").val(input_value * 10000000);
    $("#yocto").val(input_value * 100000000);
}
function convert_milli(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 10000000000000);
    $("#zetta").val(input_value / 1000000000000);
    $("#exa").val(input_value / 100000000000);
    $("#peta").val(input_value / 10000000000);
    $("#tera").val(input_value / 1000000000);
    $("#giga").val(input_value / 100000000);
    $("#mega").val(input_value / 10000000);
    $("#kilo").val(input_value / 1000000);
    $("#hecto").val(input_value / 100000);
    $("#deca").val(input_value / 10000);
    $("#unit").val(input_value / 1000);
    $("#deci").val(input_value / 100);
    $("#centi").val(input_value / 10);
    $("#micro").val(input_value * 10);
    $("#nano").val(input_value * 100);
    $("#pico").val(input_value * 1000);
    $("#femto").val(input_value * 10000);
    $("#atto").val(input_value * 100000);
    $("#zepto").val(input_value * 1000000);
    $("#yocto").val(input_value * 10000000);
}
function convert_micro(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 100000000000000);
    $("#zetta").val(input_value / 10000000000000);
    $("#exa").val(input_value / 1000000000000);
    $("#peta").val(input_value / 100000000000);
    $("#tera").val(input_value / 10000000000);
    $("#giga").val(input_value / 1000000000);
    $("#mega").val(input_value / 100000000);
    $("#kilo").val(input_value / 10000000);
    $("#hecto").val(input_value / 1000000);
    $("#deca").val(input_value / 100000);
    $("#unit").val(input_value / 10000);
    $("#deci").val(input_value / 1000);
    $("#centi").val(input_value / 100);
    $("#milli").val(input_value / 10);
    $("#nano").val(input_value * 10);
    $("#pico").val(input_value * 100);
    $("#femto").val(input_value * 1000);
    $("#atto").val(input_value * 10000);
    $("#zepto").val(input_value * 100000);
    $("#yocto").val(input_value * 1000000);
}
function convert_nano(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 1000000000000000);
    $("#zetta").val(input_value / 100000000000000);
    $("#exa").val(input_value / 10000000000000);
    $("#peta").val(input_value / 1000000000000);
    $("#tera").val(input_value / 100000000000);
    $("#giga").val(input_value / 10000000000);
    $("#mega").val(input_value / 1000000000);
    $("#kilo").val(input_value / 100000000);
    $("#hecto").val(input_value / 10000000);
    $("#deca").val(input_value / 1000000);
    $("#unit").val(input_value / 100000);
    $("#deci").val(input_value / 10000);
    $("#centi").val(input_value / 1000);
    $("#milli").val(input_value / 100);
    $("#micro").val(input_value / 10);
    $("#pico").val(input_value * 10);
    $("#femto").val(input_value * 100);
    $("#atto").val(input_value * 1000);
    $("#zepto").val(input_value * 10000);
    $("#yocto").val(input_value * 100000);
}
function convert_pico(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 10000000000000000);
    $("#zetta").val(input_value / 1000000000000000);
    $("#exa").val(input_value / 100000000000000);
    $("#peta").val(input_value / 10000000000000);
    $("#tera").val(input_value / 1000000000000);
    $("#giga").val(input_value / 100000000000);
    $("#mega").val(input_value / 10000000000);
    $("#kilo").val(input_value / 1000000000);
    $("#hecto").val(input_value / 100000000);
    $("#deca").val(input_value / 10000000);
    $("#unit").val(input_value / 1000000);
    $("#deci").val(input_value / 100000);
    $("#centi").val(input_value / 10000);
    $("#milli").val(input_value / 1000);
    $("#micro").val(input_value / 100);
    $("#nano").val(input_value / 10);
    $("#femto").val(input_value * 10);
    $("#atto").val(input_value * 100);
    $("#zepto").val(input_value * 1000);
    $("#yocto").val(input_value * 10000);
}
function convert_femto(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 100000000000000000);
    $("#zetta").val(input_value / 10000000000000000);
    $("#exa").val(input_value / 1000000000000000);
    $("#peta").val(input_value / 100000000000000);
    $("#tera").val(input_value / 10000000000000);
    $("#giga").val(input_value / 1000000000000);
    $("#mega").val(input_value / 100000000000);
    $("#kilo").val(input_value / 10000000000);
    $("#hecto").val(input_value / 1000000000);
    $("#deca").val(input_value / 100000000);
    $("#unit").val(input_value / 10000000);
    $("#deci").val(input_value / 1000000);
    $("#centi").val(input_value / 100000);
    $("#milli").val(input_value / 10000);
    $("#micro").val(input_value / 1000);
    $("#nano").val(input_value / 100);
    $("#pico").val(input_value / 10);
    $("#atto").val(input_value * 10);
    $("#zepto").val(input_value * 100);
    $("#yocto").val(input_value * 1000);
}
function convert_atto(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 1000000000000000000);
    $("#zetta").val(input_value / 100000000000000000);
    $("#exa").val(input_value / 10000000000000000);
    $("#peta").val(input_value / 1000000000000000);
    $("#tera").val(input_value / 100000000000000);
    $("#giga").val(input_value / 10000000000000);
    $("#mega").val(input_value / 1000000000000);
    $("#kilo").val(input_value / 100000000000);
    $("#hecto").val(input_value / 10000000000);
    $("#deca").val(input_value / 1000000000);
    $("#unit").val(input_value / 100000000);
    $("#deci").val(input_value / 10000000);
    $("#centi").val(input_value / 1000000);
    $("#milli").val(input_value / 100000);
    $("#micro").val(input_value / 10000);
    $("#nano").val(input_value / 1000);
    $("#pico").val(input_value / 100);
    $("#femto").val(input_value / 10);
    $("#zepto").val(input_value * 10);
    $("#yocto").val(input_value * 100);
}
function convert_zepto(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 10000000000000000000);
    $("#zetta").val(input_value / 1000000000000000000);
    $("#exa").val(input_value / 100000000000000000);
    $("#peta").val(input_value / 10000000000000000);
    $("#tera").val(input_value / 1000000000000000);
    $("#giga").val(input_value / 100000000000000);
    $("#mega").val(input_value / 10000000000000);
    $("#kilo").val(input_value / 1000000000000);
    $("#hecto").val(input_value / 100000000000);
    $("#deca").val(input_value / 10000000000);
    $("#unit").val(input_value / 1000000000);
    $("#deci").val(input_value / 100000000);
    $("#centi").val(input_value / 10000000);
    $("#milli").val(input_value / 1000000);
    $("#micro").val(input_value / 100000);
    $("#nano").val(input_value / 10000);
    $("#pico").val(input_value / 1000);
    $("#femto").val(input_value / 100);
    $("#atto").val(input_value / 10);
    $("#yocto").val(input_value * 10);
}
function convert_yocto(input) {
    var input_value = get_value(input);
    $("#yotta").val(input_value / 100000000000000000000);
    $("#zetta").val(input_value / 10000000000000000000);
    $("#exa").val(input_value / 1000000000000000000);
    $("#peta").val(input_value / 100000000000000000);
    $("#tera").val(input_value / 10000000000000000);
    $("#giga").val(input_value / 1000000000000000);
    $("#mega").val(input_value / 100000000000000);
    $("#kilo").val(input_value / 10000000000000);
    $("#hecto").val(input_value / 1000000000000);
    $("#deca").val(input_value / 100000000000);
    $("#unit").val(input_value / 10000000000);
    $("#deci").val(input_value / 1000000000);
    $("#centi").val(input_value / 100000000);
    $("#milli").val(input_value / 10000000);
    $("#micro").val(input_value / 1000000);
    $("#nano").val(input_value / 100000);
    $("#pico").val(input_value / 10000);
    $("#femto").val(input_value / 1000);
    $("#atto").val(input_value / 100);
    $("#zepto").val(input_value / 10);
}
//-------------------------

//convert function time
function convert_centuries(input) {
    var input_value = get_value(input);
    $("#decades").val(input_value * 10);
    $("#years").val(input_value * 100);
    $("#months").val(input_value * 100 * 12);
    $("#weeks").val(input_value * 100 * 12 * 4);
    $("#days").val(input_value * 100 * 12 * (30 + 0.416666666666667));
    $("#hours").val(input_value * 100 * 12 * (30 + 0.416666666666667) * 24);
    $("#minutes").val(input_value * 100 * 12 * (30 + 0.416666666666667) * 24 * 60);
    $("#seconds").val(input_value * 100 * 12 * (30 + 0.416666666666667) * 24 * 60 * 60);
}
function convert_decades(input) {
    var input_value = get_value(input);
    $("#centuries").val(input_value / 10);
    $("#years").val(input_value * 10);
    $("#months").val(input_value * 10 * 12);
    $("#weeks").val(input_value * 10 * 12 * 4);
    $("#days").val(input_value * 10 * 12 * (30 + 0.416666666666667));
    $("#hours").val(input_value * 10 * 12 * (30 + 0.416666666666667) * 24);
    $("#minutes").val(input_value * 10 * 12 * (30 + 0.416666666666667) * 24 * 60);
    $("#seconds").val(input_value * 10 * 12 * (30 + 0.416666666666667) * 24 * 60 * 60);
}
function convert_years(input) {
    var input_value = get_value(input);
    $("#centuries").val(input_value / 100);
    $("#decades").val(input_value / 10);
    $("#months").val(input_value * 12);
    $("#weeks").val(input_value * 12 * 4);
    $("#days").val(input_value * 12 * (30 + 0.416666666666667));
    $("#hours").val(input_value * 12 * (30 + 0.416666666666667) * 24);
    $("#minutes").val(input_value * 12 * (30 + 0.416666666666667) * 24 * 60);
    $("#seconds").val(input_value * 12 * (30 + 0.416666666666667) * 24 * 60 * 60);
}
function convert_months(input) {
    var input_value = get_value(input);
    $("#centuries").val(input_value / (100 * 12));
    $("#decades").val(input_value / (10 * 12));
    $("#years").val(input_value / 12);
    $("#weeks").val(input_value * 4);
    $("#days").val(input_value * 30);
    $("#hours").val(input_value * (30 + 0.416666666666667) * 24);
    $("#minutes").val(input_value * (30 + 0.416666666666667) * 24 * 60);
    $("#seconds").val(input_value * (30 + 0.416666666666667) * 24 * 60 * 60);
}
function convert_weeks(input) {
    var input_value = get_value(input);
    $("#centuries").val(input_value / (100 * 12 * 4));
    $("#decades").val(input_value / (10 * 12 * 4));
    $("#years").val(input_value / (12 * 4));
    $("#months").val(input_value / 4);
    $("#days").val(input_value * 7);
    $("#hours").val(input_value * 7 * 24);
    $("#minutes").val(input_value * 7 * 24 * 60);
    $("#seconds").val(input_value * 7 * 24 * 60 * 60);
}
function convert_days(input) {
    var input_value = get_value(input);
    $("#centuries").val(input_value / (100 * 12 * 30));
    $("#decades").val(input_value / (10 * 12 * 30));
    $("#years").val(input_value / (12 * 30));
    $("#months").val(input_value / 30);
    $("#weeks").val(input_value / 7);
    $("#hours").val(input_value * 24);
    $("#minutes").val(input_value * 24 * 60);
    $("#seconds").val(input_value * 24 * 60 * 60);
}
function convert_hours(input) {
    var input_value = get_value(input);
    $("#centuries").val(input_value / (100 * 12 * 30 * 24));
    $("#decades").val(input_value / (10 * 12 * 30 * 24));
    $("#years").val(input_value / (12 * 30 * 24));
    $("#months").val(input_value / (30 * 24));
    $("#weeks").val(input_value / (7 * 24));
    $("#days").val(input_value / 24);
    $("#minutes").val(input_value * 60);
    $("#seconds").val(input_value * 60 * 60);
}
function convert_minutes(input) {
    var input_value = get_value(input);
    $("#centuries").val(input_value / (100 * 12 * 30 * 24 * 60));
    $("#decades").val(input_value / (10 * 12 * 30 * 24 * 60));
    $("#years").val(input_value / (12 * 30 * 24 * 60));
    $("#months").val(input_value / (30 * 24 * 60));
    $("#weeks").val(input_value / (7 * 24 * 60));
    $("#days").val(input_value / (24 * 60));
    $("#hours").val(input_value / 60);
    $("#seconds").val(input_value * 60);
}
function convert_seconds(input) {
    var input_value = get_value(input);
    $("#centuries").val(input_value / (100 * 12 * 30 * 24 * 60 * 60));
    $("#decades").val(input_value / (10 * 12 * 30 * 24 * 60 * 60));
    $("#years").val(input_value / (12 * 30 * 24 * 60 * 60));
    $("#months").val(input_value / (30 * 24 * 60 * 60));
    $("#weeks").val(input_value / (7 * 24 * 60 * 60));
    $("#days").val(input_value / (24 * 60 * 60));
    $("#hours").val(input_value / (60 * 60));
    $("#minutes").val(input_value / 60);
}
//-------------------------

//convert function angle
function convert_radians(input) {
    var input_value = get_value(input);
    $("#degrees").val(input_value * (180/3.14));
    $("#gradians").val(input_value * (200/3.14));
}
function convert_degrees(input) {
    var input_value = get_value(input);
    $("#radians").val(input_value * (3.14/180));
    $("#gradians").val(input_value * (200/180));
}
function convert_gradians(input) {
    var input_value = get_value(input);
    $("#radians").val(input_value * (3.14/200));
    $("#degrees").val(input_value * (180/200));
}
//-------------------------

//convert function length
function convert_parsec(input) {
    var input_value = get_value(input);
    $("#light-years").val(input_value * 3.26156);
    $("#astronomical-units").val(input_value * 206265);
    $("#nautical-miles").val(input_value * 1.666e+13);
    $("#miles").val(input_value * 1.917e+13);
    $("#meters").val(input_value * 3.086e+16);
    $("#yards").val(input_value * 3.375e+16);
    $("#feet").val(input_value * 1.012e+17);
    $("#inches").val(input_value * 1.215e+18);
}
function convert_light_year(input) {
    var input_value = get_value(input);
    $("#parsec").val(input_value / 3.26156);
    $("#astronomical-units").val(input_value * 63241.1);
    $("#nautical-miles").val(input_value * 5.108e+12);
    $("#miles").val(input_value * 5.879e+12);
    $("#meters").val(input_value * 9.461e+15);
    $("#yards").val(input_value * 1.035e+16);
    $("#feet").val(input_value * 3.104e+16);
    $("#inches").val(input_value * 3.725e+17);
}
function convert_astronomical_units(input) {
    var input_value = get_value(input);
    $("#parsec").val(input_value / 206265);
    $("#light-years").val(input_value / 63241);
    $("#nautical-miles").val(input_value * 8.078e+7);
    $("#miles").val(input_value * 9.296e+7);
    $("#meters").val(input_value * 1.496e+11);
    $("#yards").val(input_value * 1.636e+11);
    $("#feet").val(input_value * 4.908e+11);
    $("#inches").val(input_value * 5.89e+12);
}
function convert_nautical_miles(input) {
    var input_value = get_value(input);
    $("#parsec").val(input_value / 1.666e+13);
    $("#light-years").val(input_value / 5.108e+12);
    $("#astronomical-units").val(input_value / 8.078e+7);
    $("#miles").val(input_value * 1.151);
    $("#meters").val(input_value * 1852);
    $("#yards").val(input_value * 2025);
    $("#feet").val(input_value * 6076);
    $("#inches").val(input_value * 72913);
}
function convert_miles(input) {
    var input_value = get_value(input);
    $("#parsec").val(input_value / 1.917e+13);
    $("#light-years").val(input_value / 5.879e+12);
    $("#astronomical-units").val(input_value / 9.296e+7);
    $("#nautical-miles").val(input_value / 1.151);
    $("#meters").val(input_value * 1609);
    $("#yards").val(input_value * 1760);
    $("#feet").val(input_value * 5280);
    $("#inches").val(input_value * 63360);
}
function convert_meters(input) {
    var input_value = get_value(input);
    $("#parsec").val(input_value / 3.086e+16);
    $("#light-years").val(input_value / 9.461e+15);
    $("#astronomical-units").val(input_value / 1.496e+11);
    $("#nautical-miles").val(input_value / 1852);
    $("#miles").val(input_value / 1609);
    $("#yards").val(input_value * 1.094);
    $("#feet").val(input_value * 3.281);
    $("#inches").val(input_value * 39.37);
}
function convert_yards(input) {
    var input_value = get_value(input);
    $("#parsec").val(input_value / 3.375e+16);
    $("#light-years").val(input_value / 1.035e+16);
    $("#astronomical-units").val(input_value / 1.636e+11);
    $("#nautical-miles").val(input_value / 2025);
    $("#miles").val(input_value / 1760);
    $("#meters").val(input_value / 1.094);
    $("#feet").val(input_value * 3);
    $("#inches").val(input_value * 36);
}
function convert_feet(input) {
    var input_value = get_value(input);
    $("#parsec").val(input_value / 1.012e+17);
    $("#light-years").val(input_value / 3.104e+16);
    $("#astronomical-units").val(input_value / 4.908e+11);
    $("#nautical-miles").val(input_value / 6076);
    $("#miles").val(input_value / 5280);
    $("#meters").val(input_value / 3.281);
    $("#yards").val(input_value / 3);
    $("#inches").val(input_value * 12);
}
function convert_inches(input) {
    var input_value = get_value(input);
    $("#parsec").val(input_value / 1.215e+18);
    $("#light-years").val(input_value / 3.725e+17);
    $("#astronomical-units").val(input_value / 5.89e+12);
    $("#nautical-miles").val(input_value / 72913);
    $("#miles").val(input_value / 63360);
    $("#meters").val(input_value / 39.37);
    $("#yards").val(input_value / 36);
    $("#feet").val(input_value / 12);
}
//-------------------------

//function convert area
function convert_hectares(input) {
    var input_value = get_value(input);
    $("#acres").val(input_value * 2.471);
    $("#square-meters").val(input_value * 10000);
}
function convert_acres(input) {
    var input_value = get_value(input);
    $("#hectares").val(input_value / 2.471);
    $("#square-meters").val(input_value * 4047);
}
function convert_square_meters(input) {
    var input_value = get_value(input);
    $("#hectares").val(input_value / 10000);
    $("#acres").val(input_value / 4047);
}
//-------------------------

//function convert volume
function convert_cubic_meters(input) {
    var input_value = get_value(input);
    $("#barrels").val(input_value * 6.29);
    $("#gallons").val(input_value * 220);
    $("#quarts").val(input_value * 880);
    $("#liters").val(input_value * 1000);
    $("#pints").val(input_value * 1760);
}
function convert_barrels(input) {
    var input_value = get_value(input);
    $("#cubic-meters").val(input_value / 6.29);
    $("#gallons").val(input_value * 34.972);
    $("#quarts").val(input_value * 140);
    $("#liters").val(input_value * 159);
    $("#pints").val(input_value * 280);
}
function convert_gallons(input) {
    var input_value = get_value(input);
    $("#cubic-meters").val(input_value / 220);
    $("#barrels").val(input_value / 34.972);
    $("#quarts").val(input_value * 4);
    $("#liters").val(input_value * 4.546);
    $("#pints").val(input_value * 8);
}
function convert_quarts(input) {
    var input_value = get_value(input);
    $("#cubic-meters").val(input_value / 880);
    $("#barrels").val(input_value / 140);
    $("#gallons").val(input_value / 4);
    $("#liters").val(input_value * 1.137);
    $("#pints").val(input_value * 2);
}
function convert_liters(input) {
    var input_value = get_value(input);
    $("#cubic-meters").val(input_value / 1000);
    $("#barrels").val(input_value / 159);
    $("#gallons").val(input_value / 4.546);
    $("#quarts").val(input_value / 1.137);
    $("#pints").val(input_value * 1.76);
}
function convert_pints(input) {
    var input_value = get_value(input);
    $("#cubic-meters").val(input_value / 1760);
    $("#barrels").val(input_value / 280);
    $("#gallons").val(input_value / 8);
    $("#quarts").val(input_value / 2);
    $("#liters").val(input_value / 1.76);
}
//-------------------------

//function convert mass
function convert_tonnes(input) {
    var input_value = get_value(input);
    $("#stones").val(input_value * 157);
    $("#pounds").val(input_value * 2205);
    $("#ounces").val(input_value * 35274);
    $("#grams").val(input_value * 1e+6);
    $("#carats").val(input_value * 5e+6);
    $("#grains").val(input_value * 1.543e+7);
}
function convert_stones(input) {
    var input_value = get_value(input);
    $("#tonnes").val(input_value / 157);
    $("#pounds").val(input_value * 14);
    $("#ounces").val(input_value * 224);
    $("#grams").val(input_value * 6350);
    $("#carats").val(input_value * 31751);
    $("#grains").val(input_value * 98000);
}
function convert_pounds(input) {
    var input_value = get_value(input);
    $("#tonnes").val(input_value / 2205);
    $("#stones").val(input_value / 14);
    $("#ounces").val(input_value * 16);
    $("#grams").val(input_value * 454);
    $("#carats").val(input_value * 2268);
    $("#grains").val(input_value * 7000);
}
function convert_ounces(input) {
    var input_value = get_value(input);
    $("#tonnes").val(input_value / 35274);
    $("#stones").val(input_value / 224);
    $("#pounds").val(input_value / 16);
    $("#grams").val(input_value * 28.35);
    $("#carats").val(input_value * 142);
    $("#grains").val(input_value * 438);
}
function convert_grams(input) {
    var input_value = get_value(input);
    $("#tonnes").val(input_value / 1e+6);
    $("#stones").val(input_value / 6350);
    $("#pounds").val(input_value / 454);
    $("#ounces").val(input_value / 28.35);
    $("#carats").val(input_value * 5);
    $("#grains").val(input_value * 15.432);
}
function convert_carats(input) {
    var input_value = get_value(input);
    $("#tonnes").val(input_value / 5e+6);
    $("#stones").val(input_value / 31751);
    $("#pounds").val(input_value / 2268);
    $("#ounces").val(input_value / 142);
    $("#grams").val(input_value / 5);
    $("#grains").val(input_value * 3.086);
}
function convert_grains(input) {
    var input_value = get_value(input);
    $("#tonnes").val(input_value / 1.543e+7);
    $("#stones").val(input_value / 98000);
    $("#pounds").val(input_value / 7000);
    $("#ounces").val(input_value / 438);
    $("#grams").val(input_value / 15.432);
    $("#carats").val(input_value / 3.086);
}
//-------------------------

//functio convert energy
function convert_horsepower_hours(input) {
    var input_value = get_value(input);
    $("#kilocalories").val(input_value * 641186.48);
    $("#watt-hours").val(input_value * 745.70);
    $("#joules").val(input_value * 2684519.54);
    $("#ergs").val(input_value * 26845195376862.20);
    $("#electronvolts").val(input_value * 16755454853800047069364224);
}
function convert_kilocalories(input) {
    var input_value = get_value(input);
    $("#horsepower-hours").val(input_value / 641186.48);
    $("#watt-hours").val(input_value * 1.162);
    $("#joules").val(input_value * 4184);
    $("#ergs").val(input_value * 4.184e+10);
    $("#electronvolts").val(input_value * 2.611e+22);
}
function convert_watt_hours(input) {
    var input_value = get_value(input);
    $("#horsepower-hours").val(input_value / 745.70);
    $("#kilocalories").val(input_value / 1.162);
    $("#joules").val(input_value * 3600);
    $("#ergs").val(input_value * 3.6e+10);
    $("#electronvolts").val(input_value * 2.247e+22);
}
function convert_joules(input) {
    var input_value = get_value(input);
    $("#horsepower-hours").val(input_value / 2684519.54);
    $("#kilocalories").val(input_value / 4184);
    $("#watt-hours").val(input_value / 3600);
    $("#ergs").val(input_value * 1e+7);
    $("#electronvolts").val(input_value * 6.242e+18);
}
function convert_ergs(input) {
    var input_value = get_value(input);
    $("#horsepower-hours").val(input_value / 26845195376862.20);
    $("#kilocalories").val(input_value / 4.184e+10);
    $("#watt-hours").val(input_value / 3.6e+10);
    $("#joules").val(input_value / 1e+7);
    $("#electronvolts").val(input_value * 6.242e+11);
}
function convert_electronvolts(input) {
    var input_value = get_value(input);
    $("#horsepower-hours").val(input_value / 16755454853800047069364224);
    $("#kilocalories").val(input_value / 2.611e+22);
    $("#watt-hours").val(input_value / 2.247e+22);
    $("#joules").val(input_value / 6.242e+18);
    $("#ergs").val(input_value / 6.242e+11);
}
//-------------------------

//function convert force
function convert_newtons(input) {
    var input_value = get_value(input);
    $("#poundals").val(input_value * 7.233);
    $("#dynes").val(input_value * 100000);
}
function convert_poundals(input) {
    var input_value = get_value(input);
    $("#newtons").val(input_value / 7.233);
    $("#dynes").val(input_value * 13825);
}
function convert_dynes(input) {
    var input_value = get_value(input);
    $("#newtons").val(input_value / 100000);
    $("#poundals").val(input_value / 13825);
}
//-------------------------

//function convert pressure
function convert_bars(input) {
    var input_value = get_value(input);
    $("#torrs").val(input_value * 750);
    $("#pascals").val(input_value * 100000);
    $("#baryes").val(input_value * 1e+6);
}
function convert_torrs(input) {
    var input_value = get_value(input);
    $("#bars").val(input_value / 750);
    $("#pascals").val(input_value * 133);
    $("#baryes").val(input_value * 1333);
}
function convert_pascals(input) {
    var input_value = get_value(input);
    $("#bars").val(input_value / 750);
    $("#torrs").val(input_value / 133);
    $("#baryes").val(input_value * 10);
}
function convert_baryes(input) {
    var input_value = get_value(input);
    $("#bars").val(input_value / 750);
    $("#torrs").val(input_value / 133);
    $("#pascals").val(input_value / 10);
}
//-------------------------

//function convert temperature
function convert_celcius(input) {
    var input_value = get_value(input);
    $("#fahrenheit").val((input_value * (9/5)) + 32);
    $("#kelvin").val(input_value + 273.15);
    $("#rankine").val((input_value * (9/5)) + 491.67);
}
function convert_fahrenheit(input) {
    var input_value = get_value(input);
    $("#celcius").val((input_value - 32) * (5/9));
    $("#kelvin").val(((input_value - 32) * (5/9)) + 273.15);
    $("#rankine").val(input_value + 459.67);
}
function convert_kelvin(input) {
    var input_value = get_value(input);
    $("#celcius").val(input_value - 273.15);
    $("#fahrenheit").val(((input_value - 273.15) * (5/9)) + 32);
    $("#rankine").val(input_value * 1.8);
}
function convert_rankine(input) {
    var input_value = get_value(input);
    $("#celcius").val((input_value - 491.67) * (5/9));
    $("#fahrenheit").val(input_value - 459.67);
    $("#kelvin").val(input_value * (5/9));
}
//-------------------------