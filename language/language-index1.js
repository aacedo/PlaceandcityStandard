/**
 * Created by albertacedosanchez on 2/5/17.
 */

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
}
