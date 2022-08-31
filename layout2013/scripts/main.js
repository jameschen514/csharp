var ValidationClass = function() 
{
	var $this = this;
	$this.errorContainer = document.createElement("span");
	$this.isChecked = function() 
	{
		var checked = $("input[type='checkbox']:checked").length;
		if (checked > 2) {
			// error handling
			$($this.errorContainer).html("You may only select up to (2) items");
			$(".jchen-error").append($($this.errorContainer));
			$(".jchen-error").removeClass("jchen-error-hide");
		}
		else {
			$(".jchen-error").empty();
			$(".jchen-error").addClass("jchen-error-hide");
			return false;
		}
	};
};
var DropDownMenuClass = function()
{
	var $this = this;
	$this.generateDropDownOption = function()
	{
		for (var i=0, j=12; i < j; i++)
		{
			var option = document.createElement("option");
			var strMonth = null;
			option.setAttribute("value", i);
			switch(i)
			{
				case 0:
					strMonth = 'January';
					break;
				case 1:
					strMonth = 'February';
					break;
				case 2:
					strMonth = 'March';
					break;
				case 3:
					strMonth = 'April';
					break;
				case 4:
					strMonth = 'May';
					break;
				case 5:
					strMonth = 'June';
					break;
				case 6:
					strMonth = 'July';
					break;
				case 7:
					strMonth = 'August';
					break;
				case 8: 
					strMonth = 'September';
					break;
				case 9:
					strMonth = 'October';
					break;
				case 10:
					strMonth = 'November';
					break;
				case 11:
					strMonth = 'December';
					break;
				default:
					$this.strException = "Error: month could not be generated!";
			}
			$(option).html(strMonth + " " + $this.currYear);
			$("#ddMonth").append($(option));
		}
	};
	$this.checkBoxHandler = function(iOnchangeMonth) 
	{
		// retrieve current selected month
		$this.selectedMonth = iOnchangeMonth; 
		
		if (iOnchangeMonth != undefined)
		{
			$this.currMonth = iOnchangeMonth;
		} 
		else 
		{
			$this.currMonth = 1;
		}
		// determine next closest quarter 
		if ($this.currMonth < 3)
			$this.currQuarter = 1;
		else if ($this.currMonth >= 3 && $this.currMonth < 6)
			$this.currQuarter = 2;
		else if ($this.currMonth >= 6 && $this.currMonth < 9)
			$this.currQuarter = 3;
		else if ($this.currMonth >= 9 && $this.currMonth < 12)
			$this.currQuarter = 4;
		else
			$this.strException = "Error: unable to determine current year!";	
		
		// conditional if quarter overlap to next year
		switch($this.currQuarter)
		{
			case 1:
				$(".jchen-dynamic-checkbox").empty();
				for (var i=0, j=3; i < j; i++)
				{
					
					var container = document.createElement("div");
					var checkBox = document.createElement("input");
					var labelText = document.createElement("label");
					var startQuarter = i + 2;
					checkBox.setAttribute("type", "checkbox");
					checkBox.setAttribute("name", "quarter");
					checkBox.setAttribute("value", startQuarter);
					labelText.setAttribute("class", "jchen-quarter-label" + i);
					labelText.innerHTML = "Q" + startQuarter + " " + $this.objDate.getFullYear(); 
					$(container).append($(checkBox));
					$(container).append($(labelText));
					$(".jchen-dynamic-checkbox").append($(container));
				}
				break;
			case 2:
				$(".jchen-dynamic-checkbox").empty();
				for (var i=0, j=3; i < j; i++)
				{
					
					var container = document.createElement("div");
					var checkBox = document.createElement("input");
					var labelText = document.createElement("label");
					var startQuarter = i + 3;
					if (startQuarter > 4 && startQuarter < 6) startQuarter = 1;
					checkBox.setAttribute("type", "checkbox");
					checkBox.setAttribute("name", "quarter");
					checkBox.setAttribute("value", startQuarter);
					labelText.setAttribute("class", "jchen-quarter-label" + i);
					if (i == 2) 
						$this.currYear = $this.objDate.getFullYear() + 1
					else
						$this.currYear = $this.objDate.getFullYear();
					labelText.innerHTML = "Q" + startQuarter + " " + $this.currYear; 
					$(container).append($(checkBox));
					$(container).append($(labelText));
					$(".jchen-dynamic-checkbox").append($(container));
				}
				break;
			case 3:
				$(".jchen-dynamic-checkbox").empty();
				for (var i=0, j=3; i < j; i++)
				{
					var container = document.createElement("div");
					var checkBox = document.createElement("input");
					var labelText = document.createElement("label");
					var startQuarter = i + 4;
					if (startQuarter > 4 && startQuarter < 6) 
						startQuarter = 1;
					else if (startQuarter == 6)
						startQuarter = 2;
					else
						$this.strException = "Error: unable to determine current quarter!";	
					checkBox.setAttribute("type", "checkbox");
					checkBox.setAttribute("name", "quarter");
					checkBox.setAttribute("value", startQuarter);
					labelText.setAttribute("class", "jchen-quarter-label" + i);
					if (i > 0) 
						$this.currYear = $this.objDate.getFullYear() + 1
					else
						$this.currYear = $this.objDate.getFullYear();
					labelText.innerHTML = "Q" + startQuarter + " " + $this.currYear; 
					$(container).append($(checkBox));
					$(container).append($(labelText));
					$(".jchen-dynamic-checkbox").append($(container));
				}	
				break;
			case 4:
				$(".jchen-dynamic-checkbox").empty();
				for (var i=0, j=3; i < j; i++)
				{
					var container = document.createElement("div");
					var checkBox = document.createElement("input");
					var labelText = document.createElement("label");
					var startQuarter = i + 1;
					checkBox.setAttribute("type", "checkbox");
					checkBox.setAttribute("name", "quarter");
					checkBox.setAttribute("value", startQuarter);
					labelText.setAttribute("class", "jchen-quarter-label" + i);
					$this.currYear = $this.objDate.getFullYear() + 1; 
					labelText.innerHTML = "Q" + startQuarter + " " + $this.currYear; 
					$(container).append($(checkBox));
					$(container).append($(labelText));
					$(".jchen-dynamic-checkbox").append($(container));
				}
				break;
			default: 
				$this.strException = "Error: unable to determine subsequent quarter!";	
		}
		// display the checkbox label
		
		var valid = new ValidationClass();
		valid.i = 0;
		valid.j = 0;
		
		/*
		var objCheckBoxes = $("input[type='checkbox']");
		while (valid.i < objCheckBoxes.length) 
		{
			$(objCheckBoxes[valid.i]).live("click", function() 
			{
				if (objCheckBoxes[valid.i].attr("checked") == "checked") 
				{
					valid.j++;
				} else {
					valid.j--;
				}
			});
			valid.i++;
		}
		if (valid.j > 2) { valid.isChecked(); }
		*/
	};
	$this.activateValidation = function()
	{
		
		var valid = new ValidationClass();
		var objCheckBoxes = $(".jchen-dynamic-checkbox input[type='checkbox']");
		var i = 0;
		var j = 0;
		while ( i < objCheckBoxes.length) 
		{
			$(objCheckBoxes[i]).change(function() 
			{
				if ($(objCheckBoxes[i]).attr("checked") == "checked") 
				{
					j++;
					if (j > 2) { 
						valid.isChecked(); 
					}
				} else 
				{
					j--;
					if (j < 3) 
					{ 
						valid.isChecked(); 
					}
				}
			});
			i++;
		}
	};
	$this.init = function()
	{
		$this.objDate = new Date();
		$this.currYear = $this.objDate.getFullYear(); // four digit year	
		$this.generateDropDownOption();
		$this.checkBoxHandler();
		//$this.activateValidation();
	};
//end this.init
};
//end dropdownclass

// prepare all variables
var myHeight = window.innerHeight, myWidth = window.innerWidth, isIE = $.browser.msie, isIE7Below = (isIE && $.browser.version.substr(0, 1) <= 7), isIE8Below = (isIE && $.browser.version.substr(0, 1) <= 8), isIE7 = (isIE && $.browser.version.substr(0, 1) == 7), isIE8 = (isIE && $.browser.version.substr(0, 1) == 8), isIE9 = (isIE && $.browser.version.substr(0, 1) == 9), isAboveIE9 = (isIE && $.browser.version.substr(0, 1) > 9);

var scrollbarWidth = 0;
$.getScrollbarWidth = function () {
	if (!scrollbarWidth) {
		if ($.browser.msie) {
			var $textarea1 = $('<textarea cols="10" rows="2"></textarea>').css({ position: 'absolute', top: -1000, left: -1000 }).appendTo('body'), $textarea2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({ position: 'absolute', top: -1000, left: -1000 }).appendTo('body');
			scrollbarWidth = $textarea1.width() - $textarea2.width();
			$textarea1.add($textarea2).remove();
		} else {
			var $div = $('<div />').css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: -1000 }).prependTo('body').append('<div />').find('div').css({ width: '100%', height: 200 });
			scrollbarWidth = 100 - $div.width();
			$div.parent().remove();
		}
	}
	return scrollbarWidth;
};

/*

Determine current window size onresize

Assign class name resizable to elements that needs to be resized

Find out the relationship to full window resolution and current size

Calculate and assign new size dynamically

*/

var responsive = function (z, isWidthAndHeight) {
	var finalWidth = window.innerWidth, finalHeight = window.innerHeight;
	var $body = $("body");
	var objResizable = $body.find(".resizable");
	var intResizableCount = objResizable.length;
	z = z || 0;
	while (z > intResizableCount) {
		var currentWidth = $(objResizable[z]).width(), currentHeight = $(objResizable[z]).height();
		var resultantWidth = ((currentWidth / myWidth) * finalWidth).toString() + "px", resultantHeight = ((currentHeight / myHeight) * finalHeight).toString() + "px";
		if (isWidthAndHeight) {
			$(objResizable[z]).css("width", resultantWidth);
			$(objResizable[z]).css("height", resultantHeight);
		} else
			$(objResizable[z]).css("width", resultantWidth);

        z++;
		responsive(z, false);
	}
};

var resolution = function () {
    myHeight = window.innerHeight, myWidth = window.innerWidth;
	//myHeight = $(window).height(), myWidth = $(window).width();
    var $dynamicWidth = $(".jchen-dynamic-width");
    var $nav = $("nav");
    var $containerWidth = $(".jchen-content-container2");
    var $errorContainer = $(".jchen-error");
    var $topColumn = $(".jchen-top-column");
    //$nav.width("300px");
    var $menuLorem = $("a.jchen-nav-lorem");
    var $menuIpsum = $("a.jchen-nav-ipsum");
    var $menuDolor = $("a.jchen-nav-dolor");
    var $menuSitamet = $("a.jchen-nav-sitamet");
    var $menuAdip = $("a.jchen-nav-adipiscing");
    var $menuConsect = $("a.jchen-nav-consectetuer");
    var $columnsContainer = $(".jchen-top-container");
	var $body = $("body");
	
    var variableWidth = "68%", variableMediumWidth = "980px", variableSmallWidth = "550px", variableTinyWidth = "320px", contentWidth = "94%";

    if (myWidth >= 1024) {
        $dynamicWidth.css("width", variableMediumWidth);
		$containerWidth.css("width", ((960 / 980) * 980).toString() + "px");
        $errorContainer.css("marginLeft", "0px");
        $errorContainer.css("marginTop", "12px");
        $topColumn.css("width", ((270 / 980) * 980).toString() + "px");
        $menuLorem.css("width", ((139 / 980) * 980).toString() + "px");
        $menuIpsum.css("width", ((124 / 980) * 980).toString() + "px");
        $menuDolor.css("width", ((131 / 980) * 980).toString() + "px");
        $menuSitamet.css("width", ((157 / 980) * 980).toString() + "px");
        $menuAdip.css("width", ((187 / 980) * 980).toString() + "px");
        $menuConsect.css("width", ((242 / 980) * 980).toString() + "px");
        $columnsContainer.css("margin", "0 20px");
		
    } else if (myWidth >= 550 && myWidth < 1024) {
		$body.css("overflow-x", "hidden");
		$body.css("position", "relative");
        $dynamicWidth.css("width", variableSmallWidth);
        $containerWidth.css("width", ((960 / 980) * 550).toString() + "px");
        $errorContainer.css("marginLeft", "0px");
        $errorContainer.css("marginTop", "12px");
        $topColumn.css("width", ((270 / 980) * 550).toString() + "px");
        $menuLorem.css("width", ((139 / 980) * 550).toString() + "px");
        $menuIpsum.css("width", ((124 / 980) * 550).toString() + "px");
        $menuDolor.css("width", ((131 / 980) * 550).toString() + "px");
        $menuSitamet.css("width", ((157 / 980) * 550).toString() + "px");
        $menuAdip.css("width", ((187 / 980) * 550).toString() + "px");
        $menuConsect.css("width", ((242 / 980) * 550).toString() + "px");
        $columnsContainer.css("margin", "0 20px");
    } else {
        $body.css("overflow-x", "hidden");
		$body.css("position", "relative");
		$dynamicWidth.css("width", variableTinyWidth);
        $containerWidth.css("width", ((960 / 980) * 320).toString() + "px");
        $errorContainer.css("marginLeft", "0px");
        $errorContainer.css("marginTop", "12px");
        $topColumn.css("width", ((270 / 980) * 320).toString() + "px");
        $menuLorem.css("width", ((139 / 980) * 320).toString() + "px");
        $menuIpsum.css("width", ((124 / 980) * 320).toString() + "px");
        $menuDolor.css("width", ((131 / 980) * 320).toString() + "px");
        $menuSitamet.css("width", ((157 / 980) * 320).toString() + "px");
        $menuAdip.css("width", ((187 / 980) * 320).toString() + "px");
        $menuConsect.css("width", ((242 / 980) * 320).toString() + "px");
        $columnsContainer.css("margin", "0 5px");
    }
};

$(document).ready(function () {
    var dd = new DropDownMenuClass();
    dd.init();

    $("#ddMonth").change(function () {
        dd.checkBoxHandler($(this).val());
        //dd.activateValidation();
    });

    $.validator.setDefaults({
        debug: true
    });


    $.extend($.validator.messages, { maxlength: $.validator.format("You may only select up to ({0}) items") });
    $("#frmInvestmentCycle").validate({
        debug: true,
        rules: {
            quarter: {
                maxlength: 2
            }
        },
        errorLabelContainer: ".jchen-error"
    });

    var objCheckBoxes = $(".jchen-dynamic-checkbox input[type='checkbox']");
    var i = 0;
    var j = 0;
    while (i < objCheckBoxes.length) {
        $(objCheckBoxes[i]).click(function () {
            $("#frmInvestmentCycle").valid();
        });
        i++;
    }

    /* use "data" and store variables separately minify obfuscate have written a compressor in perl */



    $(window).resize(function () {
        resolution();
        //responsive(15, false);
    });

	 resolution(); 

    //var calculatedWidthLarge = "1142px", calculatedWidthMedium = "980px", calculatedWidthSmall = "550px";

    window["populate"] = function () { alert("boo"); };

    if ($("body").hasClass("jchen-animation")) {
        //tl
        TweenLite.to($(".jchen-sun"), 1, { css: { left: "350px" }, delay: 0.3 });
        TweenLite.to($(".jchen-mountain"), 1, { css: { top: "140px" }, delay: 1.5 });
        TweenLite.to($(".jchen-road"), 1, { css: { bottom: "5px" }, delay: 2.5 });
        TweenLite.to($(".jchen-car"), 1, { css: { top: "340px", left: "160px" }, delay: 3.5 });
    }
	
	$(".jchen-swipe-area").swipe({
		swipeLeft:function(event, direction) {
			$(this).text("You swiped " + direction );
		},
		swipeRight:function(event, direction) {
			$(this).text("You swiped " + direction );
		},
		allowPageScroll:"vertical"
	});
});

