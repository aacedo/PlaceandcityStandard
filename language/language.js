/**
 * Depend on languages of web pages, show the text in one or other languages
 * @param lang Languages of web pages
 * @param text Text of return
 * @returns {*} Text for show in web pages
 */
function languages(lang, text) {
    //English
    var en = {
        'index1': "The following web-map survey is part of a research project at NOVA IMS (Lisbon). Its primary objective is to understand how citizens' place perceptions, and their relationships, influence participation in a given urban area.",
        'index2': 'The questionnaire will take less than 5 minutes, and the mapping activity takes most people around 15 minutes, depending on how many areas you define.',
        'index3': 'With your contribution, you will support the improvement of Lisbon municipality participation processes.',
        'index4': 'Do you live in Lisbon?',
        'index5': 'Yes',
        'index6': 'No',
        'index7': 'Notes:',
        'index8': '1. All data collected is treated with confidentiality and anonymity, and will not be used for commercial purposes or distributed to third parties. 2. For more information or questions about this study, please contact us using the following email address acedo@novaims.unl.pt (Albert Acedo Sánchez) or visit our blog.',
        'index9': 'Next',
        'index10': 'Please, select the parish where you live.',
        'index11': 'Prev',
        'index12': 'None of the above',
        'index13': 'How long have you lived there? ',
        'index14': 'Less than 1 year',
        'index15': '1-3 years',
        'index16': '3-6 years',
        'index17': 'more than 6 years',
        'index18': 'Indique por favor o código postal da sua residência',
        'index19': 'If you do not want to give your zip code, please click the checkbox.',
        'index20': 'Please, select the most important problems in your parish. (Max. 3)',
        'index21': 'Street paving',
        'index22': 'Parking',
        'index23': 'Accessibility',
        'index24': 'Urban Hygiene',
        'index25': 'Noise',
        'index26': 'Renovate buildings',
        'index27': 'Public transport',
        'index28': 'Safety',
        'index29': 'Construction',
        'index30': 'Traffic',
        'index31': 'Urban maintenance',
        'index32': 'Done',
        'index33': '',
        'index34': '',
        'index35': '',
        'index36': '',
        'index37': '',
        'index38': '',
        'index39': '',
        'index40': '',
        'index41': '',
        'index42': '',




    };

    //Portuguese
    var pt = {
        'index1': "Este questionário é parte integrante de um projeto de investigação da Nova Information Management School (NOVA IMS) da Universidade Nova de Lisboa. O objetivo principal é perceber a forma como a perceção do local e as relações sociais do cidadão influenciam a sua participação numa dada área urbana.",
        'index2': 'O preenchimento do questionário demora cerca de 5 minutos e a atividade de mapeamento cerca de 15 minutos, dependendo do número de áreas que se pretenderem assinalar.',
        'index3': 'A sua contribuição apoia os processos participativos da cidade de Lisboa.',
        'index4': 'Reside em Lisboa?',
        'index5': 'Sim',
        'index6': 'Não',
        'index7': 'Notas:',
        'index8': '1-	Todos os dados recolhidos neste questionário serão tratados de forma anónima e confidencial e não serão utilizados para fins comerciais ou cedidos a terceiros. 2. Se pretender esclarecer alguma dúvida ou pedir alguma informação sobre este estudo, queira por favor contactar-nos através do seguinte endereço de email: acedo@novaims.unl.pt (Albert Acedo Sánchez) ou visite o nosso blog',
        'index9': 'Próximo',
        'index10': 'Por favor selecione a sua freguesia de residência',
        'index11': 'Anterior',
        'index12': 'Nenhuma das anteriores',
        'index13': 'Há quanto tempo reside aí?',
        'index14': 'Menos de 1 ano',
        'index15': '1 a 3 anos',
        'index16': '3 a 6 anos',
        'index17': 'Mais do que 6 anos',
        'index18': 'Please type the zip code of your (primary) home.',
        'index19': 'Se não desejar indicar o seu código postal, selecione por favor na caixa',
        'index20': 'Selecione por favor os problemas mais importantes da sua freguesia (máximo 3)',
        'index21': 'Estado do pavimento das ruas',
        'index22': 'Estacionamento',
        'index23': 'Acessibilidade',
        'index24': 'Higiene urbana',
        'index25': 'Ruído',
        'index26': 'Renovação urbana',
        'index27': 'Transportes públicos',
        'index28': 'Segurança',
        'index29': 'Construção',
        'index30': 'Trânsito',
        'index31': 'Manutenção urbana',
        'index32': 'Terminado'

    };



    //Spanish
    var es = {
        'noLocation': 'no se ha podido obtener tu localización',
        'editedSchool': 'Tu has dibujado o editaste tu colegio!',
        'pointsMapAndImage': 'Faltan puntos en el MAPA y en la IMAGEN',
        'pointsMap': 'Faltan puntos en el MAPA',
        'pointsImage': 'Faltan puntos en la IMAGEN',
        'mistake': 'Se ha producido un error, porfavor intentelo de nuevo',
        'imageDelete': 'Imagen Borrada',
        'imageDeleteMistake': 'Esta imagen no existe en el servidor.',
        'nameSchoolNoExist': 'Registrar nuevo colegio',
        'noIntersectLines': 'No puede intersectar la linea con otros poligonos',
        'noContainPoints': 'No puedes añadir puntos dentro de los poligonos',
        'uploadingImage': 'Cargada con éxito. Estamos transformando la imagen. Se puede tomar hasta 2 -3 minutos antes de que tenga efecto el cambio.',
        'dashSaved': 'Guardado!',
        'dashSaveChanges': 'Guardar Cambios',
        'on': 'Activada',
        'off': 'Desactivada',
        'done': 'Hecho',
        'missing': 'Faltan',
        'errorConfiguration': 'No se ha podido cargar la configuración. Prueba de nuevo más tarde.',
        'percentDone': ' % hecho',
        'dashTrPlanted': 'Tesoros escondidos \n Total: ',
        'dashTrFound': 'Tesoros encontrados \n Total: ',
        'dashFiCaptured': 'Localizaciones capturadas \n Total: ',
        'totalStudents' : 'Total de Estudiantes: ',
        'errorNoBoundary' : 'Antes de hacer este paso, tienes que realizar el primero paso, ves a él',
        'checkFp' : 'Lo siento, solo puedes activar esta fase cuando la fase 1 tenga al menos un 80%'

    };
    //Catala
    var ca = {
        'noLocation': 'No s&#39;ha pogut obtindre la teua localització',
        'editedSchool': 'Has dibuixat o editat la teua escola!',
        'pointsMapAndImage': 'Manquen punts al MAPA i a la IMATGE',
        'pointsMap': 'Manquen punts al MAPA',
        'pointsImage': 'Manquen punts a la IMATGE',
        'mistake': 'S&#39;ha produit un error, per favor intenta-ho de nou',
        'imageDelete': 'Imatge Esborrada',
        'imageDeleteMistake': 'Aquesta imatge no apareix al servidor.',
        'nameSchoolNoExist': 'Registrar nova escola',
        'noIntersectLines': 'No es pot intersectar la línia amb altres polígons',
        'noContainPoints': 'No pots afegir punts dins dels polígons',
        'uploadingImage': 'S&#39;ha pujat correctament. Estem transformant la imatge. Es pot prendre fins a 2 -3 minuts abans que tingui efecte el canvi.',
        'dashSaved': 'Guardat!',
        'dashSaveChanges': 'Guardar Canvis',
        'on': 'Activada',
        'off': 'Desactivada',
        'done': 'Done',
        'missing': 'Missing',
        'errorConfiguration': 'No s&#39;ha pogut carregar la configuració. Prova de nou més tard',
        'percentDone': ' % fet',
        'dashTrPlanted': 'Tresors amagats \n Total: ',
        'dashTrFound': 'Tresors trobats \n Total: ',
        'dashFiCaptured': 'Localitzacions capturades \n Total: ',
        'totalStudents' : 'Total d&#39;Estudiants: ',
        'errorNoBoundary' : 'Avançs de fer aquest pas, has de fer el primer pas, veus a él',
        'checkFp' : 'Hu sent, sols pots accedir aquesta fase quan la primera fase tinga al menys un 80%'
    };

    //German
    var de = {
        'noLocation': 'Position kann nicht bestimmt werden',
        'editedSchool': 'Deine Schule wurde bearbeitet!',
        'pointsMapAndImage': 'Es mangelt an einigen Punkten in MAP und BILD',
        'pointsMap': 'Es mangelt an einigen Punkten in MAP',
        'pointsImage': 'Es mangelt an einigen Punkten in BILD',
        'mistake': 'Ein Fehler ist aufgetreten, bitte versuche es erneut',
        'imageDelete': 'Bild löschen',
        'imageDeleteMistake': 'Dieses Bild existiert nicht im Bildserver.',
        'nameSchoolNoExist': 'Registriere neue Schule',
        'noIntersectLines': 'Linie darf sich nicht mit anderen Polygonen schneiden',
        'noContainPoints': 'Punkte können nicht Punkte innerhalb der Polygone hinzugefügt werden',
        'uploadingImage': 'Erfolgreich hochgeladen. Das Bild wird geändert. Es kann bis zu 2 -3 Minuten dauern, bis die Änderungen übernommen werden.',
        'dashSaved': 'Gespeichert!',
        'dashSaveChanges': 'Änderungen speichern',
        'on': 'Aktiviert',
        'off': 'Deaktiviert',
        'done': 'Erledigt',
        'missing': 'Fehlend',
        'errorConfiguration': 'Konfiguration konnte nicht geladen werden. Versuche es später noch einmal.',
        'percentDone': ' % erledigt',
        'dashTrPlanted': 'Schätze versteckt \n Gesamt: ',
        'dashTrFound': 'Schätze gefunden \n Gesamt: ',
        'dashFiCaptured': 'Standorte erfasst \n Gesamt: ',
        'totalStudents' : 'Anrezahl aller Studenten: ',
        'errorNoBoundary' : 'Bevor Sie diesen Schritt zu realisieren, müssen Sie den ersten Schritt tun, besuchen Sie ihn',
        'checkFp' : 'Leider können Sie diese Phase nur aktivieren, wenn die Phase 1 mindestens 80%'
    };

    if (lang == 'es') {
        return es[text];
    } else if (lang == 'pt') {
        return pt[text];
    } else if (lang == 'de') {
        return de[text];
    } else if (lang == 'ca') {
        return ca[text];
    } else {
        return en[text];
    }
}