  
<button id="btnL_uplChar" class="button-54">
    Upload Character Image
</button>

<div id="contL_uplChar" style="display:none;">
    <div style="margin: 10px;">
        <div style="margin: 10px;">
            <div>Upload Image :</div>

            <form id="characterImageUploadForm" enctype="multipart/form-data">
                @csrf

                <input type="file" name="char_image" value="Browse">
                <input type="submit" method="post">
            </form>
        </div>

        <div class="flex-row align-center justify-center">
            <div class="scroll-y-hide" style="width: 300px; height: 200px; background-color: white;">
                <div id="characterList"></div>
            </div>
        </div>

        <span style="margin: 10px;"></span>
        
        <div class="flex-row align-center justify-end">
            <form id="removeCharacter">
                @csrf
                <button class="button-30">Remove</button>
            </form>

            <form id="refreshCharacterList">
                <button class="button-30" type="submit" method="get" >Refresh</button>
            </form>
        </div>

    </div>



</div>
