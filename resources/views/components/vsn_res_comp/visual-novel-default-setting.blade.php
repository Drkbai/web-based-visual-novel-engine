
<button id="btnL_defVSNSet" class="button-54">
    Visual Novel Default Setting
</button>

<div id="contL_defVSNSet" style="margin: 10px; display: none;">
    <span id="vsn_defSetting" style="display: none;"></span>

    {{-- Dialog Box --}}
    <div id="cont_dlogBoxSet">
        <div class="caption-0">Dialog Box Setting</div>

        {{-- Image --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="font-cont-1">Image</div>
                <div style="width: 10px;">:</div>

                <select id="sel_DlogBoxImg">
                    <option value="">Default</option>
                </select>
            </div>
        {{-- ------ --}}
        
        {{-- Y Axis --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="font-cont-1">Y Axis</div>
                <div style="width: 10px;">:</div>

                <input id="num_dlogbox_posy" class="btn-num-1" type="number" value="630">
            </div>

            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1"></div>
                <div style="width: 10px;">:</div>
                
                <input id="ran_dlogbox_posy" type="range" min="0" max="1440" value="630" class="btn-ran-1">
            </div>
        {{-- ------ --}}

        {{-- Scale --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="font-cont-1">Scale</div>
                <div style="width: 10px;">:</div>

                <input id="num_dlogbox_scale" class="btn-num-1" type="number" min="0" max="1" step="0.05" value="0.65" >
            </div>

            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1"></div>
                <div style="width: 10px;">:</div>
                
                <input id="ran_dlogbox_scale" type="range" min="0" max="1" step="0.01" value="0.65" class="btn-ran-1">
            </div>
        {{-- ------ --}}

    </div>

    <span style="margin: 10px;"></span>

    {{-- Dialog --}}
    <div id="cont_dLogEditor">
        <div class="caption-0">Dialog Setting</div>

        {{-- Font Color --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1">Font Color</div>
                <div style="width: 10px;">:</div>

                <input id="col_dlog" class="color-input" value="#FFF"/>
            </div>
        {{-- ------ --}}

        {{-- Font Size --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1">Font Size</div>
                <div style="width: 10px;">:</div>

                <input id="num_dlog_size" class="btn-num-1" min="0" type="number" value="20">
            </div>
        {{-- ------ --}}

        {{-- Line Height --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1">Line Height</div>
                <div style="width: 10px;">:</div>

                <input id="num_dlog_line_height" class="btn-num-1" type="number" value="25" min="0">
            </div>
        {{-- ------ --}}

        {{-- Textbox Width --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1">Width</div>
                <div style="width: 10px;">:</div>

                <input id="num_textbox_width" class="btn-num-1" type="number" min="0" max="1280" step="10" value="1000">
            </div>

            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1"></div>
                <div style="width: 10px;">:</div>

                <input id="ran_textbox_width" class="btn-ran-1" type="range" min="0" max="1280" value="1000">
            </div>
        {{-- ------ --}}

        {{-- Textbox Y Axis --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1">Y Axis</div>
                <div style="width: 10px;">:</div>

                <input id="num_textbox_posy" class="btn-num-1" type="number" min="0" max="720" value="600">
            </div>

            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1"></div>
                <div style="width: 10px;">:</div>

                <input id="ran_textbox_posy" class="btn-ran-1" type="range" min="0" max="720" value="600">
            </div>
        {{-- ------ --}}

        {{-- Demo Text --}}
            <div class="m-top-5 m-btm-5 font-cont-1">Text : </div>

            <div class="flex-row align-center justify-center">
                <textarea id="txt_dlog" rows="4" cols="40">{{ $demo }}</textarea>
            </div>
        {{-- ------ --}}
        
    </div>

    <span style="margin: 10px;"></span>

    {{-- Nameplate --}}
    <div id="cont_displayCharName">
        <div class="caption-0">Nameplate Setting: </div>

        {{-- Font Size --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1">Font Size</div>
                <div style="width: 10px;">:</div>

                <input id="num_nameplt_font_size" class="btn-num-1" type="number" value="30">
            </div>
        {{-- ------ --}}

        {{-- Font Color --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1">Font Color</div>
                <div style="width: 10px;">:</div>

                <input id="col_nameplt_font_color" class="color-input" value="#FFF"/>
            </div>
        {{-- ------ --}}

        {{-- Y Axis --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1">Y Axis</div>
                <div style="width: 10px;">:</div>

                <input id="num_nameplt_posy" class="btn-num-1" type="number" min="0" max="720" value="555"/>
            </div>

            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1"></div>
                <div style="width: 10px;">:</div>

                <input id="ran_nameplt_posy" class="btn-ran-1" type="range" min="0" max="720" value="555"/>
            </div>
        {{-- ------ --}}

        {{-- X Axis --}}
            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1">X Axis</div>
                <div style="width: 10px;">:</div>

                <input id="num_nameplt_posx" class="btn-num-1" type="number" min="0" max="1280" value="200"/>
            </div>

            <div class="flex-row align-center m-top-5 m-btm-5">
                <div class="m-top-5 m-btm-5 font-cont-1"></div>
                <div style="width: 10px;">:</div>

                <input id="ran_nameplt_posx" class="btn-ran-1" type="range" min="0" max="1280" value="200"/>
            </div>
        {{-- ------ --}}
    </div>
</div>

