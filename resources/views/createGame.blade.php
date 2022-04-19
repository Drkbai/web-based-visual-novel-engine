<html>
<head>

<link rel="stylesheet" href="{{ asset('/css/app.css') }}" />
<link rel="stylesheet" href="{{ asset('/css/canvas.css') }}" />


{{-- Color Picker JQuery --}}
<link rel="stylesheet" href="https://unpkg.com/huebee@2/dist/huebee.min.css">
<script src="https://unpkg.com/huebee@2/dist/huebee.pkgd.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>
@php

    $backgroundList = Session::get('backgroundImages');
    $characterList = Session::get('characterImages');
    $dialogBoxList = Session::get('dialogBoxImages');
    
    $demo = 'This is the area to test the text showing on screen while playing the visual novel.This is the area to test the text showing on screen while playing the visual novel.This is the area to test the text showing on screen while playing the visual novel.This is the area to test the text showing on screen while playing the visual novel.';
    
@endphp

<body style="display: flex;  width: 100%; height: 100%; background-color: #483D8B;">


    @include('components.visual-novel-canvas')
    
    <div class="flex-row wh-inherit z-index-20" style="justify-content: space-between; position: relative;">
        @include('components.left-container')
        
        @include('components.log-container')

        @include('components.right-container')
    </div>

    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>


    <script>
        //Global Variable

        //Retrieve right container character, dialog, audio
        var doc_contR_char = document.getElementById('contR_char');
        var doc_contR_dLog = document.getElementById('contR_dLog');
        var doc_contR_audio = document.getElementById('contR_audio');

        //Retrieve right container filename caption and image preview 
        var doc_showFilename = document.getElementById('showFilename');
        var doc_showImage = document.getElementById('showImage');

        //Retrieve right container audio player
        var doc_playAudio = document.getElementById('contR_audioPlayer');

        //Uploaded Showcase onClick function for character, dialogBox, background
        function showImage(selected) {

            //Hide contR audio and pause audio
            doc_playAudio.pause();
            doc_contR_audio.style.display = 'none';

            //Hide contR dialog and char
            doc_contR_dLog.style.display = 'none';
            doc_contR_char.style.display = 'none';

            //Display Selected Image And Filename
            var doc_selectedID = document.getElementById(selected.id);

            var image = doc_selectedID.getAttribute('data-url');
            var filename = doc_selectedID.getAttribute('data-filename');

            doc_showImage.setAttribute('src', image);
            doc_showFilename.innerHTML = filename;

        }

        //Uploaded Showcase onClick function for audio
        function playAudio(selected) {

            //Hide contR dialog and char
            doc_contR_dLog.style.display = 'none';
            doc_contR_char.style.display = 'none';

            //Hide contR Image
            doc_showImage.setAttribute('src', null);

            //Display ContR Audio
            doc_contR_audio.style.display = 'flex';

            //Play audio and show filename
            var doc_selectedID = document.getElementById(selected.id);

            var audio = doc_selectedID.getAttribute('data-url');
            var filename = doc_selectedID.getAttribute('data-filename');

            var ext = filename.substring(filename.lastIndexOf('.') + 1);
            
            doc_showFilename.innerHTML = filename;

            ext = ext.toLowerCase();

            if (ext.includes('mp3') == true || ext.includes('ogg') == true || ext.includes('mpeg') == true || ext.includes('wav') == true) {
                
                doc_playAudio.setAttribute('src', audio);
                doc_playAudio.play();
            }
        }

        //Below is the Game Script Function
        function removeScript(scriptContainer, arrayPos) {
            let scriptLogQuery = document.querySelectorAll('div[data-arrPos]');

            for (let currPos = arrayPos + 1; currPos < scriptLogQuery.length; currPos++) {
                
                let newPos = (currPos - 1);
                
                //General Structure
                let oldScriptC = 'scriptContainer_'+ currPos;
                let oldScriptL = 'scriptLabel_' + currPos;
                let oldRemoveSC = 'removeScriptContainer_' + currPos;
                let oldRemoveSB = 'removeScriptButton_' + currPos;

                let newScriptC = 'scriptContainer_'+ newPos;
                let newScriptL = 'scriptLabel_' + newPos;
                let newRemoveSC = 'removeScriptContainer_' + newPos;
                let newRemoveSB = 'removeScriptButton_' + newPos;

                var doc_oldScriptC = document.getElementById(oldScriptC);
                var doc_oldScriptL = document.getElementById(oldScriptL);
                var doc_oldRemoveSC = document.getElementById(oldRemoveSC);
                var doc_oldRemoveSB  = document.getElementById(oldRemoveSB);

                //Check script label content type
                let oldLabel = doc_oldScriptL.getAttribute('data-label');

                let oldSelectionL = '';
                let oldScriptContent = '';
                let newSelectionL = '';
                let newScriptContent = '';

                var doc_oldSelectionL = '';
                var doc_oldScriptContent = '';
                

                if (oldLabel == 'BG' || oldLabel == 'C1' || oldLabel == 'C2' || oldLabel == 'C3' || oldLabel == 'C4' || 
                    oldLabel == 'CN') 
                {
                    oldSelectionL = 'selectionList_'+ currPos;
                    doc_oldSelectionL = document.getElementById(oldSelectionL);
                    newSelectionL = 'selectionList_'+ newPos;
                }

                if (oldLabel == 'SS' || oldLabel == 'ES' || oldLabel == 'SM' || oldLabel == 'HM' ||
                    oldLabel == 'HC1' || oldLabel == 'HC2' || oldLabel == 'HC3' || oldLabel == 'HC4' ||
                    oldLabel == 'HCN' || oldLabel == 'HBG' || oldLabel == 'LN') 
                {
                    oldScriptContent = 'scriptContent_'+ currPos;
                    doc_oldScriptContent = document.getElementById(oldScriptContent);
                    newScriptContent = 'scriptContent_'+ newPos;
                }

                //Renew <removeScriptButton> on click function passing var
                doc_oldRemoveSB.setAttribute('onclick', 'removeScript(' + newScriptC + ',' + newPos +')');
                //Renew <removeScriptButton> ID pos
                doc_oldRemoveSB.setAttribute('id', newRemoveSB);

                //Renew <removeScriptContainer> ID pos
                doc_oldRemoveSC.setAttribute('id', newRemoveSC);

                if (oldLabel == 'BG' || oldLabel == 'C1' || oldLabel == 'C2' || oldLabel == 'C3' || oldLabel == 'C4' || 
                    oldLabel == 'CN'
                ) {
                    //Renew <selectionList> on change function passing var
                    doc_oldSelectionL.setAttribute('onchange', 'showScriptInfo(' + newSelectionL + ',' + newScriptL + ')');
                    //Renew <selectionList> ID pos
                    doc_oldSelectionL.setAttribute('id', newSelectionL);
                }

                if (oldLabel == 'SS' || oldLabel == 'ES' || oldLabel == 'SM' || oldLabel == 'HM' ||
                    oldLabel == 'HC1' || oldLabel == 'HC2' || oldLabel == 'HC3' || oldLabel == 'HC4' ||
                    oldLabel == 'HCN' || oldLabel == 'HBG' || oldLabel == 'LN') 
                {
                    //Renew <selectionList> on change function passing var
                    doc_oldScriptContent.setAttribute('onclick', 'showScriptInfo(' + newScriptContent + ',' + newScriptL + ')');
                    //Renew <selectionList> ID pos
                    doc_oldScriptContent.setAttribute('id', newScriptContent);
                }

                //Renew <scriptLabel> on click function passing var
                doc_oldScriptL.setAttribute('onClick', 'showScriptInfo(' + newSelectionL + ',' + newScriptL + ')');
                //Renew <scriptLabel> ID pos
                doc_oldScriptL.setAttribute('id', newScriptL);

                //Renew <scriptContainer> array position
                doc_oldScriptC.setAttribute('data-arrpos', newPos);
                //Renew <scriptContainer> ID pos
                doc_oldScriptC.setAttribute('id', newScriptC);
                
                console.log("Run remove script" + newPos);
            }

            (scriptContainer).remove();
        }

        function showScriptInfo(selectedData, scriptLabel){

            //Get selected script data and label ID
            var ID_selectedData = selectedData.id;
            var ID_scriptLabel = scriptLabel.id;

            //Get selected script data and label document
            var doc_selectedData = document.getElementById(ID_selectedData);
            var doc_scriptLabel = document.getElementById(ID_scriptLabel);

            //Retrieve script label type
            var label = doc_scriptLabel.getAttribute('data-label');

            if (label == 'BG' || label == 'C1' || label == 'C2' || label == 'C3' || label == 'C4'){
                
                console.log("Get Image");
                //Get the selected data image url
                var image = doc_selectedData.value;

                //Get the selected data image filename
                var filename = doc_selectedData.options[doc_selectedData.selectedIndex].text;

                doc_contR_dLog.style.display = 'none';
                doc_contR_audio.style.display = 'none';

                if (image != 'default' && image != null) {
                    
                    //Show selected data image
                    doc_showImage.setAttribute('src', image);

                    //Store selected filename to scriptLabel
                    doc_scriptLabel.setAttribute('data-filename', filename);

                    doc_showFilename.innerHTML = filename;

                    console.log('Filename :' + filename);

                    if (label == 'C1' || label == 'C2' || label == 'C3' || label == 'C4'){
                        
                        //Store the script label id and image data to contR char
                        doc_contR_char.setAttribute('data-script-label-id', ID_scriptLabel);
                        doc_contR_char.setAttribute('data-selected-img', image);

                        doc_contR_char.style.display = 'flex';

                        resetCharacterSetting();

                        let hasAttr_posX = doc_scriptLabel.hasAttribute('data-posX');
                        let hasAttr_posY = doc_scriptLabel.hasAttribute('data-posY');
                        let hasAttr_scale = doc_scriptLabel.hasAttribute('data-scale');

                        if(hasAttr_posX == false && hasAttr_posY == false && hasAttr_scale == false){
                            drawCharacterWithDefault(doc_scriptLabel, label, image);
                        }
                        else {
                            inheritCharacterData(doc_scriptLabel, image);
                            drawCharacterWithSelf(doc_scriptLabel, label, image);
                        }
                        
                    }
                    if (label == 'BG'){
                        
                        doc_contR_char.style.display = 'none';

                        var background = new Image();
                        background.src = image;

                        background.onload = function() {
                            canvasDrawBackground(background);
                        }
                        
                    }
                }
                else {
                    
                    resetCharacterSetting();

                    doc_scriptLabel.setAttribute('data-filename', '');

                    if (label == 'C1' || label == 'C2' || label == 'C3' || label == 'C4'){
                        canvasClearCharacter(label);
                    }
                    
                    if (label == 'BG'){
                        canvasClearBackground();

                        doc_contR_char.style.display = 'none';
                        doc_contR_audio.style.display = 'none';
                    }
                    
                }
            }

            if (label == 'LN' ){

                doc_contR_char.style.display = 'none';
                doc_contR_dLog.style.display = 'flex';
                doc_contR_audio.style.display = 'none';

                doc_showFilename.innerHTML = '';
                doc_showImage.setAttribute('src', null);

                resetLineSetting();

                doc_contR_dLog.setAttribute('data-script-label-id', ID_scriptLabel);

                let hasAttr_line = doc_scriptLabel.hasAttribute('data-line');

                if (hasAttr_line == true) {

                    showMessageWindow();
                    let line = doc_scriptLabel.getAttribute('data-line');

                    inheritLine(line);
                    canvasDrawLine(line);
                }

            }

            if (label == 'HBG') {
                doc_showImage.setAttribute('src', '');
                doc_contR_char.style.display = 'none';
                doc_contR_dLog.style.display = 'none';
                doc_contR_audio.style.display = 'none';

                canvasClearBackground();
            }

            if (label == 'HC1' || label == 'HC2' || label == 'HC3' || label == 'HC4') {
                doc_showImage.setAttribute('src', '');

                doc_contR_char.style.display = 'none';
                doc_contR_dLog.style.display = 'none';
                doc_contR_audio.style.display = 'none';

                canvasClearCharacter(label);
            }

            if (label == 'SM'){
                doc_showImage.setAttribute('src', '');

                doc_contR_char.style.display = 'none';
                doc_contR_dLog.style.display = 'none';
                doc_contR_audio.style.display = 'none';

                showMessageWindow();
            }

            if (label == 'HM'){
                doc_showImage.setAttribute('src', '');

                doc_contR_char.style.display = 'none';
                doc_contR_dLog.style.display = 'none';
                doc_contR_audio.style.display = 'none';

                canvasClearMessageBox();
                canvasClearLine();
            }

            if (label == 'CN') {
                doc_showImage.setAttribute('src', '');

                doc_contR_char.style.display = 'none';
                doc_contR_dLog.style.display = 'none';
                doc_contR_audio.style.display = 'none';

                var charname = doc_selectedData.value;

                console.log('The charname is :' + charname);
                
                if (charname != 'default' && charname != null) {
                    doc_scriptLabel.setAttribute('data-charname', charname);

                    console.log('Added name: ' + charname);

                    canvasDrawCharacterName(charname);
                }

                if (charname == 'default' || charname == null) {
                    canvasClearCharacterName();
                }
                
            }

            if (label == 'HCN') {

                doc_showImage.setAttribute('src', '');

                doc_contR_char.style.display = 'none';
                doc_contR_dLog.style.display = 'none';
                doc_contR_audio.style.display = 'none';

                canvasClearCharacterName();

            }

            if (label == 'PA') {
                doc_contR_char.style.display = 'none';
                doc_contR_dLog.style.display = 'none';
                doc_contR_audio.style.display = 'flex';

                doc_showImage.setAttribute('src', null);

                var audioSrc = doc_selectedData.value;
                var filename = doc_selectedData.options[doc_selectedData.selectedIndex].text;

                doc_showFilename.innerHTML = filename;

                doc_contR_audio.setAttribute('data-script-label-id', ID_scriptLabel);
                
                resetAudioSetting();

                if (filename != 'default' && filename != null) {
                    
                    inheritAudio(scriptLabel);
                    //Play selected audio
                    var ext = filename.substring(filename.lastIndexOf('.') + 1);

                    ext = ext.toLowerCase();

                    doc_scriptLabel.setAttribute('data-filename', filename);
                    
                    if (ext.includes('mp3') == true || ext.includes('ogg') == true || ext.includes('mpeg') == true || ext.includes('wav') == true) {
                
                        doc_playAudio.setAttribute('src', audioSrc);
                        doc_playAudio.play();
                    }
                    
                }
                else {
                    doc_scriptLabel.removeAttribute('data-audio');
                }

            }

            if (label == 'SA') {
                doc_contR_char.style.display = 'none';
                doc_contR_dLog.style.display = 'none';
                doc_contR_audio.style.display = 'none';

                doc_playAudio.pause();
            }
     
        }

        function drawCharacterWithDefault(scriptLabel, label, image){
            //Show character while image selected
            //Default value
            let char_posX = 1280 * 0.5;
            let char_posY = 720 * 0.875;
            let char_scale = '1.0';

            let char_image = new Image();
            char_image.src = image;

            let char_cav_no = 0;

            scriptLabel.setAttribute('data-posX', char_posX);
            scriptLabel.setAttribute('data-posY', char_posY);
            scriptLabel.setAttribute('data-scale', char_scale);

            if (label == 'C1'){
                char_cav_no = 1;
            }
            if (label == 'C2'){
                char_cav_no = 2;
            }
            if (label == 'C3'){
                char_cav_no = 3;
            }
            if (label == 'C4'){
                char_cav_no = 4;
            }

            let cav = document.getElementById('cav_char' + char_cav_no);
            let ctx = cav.getContext('2d');

            char_image.onload = function() {
                canvasDrawCharacter(char_image, cav, ctx, char_posX, char_posY, char_scale);
            }
        }

        function drawCharacterWithSelf(scriptLabel, label, image){

            let char_posX = scriptLabel.getAttribute('data-posx');
            let char_posY = scriptLabel.getAttribute('data-posy');
            let char_scale = scriptLabel.getAttribute('data-scale');

            let char_nav_no = 0;

            if (label == 'C1'){
                char_cav_no = 1;
            }
            if (label == 'C2'){
                char_cav_no = 2;
            }
            if (label == 'C3'){
                char_cav_no = 3;
            }
            if (label == 'C4'){
                char_cav_no = 4;
            }

            let cav = document.getElementById('cav_char' + char_cav_no);
            let ctx = cav.getContext('2d');

            let char_img = new Image();
            char_img.src = image;

            char_img.onload = function() {
                canvasDrawCharacter(char_img, cav, ctx, char_posX, char_posY, char_scale);
            }
        }

        function inheritCharacterData(scriptLabel){
            
            let hasAttr_typePosX = scriptLabel.hasAttribute('data-posx-is');
            let hasAttr_typePosY = scriptLabel.hasAttribute('data-posy-is');

            let hasAttr_posX = scriptLabel.hasAttribute('data-posx');
            let hasAttr_posY = scriptLabel.hasAttribute('data-posy');
            let hasAttr_scale = scriptLabel.hasAttribute('data-scale');

            //Retrieve X axis value
            if (hasAttr_typePosX == true){
                console.log('Preview X');

                let type_posX = scriptLabel.getAttribute('data-posX-is');
                
                let doc_selfPosX = document.getElementById('num_selfPosX');
                let doc_defPosX = document.getElementById('sel_defPosX');

                let radBtn_selfPosX = document.getElementById('radBtn_selfPosX');
                let radBtn_defPosX = document.getElementById('radBtn_defPosX');

                if (type_posX == 'def') {
                    let sel_posX = scriptLabel.getAttribute('data-posX-sel');
                    
                    doc_defPosX.value = sel_posX;
                    
                    radBtn_defPosX.checked = true;
                    radBtn_selfPosX.checked = false;

                    doc_defPosX.disabled = false;
                    doc_selfPosX.disabled = true;
                }

                if (type_posX == 'self'){
                    if (hasAttr_posX == true){
                        let posX = scriptLabel.getAttribute('data-posX');

                        doc_selfPosX.value = posX;

                        radBtn_selfPosX.checked = true;
                        radBtn_defPosX.checked = false;
                        
                        doc_selfPosX.disabled = false;
                        doc_defPosX.disabled = true;
                        
                    }
                }
            }
            
            //Retrieve Y axis value
            if (hasAttr_typePosY == true){
                let type_posY = scriptLabel.getAttribute('data-posY-is');

                let doc_selfPosY = document.getElementById('num_selfPosY');
                let doc_defPosY = document.getElementById('sel_defPosY');

                let radBtn_selfPosY = document.getElementById('radBtn_selfPosY');
                let radBtn_defPosY = document.getElementById('radBtn_defPosY');

                if (type_posY == 'def') {
                    let sel_posY = scriptLabel.getAttribute('data-posY-sel');
                    
                    doc_defPosY.value = sel_posY;

                    radBtn_defPosY.checked = true;
                    radBtn_selfPosY.checked = false;
                    
                    doc_defPosY.disabled = false;
                    doc_selfPosY.disabled = true;
                }
                if (type_posY == 'self'){
                    if (hasAttr_posY == true){
                        let posY = scriptLabel.getAttribute('data-posY');

                        doc_selfPosY.value = posY;

                        radBtn_selfPosY.checked = true;
                        radBtn_defPosY.checked = false;
                        
                        doc_selfPosY.disabled = false;
                        doc_defPosY.disabled = true;
                    }
                }
            }

            if (hasAttr_scale == true){
                let scale = scriptLabel.getAttribute('data-scale');
                let doc_defScale = document.getElementById('sel_defScale');

                doc_defScale.value = scale;
            }

        }

        function inheritLine(line) {

            let textarea = document.getElementById('txt_line');

            textarea.value = line;
        }

        function inheritAudio(scriptLabel) {
            let hasVolume = scriptLabel.hasAttribute('data-volume');

            if (hasVolume == true) {
                let volume = scriptLabel.getAttribute('data-volume');
                let doc_ranBtn_volume = document.getElementById('ranBtn_volume');

                doc_playAudio.volume = volume;
                doc_ranBtn_volume.value = volume;
            }
        }

        function resetCharacterSetting(){

            let doc_selfPosX = document.getElementById('num_selfPosX');
            let doc_defPosX = document.getElementById('sel_defPosX');

            let doc_selfPosY = document.getElementById('num_selfPosY');
            let doc_defPosY = document.getElementById('sel_defPosY');

            let doc_defScale = document.getElementById('sel_defScale');

            doc_selfPosX.value = 0;
            doc_selfPosY.value = 0;

            radBtn_defPosX.checked = true;
            radBtn_selfPosX.checked = false;

            doc_defPosX.disabled = false;
            doc_selfPosX.disabled = true;

            radBtn_defPosY.checked = true;
            radBtn_selfPosY.checked = false;

            doc_defPosY.disabled = false;
            doc_selfPosY.disabled = true;

            doc_defScale.value = '1.0';
            doc_defPosX.value = 'l1';
            doc_defPosY.value = 'd1';

        }

        function resetLineSetting() {
            var doc_textarea = document.getElementById('txt_line');

            doc_textarea.value = '';
        }

        function resetAudioSetting() {

            var doc_ranBtn_volume= document.getElementById('ranBtn_volume');
            
            doc_playAudio.setAttribute('src', null);
            doc_ranBtn_volume.value = '0.5';
            doc_playAudio.volume = '0.5';

        }

        function canvasDrawBackground(image) {

            var cav = document.getElementById('cav_background');
            var ctx = cav.getContext('2d');
            var img = image;

            cav.width = img.width * 0.5;
            cav.height = img.height * 0.5;

            ctx.clearRect(0, 0, 1280, 720);

            ctx.drawImage(img, 0,0, cav.width, cav.height);
            ctx.drawImage(cav ,0, 0, cav.width * 0.5, cav.height * 0.5, 0, 0, ctx.width, ctx.height);

        }

        function canvasDrawCharacter(image, canvas, context, posX, posY, scale) {
            
            var ctx = context;
            var cav = canvas;
            var img = image;

            console.log('Image scale: ' + scale);
            
            img.width = img.width * scale;
            img.height = img.height * scale;

            console.log('Image width: ' + img.width);
            console.log('Image height: ' + img.height);

            //Position
            var xAxis = posX - (img.width * 0.5);
            var yAxis = posY - (img.height * 0.5);
            //------------------------------------

            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);

            ctx.mozImageSmoothingEnabled = true;
            ctx.webkitImageSmoothingEnabled = true;
            ctx.msImageSmoothingEnabled = true;
            ctx.imageSmoothingEnabled = true;

            ctx.drawImage(img, xAxis, yAxis, img.width, img.height);
        }
        
        function canvasDrawCharacterName(charname) {

            var cav = document.getElementById('nameplate');
            var ctx = cav.getContext('2d');

            var doc_vsnDefSetting = document.getElementById('vsn_defSetting');

            var cName_fontColor = doc_vsnDefSetting.getAttribute('data-nameplt-font-color');
            var cName_fontSize = doc_vsnDefSetting.getAttribute('data-nameplt-font-size');
            var cName_posx = doc_vsnDefSetting.getAttribute('data-nameplt-posx');
            var cName_posy = doc_vsnDefSetting.getAttribute('data-nameplt-posy');

            cav.width = 1280;
            cav.height = 720;

            var font = cName_fontSize + 'px' + ' ' + 'Comic Sans MS';

            //Clear canvas
            ctx.clearRect(0, 0, cav.width, cav.height);

            //Set the style of the dialog font
            ctx.font = font;
            ctx.fillStyle = cName_fontColor;

            //Fill name to canvas
            ctx.fillText(charname, cName_posx, cName_posy);
        }

        function canvasDrawLine(line) {

            let doc_vsnSetting = document.getElementById('vsn_defSetting');

            let text = line;
            let fontSize = doc_vsnSetting.getAttribute('data-dlog-font-size');
            let fontColor = doc_vsnSetting.getAttribute('data-dlog-font-color');

            let maxWidth = doc_vsnSetting.getAttribute('data-textbox-width');
            let lineHeight = doc_vsnSetting.getAttribute('data-dlog-line-height');

            let posX = (1280 - maxWidth) * 0.5;
            let posY = doc_vsnSetting.getAttribute('data-textbox-posy');

            let cav = document.getElementById('dialog');
            let ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720;

            //Clean dialog canvas screen to default
            ctx.clearRect(0, 0, cav.width, cav.height);

            let font = fontSize + 'px' + ' ' + 'Comic Sans MS';
            //Set the style of the dialog font
            ctx.font = font;
            ctx.fillStyle = fontColor;

            wrapText(text, ctx, posX, posY, maxWidth, lineHeight);

        }

        function canvasDrawMessageBox(image, posY, scale) {
            var cav = document.getElementById('dialogBar');
            var ctx = cav.getContext('2d');

            var img = image;

            img.width = img.width * scale;
            img.height = img.height * scale;
            
            //Position
            var xAxis = (1280 * 0.5) - (img.width * 0.5);
            var yAxis = posY - (img.width * 0.5);

            //------------------------------------
            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);

            ctx.mozImageSmoothingEnabled = true;
            ctx.webkitImageSmoothingEnabled = true;
            ctx.msImageSmoothingEnabled = true;
            ctx.imageSmoothingEnabled = true;

            ctx.drawImage(img, xAxis, yAxis, img.width, img.height);
        }

        function canvasClearCharacter(label) {
            let char_cav_no = 0;

            if (label == 'C1'){
                char_cav_no = 1;
            }
            if (label == 'C2'){
                char_cav_no = 2;
            }
            if (label == 'C3'){
                char_cav_no = 3;
            }
            if (label == 'C4'){
                char_cav_no = 4;
            }

            let cav = document.getElementById('cav_char' + char_cav_no);
            let ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);
        }

        function canvasClearBackground() {
            var cav = document.getElementById('cav_background');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);
        }

        function canvasClearMessageBox() {
            var cav = document.getElementById('dialogBar');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);
        }

        function canvasClearCharacterName() {

            var cav = document.getElementById('nameplate');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720

            ctx.clearRect(0, 0, 720, 1280);

        }

        function canvasClearBackground() {
            var cav = document.getElementById('cav_background');
            var ctx = cav.getContext('2d');

            ctx.clearRect(0, 0, 5000, 5000);
        }
        
        function canvasClearCharacter(label) {
            let clear_cav_no = 0;
                
            if (label == 'C1' || label == 'HC1'){
                clear_cav_no = 1;
            }
            if (label == 'C2' || label == 'HC2'){
                clear_cav_no = 2;
            }
            if (label == 'C3' || label == 'HC3'){
                clear_cav_no = 3;
            }
            if (label == 'C4' || label == 'HC4'){
                clear_cav_no = 4;
            }

            let cav = document.getElementById('cav_char' + clear_cav_no);
            let ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);
        }

        function canvasClearLine() {
            let cav = document.getElementById('dialog');
            let ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720;

            ctx.clearRect(0, 0, cav.width, cav.height);
        }

        function wrapText(text, ctx, posX, posY, maxWidth, lineHeight) {
    
            //Retrieve the text and spilt with spacebar
            var words = text.split(' ');
            var line = '';

            //Loop through the text and display dialog
            for(var n = 0; n < words.length; n++) {

                var testLine = line + words[n] + ' ';
                var metrics = ctx.measureText(testLine);
                var testWidth = metrics.width;

                if (testWidth > maxWidth && n > 0) {

                ctx.fillText(line, posX, posY);
                line = words[n] + ' ';
                posY += lineHeight;

                }
                else {
                line = testLine;
                }

            }

            ctx.fillText(line, posX, posY);
        }

        function showMessageWindow(){
            var doc_vsnSetting = document.getElementById('vsn_defSetting');

            var messageBox = doc_vsnSetting.getAttribute('data-dlogbox-img');
            var msgBox_posy = doc_vsnSetting.getAttribute('data-dlogbox-posy');
            var msgBox_scale = doc_vsnSetting.getAttribute('data-dlogbox-scale');

            var msgBox_img = new Image();
            msgBox_img.src = messageBox;

            msgBox_img.onload = function() {
                canvasDrawMessageBox(msgBox_img, msgBox_posy, msgBox_scale);
            }
        }

 
    </script>
</body>


<html>