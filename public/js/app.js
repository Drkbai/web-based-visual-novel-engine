(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/ajax/buttonToggle.js":
/*!*******************************************!*\
  !*** ./resources/js/ajax/buttonToggle.js ***!
  \*******************************************/
/***/ (() => {

//Button jQuery
$('#btnL_projectTitle').click(function () {
  $('#contL_projectTitle').toggle();
});
$('#btnL_uplBackground').click(function () {
  $('#contL_uplBackground').toggle();
});
$('#btnL_uplDlogBox').click(function () {
  $('#contL_uplDlogBox').toggle();
});
$('#btnL_uplChar').click(function () {
  $('#contL_uplChar').toggle();
});
$('#' + 'btnL_uplAudio').click(function () {
  $('#contL_uplAudio').toggle();
});
$('#btnL_charSetSim').click(function () {
  $('#contL_charSetSim').toggle();
});
$('#btnL_defVSNSet').click(function () {
  $('#contL_defVSNSet').toggle();
});
$('#button_Resources').click(function () {
  $('#resourcesBox').show();
  $('#componentBox').hide();
});
$('#button_Component').click(function () {
  $('#resourcesBox').hide();
  $('#componentBox').show();
});
$('#btn_scriptLog').click(function () {
  $('#logBox').toggle();
});
$('#' + 'btnL_addCharname').click(function () {
  $('#contL_addCharname').toggle();
});
$('#button_EditMenu').click(function () {
  $('#cont_editMenu').toggle();

  if ($('#button_EditMenu').hasClass('gg-chevron-left-r')) {
    $('#button_EditMenu').addClass("gg-chevron-right-r").removeClass("gg-chevron-left-r");
  } else if ($('#button_EditMenu').hasClass('gg-chevron-right-r')) {
    $('#button_EditMenu').addClass("gg-chevron-left-r").removeClass("gg-chevron-right-r");
  }

  $('#button_Resources').toggle();
  $('#button_Component').toggle();
});
$('#button_detailsBox').click(function () {
  $('#cont_details').toggle();

  if ($('#button_detailsBox').hasClass('gg-chevron-left-r')) {
    $('#button_detailsBox').addClass("gg-chevron-right-r").removeClass("gg-chevron-left-r");
  } else if ($('#button_detailsBox').hasClass('gg-chevron-right-r')) {
    $('#button_detailsBox').addClass("gg-chevron-left-r").removeClass("gg-chevron-right-r");
  }
});
$('#radBtn_selfPosX').click(function () {
  $('#num_selfPosX').attr('disabled', false);
  $('#sel_defPosX').attr('disabled', true);
});
$('#radBtn_defPosX').click(function () {
  $('#sel_defPosX').attr('disabled', false);
  $('#num_selfPosX').attr('disabled', true);
});
$('#radBtn_selfPosY').click(function () {
  $('#num_selfPosY').attr('disabled', false);
  $('#sel_defPosY').attr('disabled', true);
});
$('#radBtn_defPosY').click(function () {
  $('#sel_defPosY').attr('disabled', false);
  $('#num_selfPosY').attr('disabled', true);
}); //--------------------------------------------------------

$('#radBtn_selfCharSetPosX_1').click(function () {
  $('#selfCharSetPosX_1').attr('disabled', false);
  $('#defCharSetPosX_1').attr('disabled', true);
});
$('#radBtn_selfCharSetPosX_2').click(function () {
  $('#selfCharSetPosX_2').attr('disabled', false);
  $('#defCharSetPosX_2').attr('disabled', true);
});
$('#radBtn_selfCharSetPosX_3').click(function () {
  $('#selfCharSetPosX_3').attr('disabled', false);
  $('#defCharSetPosX_3').attr('disabled', true);
});
$('#radBtn_selfCharSetPosX_4').click(function () {
  $('#selfCharSetPosX_4').attr('disabled', false);
  $('#defCharSetPosX_4').attr('disabled', true);
});
$('#radBtn_defCharSetPosX_1').click(function () {
  $('#selfCharSetPosX_1').attr('disabled', true);
  $('#defCharSetPosX_1').attr('disabled', false);
});
$('#radBtn_defCharSetPosX_2').click(function () {
  $('#selfCharSetPosX_2').attr('disabled', true);
  $('#defCharSetPosX_2').attr('disabled', false);
});
$('#radBtn_defCharSetPosX_3').click(function () {
  $('#selfCharSetPosX_3').attr('disabled', true);
  $('#defCharSetPosX_3').attr('disabled', false);
});
$('#radBtn_defCharSetPosX_4').click(function () {
  $('#selfCharSetPosX_4').attr('disabled', true);
  $('#defCharSetPosX_4').attr('disabled', false);
}); //------------------------------------------------------

$('#radBtn_selfCharSetPosY_1').click(function () {
  $('#selfCharSetPosY_1').attr('disabled', false);
  $('#defCharSetPosY_1').attr('disabled', true);
});
$('#radBtn_selfCharSetPosY_2').click(function () {
  $('#selfCharSetPosY_2').attr('disabled', false);
  $('#defCharSetPosY_2').attr('disabled', true);
});
$('#radBtn_selfCharSetPosY_3').click(function () {
  $('#selfCharSetPosY_3').attr('disabled', false);
  $('#defCharSetPosY_3').attr('disabled', true);
});
$('#radBtn_selfCharSetPosY_4').click(function () {
  $('#selfCharSetPosY_4').attr('disabled', false);
  $('#defCharSetPosY_4').attr('disabled', true);
});
$('#radBtn_defCharSetPosY_1').click(function () {
  $('#selfCharSetPosY_1').attr('disabled', true);
  $('#defCharSetPosY_1').attr('disabled', false);
});
$('#radBtn_defCharSetPosY_2').click(function () {
  $('#selfCharSetPosY_2').attr('disabled', true);
  $('#defCharSetPosY_2').attr('disabled', false);
});
$('#radBtn_defCharSetPosY_3').click(function () {
  $('#selfCharSetPosY_3').attr('disabled', true);
  $('#defCharSetPosY_3').attr('disabled', false);
});
$('#radBtn_defCharSetPosY_4').click(function () {
  $('#selfCharSetPosY_4').attr('disabled', true);
  $('#defCharSetPosY_4').attr('disabled', false);
});

/***/ }),

/***/ "./resources/js/ajax/preventRefresh.js":
/*!*********************************************!*\
  !*** ./resources/js/ajax/preventRefresh.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _require = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"),
    defaultsDeep = _require.defaultsDeep,
    get = _require.get;

$('#' + 'projectForm').submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: 'createGame/projectName/',
    type: 'get',
    data: $('#projectForm').serialize(),
    // Remember that you need to have your csrf token included
    dataType: 'json',
    success: function success(_response) {
      alert(_response);
    },
    error: function error(_response) {// Handle error
    }
  });
  event.preventDefault();
}); // Upload Materials

$(document).ready(function () {
  $('#' + 'backgroundImageUploadForm').submit(function (event) {
    event.preventDefault();
    var form = $('#backgroundImageUploadForm')[0];
    var data = new FormData(form);
    $.ajax({
      url: '/createGame/uploadBackground',
      type: 'post',
      data: data,
      encType: 'multipart/form-data',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        alert(_response);
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'dialogBoxImageUploadForm').submit(function (event) {
    event.preventDefault();
    var form = $('#dialogBoxImageUploadForm')[0];
    var data = new FormData(form);
    $.ajax({
      url: 'createGame/uploadDialogBox/',
      type: 'post',
      data: data,
      encType: 'multipart/form-data',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        alert(_response);
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'characterImageUploadForm').submit(function (event) {
    event.preventDefault();
    var form = $('#characterImageUploadForm')[0];
    var data = new FormData(form);
    $.ajax({
      url: 'createGame/uploadCharacter',
      type: 'post',
      data: data,
      encType: 'multipart/form-data',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        alert(_response);
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'audioUploadForm').submit(function (event) {
    event.preventDefault();
    var form = $('#' + 'audioUploadForm')[0];
    var data = new FormData(form);
    $.ajax({
      url: 'createGame/uploadAudio',
      type: 'post',
      data: data,
      encType: 'multipart/form-data',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        alert(_response);
      },
      error: function error(_response) {
        console.log(_response);
      }
    });
  });
}); //Refresh Showcase List

$(document).ready(function () {
  $('#' + 'refreshBackgroundList').submit(function (event) {
    event.preventDefault();
    var form = $('#refreshBackgroundList')[0];
    var data = new FormData(form);
    $.ajax({
      url: '/createGame/getBackgroundImage',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $imageList = JSON.parse($jsonData); //Clear showcase files

        for (var i = 0; i < $imageList.length; i++) {
          $('#fileList_BG_' + i).remove();
        } //Load showcase files


        for (var _i = 0; _i < $imageList.length; _i++) {
          $url = $imageList[_i]['url'];
          $filename = $imageList[_i]['filename'];
          $fileList = 'fileList_BG_' + _i;
          $('#' + 'backgroundList').append('<div class="button-24" id="' + $fileList + '" data-url="' + $url + '" data-filename="' + $filename + '" onClick="showImage(' + $fileList + ')" >' + $filename + '</div>');
        }

        $parentID = 'backgroundList';
        sortSelectionList($parentID);
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'refreshDialogBoxList').submit(function (event) {
    event.preventDefault();
    var form = $('#refreshDialogBoxList')[0];
    var data = new FormData(form);
    $.ajax({
      url: '/createGame/getDialogBoxImage',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $imageList = JSON.parse($jsonData); //Clear showcase files

        for (var i = 0; i < $imageList.length; i++) {
          $('#fileList_DLB_' + i).remove();
          $('#sel_DlogBoxImg option').remove();
        } //Load showcase files & Passing files to each dialog box selection


        for (var _i2 = 0; _i2 < $imageList.length; _i2++) {
          $filename = $imageList[_i2]['filename'];
          $url = $imageList[_i2]['url'];
          $fileList = 'fileList_DLB_' + _i2;
          $('#' + 'dialogBoxList').append('<div class="button-24" id="' + $fileList + '" data-url="' + $url + '" data-filename="' + $filename + '" onClick="showImage(' + $fileList + ')" >' + $filename + '</div>');
          $('#sel_DlogBoxImg').append('<option value="' + $url + '"' + '>' + $filename + '</option>');
        }

        $parentID = 'sel_DlogBoxImg';
        sortSelectionList($parentID);
        $parentID = 'dialogboxList';
        sortSelectionList($parentID);
      },
      error: function error(_response) {
        console.log(_response);
      }
    });
  });
  $('#' + 'refreshCharacterList').submit(function (event) {
    event.preventDefault();
    var form = $('#refreshCharacterList')[0];
    var data = new FormData(form);
    $.ajax({
      url: '/createGame/getCharacterList',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $imageList = JSON.parse($jsonData); //Clear showcase files

        for (var i = 0; i < $imageList.length; i++) {
          $('#' + 'fileList_CR_' + i).remove();
        } //Load showcase files & Passing files to each char selection


        for (var _i3 = 0; _i3 < $imageList.length; _i3++) {
          $filename = $imageList[_i3]['filename'];
          $url = $imageList[_i3]['url'];
          $fileList = 'fileList_CR_' + _i3;
          $('#characterList').append('<div class="button-24" id="' + $fileList + '" data-url="' + $url + '" data-filename="' + $filename + '" onClick="showImage(' + $fileList + ')" >' + $filename + '</div>');
        }

        $parentID = 'characterList';
        sortSelectionList($parentID);
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'refreshAudioList').submit(function (event) {
    event.preventDefault();
    var form = $('#refreshAudioList')[0];
    var data = new FormData(form);
    $.ajax({
      url: '/createGame/getAudioList',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $audioList = JSON.parse($jsonData); //Clear showcase files

        for (var i = 0; i < $audioList.length; i++) {
          $('#' + 'fileList_AD_' + i).remove();
        } //Load showcase files & Passing files to each char selection


        for (var _i4 = 0; _i4 < $audioList.length; _i4++) {
          $filename = $audioList[_i4]['filename'];
          $url = $audioList[_i4]['url'];
          $fileList = 'fileList_AD_' + _i4;
          $('#audioList').append('<div class="button-24" id="' + $fileList + '" data-url="' + $url + '" data-filename="' + $filename + '" onClick="playAudio(' + $fileList + ')" >' + $filename + '</div>');
        }

        $parentID = 'audioList';
        sortSelectionList($parentID);
      },
      error: function error(_response) {
        console.log("Fail :" + _response);
      }
    });
  });

  function sortSelectionList(parentID) {
    var options = $('#' + parentID + ' option'); // Collect options         

    options.detach().sort(function (a, b) {
      // Detach from select, then Sort
      var at = $(a).text();
      var bt = $(b).text();
      return at > bt ? 1 : at < bt ? -1 : 0; // Tell the sort function how to order
    });
    options.appendTo('#' + parentID);
  }
}); //Select And Remove Showcase

$(document).ready(function () {
  $('#' + 'backgroundList').bind('click', function (e) {
    $('#' + 'backgroundList').find(".button-24").removeClass("sel_btn_24");
    $(e.target).addClass("sel_btn_24");
    $targetID = e.target.id;
    console.log($targetID);
    $('#' + 'backgroundList').attr('data-selected', $targetID);
  });
  $('#' + 'characterList').bind('click', function (e) {
    $('#' + 'characterList').find(".button-24").removeClass("sel_btn_24");
    $(e.target).addClass("sel_btn_24");
    $targetID = e.target.id;
    console.log($targetID);
    $('#' + 'characterList').attr('data-selected', $targetID);
  });
  $('#' + 'dialogBoxList').bind('click', function (e) {
    $('#' + 'dialogBoxList').find(".button-24").removeClass("sel_btn_24");
    $(e.target).addClass("sel_btn_24");
    $targetID = e.target.id;
    console.log($targetID);
    $('#' + 'dialogBoxList').attr('data-selected', $targetID);
  });
  $('#' + 'audioList').bind('click', function (e) {
    $('#' + 'audioList').find(".button-24").removeClass("sel_btn_24");
    $(e.target).addClass("sel_btn_24");
    $targetID = e.target.id;
    console.log($targetID);
    $('#' + 'audioList').attr('data-selected', $targetID);
  });
  $('#' + 'removeBackground').submit(function (e) {
    e.preventDefault();
    $selectedID = $('#' + 'backgroundList').attr('data-selected');
    $filename = $('#' + $selectedID).attr('data-filename');
    console.log('Remove file :' + $filename);
    var form = $('#removeBackground')[0];
    var data = new FormData(form);
    data.append('filename', $filename);
    $.ajax({
      url: 'createGame/removeBackground',
      type: 'post',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        alert(_response);
        $('#' + $selectedID).remove();
      },
      error: function error(_response) {
        console.log(_response);
      }
    });
  });
  $('#' + 'removeCharacter').submit(function (e) {
    e.preventDefault();
    $selectedID = $('#' + 'characterList').attr('data-selected');
    $filename = $('#' + $selectedID).attr('data-filename');
    console.log('Remove file :' + $filename);
    var form = $('#removeCharacter')[0];
    var data = new FormData(form);
    data.append('filename', $filename);
    $.ajax({
      url: 'createGame/removeCharacter',
      type: 'post',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        alert(_response);
        $('#' + $selectedID).remove();
      },
      error: function error(_response) {
        console.log(_response);
      }
    });
  });
  $('#' + 'removeDialogBox').submit(function (e) {
    e.preventDefault();
    $selectedID = $('#' + 'dialogBoxList').attr('data-selected');
    $filename = $('#' + $selectedID).attr('data-filename');
    console.log('Remove file :' + $filename);
    var form = $('#removeDialogBox')[0];
    var data = new FormData(form);
    data.append('filename', $filename);
    $.ajax({
      url: 'createGame/removeDialogBox',
      type: 'post',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        alert(_response);
        $('#' + $selectedID).remove();
      },
      error: function error(_response) {
        console.log(_response);
      }
    });
  });
  $('#' + 'removeAudio').submit(function (e) {
    e.preventDefault();
    $selectedID = $('#' + 'audioList').attr('data-selected');
    $filename = $('#' + $selectedID).attr('data-filename');
    console.log('Remove file :' + $filename);
    var form = $('#removeAudio')[0];
    var data = new FormData(form);
    data.append('filename', $filename);
    $.ajax({
      url: 'createGame/removeAudio',
      type: 'post',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        alert(_response);
        $('#' + $selectedID).remove();
      },
      error: function error(_response) {
        console.log(_response);
      }
    });
  });
}); //Add Character Name

$(document).ready(function () {
  $('#' + 'btn_appendCharname').click(function () {
    $charname = $('#' + 'txt_charname').val();
    $('#' + 'sel_charname').append('<option value="' + $charname + '">' + $charname + '</option>');
    $('#' + 'txt_charname').val('');
  });
  $('#' + 'btn_removeCharname').click(function () {
    $charname = $('#' + 'sel_charname').val();
    $('#' + 'sel_charname' + ' option:selected').remove();
  });
}); //Visual Novel Default Setting

$(document).ready(function () {
  //Dialog Box Setting
  $(document).ready(function () {
    //Default Value
    $posX_dLogBox = 1280 * 0.5;
    $posY_dLogBox = 630;
    $scale_dLogBox = 0.65;
    $('#' + 'vsn_defSetting').attr('data-dlogbox-posx', $posX_dLogBox);
    $('#' + 'vsn_defSetting').attr('data-dlogbox-posy', $posY_dLogBox);
    $('#' + 'vsn_defSetting').attr('data-dlogbox-scale', $scale_dLogBox);
    $('#' + 'sel_DlogBoxImg').on('change', function (event) {
      event.preventDefault();
      checkDlogBoxImg($posX_dLogBox, $posY_dLogBox, $scale_dLogBox);
    });
    $('#' + 'num_dlogbox_posy').on('input', function (event) {
      event.preventDefault();
      $posY_dLogBox = $(this).val();
      $('#' + 'ran_dlogbox_posy').val($posY_dLogBox);
      checkDlogBoxImg($posX_dLogBox, $posY_dLogBox, $scale_dLogBox);
      $('#' + 'vsn_defSetting').attr('data-dlogbox-posy', $posY_dLogBox);
    });
    $('#' + 'ran_dlogbox_posy').on('input', function (event) {
      event.preventDefault();
      $posY_dLogBox = $(this).val();
      $('#' + 'num_dlogbox_posy').val($posY_dLogBox);
      checkDlogBoxImg($posX_dLogBox, $posY_dLogBox, $scale_dLogBox);
      $('#' + 'vsn_defSetting').attr('data-dlogbox-posy', $posY_dLogBox);
    });
    $('#' + 'num_dlogbox_scale').on('input', function (event) {
      event.preventDefault(); //Retrieve scale from num input

      $scale_dLogBox = $(this).val(); //Sycn scale range button 

      $('#' + 'ran_dlogbox_scale').val($scale_dLogBox);
      checkDlogBoxImg($posX_dLogBox, $posY_dLogBox, $scale_dLogBox);
      $('#' + 'vsn_defSetting').attr('data-dlogbox-scale', $scale_dLogBox);
    });
    $('#' + 'ran_dlogbox_scale').on('input', function (event) {
      event.preventDefault();
      $scale_dLogBox = $(this).val();
      $('#' + 'num_dlogbox_scale').val($scale_dLogBox);
      checkDlogBoxImg($posX_dLogBox, $posY_dLogBox, $scale_dLogBox);
      $('#' + 'vsn_defSetting').attr('data-dlogbox-scale', $scale_dLogBox);
    });

    function checkDlogBoxImg($posX_dLogBox, $posY_dLogBox, $scale_dLogBox) {
      //Retrieve selected dialog box image 
      $hasImage_dLogBox = $('#' + 'sel_DlogBoxImg').val();
      $img_dLogBox = new Image();

      if ($hasImage_dLogBox != null) {
        //Retrieve selected image
        $img_dLogBox.src = $hasImage_dLogBox;

        $img_dLogBox.onload = function () {
          canvasDrawDialogBox($img_dLogBox, $posX_dLogBox, $posY_dLogBox, $scale_dLogBox);
        }; //Store filename to dLogEditor


        $filename = $('#' + 'sel_DlogBoxImg' + ' option:selected').text();
        $('#' + 'vsn_defSetting').attr('data-dlogbox-filename', $filename);
        $('#' + 'vsn_defSetting').attr('data-dlogbox-img', $hasImage_dLogBox);
      }
    }
  }); //Dialog Setting

  $(document).ready(function () {
    //Retrieve dialog default setting value
    $text_dLog = $('#' + 'txt_dlog').val();
    $fontColor_dLog = $('#' + 'col_dlog').val();
    $fontSize_dLog = $('#' + 'num_dlog_size').val();
    $posY_dLog = parseInt($('#' + 'num_textbox_posy').val());
    $maxW_dLog = parseInt($('#' + 'num_textbox_width').val());
    $lineH_dLog = parseInt($('#' + 'num_dlog_line_height').val());
    $posX_dLog = (1280 - $maxW_dLog) * 0.5;
    checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog); //Store dialog default setting to id

    $('#' + 'vsn_defSetting').attr('data-dlog-font-size', $fontSize_dLog);
    $('#' + 'vsn_defSetting').attr('data-dlog-font-color', $fontColor_dLog);
    $('#' + 'vsn_defSetting').attr('data-textbox-posx', $posX_dLog);
    $('#' + 'vsn_defSetting').attr('data-textbox-posy', $posY_dLog);
    $('#' + 'vsn_defSetting').attr('data-textbox-width', $maxW_dLog);
    $('#' + 'vsn_defSetting').attr('data-dlog-line-height', $lineH_dLog); //Dialog font size number input

    $('#' + 'num_dlog_size').on('input', function (event) {
      event.preventDefault();
      $fontSize_dLog = $(this).val();
      $('#' + 'vsn_defSetting').attr('data-dlog-font-size', $fontSize_dLog);
      checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog);
    }); //Dialog color 

    $elem = $('#' + 'col_dlog')[0];
    $hueb_col_dLog = new Huebee($elem, {});
    $hueb_col_dLog.on('change', function (color) {
      $fontColor_dLog = color; //Issues - Unable retrieve global position y variable

      $posY = parseInt($('#' + 'num_textbox_posy').val());
      checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog); //Set color value

      $('#' + 'col_dlog').val(color); //Store color value

      $('#' + 'vsn_defSetting').attr('data-dlog-font-color', $fontColor_dLog);
    }); //Textbox pos y number input

    $('#' + 'num_textbox_posy').on('input', function (event) {
      event.preventDefault();
      $posY_dLog = parseInt($(this).val());
      $('#' + 'ran_textbox_posy').val($posY_dLog);
      $('#' + 'vsn_defSetting').attr('data-textbox-posy', $posY_dLog);
      checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog);
    }); //Textbox pos y range input

    $('#' + 'ran_textbox_posy').on('input', function (event) {
      event.preventDefault();
      $posY_dLog = parseInt($(this).val());
      $('#' + 'num_textbox_posy').val($posY_dLog);
      $('#' + 'vsn_defSetting').attr('data-textbox-posy', $posY_dLog);
      checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog);
    }); //Textbox width number input

    $('#' + 'num_textbox_width').on('input', function (event) {
      event.preventDefault();
      $maxW_dLog = parseInt($(this).val());
      $('#' + 'ran_textbox_width').val($maxW_dLog);
      $('#' + 'vsn_defSetting').attr('data-textbox-width', $maxW_dLog);
      $posX_dLog = (1280 - $maxW_dLog) * 0.5;
      $('#' + 'vsn_defSetting').attr('data-textbox-posx', $posX_dLog);
      checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog);
    }); //Textbox width range input

    $('#' + 'ran_textbox_width').on('input', function (event) {
      event.preventDefault();
      $maxW_dLog = parseInt($(this).val());
      $('#' + 'num_textbox_width').val($maxW_dLog);
      $('#' + 'vsn_defSetting').attr('data-textbox-width', $maxW_dLog);
      $posX_dLog = (1280 - $maxW_dLog) * 0.5;
      $('#' + 'vsn_defSetting').attr('data-textbox-posx', $posX_dLog);
      checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog);
    }); //Dialog line height number input

    $('#' + 'num_dlog_line_height').on('input', function (event) {
      event.preventDefault();
      $lineH_dLog = parseInt($(this).val());
      $('#' + 'vsn_defSetting').attr('data-dlog-line-height', $lineH_dLog);
      checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog);
    }); //Text input

    $('#' + 'txt_dlog').on('input', function (event) {
      event.preventDefault();
      $text_dLog = $(this).val();
      checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog);
    });

    function checkDlog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog) {
      $hasDlog = $('#' + 'txt_dlog').val(); //If dialog exist, show dialog

      if ($hasDlog != null) {
        canvasDrawDialog($text_dLog, $fontColor_dLog, $fontSize_dLog, $posY_dLog, $maxW_dLog, $lineH_dLog);
      }
    }
  }); //Nameplate Setting

  $(document).ready(function () {
    $demo_name = 'Himawari';
    $fontSize_nameplt = $('#' + 'num_nameplt_font_size').val();
    $fontColor_nameplt = $('#' + 'col_nameplt_font_color').val();
    $posX_nameplt = parseInt($('#' + 'num_nameplt_posx').val());
    $posY_nameplt = parseInt($('#' + 'num_nameplt_posy').val()); //Store default value

    $('#' + 'vsn_defSetting').attr('data-nameplt-font-size', $fontSize_nameplt);
    $('#' + 'vsn_defSetting').attr('data-nameplt-font-color', $fontColor_nameplt);
    $('#' + 'vsn_defSetting').attr('data-nameplt-posy', $posY_nameplt);
    $('#' + 'vsn_defSetting').attr('data-nameplt-posx', $posX_nameplt); //Show default nameplate

    canvasDrawNameplate($demo_name, $fontColor_nameplt, $fontSize_nameplt, $posX_nameplt, $posY_nameplt);
    $nameplt_elem = $('#' + 'col_nameplt_font_color')[0];
    $hueb_nameplate = new Huebee($nameplt_elem, {});
    $hueb_nameplate.on('change', function (color) {
      $fontColor_nameplt = color; //Store value

      $('#' + 'vsn_defSetting').attr('data-nameplt-font-color', $fontColor_nameplt);
      canvasDrawNameplate($demo_name, $fontColor_nameplt, $fontSize_nameplt, $posX_nameplt, $posY_nameplt);
    });
    $('#' + 'num_nameplt_font_size').on('input', function () {
      $fontSize_nameplt = $(this).val(); //Store value

      $('#' + 'vsn_defSetting').attr('data-nameplt-font-size', $fontSize_nameplt);
      canvasDrawNameplate($demo_name, $fontColor_nameplt, $fontSize_nameplt, $posX_nameplt, $posY_nameplt);
    });
    $('#' + 'num_nameplt_posy').on('input', function () {
      $posY_nameplt = $(this).val(); //Sync range value

      $('#' + 'ran_nameplt_posy').val($posY_nameplt); //Store value

      $('#' + 'vsn_defSetting').attr('data-nameplt-posy', $posY_nameplt);
      canvasDrawNameplate($demo_name, $fontColor_nameplt, $fontSize_nameplt, $posX_nameplt, $posY_nameplt);
    });
    $('#' + 'ran_nameplt_posy').on('input', function () {
      $posY_nameplt = $(this).val(); //Sync range value

      $('#' + 'num_nameplt_posy').val($posY_nameplt); //Store value

      $('#' + 'vsn_defSetting').attr('data-nameplt-posy', $posY_nameplt);
      canvasDrawNameplate($demo_name, $fontColor_nameplt, $fontSize_nameplt, $posX_nameplt, $posY_nameplt);
    });
    $('#' + 'num_nameplt_posx').on('input', function () {
      $posX_nameplt = $(this).val(); //Sync range value

      $('#' + 'ran_nameplt_posx').val($posX_nameplt); //Store value

      $('#' + 'vsn_defSetting').attr('data-nameplt-posx', $posX_nameplt);
      canvasDrawNameplate($demo_name, $fontColor_nameplt, $fontSize_nameplt, $posX_nameplt, $posY_nameplt);
    });
    $('#' + 'ran_nameplt_posx').on('input', function () {
      $posX_nameplt = $(this).val(); //Sync range value

      $('#' + 'num_nameplt_posx').val($posX_nameplt); //Store value

      $('#' + 'vsn_defSetting').attr('data-nameplt-posx', $posX_nameplt);
      canvasDrawNameplate($demo_name, $fontColor_nameplt, $fontSize_nameplt, $posX_nameplt, $posY_nameplt);
    });
  });
}); //Components All Game Script

$(document).ready(function () {
  $('#' + 'btn_addLine').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'LN';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label line-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Line</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_showBackground').click(function (event) {
    event.preventDefault();
    var data = $('#btn_showBackground')[0];
    $.ajax({
      url: '/createGame/getBackgroundImage',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $imageList = JSON.parse($jsonData);
        $arrCount = 0;
        $scriptQuery = document.querySelectorAll('div[data-arrPos]');

        if ($arrCount != $scriptQuery.length) {
          $arrCount = $scriptQuery.length;
        }

        $scriptContainer = 'scriptContainer_' + $arrCount;
        $scriptLabel = 'scriptLabel_' + $arrCount;
        $selectionList = 'selectionList_' + $arrCount;
        $removeSC = 'removeScriptContainer_' + $arrCount;
        $removeSB = 'removeScriptButton_' + $arrCount;
        $label = 'BG';
        $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
        $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label bg-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></div>');
        $('#' + $scriptLabel).append('<p class="script-code-title">Background</p>');
        $('#' + $scriptContainer).append('<select id="' + $selectionList + '" class="script-code-select-bar" onchange="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></select>');
        $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="default">Select</option>');

        for (var i = 0; i < $imageList.length; i++) {
          $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="' + $imageList[i]['url'] + '">' + $imageList[i]['filename'] + '</option>');
        }

        $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
        $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'btn_hideBackground').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'HBG';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label bg-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Hide Background</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_showChar1').click(function (event) {
    event.preventDefault();
    var data = $('#btn_showChar1')[0];
    $.ajax({
      url: '/createGame/getCharacterList',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $imageList = JSON.parse($jsonData);
        $arrCount = 0;
        $scriptQuery = document.querySelectorAll('div[data-arrPos]');

        if ($arrCount != $scriptQuery.length) {
          $arrCount = $scriptQuery.length;
        }

        $scriptContainer = 'scriptContainer_' + $arrCount;
        $scriptLabel = 'scriptLabel_' + $arrCount;
        $selectionList = 'selectionList_' + $arrCount;
        $removeSC = 'removeScriptContainer_' + $arrCount;
        $removeSB = 'removeScriptButton_' + $arrCount;
        $label = 'C1';
        $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
        $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label char-1-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></div>');
        $('#' + $scriptLabel).append('<p class="script-code-title">Char 1</p>');
        $('#' + $scriptContainer).append('<select id="' + $selectionList + '" class="script-code-select-bar" onchange="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></select>');
        $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="default">Select</option>');

        for (var i = 0; i < $imageList.length; i++) {
          $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="' + $imageList[i]['url'] + '">' + $imageList[i]['filename'] + '</option>');
        }

        $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
        $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'btn_showChar2').click(function (event) {
    event.preventDefault();
    var data = $('#btn_showChar2')[0];
    $.ajax({
      url: '/createGame/getCharacterList',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $imageList = JSON.parse($jsonData);
        $arrCount = 0;
        $scriptQuery = document.querySelectorAll('div[data-arrPos]');

        if ($arrCount != $scriptQuery.length) {
          $arrCount = $scriptQuery.length;
        }

        $scriptContainer = 'scriptContainer_' + $arrCount;
        $scriptLabel = 'scriptLabel_' + $arrCount;
        $selectionList = 'selectionList_' + $arrCount;
        $removeSC = 'removeScriptContainer_' + $arrCount;
        $removeSB = 'removeScriptButton_' + $arrCount;
        $label = 'C2';
        $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
        $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label char-2-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></div>');
        $('#' + $scriptLabel).append('<p class="script-code-title">Char 2</p>');
        $('#' + $scriptContainer).append('<select id="' + $selectionList + '" class="script-code-select-bar" onchange="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></select>');
        $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="default">Select</option>');

        for (var i = 0; i < $imageList.length; i++) {
          $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="' + $imageList[i]['url'] + '">' + $imageList[i]['filename'] + '</option>');
        }

        $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
        $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'btn_showChar3').click(function (event) {
    event.preventDefault();
    var data = $('#btn_showChar3')[0];
    $.ajax({
      url: '/createGame/getCharacterList',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $imageList = JSON.parse($jsonData);
        $arrCount = 0;
        $scriptQuery = document.querySelectorAll('div[data-arrPos]');

        if ($arrCount != $scriptQuery.length) {
          $arrCount = $scriptQuery.length;
        }

        $scriptContainer = 'scriptContainer_' + $arrCount;
        $scriptLabel = 'scriptLabel_' + $arrCount;
        $selectionList = 'selectionList_' + $arrCount;
        $removeSC = 'removeScriptContainer_' + $arrCount;
        $removeSB = 'removeScriptButton_' + $arrCount;
        $label = 'C3';
        $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
        $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label char-3-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></div>');
        $('#' + $scriptLabel).append('<p class="script-code-title">Char 3</p>');
        $('#' + $scriptContainer).append('<select id="' + $selectionList + '" class="script-code-select-bar" onchange="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></select>');
        $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="default">Select</option>');

        for (var i = 0; i < $imageList.length; i++) {
          $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="' + $imageList[i]['url'] + '">' + $imageList[i]['filename'] + '</option>');
        }

        $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
        $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'btn_showChar4').click(function (event) {
    event.preventDefault();
    var data = $('#btn_showChar4')[0];
    $.ajax({
      url: '/createGame/getCharacterList',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $imageList = JSON.parse($jsonData);
        $arrCount = 0;
        $scriptQuery = document.querySelectorAll('div[data-arrPos]');

        if ($arrCount != $scriptQuery.length) {
          $arrCount = $scriptQuery.length;
        }

        $scriptContainer = 'scriptContainer_' + $arrCount;
        $scriptLabel = 'scriptLabel_' + $arrCount;
        $selectionList = 'selectionList_' + $arrCount;
        $removeSC = 'removeScriptContainer_' + $arrCount;
        $removeSB = 'removeScriptButton_' + $arrCount;
        $label = 'C4';
        $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
        $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label char-4-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></div>');
        $('#' + $scriptLabel).append('<p class="script-code-title">Char 4</p>');
        $('#' + $scriptContainer).append('<select id="' + $selectionList + '" class="script-code-select-bar" onchange="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></select>');
        $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="default">Select</option>');

        for (var i = 0; i < $imageList.length; i++) {
          $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="' + $imageList[i]['url'] + '">' + $imageList[i]['filename'] + '</option>');
        }

        $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
        $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'btn_hideChar1').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'HC1';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label char-1-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Hide Char 1</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_hideChar2').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'HC2';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label char-2-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Hide Char 2</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_hideChar3').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'HC3';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label char-3-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Hide Char 3</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_hideChar4').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'HC4';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label char-4-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Hide Char 4</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_playAudio').click(function (event) {
    event.preventDefault();
    var data = $('#btn_playAudio')[0];
    $.ajax({
      url: '/createGame/getAudioList',
      type: 'get',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        $jsonData = [_response];
        $imageList = JSON.parse($jsonData);
        $arrCount = 0;
        $scriptQuery = document.querySelectorAll('div[data-arrPos]');

        if ($arrCount != $scriptQuery.length) {
          $arrCount = $scriptQuery.length;
        }

        $scriptContainer = 'scriptContainer_' + $arrCount;
        $scriptLabel = 'scriptLabel_' + $arrCount;
        $selectionList = 'selectionList_' + $arrCount;
        $removeSC = 'removeScriptContainer_' + $arrCount;
        $removeSB = 'removeScriptButton_' + $arrCount;
        $label = 'PA';
        $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
        $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label audio-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></div>');
        $('#' + $scriptLabel).append('<p class="script-code-title">Audio</p>');
        $('#' + $scriptContainer).append('<select id="' + $selectionList + '" class="script-code-select-bar" onchange="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></select>');
        $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="default">Select</option>');

        for (var i = 0; i < $imageList.length; i++) {
          $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="' + $imageList[i]['url'] + '">' + $imageList[i]['filename'] + '</option>');
        }

        $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
        $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
      },
      error: function error(_response) {// Handle error
      }
    });
  });
  $('#' + 'btn_stopAudio').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'SA';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label audio-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Stop Audio</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_showMessage').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'SM';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label effect-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Show Message</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_showName').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $selectionList = 'selectionList_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'CN';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label effect-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Show Name</p>');
    $('#' + $scriptContainer).append('<select id="' + $selectionList + '" class="script-code-select-bar" onchange="showScriptInfo(' + $selectionList + ',' + $scriptLabel + ')"></select>');
    $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="default">Select</option>');
    $('#' + 'sel_charname option').each(function () {
      $('#' + $selectionList).append('<option class="script-code-select-bar-opt" value="' + $(this).val() + '">' + $(this).val() + '</option>');
    });
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_hideMessage').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'HM';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label effect-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Hide Message</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_hideName').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'HCN';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label effect-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Hide Name</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_startStory').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'ST';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label line-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">Start Story</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
  $('#' + 'btn_endStory').click(function (event) {
    event.preventDefault();
    $arrCount = 0;
    $scriptQuery = document.querySelectorAll('div[data-arrPos]');

    if ($arrCount != $scriptQuery.length) {
      $arrCount = $scriptQuery.length;
    }

    $scriptContainer = 'scriptContainer_' + $arrCount;
    $scriptLabel = 'scriptLabel_' + $arrCount;
    $scriptContent = 'scriptContent_' + $arrCount;
    $removeSC = 'removeScriptContainer_' + $arrCount;
    $removeSB = 'removeScriptButton_' + $arrCount;
    $label = 'ED';
    $('#scriptLog').append('<div id="' + $scriptContainer + '" class="flex-row script-code-container" data-arrPos="' + $arrCount + '"></div>');
    $('#' + $scriptContainer).append('<div id="' + $scriptLabel + '" class="script-code-label line-label-color" data-label="' + $label + '" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptLabel).append('<p class="script-code-title">End Story</p>');
    $('#' + $scriptContainer).append('<div id="' + $scriptContent + '" class="script-code-bar" onClick="showScriptInfo(' + $scriptContent + ',' + $scriptLabel + ')"></div>');
    $('#' + $scriptContainer).append('<div id="' + $removeSC + '" class="script-code-x-btn-container"></div>');
    $('#' + $removeSC).append('<div id="' + $removeSB + '" class="cross" onclick="removeScript(' + $scriptContainer + ',' + $arrCount + ')"></div>');
  });
}); //Gamescript edit character

$(document).ready(function () {
  //Default variable
  $charLayer = 0;
  $char_posX = 1280 * 0.5;
  $char_posY = 720 * 0.875;
  $char_scale = '1.0';
  $('#' + 'num_selfPosX').on('input', function () {
    //Get the selected script Id
    $selectedScript = $('#' + 'contR_char').attr('data-script-label-id');
    $char_posX = $(this).val(); //Store the type of input

    $('#' + $selectedScript).attr('data-posx-is', 'self');
    drawCharacter($selectedScript, $char_posX, $char_posY, $char_scale);
  });
  $('#' + 'sel_defPosX').change(function () {
    //Get the selected script Id
    $selectedScript = $('#' + 'contR_char').attr('data-script-label-id');
    $sel_char_posX = $(this).val();
    $char_posX = checkCharSelectedPosX($sel_char_posX);
    $('#' + 'num_selfPosX').val($char_posX); //Store the type of input

    $('#' + $selectedScript).attr('data-posx-is', 'def');
    $('#' + $selectedScript).attr('data-posx-sel', $sel_char_posX);
    drawCharacter($selectedScript, $char_posX, $char_posY, $char_scale);
  });
  $('#' + 'num_selfPosY').on('input', function () {
    //Get the selected script Id
    $selectedScript = $('#' + 'contR_char').attr('data-script-label-id');
    $char_posY = $(this).val(); //Store the type of input

    $('#' + $selectedScript).attr('data-posy-is', 'self');
    drawCharacter($selectedScript, $char_posX, $char_posY, $char_scale);
  });
  $('#' + 'sel_defPosY').change(function () {
    //Get the selected script Id
    $selectedScript = $('#' + 'contR_char').attr('data-script-label-id');
    $sel_char_posY = $(this).val();
    $char_posY = checkCharSelectedPosY($sel_char_posY);
    $('#' + 'num_selfPosY').val($char_posY); //Store the type of input

    $('#' + $selectedScript).attr('data-posy-is', 'def');
    $('#' + $selectedScript).attr('data-posy-sel', $sel_char_posY);
    drawCharacter($selectedScript, $char_posX, $char_posY, $char_scale);
  });
  $('#' + 'sel_defScale').change(function () {
    //Get the selected script Id
    $selectedScript = $('#' + 'contR_char').attr('data-script-label-id');
    $char_scale = $(this).val();
    drawCharacter($selectedScript, $char_posX, $char_posY, $char_scale);
  });

  function retrieveCharLayer($selectedScript) {
    $scriptLabel = $('#' + $selectedScript).attr('data-label');
    $charLayer = 0;

    switch ($scriptLabel) {
      case "C1":
        $charLayer = 1;
        break;

      case "C2":
        $charLayer = 2;
        break;

      case "C3":
        $charLayer = 3;
        break;

      case "C4":
        $charLayer = 4;
        break;

      default:
        console.log("There is no such canvas exists!");
    }

    return $charLayer;
  }

  function drawCharacter($selectedScript, $char_posX, $char_posY, $char_scale) {
    //Get current character canvas layer number
    $charLayer = retrieveCharLayer($selectedScript); //Get canvas to draw character image

    $char_cav = document.getElementById('cav_char' + $charLayer);
    $char_ctx = $char_cav.getContext('2d'); //Renew retrieve character image

    $char_img = new Image();
    $char_img.src = $('#' + 'contR_char').attr('data-selected-img');
    scriptStoreInput($selectedScript, $char_posX, $char_posY, $char_scale);

    $char_img.onload = function () {
      canvasDrawCharacter($char_img, $char_cav, $char_ctx, $char_posX, $char_posY, $char_scale);
    };
  }

  function checkCharSelectedPosX($select) {
    $char_posX = 0;

    switch ($select) {
      case 'l1':
        $char_posX = 1280 * 0.125;
        break;

      case 'l2':
        $char_posX = 1280 * 0.25;
        break;

      case 'l3':
        $char_posX = 1280 * 0.375;
        break;

      case 'md':
        $char_posX = 1280 * 0.5;
        break;

      case 'r3':
        $char_posX = 1280 * 0.625;
        break;

      case 'r2':
        $char_posX = 1280 * 0.75;
        break;

      case 'r1':
        $char_posX = 1280 * 0.875;
        break;

      default:
        $char_posX = 0;
    }

    return $char_posX;
  }

  function checkCharSelectedPosY($select) {
    $char_posY = 0;

    switch ($select) {
      case 'u1':
        $char_posY = 720 * 0.125;
        break;

      case 'u2':
        $char_posY = 720 * 0.25;
        break;

      case 'u3':
        $char_posY = 720 * 0.375;
        break;

      case 'md':
        $char_posY = 720 * 0.5;
        break;

      case 'd3':
        $char_posY = 720 * 0.625;
        break;

      case 'd2':
        $char_posY = 720 * 0.75;
        break;

      case 'd1':
        $char_posY = 720 * 0.875;
        break;

      default:
        $char_posY = 0;
    }

    return $char_posY;
  }

  function scriptStoreInput($selectedScript, $char_posX, $char_posY, $char_scale) {
    $('#' + $selectedScript).attr('data-posX', $char_posX);
    $('#' + $selectedScript).attr('data-posY', $char_posY);
    $('#' + $selectedScript).attr('data-scale', $char_scale);
  }
}); //Gamescript edit line

$(document).ready(function () {
  $('#' + 'txt_line').on('input', function () {
    $scriptID = $('#' + 'contR_dLog').attr('data-script-label-id');
    console.log($scriptID);
    $scriptLine = $('#' + 'txt_line').val();
    $('#' + $scriptID).attr('data-line', $scriptLine);
    $fontColor = $('#' + 'vsn_defSetting').attr('data-dlog-font-color');
    $fontSize = $('#' + 'vsn_defSetting').attr('data-dlog-font-size');
    $posY = parseInt($('#' + 'vsn_defSetting').attr('data-textbox-posy'));
    $maxWidth = parseInt($('#' + 'vsn_defSetting').attr('data-textbox-width'));
    $lineHeight = parseInt($('#' + 'vsn_defSetting').attr('data-dlog-line-height'));
    canvasDrawDialog($scriptLine, $fontColor, $fontSize, $posY, $maxWidth, $lineHeight);
  });
}); //Gamescript edit audio

$(document).ready(function () {
  $('#' + 'ranBtn_volume').on('input', function () {
    $scriptID = $('#' + 'contR_audio').attr('data-script-label-id');
    $volume = parseFloat($(this).val());
    console.log('Volume is :' + $volume);
    var doc_contR_audio = document.getElementById('contR_audioPlayer');
    doc_contR_audio.volume = $volume;
    $('#' + $scriptID).attr('data-volume', $volume);
  });
}); //Save Project & Test Play

$(document).ready(function () {
  $storeScriptArray = [];
  $line = '';
  $tab = '    ';
  $scriptQuery = document.querySelectorAll('div[data-arrPos]');
  $arrCount = 0;

  if ($arrCount != $scriptQuery.length) {
    $arrCount = $scriptQuery.length;
  }

  $('#' + 'btn_saveProject').submit(function (event) {
    event.preventDefault();
    $storeScriptArray = new Array();
    $storeScriptArray = writeDefaultSetting($storeScriptArray);
    $storeScriptArray = writeScript($storeScriptArray, $scriptQuery);
    $storescriptArrayStringify = JSON.stringify($storeScriptArray, null);
    console.log($storeScriptArray);
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    var form = $('#btn_saveProject')[0];
    var data = new FormData(form);
    data.append('scriptArray', $storescriptArrayStringify);
    $.ajax({
      url: '/createGame/saveProject',
      type: 'post',
      data: data,
      dataType: 'json',
      processData: false,
      // Important!
      contentType: false,
      cache: false,
      success: function success(_response) {
        //let newData = JSON.parse(_response)
        console.log(_response); //console.log(newData)
      },
      error: function error(_response) {
        console.log(_response);
      }
    });
  });

  function writeDefaultSetting($arr) {
    //Data check of vsn defualt setting
    $data_dlogbox_filename = $('#' + 'vsn_defSetting').attr('data-dlogbox-filename');
    $data_dlogbox_posx = $('#' + 'vsn_defSetting').attr('data-dlogbox-posx');
    $data_dlogbox_posy = $('#' + 'vsn_defSetting').attr('data-dlogbox-posy');
    $data_dlogbox_scale = $('#' + 'vsn_defSetting').attr('data-dlogbox-scale');
    $data_dlog_font_size = $('#' + 'vsn_defSetting').attr('data-dlog-font-size');
    $data_dlog_font_color = $('#' + 'vsn_defSetting').attr('data-dlog-font-color');
    $data_textbox_posx = $('#' + 'vsn_defSetting').attr('data-textbox-posx');
    $data_textbox_posy = $('#' + 'vsn_defSetting').attr('data-textbox-posy');
    $data_textbox_width = $('#' + 'vsn_defSetting').attr('data-textbox-width');
    $data_dlog_line_height = $('#' + 'vsn_defSetting').attr('data-dlog-line-height');
    $data_nameplt_font_size = $('#' + 'vsn_defSetting').attr('data-nameplt-font-size');
    $data_nameplt_font_color = $('#' + 'vsn_defSetting').attr('data-nameplt-font-color');
    $data_nameplt_posy = $('#' + 'vsn_defSetting').attr('data-nameplt-posy');
    $data_nameplt_posx = $('#' + 'vsn_defSetting').attr('data-nameplt-posx'); //Step 1

    $arr.push('init:');
    $arr.push('! Dialog Box Setting !'); //Step 2 : Dialog box image

    if ((typeof $data_dlogbox_filename === "undefined" ? "undefined" : _typeof($data_dlogbox_filename)) !== ( true ? "undefined" : 0) && $data_dlogbox_filename !== false) {
      // Element has this attribute
      $temp = $tab + '> ' + 'dialog.box.image = ' + $data_dlogbox_filename;
      $arr.push($temp);
    } //Step 3 : Dialog box pos x


    if ((typeof $data_dlogbox_posx === "undefined" ? "undefined" : _typeof($data_dlogbox_posx)) !== ( true ? "undefined" : 0) && $data_dlogbox_posx !== false) {
      $temp = $tab + '> ' + 'dialog.box.xaxis = ' + $data_dlogbox_posx;
      $arr.push($temp);
    } //Step 4 : Dialog box pos y


    if ((typeof $data_dlogbox_posy === "undefined" ? "undefined" : _typeof($data_dlogbox_posy)) !== ( true ? "undefined" : 0) && $data_dlogbox_posy !== false) {
      $temp = $tab + '> ' + 'dialog.box.yaxis = ' + $data_dlogbox_posy;
      $arr.push($temp);
    } //Step 5: Dialog box scale


    if ((typeof $data_dlogbox_scale === "undefined" ? "undefined" : _typeof($data_dlogbox_scale)) !== ( true ? "undefined" : 0) && $data_dlogbox_scale !== false) {
      $temp = $tab + '> ' + 'dialog.box.scale = ' + $data_dlogbox_scale;
      $arr.push($temp);
    }

    $arr.push('! Dialog Setting !'); //Step 6: Dialog font size

    if ((typeof $data_dlog_font_size === "undefined" ? "undefined" : _typeof($data_dlog_font_size)) !== ( true ? "undefined" : 0) && $data_dlog_font_size !== false) {
      $temp = $tab + '> ' + 'dialog.font.size = ' + $data_dlog_font_size;
      $arr.push($temp);
    } //Step 7: Dialog font color


    if ((typeof $data_dlog_font_color === "undefined" ? "undefined" : _typeof($data_dlog_font_color)) !== ( true ? "undefined" : 0) && $data_dlog_font_color !== false) {
      $temp = $tab + '> ' + 'dialog.font.color = ' + $data_dlog_font_color;
      $arr.push($temp);
    } //Step 8: Dialog line height


    if ((typeof $data_dlog_line_height === "undefined" ? "undefined" : _typeof($data_dlog_line_height)) !== ( true ? "undefined" : 0) && $data_dlog_line_height !== false) {
      $temp = $tab + '> ' + 'dialog.line.height = ' + $data_dlog_line_height;
      $arr.push($temp);
    } //Step 9: Textbox width


    if ((typeof $data_textbox_width === "undefined" ? "undefined" : _typeof($data_textbox_width)) !== ( true ? "undefined" : 0) && $data_textbox_width !== false) {
      $temp = $tab + '> ' + 'dialog.width = ' + $data_textbox_width;
      $arr.push($temp);
    } //Step 9: Textbox pos x


    if ((typeof $data_textbox_posx === "undefined" ? "undefined" : _typeof($data_textbox_posx)) !== ( true ? "undefined" : 0) && $data_textbox_posx !== false) {
      $temp = $tab + '> ' + 'dialog.xaxis = ' + $data_textbox_posx;
      $arr.push($temp);
    } //Step 10: Textbox pos y


    if ((typeof $data_textbox_posy === "undefined" ? "undefined" : _typeof($data_textbox_posy)) !== ( true ? "undefined" : 0) && $data_textbox_posy !== false) {
      $temp = $tab + '> ' + 'dialog.yaxis = ' + $data_textbox_posy;
      $arr.push($temp);
    }

    $arr.push('! Nameplate Setting !'); //Step 11: Nameplate font size

    if ((typeof $data_nameplt_font_size === "undefined" ? "undefined" : _typeof($data_nameplt_font_size)) !== ( true ? "undefined" : 0) && $data_nameplt_font_size !== false) {
      $temp = $tab + '> ' + 'nameplate.font.size = ' + $data_nameplt_font_size;
      $arr.push($temp);
    } //Step 12: Nameplate font color


    if ((typeof $data_nameplt_font_color === "undefined" ? "undefined" : _typeof($data_nameplt_font_color)) !== ( true ? "undefined" : 0) && $data_nameplt_font_color !== false) {
      $temp = $tab + '> ' + 'nameplate.font.color = ' + $data_nameplt_font_color;
      $arr.push($temp);
    } //Step 13: Nameplate pos y


    if ((typeof $data_nameplt_posy === "undefined" ? "undefined" : _typeof($data_nameplt_posy)) !== ( true ? "undefined" : 0) && $data_nameplt_posy !== false) {
      $temp = $tab + '> ' + 'nameplate.yaxis = ' + $data_nameplt_posy;
      $arr.push($temp);
    } //Step 14: Nameplate pos x


    if ((typeof $data_nameplt_posx === "undefined" ? "undefined" : _typeof($data_nameplt_posx)) !== ( true ? "undefined" : 0) && $data_nameplt_posx !== false) {
      $temp = $tab + '> ' + 'nameplate.xaxis = ' + $data_nameplt_posx;
      $arr.push($temp);
    }

    $arr.push('! Game Script !');
    return $arr;
  }

  function writeScript($arr, $scriptQuery) {
    for ($currPos = 0; $currPos <= $scriptQuery.length; $currPos++) {
      $checkLabel = $('#' + 'scriptLabel_' + $currPos).attr('data-label'); //Add Background

      if ($checkLabel == 'BG') {
        $BG_Filename = $('#' + 'scriptLabel_' + $currPos).attr('data-filename');
        $temp = $tab + $checkLabel + '> ' + $BG_Filename;
        $arr.push($temp);
      } //Add Character


      if ($checkLabel == 'C1' || $checkLabel == 'C2' || $checkLabel == 'C3' || $checkLabel == 'C4') {
        $CR_Filename = $('#' + 'scriptLabel_' + $currPos).attr('data-filename');
        $CR_PosX = $('#' + 'scriptLabel_' + $currPos).attr('data-posx');
        $CR_PosY = $('#' + 'scriptLabel_' + $currPos).attr('data-posy');
        $CR_Scale = $('#' + 'scriptLabel_' + $currPos).attr('data-scale');
        $temp = $tab + $checkLabel + '> ' + $CR_Filename + ' PX> ' + $CR_PosX + ' PY> ' + $CR_PosY + ' SC> ' + $CR_Scale;
        $arr.push($temp);
      } //Add Line


      if ($checkLabel == 'LN') {
        $Line = $('#' + 'scriptLabel_' + $currPos).attr('data-line');
        $temp = $tab + $checkLabel + '> ' + $Line;
        $arr.push($temp);
        console.log("Push Line :" + $Line);
      } //Character Name


      if ($checkLabel == 'CN') {
        $Character_Name = $('#' + 'scriptLabel_' + $currPos).attr('data-charname');
        $temp = $tab + $checkLabel + '> ' + $Character_Name;
        $arr.push($temp);
      } //Play Audio


      if ($checkLabel == "PA") {
        $volume = $('#' + 'scriptLabel_' + $currPos).attr('data-volume');
        $audio_Filename = $('#' + 'scriptLabel_' + $currPos).attr('data-filename');
        $temp = $tab + $checkLabel + '> ' + $audio_Filename + ' VOL> ' + $volume;
        $arr.push($temp);
      } //Hide Character || Hide Message || Show Message || Stop Audio || Hide Background


      if ($checkLabel == 'HC1' || $checkLabel == 'HC2' || $checkLabel == 'HC3' || $checkLabel == 'HC4' || $checkLabel == 'HM' || $checkLabel == 'SM' || $checkLabel == 'SA' || $checkLabel == 'HBG') {
        $temp = $tab + $checkLabel + ':';
        $arr.push($temp);
      }

      if ($checkLabel == 'ST') {
        $temp = 'Start' + ':';
        $arr.push($temp);
      }

      if ($checkLabel == 'ED') {
        $temp = 'End' + ':';
        $arr.push($temp);
      }
    }

    return $arr;
  }
}); // ---------------------------------------------------------------
//Canvas draw function

function canvasDrawDialogBox(image, posX, posY, scale) {
  var cav = document.getElementById('dialogBar');
  var ctx = cav.getContext('2d');
  var img = image;
  img.width = img.width * scale;
  img.height = img.height * scale; //Position

  var xAxis = posX - img.width * 0.5;
  var yAxis = posY - img.width * 0.5; //------------------------------------

  cav.width = 1280;
  cav.height = 720;
  ctx.clearRect(0, 0, 1280, 720);
  ctx.mozImageSmoothingEnabled = true;
  ctx.webkitImageSmoothingEnabled = true;
  ctx.msImageSmoothingEnabled = true;
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(img, xAxis, yAxis, img.width, img.height);
}

function canvasDrawDialog(text, fontColor, fontSize, posY, maxWidth, lineHeight) {
  //Get dialog canvas
  var cav = document.getElementById('dialog');
  var ctx = cav.getContext('2d');
  cav.width = 1280;
  cav.height = 720;
  var posX = (1280 - maxWidth) * 0.5;
  console.log("The max width :" + maxWidth);
  console.log("The posX :" + posX); //Clean dialog canvas screen to default

  ctx.clearRect(0, 0, cav.width, cav.height);
  var font = fontSize + 'px' + ' ' + 'Comic Sans MS'; //Set the style of the dialog font

  ctx.font = font;
  ctx.fillStyle = fontColor;
  wrapText(text, ctx, posX, posY, maxWidth, lineHeight);
}

function canvasDrawCharacter(image, canvas, context, posX, posY, scale) {
  var ctx = context;
  var cav = canvas;
  var img = image;
  img.width = img.width * scale;
  img.height = img.height * scale; //Position

  var xAxis = posX - img.width * 0.5;
  var yAxis = posY - img.height * 0.5; //------------------------------------

  cav.width = 1280;
  cav.height = 720;
  ctx.clearRect(0, 0, 1280, 720);
  ctx.mozImageSmoothingEnabled = true;
  ctx.webkitImageSmoothingEnabled = true;
  ctx.msImageSmoothingEnabled = true;
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(img, xAxis, yAxis, img.width, img.height);
}

function canvasDrawNameplate(name, fontColor, fontSize, posX, posY) {
  var cav = document.getElementById('nameplate');
  var ctx = cav.getContext('2d');
  cav.width = 1280;
  cav.height = 720;
  var font = fontSize + 'px' + ' ' + 'Comic Sans MS'; //Clear canvas

  ctx.clearRect(0, 0, cav.width, cav.height); //Set the style of the dialog font

  ctx.font = font;
  ctx.fillStyle = fontColor; //Fill name to canvas

  ctx.fillText(name, posX, posY);
}

function wrapText(text, ctx, posX, posY, maxWidth, lineHeight) {
  //Retrieve the text and spilt with spacebar
  var words = text.split(' ');
  var line = ''; //Loop through the text and display dialog

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    console.log(testWidth);

    if (testWidth > maxWidth && n > 0) {
      console.log(line);
      ctx.fillText(line, posX, posY);
      line = words[n] + ' ';
      posY += lineHeight;
      console.log('The line is: ' + line);
    } else {
      line = testLine;
    }
  }

  ctx.fillText(line, posX, posY);
} // ---------------------------------------------------------------

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ./ajax/buttonToggle */ "./resources/js/ajax/buttonToggle.js");

__webpack_require__(/*! ./ajax/preventRefresh */ "./resources/js/ajax/preventRefresh.js"); // React Components
//require('./components/PlayScreen');

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/canvas.css":
/*!**********************************!*\
  !*** ./resources/css/canvas.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/canvas","css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css"), __webpack_exec__("./resources/css/canvas.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);