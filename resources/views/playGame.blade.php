<html>
<head>

<link rel="stylesheet" href="{{ asset('/css/app.css') }}" />
<link rel="stylesheet" href="{{ asset('/css/canvas.css') }}" />

{{-- Color Picker JQuery --}}
<link rel="stylesheet" href="https://unpkg.com/huebee@2/dist/huebee.min.css">
<script src="https://unpkg.com/huebee@2/dist/huebee.pkgd.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>

<body style="display: flex;  width: 100%; height: 100%; background-color: #483D8B;">

    @php
        $scriptSession = Session::get('gameScript'); //Retrieve gamescript url from session
        $scriptSession = file($scriptSession); //Get gamescript.txt file script
        $script = json_encode($scriptSession); //Stringify script to Json Array

        $bgListSession = Session::get('backgroundList');
        $bgList = json_encode($bgListSession);

        $charListSession = Session::get('characterList');
        $charList = json_encode($charListSession);

        $dLogBoxListSession = Session::get('dialogBoxList');
        $dLogBoxList = json_encode($dLogBoxListSession);

        $audioListSession = Session::get('audioList');
        $audioList = json_encode($audioListSession);

    @endphp

    <span id="getScript" data-script="{{ $script }}" style="display: none;"></span>
    <span id="getBgList" data-list="{{ $bgList }}" style="display: none;"></span>
    <span id="getCharList" data-list="{{ $charList }}" style="display: none;"></span>
    <span id="getDLogBoxList" data-list="{{ $dLogBoxList }}" style="display: none;"></span>
    <span id="getAudioList" data-list="{{ $audioList }}" style="display: none;"></span>

    @include('components.visual-novel-canvas')

    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>

    
    <script>
        var doc_getScript = document.getElementById('getScript');
        var doc_getBgList = document.getElementById('getBgList');
        var doc_getCharList = document.getElementById('getCharList');
        var doc_getDLogBoxList = document.getElementById('getDLogBoxList');
        var doc_getAudioList = document.getElementById('getAudioList');

        var getScript = doc_getScript.getAttribute('data-script');
        var getBgList = doc_getBgList.getAttribute('data-list');
        var getCharList = doc_getCharList.getAttribute('data-list');
        var getDLogBoxList = doc_getDLogBoxList.getAttribute('data-list');
        var getAudioList = doc_getAudioList.getAttribute('data-list')

        var gamescript = JSON.parse(getScript);
        var bgList = JSON.parse(getBgList);
        var charList = JSON.parse(getCharList);
        var dLogBoxList = JSON.parse(getDLogBoxList);
        var audioList = JSON.parse(getAudioList);

        console.log(gamescript);

        var arrCount = 0;
        var arrLength = gamescript.length;
        var scriptLine = '';
        var dialog = '';
        var charname = '';

        //Dialog Box Setting
        var dLogBox_posX = '';
        var dLogBox_posY = '';
        var dLogBox_filename = '';
        var dLogBox_scale = '';

        //Nameplate Setting
        var namePlt_fontSize = '';
        var namePlt_fontColor = '';
        var namePlt_posX = '';
        var namePlt_posY = '';

        //Dialog Setting
        var dLog_fontSize = '';
        var dLog_fontColor = '';
        var dLog_lineHeight = '';
        var dLog_width = '';
        var dLog_posX = '';
        var dLog_posY = '';

        //Character Image
        var bg_img = new Image();
        

        runSetting();

        function runSetting() {

            do{

                var scriptLine = gamescript[arrCount];

                var checker = scriptLine.includes('Start:');

                if (checker == false){

                    //Dialog Box Setting
                    if(scriptLine.includes('dialog.box.image') == true) {
                    
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLogBox_filename = split[i];

                                }
                            }
                        }
                        
                    }

                    if(scriptLine.includes('dialog.box.xaxis') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLogBox_posX = parseInt(split[i]);
                                }
                            }
                        }
                    }

                    if(scriptLine.includes('dialog.box.yaxis') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLogBox_posY = parseInt(split[i]);
                                }
                            }
                        }
                    }

                    if(scriptLine.includes('dialog.box.scale') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLogBox_scale = parseFloat(split[i]);
                                }
                            }
                        }
                    }

                    //Nameplate Setting
                    if(scriptLine.includes('nameplate.font.size') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    namePlt_fontSize = parseInt(split[i]);
                                }
                            }
                        }
                    }

                    if(scriptLine.includes('nameplate.font.color') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    namePlt_fontColor = split[i];
                                }
                            }
                        }
                    }

                    if(scriptLine.includes('nameplate.yaxis') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    namePlt_posY = parseInt(split[i]);
                                }
                            }
                        }
                    }

                    if(scriptLine.includes('nameplate.xaxis') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    namePlt_posX = parseInt(split[i]);
                                }
                            }
                        }
                        console.log('Nameplate X axis :' + namePlt_posX);
                    }

                    //Dialog Setting
                    if(scriptLine.includes('dialog.font.size') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLog_fontSize = parseInt(split[i]);
                                }
                            }
                        }
                        console.log('Dialog Font Size :' + dLog_fontSize);
                    }

                    if(scriptLine.includes('dialog.font.color') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLog_fontColor = split[i];
                                }
                            }
                        }
                    }

                    if(scriptLine.includes('dialog.line.height') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLog_lineHeight = parseInt(split[i]);
                                }
                            }
                        }
                    }

                    if(scriptLine.includes('dialog.width') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLog_width = parseInt(split[i]);
                                }
                            }
                        }
                    }

                    if(scriptLine.includes('dialog.xaxis') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLog_posX = parseInt(split[i]);
                                }
                            }
                        }
                    }

                    if(scriptLine.includes('dialog.yaxis') == true) {
                        
                        var split = scriptLine.split(' ');

                        for (var i = 0; i < split.length; i++) {

                            var prev = i - 1;

                            if (prev > 0) {
                                if (split[prev].includes('=') == true ) {
                                    dLog_posY = parseInt(split[i]);
                                }
                            }
                        }
                    }

                    
                }
                
                arrCount++;
            
            }while(gamescript[arrCount].includes('Start:') != true)

            console.log('-- Dialog Box --');
            console.log('Filename: ' + dLogBox_filename);
            console.log('X Axis: ' + dLogBox_posX + ' Y Axis: ' + dLogBox_posY + ' Scale: ' + dLogBox_scale)

            console.log('-- Nameplate --');
            console.log('Font Size :' + namePlt_fontSize + ' Font Color :' + namePlt_fontColor);
            console.log('X Axis: ' + namePlt_posX + ' Y Axis: ' + namePlt_posY);

            console.log('-- Dialog --');
            console.log('Font Size :' + dLog_fontSize + ' Font Color :' + dLog_fontColor);
            console.log('X Axis: ' + dLog_posX + ' Y Axis: ' + dLog_posY);
            console.log('Line Height: ' + dLog_lineHeight + ' Width: ' + dLog_width);

        }

        function runScript() {
            //scriptLine
            scriptLine = gamescript[arrCount];

            console.log(scriptLine);
            //Background
            var bg_filename = '';

            //Character Filename
            var char_filename = '';
            //Character Pos X
            var char_posX = '';
            //Character Pos Y
            var char_posY = '';
            //Character Scale
            var char_scale = '';
            //Character canvas
            var cav_no = '';

            //Audio
            var audio_filename = '';
            var volume = '';

            var loop = false;


            if (arrCount <= arrLength) {
                if (scriptLine.includes('Start:') == true) {
                    loop = true;
                }

                if (scriptLine.includes('End:') == true) {
                    stopAudio();
                    clearBackground();

                    for (var i = 1; i <= 4; i++) {
                        clearCharacter(i);
                    }

                    clearDialogBox();
                    clearNameplate();
                    
                    loop = false;
                }

                if (scriptLine.includes('PA>') == true) {
                    var split = scriptLine.split(' ');

                    for (var i = 0; i < split.length; i++) {

                        var prev = i - 1;

                        if (prev > 0) {
                            if (split[prev].includes('PA>') == true ) {
                                audio_filename = split[i];
                            }

                            if (split[prev].includes('VOL>') == true) {
                                volume = parseFloat(split[i]);
                            }
                        }
                    }

                    checkAudio(audio_filename, volume);

                    loop = true;
                }

                if (scriptLine.includes('SA>') == true) {
                    stopAudio();

                    loop = true;
                }

                if (scriptLine.includes('BG>') == true) {
                    var split = scriptLine.split(' ');

                    for (var i = 0; i < split.length; i++) {

                        var prev = i - 1;

                        if (prev > 0) {
                            if (split[prev].includes('BG>') == true ) {
                                bg_filename = split[i];

                                checkBackground(bg_filename);
                            }
                        }
                    }

                    loop = true;

                }

                if (scriptLine.includes('C1>') == true || scriptLine.includes('C2>') == true || scriptLine.includes('C3>') == true || scriptLine.includes('C4>') == true) {
                    var split = scriptLine.split(' ');

                    for (var i = 0; i < split.length; i++) {

                        var prev = i - 1;

                        if (prev > 0) {

                            if (split[prev].includes('C1>') == true) {
                                cav_no = 1;
                                char_filename = split[i];
                            }
                            if (split[prev].includes('C2>') == true) {
                                cav_no = 2;
                                char_filename = split[i];
                            }
                            if (split[prev].includes('C3>') == true) {
                                cav_no = 3;
                                char_filename = split[i];
                            }
                            if (split[prev].includes('C4>') == true) {
                                cav_no = 4;
                                char_filename = split[i];
                            }
                                
                            if (split[prev].includes('PX>') == true ) {
                                char_posX = parseInt(split[i]);
                            }

                            if (split[prev].includes('PY>') == true ) {
                                char_posY = parseInt(split[i]);
                            }

                            if (split[prev].includes('SC>') == true ) {
                                char_scale = parseFloat(split[i]);
                            }
                        }
                    }

                    checkCharacter(char_filename, cav_no, char_posX, char_posY, char_scale);

                    loop = true;

                }

                if (scriptLine.includes('CN>') == true) {

                    index = scriptLine.indexOf('CN>') + 4;
                    charname = scriptLine.substr(index); 
                                
                    drawCharacterName(charname);

                    checkDialogBox(dLogBox_filename);

                    loop = true;
                }

                if (scriptLine.includes('LN>') == true) {

                    index = scriptLine.indexOf('LN>') + 4;
                    dialog = scriptLine.substr(index); 

                    checkDialogBox(dLogBox_filename);
                                
                    drawDialog(dialog);

                    loop = false;
                }

                if (scriptLine.includes('SM:') == true) {
                    checkDialogBox(dLogBox_filename);

                    loop = false;
                }

                if (scriptLine.includes('SA:') == true) {
                    stopAudio();

                    loop = true;
                }

                if (scriptLine.includes('HM:') == true) {
                    clearDialog();
                    clearDialogBox();
                    clearNameplate();

                    loop = true;
                }

                if (scriptLine.includes('HBG:') == true) {
                    clearBackground();

                    loop = true;
                }

                if (scriptLine.includes('HC1:') == true || scriptLine.includes('HC2:') == true || scriptLine.includes('HC3:') == true || scriptLine.includes('HC4:') == true) {

                    if (scriptLine.includes('HC1') == true) {
                        cav_no = 1;
                    }
                    if (scriptLine.includes('HC2') == true) {
                        cav_no = 2;
                    }
                    if (scriptLine.includes('HC3') == true) {
                        cav_no = 3;
                    }
                    if (scriptLine.includes('HC4') == true) {
                        cav_no = 4;
                    }

                    clearCharacter(cav_no);
                    
                    loop = true;
                }

                arrCount++;
            }

            if (loop == true) {
                setTimeout(runScript(), 3000);
            }
        }

        function checkBackground(bg_filename) {

            for (let i = 0; i < bgList.length; i++) {
                

                if (bg_filename.trim() == bgList[i]['filename']) {
                    bg_img.src = bgList[i]['url'];

                    //console.log('Check Background Src : ' + bgList[i]['url']);
                }
            }

            bg_img.onload = function () {
                setTimeout(drawBackground(bg_img), 1000);
            }
        }

        function checkCharacter(char_filename, cav_no, char_posX, char_posY, char_scale) {

            var char_img = new Image();

            for (let i = 0; i < charList.length; i++) {
                if (char_filename.trim() == charList[i]['filename']) {
                    char_img.src = charList[i]['url'];

                    //console.log('Check Character Src:' + charList[i]['url']);
                    break;
                }
            }

            char_img.onload = function () {
                drawCharacter(cav_no, char_img, char_posX, char_posY, char_scale);
            }

            
        }

        function checkDialogBox(dLogBox_filename) {

            var msgBox_img = new Image();

            for (var i = 0; i < dLogBoxList.length; i++) {

                if (dLogBox_filename.trim() == dLogBoxList[i]['filename']) {
                    msgBox_img.src = dLogBoxList[i]['url'];

                    //console.log("Check Message Frame Src : " + msgBox_img.src);
                    break;
                }                     
            }

            msgBox_img.onload = function() {
                drawMessageBox(msgBox_img);
            }
            
        }

        function checkAudio(audio_filename, volume) {

            var audioSrc = '';

            for (let i = 0; i < audioList.length; i++) {

                if (audio_filename.trim() == audioList[i]['filename']) {
                    audioSrc = audioList[i]['url'];

                    //console.log('Check audio src : ' + audioSrc);

                    break;
                }
            }

            playAudio(audioSrc, volume);
        }

        function drawBackground(img) {
            var cav = document.getElementById('cav_background');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720;

            ctx.clearRect(0, 0, 1280, 720);

            ctx.drawImage(img, 0,0, cav.width, cav.height);
            ctx.drawImage(cav,0, 0, cav.width * 0.5, cav.height * 0.5, 0, 0, ctx.width, ctx.height);
        }

        function drawCharacter(cav_no, img, posX, posY, scale) {

            var cav = document.getElementById('cav_char' + cav_no);
            var ctx = cav.getContext('2d');

            var width = img.width * scale;
            var height = img.height * scale;

            //Position
            var xAxis = posX - (width * 0.5);
            var yAxis = posY - (height * 0.5);
            //------------------------------------

            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);

            ctx.mozImageSmoothingEnabled = true;
            ctx.webkitImageSmoothingEnabled = true;
            ctx.msImageSmoothingEnabled = true;
            ctx.imageSmoothingEnabled = true;

            ctx.drawImage(img, xAxis, yAxis, width, height);
        }

        function drawCharacterName(charname) {
            var cav = document.getElementById('nameplate');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720;

            var font = namePlt_fontSize + 'px' + ' ' + 'Comic Sans MS';

            //Clear canvas
            ctx.clearRect(0, 0, cav.width, cav.height);

            //Set the style of the dialog font
            ctx.font = font;
            ctx.fillStyle = namePlt_fontColor;

            //Fill name to canvas
            ctx.fillText(charname, namePlt_posX, namePlt_posY);
        }

        function drawDialog(dLog) {

            //Get dialog canvas
            var cav = document.getElementById('dialog');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720;

            var posX = (1280 - dLog_width) * 0.5;

            //Clean dialog canvas screen to default
            ctx.clearRect(0, 0, cav.width, cav.height);

            var font = dLog_fontSize + 'px' + ' ' + 'Comic Sans MS';

            //Set the style of the dialog font
            ctx.font = font;
            ctx.fillStyle = dLog_fontColor;

            wrapText(dLog, ctx, dLog_posX, dLog_posY, dLog_width, dLog_lineHeight);
        }

        function drawMessageBox(img) {
            var cav = document.getElementById('dialogBar');
            var ctx = cav.getContext('2d');

            var width = img.width * dLogBox_scale;
            var height = img.height * dLogBox_scale;
            
            //Position
            var xAxis = dLogBox_posX - (width * 0.5);
            var yAxis = dLogBox_posY - (width * 0.5);

            //------------------------------------
            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);

            ctx.mozImageSmoothingEnabled = true;
            ctx.webkitImageSmoothingEnabled = true;
            ctx.msImageSmoothingEnabled = true;
            ctx.imageSmoothingEnabled = true;

            ctx.drawImage(img, xAxis, yAxis, width, height);
        }

        function playAudio(audioSrc, volume) {
            var doc_audioPlayer = document.getElementById('audioPlayer');

            doc_audioPlayer.setAttribute('src', audioSrc);
            doc_audioPlayer.volume = volume;
            doc_audioPlayer.play();

        }

        function stopAudio() {
            var doc_audioPlayer = document.getElementById('audioPlayer');

            doc_audioPlayer.pause();
        }

        function clearDialogBox() {
            var cav = document.getElementById('dialogBar');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);
        }

        function clearDialog() {
            var cav = document.getElementById('dialog');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720;

            ctx.clearRect(0, 0, cav.width, cav.height);
        }

        function clearNameplate() {
            var cav = document.getElementById('nameplate');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720;

            ctx.clearRect(0, 0, cav.width, cav.height);
        }

        function clearCharacter(cav_no) {
            var cav = document.getElementById('cav_char' + cav_no);
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720; 

            ctx.clearRect(0, 0, 1280, 720);
        }

        function clearBackground() {
            var cav = document.getElementById('cav_background');
            var ctx = cav.getContext('2d');

            cav.width = 1280;
            cav.height = 720;

            ctx.clearRect(0, 0, 5000, 5000);
        }
        
        function wrapText(scriptLine, ctx, posX, posY, maxWidth, lineHeight) {
    
            //Retrieve the scriptLine and spilt with spacebar
            var words = scriptLine.split(' ');
            var line = '';

            //Loop through the scriptLine and display dialog
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


    </script>
</body>

</html>