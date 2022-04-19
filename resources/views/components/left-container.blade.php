<div id="l-container" class="flex-row">
            
    <div id="cont_editMenu" class="menu-container scroll-y-hide z-index-20 flex-column">
        @include('components.vsn-resources')

        @include('components.vsn-components')
    </div>
    
    <div id="l-btn-container" class="flex-column"> 
        <button id="button_EditMenu" class="gg-chevron-left-r"> </button>
        <button id="button_Resources" class="button-30" style="writing-mode: vertical-rl; width: 50px; height: 250px;"> Resources </button>
        <button id="button_Component" class="button-30" style="writing-mode: vertical-rl; width: 50px; height: 250px;"> Component </button>           
    </div>
</div>