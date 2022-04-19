
<button id="btnL_uplDlogBox" class="button-54">
    Upload Dialog Box Image
</button>

<div id="contL_uplDlogBox" style="display:none;">
    <div style="margin: 10px;">
        
        <div style="margin: 10px">
            <div>Upload Image :</div>

            <form id="dialogBoxImageUploadForm" enctype="multipart/form-data">
                @csrf

                <input type="file" name="dbx_image" value="Browse">
                <input type="submit" method="post">
            </form>
        </div>

        <div class="scroll-y-hide" style="width: 300px; margin-left: 50px; margin-right: 50px; height: 200px; background-color: white;">
            <div id="dialogBoxList"></div>
        </div>

        <span style="margin: 10px;"></span>
        
        <div class="flex-row align-center justify-end">
            <form id="removeDialogBox">
                @csrf
                <button class="button-30">Remove</button>
            </form>

            <form id="refreshDialogBoxList">
                <button class="button-30" type="submit" method="get" >Refresh</button>
            </form>
        </div>
        
    </div>
</div>
