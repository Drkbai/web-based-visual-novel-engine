
<button id="btnL_uplBackground" class="button-54">Upload Background Image</button>

<div id="contL_uplBackground" style="display:none; margin: 10px;">
    
    <div style="margin: 10px;">

        <div>Upload Image :</div>

            <form id="backgroundImageUploadForm" enctype="multipart/form-data">

                @csrf                        
                <input type="file" name="bg_image" value="Browse">
                <input type="submit" method="post">

            </form>

    </div>

    <div class="scroll-y-hide" style="width: 300px; margin-left: 40; margin-right: 40px; height: 200px; border-radius: 6px; background-color: white;">
        <div id="backgroundList"></div>
    </div>

    <span style="margin: 10px;"></span>
        
    <div class="flex-row align-center justify-end">
        <form id="removeBackground">
            @csrf
            <button class="button-30">Remove</button>
        </form>

        <form id="refreshBackgroundList">
            <button class="button-30" type="submit" method="get" >Refresh</button>
        </form>
    </div>

</div>
