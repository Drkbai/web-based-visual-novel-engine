
<button id="btnL_uplAudio" class="button-54">
    Upload Audio
</button>

<div id="contL_uplAudio" style="display:none;">
    <div style="margin: 10px;">
        
        <div style="margin: 10px;">
            <div>Upload Audio :</div>

            <form id="audioUploadForm" enctype="multipart/form-data">
                @csrf

                <input type="file" name="audio" value="Browse">
                <input type="submit" method="post">
            </form>
        </div>

        <div class="scroll-y-hide" style="width: 300px; margin-left: 50px; margin-right: 50px; height: 200px; background-color: white;">
            <div id="audioList"></div>
        </div>

        <span style="margin: 10px;"></span>
        
        <div class="flex-row align-center justify-end">
            <form id="removeAudio">
                @csrf
                <button class="button-30">Remove</button>
            </form>

            <form id="refreshAudioList">
                <button class="button-30" type="submit" method="get" >Refresh</button>
            </form>
        </div>
        
    </div>
</div>