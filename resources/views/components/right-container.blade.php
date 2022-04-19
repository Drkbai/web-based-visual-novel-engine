<div id="r-container" class="flex-row ">
        <div id="r-btn-container" class="flex-column"> 
            <button id="button_detailsBox" class="gg-chevron-right-r"></button>
            <button id="btn_scriptLog" class="button-30" style="writing-mode: sideways-lr; width: 50px; height: 50px;">Log</button>
            
            <a class="button-30 b30-ver-side-lr" href="{{ url('playGame') }}">Test Play</a>

            <form id="btn_saveProject">
                @csrf
                <button class="button-30 b30-ver-side-lr" type="submit">Save Project</button>
            </form>

            
        </div>

        <div id="cont_details" class="menu-container z-index-20 flex-column">
            <div class="flex-column scroll-y-hide" style="margin: 10px; align-items: center;">
                <img id="showImage" style="width:300px; height: 300px;  object-fit: scale-down; border-color: grey; border-size: 2px;" src="" alt="No Image">
                
                <div class="flex-row">
                    <div id="showFilename" style="font-size: 18px;">?Filename?</div> 
                </div>

                {{-- Character --}}
                <div id="contR_char" class="flex-column" style="width:300px; margin-top: 20px; display: none;">
                    
                    {{-- X Axis --}}
                        <div style="font-size: 18px;">xAxis :</div>
                    
                        <div class="flex-row">
                            <input id='radBtn_selfPosX' name="posX" min="0" max="1280" value='' type='radio' />
                            <input id="num_selfPosX" type="number" style="width: 100px; margin-left: 10px;" value="0" disabled> 
                        </div>

                        <div class="flex-row">
                            <input id='radBtn_defPosX' name="posX" value='' type='radio' checked/>

                            <select id="sel_defPosX" type="text" style="width: 100px; margin-left: 10px;">
                                    <option value="l1">Left 1</option>
                                    <option value="l2">Left 2</option>
                                    <option value="l3">Left 3</option>
                                    <option value="md">Middle</option>
                                    <option value="r3">Right 3</option>
                                    <option value="r2">Right 2</option>
                                    <option value="r1">Right 1</option>
                            </select>
                        </div>
                    {{-- --}}

                    {{-- Y Axis --}}
                        <div style="font-size: 18px;">yAxis :</div>
                                    
                        <div class="flex-row">
                            <input id='radBtn_selfPosY' name="posy" value='' type='radio' />
                            <input id="num_selfPosY" type="number" style="width: 100px; margin-left: 10px;" value="0" disabled> 
                        </div>

                        <div class="flex-row">
                            <input id='radBtn_defPosY' name="posy" value='' type='radio' checked/>

                            <select id="sel_defPosY" type="text" style="width: 100px; margin-left: 10px;">
                                <option value="d1" selected>Down 1</option>
                                <option value="d2">Down 2</option>
                                <option value="d3">Down 3</option>
                                <option value="md">Middle</option>
                                <option value="u1">Up 1</option>
                                <option value="u2">Up 2</option>
                                <option value="u3">Up 3</option>
                            </select>
                        </div>
                    {{-- --}}

                    {{-- Scale --}}
                        <div style="font-size: 18px;">Scale :</div>

                        <div class="flex-row">
                            <input id='radBtn_defScale' name="scale" value='' type='radio' checked />

                            <select id="sel_defScale" type="text" style="width: 100px; margin-left: 10px;">
                                <option value="1.0">1.0</option>
                                @for($i = 9; $i > 0; $i-- )
                                <option value="0.{{ $i }}">0.{{ $i }}</option>
                                @endfor
                            </select>
                        </div>
                    {{-- --}}
                </div>

                {{-- Dialog --}}
                <div id="contR_dLog" class="flex-column" style="width: 300px; display: none; margin-top: 20px;">
                    <div>Line</div>
                    <textarea id="txt_line" rows="4" columns="40"></textarea>
                </div>

                {{-- Audio --}}
                <div id="contR_audio" class="flex-column" style="display: none; margin-top: 20px;">
                    <audio id="contR_audioPlayer" controls></audio>

                    <span style="margin: 10px;"></span>

                    <div style="font-size: 18px;">Adjust Volumn :</div>

                    <input id='ranBtn_volume' type='range' min='0' max='1' step='0.1'>
                </div>
            </div>
        </div>
    </div>
</div>