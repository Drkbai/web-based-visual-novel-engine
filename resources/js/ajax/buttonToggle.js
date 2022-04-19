//Button jQuery
$('#btnL_projectTitle').click(function() {
    $('#contL_projectTitle').toggle();
});

$('#btnL_uplBackground').click(function() {
    $('#contL_uplBackground').toggle();
});

$('#btnL_uplDlogBox').click(function() {
    $('#contL_uplDlogBox').toggle();
});

$('#btnL_uplChar').click(function() {
    $('#contL_uplChar').toggle();
});

$('#' + 'btnL_uplAudio').click(function() {
    $('#contL_uplAudio').toggle();
})

$('#btnL_charSetSim').click(function() {
    $('#contL_charSetSim').toggle();
});

$('#btnL_defVSNSet').click(function() {
    $('#contL_defVSNSet').toggle();
});

$('#button_Resources').click(function() {
    $('#resourcesBox').show();
    $('#componentBox').hide();
});

$('#button_Component').click(function() {
    $('#resourcesBox').hide();
    $('#componentBox').show();
});

$('#btn_scriptLog').click(function() {
    $('#logBox').toggle();
});

$('#' + 'btnL_addCharname').click(function() {
    $('#contL_addCharname').toggle();
})


$('#button_EditMenu').click(function() {
    $('#cont_editMenu').toggle();

    if ($('#button_EditMenu').hasClass('gg-chevron-left-r')){
        $('#button_EditMenu').addClass("gg-chevron-right-r").removeClass("gg-chevron-left-r");
    }
    else if ($('#button_EditMenu').hasClass('gg-chevron-right-r')){
        $('#button_EditMenu').addClass("gg-chevron-left-r").removeClass("gg-chevron-right-r");
    }
    
    $('#button_Resources').toggle();
    $('#button_Component').toggle();
});

$('#button_detailsBox').click(function() {
    $('#cont_details').toggle();

    if ($('#button_detailsBox').hasClass('gg-chevron-left-r')){
        $('#button_detailsBox').addClass("gg-chevron-right-r").removeClass("gg-chevron-left-r");
    }
    else if ($('#button_detailsBox').hasClass('gg-chevron-right-r')){
        $('#button_detailsBox').addClass("gg-chevron-left-r").removeClass("gg-chevron-right-r");
    }
    
});

$('#radBtn_selfPosX').click(function(){
    $('#num_selfPosX').attr('disabled', false);
    $('#sel_defPosX').attr('disabled', true);
});

$('#radBtn_defPosX').click(function(){
    $('#sel_defPosX').attr('disabled', false);
    $('#num_selfPosX').attr('disabled', true);
});

$('#radBtn_selfPosY').click(function(){
    $('#num_selfPosY').attr('disabled', false);
    $('#sel_defPosY').attr('disabled', true);
});

$('#radBtn_defPosY').click(function(){
    $('#sel_defPosY').attr('disabled', false);
    $('#num_selfPosY').attr('disabled', true);
});

//--------------------------------------------------------

$('#radBtn_selfCharSetPosX_1').click(function(){
    $('#selfCharSetPosX_1').attr('disabled', false);
    $('#defCharSetPosX_1').attr('disabled', true);
});

$('#radBtn_selfCharSetPosX_2').click(function(){
    $('#selfCharSetPosX_2').attr('disabled', false);
    $('#defCharSetPosX_2').attr('disabled', true);
});

$('#radBtn_selfCharSetPosX_3').click(function(){
    $('#selfCharSetPosX_3').attr('disabled', false);
    $('#defCharSetPosX_3').attr('disabled', true);
});

$('#radBtn_selfCharSetPosX_4').click(function(){
    $('#selfCharSetPosX_4').attr('disabled', false);
    $('#defCharSetPosX_4').attr('disabled', true);
});

$('#radBtn_defCharSetPosX_1').click(function(){
    $('#selfCharSetPosX_1').attr('disabled', true);
    $('#defCharSetPosX_1').attr('disabled', false);
});

$('#radBtn_defCharSetPosX_2').click(function(){
    $('#selfCharSetPosX_2').attr('disabled', true);
    $('#defCharSetPosX_2').attr('disabled', false);
});

$('#radBtn_defCharSetPosX_3').click(function(){
    $('#selfCharSetPosX_3').attr('disabled', true);
    $('#defCharSetPosX_3').attr('disabled', false);
});

$('#radBtn_defCharSetPosX_4').click(function(){
    $('#selfCharSetPosX_4').attr('disabled', true);
    $('#defCharSetPosX_4').attr('disabled', false);
});

//------------------------------------------------------

$('#radBtn_selfCharSetPosY_1').click(function(){
    $('#selfCharSetPosY_1').attr('disabled', false);
    $('#defCharSetPosY_1').attr('disabled', true);
});

$('#radBtn_selfCharSetPosY_2').click(function(){
    $('#selfCharSetPosY_2').attr('disabled', false);
    $('#defCharSetPosY_2').attr('disabled', true);
});

$('#radBtn_selfCharSetPosY_3').click(function(){
    $('#selfCharSetPosY_3').attr('disabled', false);
    $('#defCharSetPosY_3').attr('disabled', true);
});

$('#radBtn_selfCharSetPosY_4').click(function(){
    $('#selfCharSetPosY_4').attr('disabled', false);
    $('#defCharSetPosY_4').attr('disabled', true);
});

$('#radBtn_defCharSetPosY_1').click(function(){
    $('#selfCharSetPosY_1').attr('disabled', true);
    $('#defCharSetPosY_1').attr('disabled', false);
});

$('#radBtn_defCharSetPosY_2').click(function(){
    $('#selfCharSetPosY_2').attr('disabled', true);
    $('#defCharSetPosY_2').attr('disabled', false);
});

$('#radBtn_defCharSetPosY_3').click(function(){
    $('#selfCharSetPosY_3').attr('disabled', true);
    $('#defCharSetPosY_3').attr('disabled', false);
});

$('#radBtn_defCharSetPosY_4').click(function(){
    $('#selfCharSetPosY_4').attr('disabled', true);
    $('#defCharSetPosY_4').attr('disabled', false);
});

