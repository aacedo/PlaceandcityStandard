// JavaScript Document "map_2"

// Modal when load page


var SC = [];
var currGroup;
var areasdrawn = 0;
var name_groups =[];
var number = 0;
var spatialyes = 0;
var contador = 0;

function startAll() {


    $("#name_actual_group").select2({
        tags: [],
        tokenSeparators: [","]
    });


    $('#plus_group').click(function () {
        if (!$('#actual_group').val()&& (name_groups.length === 0)){
            alert(translator.getKeyLanguageValue("general7"));
        }
        else if(!$('#actual_group').val() && (name_groups.length > 0)){
            $("#continuar1").removeClass("hidden").addClass("show");
        }
        else{
            name_groups.push($('#actual_group').val());
            $('#actual_group').val("");
            namesgroups();
            $("#your_groups_label").removeClass("hidden").addClass("show");
            $("#continuar1").removeClass("hidden").addClass("show");
        }

    });


    function namesgroups() {
        const totalGroups = name_groups.length;
        if (totalGroups > 0) {
            const newGroup = name_groups[totalGroups - 1];
            const removeLink = '<a class="button-remove glyphicon glyphicon-trash" style="margin-left: 10px;"></a>'
            const entry = "<li>" + newGroup + removeLink + "</li>"
            $("#group_list").append(entry)
            contador++;
        }
    }

    function removeGroupByName(name) {
        name_groups = name_groups.filter((group) => group !== name);
        contador--;
        if (name_groups.length === 0) {
            contador = 0;
            $("#continuar1").removeClass("show").addClass("hidden");
            $("#your_groups_label").removeClass("show").addClass("hidden");
        }
    }

    $(document).on('click', ".button-remove", function(e){
        const entry = $(this).parent();
        const nameGroup = entry[0].innerText;
        removeGroupByName(nameGroup);
        entry.remove();
    });

    $( "#actual_group" ).keypress(function( event ) {
        if (!$('#actual_group').val()){
            if (contador===0){
                $("#continuar1").removeClass("show").addClass("hidden");
            }
            else {
                $("#continuar1").removeClass("hidden").addClass("show");
            }
        }
    });

    $("#actual_group").keyup((event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            $("#plus_group").click();
        }
    })

    $('#submit_name_group').click(function () {
        //name_groups = $('#name_actual_group').val();
        if (name_groups.length > 0) {
            $("#specifications").toggleClass("hidden show");
            $("#groups_done").toggleClass("hidden show");
            namegroup();

            progressBar.set(30);

            $("#group_name_nature").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);

            $('#myModal3').modal('show');

            currGroup = {
                name: name_groups[number],
                areas: [],
                nature: 0
            };
            $("#pepe").toggleClass("hidden show");
            $("#pepa").toggleClass("hidden show");
            startMapComponents();
        }
        else {
            alert(  translator.getKeyLanguageValue("general7"));
        }
    });


    function namegroup() {
        var tete2 = name_groups[number];

        $("#group_name_nature").html(translator.getKeyLanguageValue("map2-3"));
        var replaced = $("#group_name_nature").html().replace('hola', '<b>' + tete2 + '</b>');
        $("#group_name_nature").html(replaced);
        $("#textchange").html(translator.getKeyLanguageValue("map2-5"));
        $("#textchange_nature").html(translator.getKeyLanguageValue("map2-4"));
        var replaced1 = $("#textchange").html().replace('X', '<b>' + tete2 + '</b>');
        var replaced2 = $("#textchange_nature").html().replace('X', '<b style="font-size: 18px">' + tete2 + '</b>');
        $("#textchange").html(replaced1);
        $("#textchange_nature").html(replaced2);


    };


    $('#spatial_dimension').click(function () {

        $("#other_name").removeClass().addClass("hidden");


        if ($("#nature").val() == "0") {
            alert(translator.getKeyLanguageValue("general8"));
        }


        if ($("#nature").val() != "19") {
            currGroup.nature = $('#nature').val();
            drawAreas();
        }
        else {
            if (!$("#other").val()) {
                alert(translator.getKeyLanguageValue("general9"));
            }
            else {
                currGroup.nature = $('#other').val();
                $("#SC_group").removeClass().addClass("show");
                drawAreas();
            }
        }

        function drawAreas() {

            $("#nature").val("0");
            $('#other').val("");

            if ($("input[name=spatial]:checked").val() == "true") {

                $("#title_let_draw").html(translator.getKeyLanguageValue("map2-26"));
                var replacetitle = $("#title_let_draw").html().replace('X', '<b>' + name_groups[number] + '</b>');
                $("#title_let_draw").html(replacetitle);
                $("#let_draw").html(translator.getKeyLanguageValue("map2-26a"));
                var replaceddraw = $("#let_draw").html().replace('X', '<b>' + name_groups[number] + '</b>');
                $("#let_draw").html(replaceddraw);
                $("#draw").toggleClass("hidden show");
                buttonDraw.prop('disabled', false);
                $('#button-freguesia').prop('disabled', false);
                $('#button-freguesiaxs').prop('disabled', false);


                $("#SC_group").toggleClass("hidden show");
                $("#specifications").toggleClass("hidden show");
                spatialyes = spatialyes + 1;
            }
            else {

                SC.push(currGroup);

                if (number == name_groups.length - 1) {
                    if (spatialyes != 0) {
                        showAllGroups();
                        $("#select_group").toggleClass("hidden show");
                        $("#SC_group").toggleClass("hidden show");
                    }
                    else {

                        // var id = util.getFromLocalStorage(util.interPageDataKey);

                        var data2 = {
                            type: "sc",
                            id: id,
                            groups: SC
                        };

                        app.setSC(id, data2, function (response) {
                            if (response === false) {
                                alert(translator.getKeyLanguageValue("general1"));
                            }
                            else {
                                util.redirectToPage({
                                    url: "finish.html",
                                    payload: {id:response.id, center: mapCenter}
                                });
                            }
                        });




                    }
                }
                else {
                    number = number + 1;
                    namegroup();
                    currGroup = {
                        name: name_groups[number],
                        areas: [],
                        nature: 0
                    };
                    $("#specifications").removeClass().addClass("show");
                    $("#another_draw").removeClass().addClass("hidden");
                    $("#SC_group").removeClass().addClass("hidden");
                    $("#group_name_nature").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
                    $("input[name=spatial][value=true]").prop('checked', true);


                }

            }
        };


    });

    $('#nature').change(function () {
        if ($("#nature").val() == "19") {
            if (anterior != "19") {
                $("#SC_group").removeClass().addClass("hidden");
            }
            $("#other_name").removeClass().addClass("show");
            var anterior = $('#nature').val();
        }
        else if(($("#nature").val() == "0")){
            $("#SC_group").removeClass().addClass("hidden");
            $("#other_name").removeClass().addClass("hidden");


        }
        else    {


            $("#other_name").removeClass().addClass("hidden");
            $("#SC_group").removeClass().addClass("show");
            var anterior = $('#nature').val();
        }
    });

    $('#nature_write').click(function () {

        if ($("#nature").val() == "19") {
            if (!$("#other").val()) {
                // alert("Please, introduce the nature of the group.")
                alert(translator.getKeyLanguageValue("general9"));
            }
            else {
                $("#SC_group").removeClass().addClass("show");
            }
        }
    });

    $('#bonding_bridging_done').click(function () {


        var scvalidationbondingbridging = $('[name=bosc1]:checked,[name=bosc2]:checked,[name=brsc1]:checked,[name=brsc2]:checked');
        if (scvalidationbondingbridging.length < 4) {
            alert(translator.getKeyLanguageValue("general5"));
            return;
        }

        $("#another_draw").toggleClass("hidden show");
        $("#questions_bonding_bridging").toggleClass("hidden show");
        areasdrawn = areasdrawn + 1;
        counterAreasName();
        buttonDraw.prop('disabled', false);
        buttonDelete.prop('disabled', true);
        $('#button-freguesia').prop('disabled', false);
        $('#button-freguesiaxs').prop('disabled', false);
        $("#finish_button").removeClass().addClass("show");
        map.setZoom(zoommap);


        var polygonData = {
            type: "sca",
            layer: L.geoJson(drawnItems.toGeoJSON()),
            livingIn: ($("input[name=live]:checked").val()) === 'true',
            socialCapital: {
                bosc1: parseInt($("input[name=bosc1]:checked").val()),
                bosc2: parseInt($("input[name=bosc2]:checked").val()),
                brsc1: parseInt($("input[name=brsc1]:checked").val()),
                brsc2: parseInt($("input[name=brsc2]:checked").val()),
            observationssc: ($('#observationssc').val())
            }
        };

        $("input[name=bosc1]").prop('checked', false);
        $("input[name=bosc2]").prop('checked', false);
        $("input[name=brsc1]").prop('checked', false);
        $("input[name=brsc2]").prop('checked', false);
        $("#observationssc").val("");



        currGroup.areas.push(polygonData);

        map.removeLayer(drawnItems);
        drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
        map.addLayer(polygonData.layer);

    });


    var group = new L.featureGroup();

    $('#button_more_areas').click(function () {
        areasdrawn = 0;
        $("#finish_button").removeClass().addClass("hidden");
        map.removeLayer(drawnItems);
        //L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {}).addTo(map);

        currGroup.position = number;
        SC.push(currGroup);

        for (var j = 0; j < currGroup.areas.length; j++) {
            map.removeLayer(currGroup.areas[j].layer);
        }

        if (number == name_groups.length - 1) {
            showAllGroups();
            $("#select_group").toggleClass("hidden show");
            $("#another_draw").toggleClass("hidden show");

            progressBar.set(70);
        }
        else {
            number = number + 1;
            namegroup();
            currGroup = {
                name: name_groups[number],
                areas: [],
                nature: 0
            };
            drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);

            $("#specifications").removeClass().addClass("show");
            $("#another_draw").removeClass().addClass("hidden");
            buttonDelete.prop('disabled', true);
            buttonDraw.prop('disabled', true);
        }
    });

    var highlightedGroup = null;

    function showAllGroups() {
        buttonDraw.prop('disabled', true);
        buttonDelete.prop('disabled', true);
        $('#button-freguesia').prop('disabled', true);
        $('#button-freguesiaxs').prop('disabled', true);
        $("#specifications").removeClass().addClass("hidden");


        var group = new L.featureGroup();
        for (var i = 0; i < SC.length; i++) {
            var cGroup = SC[i];
            for (var j = 0; j < cGroup.areas.length; j++) {
                cGroup.areas[j].layer.setStyle({color: '#6000ff'});
                group.addLayer(cGroup.areas[j].layer);
                map.addLayer(cGroup.areas[j].layer);
            }
            // Add to radio

            if (cGroup.areas.length != 0) {
                $('#radios').append('<div class="radio"><label><input type="radio" name="sc_groups" value="' + i + '"/>' + translator.getKeyLanguageValue("general19") + ": " + cGroup.name + '</label></div>');
            }
        }

        $("input[name='sc_groups']").change(function () {
            if (highlightedGroup != null) {
                for (var j = 0; j < highlightedGroup.areas.length; j++) {
                    highlightedGroup.areas[j].layer.setStyle({color: '#6000ff'});
                }
            }
            var index = parseInt($("input[name=sc_groups]:checked").val());
            highlightedGroup = SC[index];
            for (var j = 0; j < highlightedGroup.areas.length; j++) {
                highlightedGroup.areas[j].layer.setStyle({color: '#FF0000'});
            }
        });

        map.fitBounds(group.getBounds(), null);

        $('#choose_group').click(function () {

            if ($('input[name=sc_groups]:checked').length) {


                buttonDraw.prop('disabled', true);
                buttonDelete.prop('disabled', true);
                $('#button-freguesia').prop('disabled', true);
                $('#button-freguesiaxs').prop('disabled', true);
                $("#sc_done").toggleClass("hidden show");
                $("#select_group").toggleClass("hidden show");

                for (var i = 0; i < SC.length; i++) {
                    for (var j = 0; j < SC[i].areas.length; j++) {
                        map.removeLayer(SC[i].areas[j].layer);
                    }
                }

                var group = new L.featureGroup();

                for (var j = 0; j < highlightedGroup.areas.length; j++) {
                    highlightedGroup.areas[j].layer.setStyle({color: '#FF0000'});
                    group.addLayer(highlightedGroup.areas[j].layer);
                    map.addLayer(highlightedGroup.areas[j].layer);
                }
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
                map.fitBounds(group.getBounds(), null);


                var title = $("#change").html().replace('X', "<b>" + highlightedGroup.name + "</b>");
                $("#change").html(title);
                var soc1re = $("#soc1").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#soc1").html(soc1re);
                var soc2re = $("#soc2").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#soc2").html(soc2re);
                var soc3re = $("#soc3").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#soc3").html(soc3re);
                var n1re = $("#n1").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#n1").html(n1re);
                var n2re = $("#n2").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#n2").html(n2re);
                var n3re = $("#n3").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#n3").html(n3re);
                var cee1re = $("#cee1").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#cee1").html(cee1re);
                var cee2re = $("#cee2").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#cee2").html(cee2re);
                var cee3re = $("#cee3").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#cee3").html(cee3re);
                var cp1re = $("#cp1").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#cp1").html(cp1re);
                var cp2re = $("#cp2").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#cp2").html(cp2re);
                var cp3re = $("#cp3").html().replace('Y', "<b>" + highlightedGroup.name + "</b>");
                $("#cp3").html(cp3re);
            }
            else {
                alert(translator.getKeyLanguageValue("general15"));
            }

        });
    }


    $('#questions-sc').click(function () {


        var scvalidation = $('[name=soc1]:checked,[name=soc2]:checked,[name=soc3]:checked,[name=n1]:checked,[name=n2]:checked,[name=n3]:checked,[name=cee1]:checked,[name=cee2]:checked,[name=cee3]:checked,[name=cp1]:checked,[name=cp2]:checked,[name=cp3]:checked');
        if (scvalidation.length < 12) {
            // alert("Please, answer all the questions");
            alert(translator.getKeyLanguageValue("general5"));
            return;
        }


        highlightedGroup.dimensions = {
            sc1: parseInt($("input[name=soc1]:checked").val()),
            sc2: parseInt($("input[name=soc2]:checked").val()),
            sc3: parseInt($("input[name=soc3]:checked").val()),
            n1: parseInt($("input[name=n1]:checked").val()),
            n2: parseInt($("input[name=n2]:checked").val()),
            n3: parseInt($("input[name=n3]:checked").val()),
            cee1: parseInt($("input[name=cee1]:checked").val()),
            cee2: parseInt($("input[name=cee2]:checked").val()),
            cee3: parseInt($("input[name=cee3]:checked").val()),
            cp1: parseInt($("input[name=cp1]:checked").val()),
            cp2: parseInt($("input[name=cp2]:checked").val()),
            cp3: parseInt($("input[name=cp3]:checked").val())
        };

        for (var i = 0; i < SC.length; i++) {
            var cGroup = SC[i];
            for (var j = 0; j < cGroup.areas.length; j++) {
                cGroup.areas[j].layer = /*JSON.stringify(*/cGroup.areas[j].layer.toGeoJSON()/*)*/;
            }
        }

        // var id = util.getFromLocalStorage(util.interPageDataKey);

        var data2 = {
            type: "sc",
            groups: SC
        };


        app.setSC(id, data2, function (response) {
            if (response === false) {
                alert(translator.getKeyLanguageValue("general1"));
            }
            else {
                progressBar.set(90);
                util.redirectToPage({
                    url: "finish.html",
                    payload: {id:response.id, center: mapCenter}
                });
            }
        });
    });

 //Freguesia buttons
    $('#d-ajuda').click(function () {
        map.setView([38.711402, -9.199039], 15);
    });

    $('#d-alcantara').click(function () {
        map.setView([38.710676, -9.182990], 15);
    });

    $('#d-alvalade').click(function () {
        map.setView([38.753182, -9.151691], 15);
    });

    $('#d-areeiro').click(function () {
        map.setView([38.742261, -9.133480], 15);
    });

    $('#d-arroios').click(function () {
        map.setView([38.727819, -9.140717], 15);
    });

    $('#d-avenidas').click(function () {
        map.setView([38.739568, -9.149152], 15);
    });

    $('#d-beato').click(function () {
        map.setView([38.733268, -9.113798], 15);
    });

    $('#d-belem').click(function () {
        map.setView([38.702305, -9.215116], 15);
    });

    $('#d-benfica').click(function () {
        map.setView([38.737770, -9.196060], 15);
    });


    $('#d-campo').click(function () {
        map.setView([38.719247, -9.166428], 15);
    });

    $('#d-campolide').click(function () {
        map.setView([38.731470, -9.165880], 15);
    });

    $('#d-carnide').click(function () {
        map.setView([38.763229, -9.188106], 15);
    });
    $('#d-estrela').click(function () {
        map.setView([38.710837, -9.153887], 15);
    });

    $('#d-lumiar').click(function () {
        map.setView([38.770204, -9.160321], 15);
    });

    $('#d-marvila').click(function () {
        map.setView([38.750852, -9.116730], 15);
    });

    $('#d-misericordia').click(function () {
        map.setView([38.711113, -9.147195], 15);
    });

    $('#d-olivais').click(function () {
        map.setView([38.772473, -9.126950], 15);
    });

    $('#d-parque').click(function () {
        map.setView([38.765502, -9.099971], 15);
    });

    $('#d-penha').click(function () {
        map.setView([38.725873, -9.124024], 15);
    });

    $('#d-santa').click(function () {
        map.setView([38.785799, -9.155323], 15);
    });

    $('#d-santamaria').click(function () {
        map.setView([38.711168, -9.137130], 15);
    });

    $('#d-santo').click(function () {
        map.setView([38.718769, -9.149313], 15);
    });

    $('#d-sao').click(function () {
        map.setView([38.752111, -9.177416], 15);
    });

    $('#d-saovicente').click(function () {
        map.setView([38.718305, -9.130119], 15);
    });


//Freguesia buttons XS
    $('#d-ajuda-xs').click(function () {
        map.setView([38.711402, -9.199039], 15);
    });

    $('#d-alcantara-xs').click(function () {
        map.setView([38.710676, -9.182990], 15);
    });

    $('#d-alvalade-xs').click(function () {
        map.setView([38.753182, -9.151691], 15);
    });

    $('#d-areeiro-xs').click(function () {
        map.setView([38.742261, -9.133480], 15);
    });

    $('#d-arroios-xs').click(function () {
        map.setView([38.727819, -9.140717], 15);
    });

    $('#d-avenidas-xs').click(function () {
        map.setView([38.739568, -9.149152], 15);
    });

    $('#d-beato-xs').click(function () {
        map.setView([38.733268, -9.113798], 15);
    });

    $('#d-belem-xs').click(function () {
        map.setView([38.702305, -9.215116], 15);
    });

    $('#d-benfica-xs').click(function () {
        map.setView([38.737770, -9.196060], 15);
    });


    $('#d-campo-xs').click(function () {
        map.setView([38.719247, -9.166428], 15);
    });

    $('#d-campolide-xs').click(function () {
        map.setView([38.731470, -9.165880], 15);
    });

    $('#d-carnide-xs').click(function () {
        map.setView([38.763229, -9.188106], 15);
    });
    $('#d-estrela-xs').click(function () {
        map.setView([38.710837, -9.153887], 15);
    });

    $('#d-lumiar-xs').click(function () {
        map.setView([38.770204, -9.160321], 15);
    });

    $('#d-marvila-xs').click(function () {
        map.setView([38.750852, -9.116730], 15);
    });

    $('#d-misericordia-xs').click(function () {
        map.setView([38.711113, -9.147195], 15);
    });

    $('#d-olivais-xs').click(function () {
        map.setView([38.772473, -9.126950], 15);
    });

    $('#d-parque-xs').click(function () {
        map.setView([38.765502, -9.099971], 15);
    });

    $('#d-penha-xs').click(function () {
        map.setView([38.725873, -9.124024], 15);
    });

    $('#d-santa-xs').click(function () {
        map.setView([38.785799, -9.155323], 15);
    });

    $('#d-santamaria-xs').click(function () {
        map.setView([38.711168, -9.137130], 15);
    });

    $('#d-santo-xs').click(function () {
        map.setView([38.718769, -9.149313], 15);
    });

    $('#d-sao-xs').click(function () {
        map.setView([38.752111, -9.177416], 15);
    });

    $('#d-saovicente-xs').click(function () {
        map.setView([38.718305, -9.130119], 15);
    });

    translator.applyPreviousLanguage(function () {
        // Nothing yet to do
        L.drawLocal.draw.handlers.polygon.tooltip.start = translator.getKeyLanguageValue("general120");
        L.drawLocal.draw.handlers.polygon.tooltip.cont = translator.getKeyLanguageValue("general121");
        L.drawLocal.draw.handlers.polygon.tooltip.end = translator.getKeyLanguageValue("general122");
    });
}


function deleteareas() {
    if (currGroup.areas.length > 0) {
        counterAreasName();
        $("#another_draw").removeClass().addClass("show");
        $("#questions_bonding_bridging").removeClass().addClass("hidden");
    }
    else {
        $("#draw").removeClass().addClass("show");
        $("#questions_bonding_bridging").removeClass().addClass("hidden");
    }
    $("input[name=bosc1]").prop('checked', false);
    $("input[name=bosc2]").prop('checked', false);
    $("input[name=brsc1]").prop('checked', false);
    $("input[name=brsc2]").prop('checked', false);

}

function counterAreasName() {


    $("#counting_areas").html(translator.getKeyLanguageValue("map2-32a"));
    var replaced2 = $("#counting_areas").html().replace('L', areasdrawn);
    $("#counting_areas").html(replaced2);


    $("#change_name_group").html(translator.getKeyLanguageValue("map2-30a"));
    var replaced3 = $("#change_name_group").html().replace('X', '<b>' + name_groups[number] + '</b>');
    $("#change_name_group").html(replaced3);

}
