(function (cjs, an) {
	var canvas1 = document.getElementById("canvas");
	var startY, endY, mousestate = 1, mouseFun;

	var p; // shortcut to reference prototypes
	var lib = {}; var ss = {}; var img = {};
	lib.webFontTxtInst = {};
	var loadedTypekitCount = 0;
	var loadedGoogleCount = 0;
	var gFontsUpdateCacheList = [];
	var tFontsUpdateCacheList = [];
	lib.ssMetadata = [];



	lib.updateListCache = function (cacheList) {
		for (var i = 0; i < cacheList.length; i++) {
			if (cacheList[i].cacheCanvas)
				cacheList[i].updateCache();
		}
	};

	lib.addElementsToCache = function (textInst, cacheList) {
		var cur = textInst;
		while (cur != null && cur != exportRoot) {
			if (cacheList.indexOf(cur) != -1)
				break;
			cur = cur.parent;
		}
		if (cur != exportRoot) {
			var cur2 = textInst;
			var index = cacheList.indexOf(cur);
			while (cur2 != null && cur2 != cur) {
				cacheList.splice(index, 0, cur2);
				cur2 = cur2.parent;
				index++;
			}
		}
		else {
			cur = textInst;
			while (cur != null && cur != exportRoot) {
				cacheList.push(cur);
				cur = cur.parent;
			}
		}
	};

	lib.gfontAvailable = function (family, totalGoogleCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for (var f = 0; f < txtInst.length; ++f)
			lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

		loadedGoogleCount++;
		if (loadedGoogleCount == totalGoogleCount) {
			lib.updateListCache(gFontsUpdateCacheList);
		}
	};

	lib.tfontAvailable = function (family, totalTypekitCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for (var f = 0; f < txtInst.length; ++f)
			lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

		loadedTypekitCount++;
		if (loadedTypekitCount == totalTypekitCount) {
			lib.updateListCache(tFontsUpdateCacheList);
		}
	};
	// symbols:



	(lib.位图1 = function () {
		this.initialize(img.位图1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 136, 139);// helper functions:

	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}

	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
	}


	(lib.元件4 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("Ei3+CLeMAAAkW7MFv8AAAMAAAEW7g");
		this.shape.setTransform(1177.5, 892.6);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 2354.9, 1785.2);


	(lib.元件1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 5
		this.instance = new lib.位图1();
		this.instance.parent = this;
		this.instance.setTransform(993.2, 159.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true }, 113).wait(63));

		// 图层 6
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(153,210,40,0.2)").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape.setTransform(-189.5, 204.6, 1, 0.176, 0, 180, 0);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(152,208,40,0.2)").s().p("EgnngCTIwKCrIzxkrMCXFAAAI7nDxItwh8MgnSAGyg");
		this.shape_1.setTransform(-189.4, 205);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("rgba(151,205,39,0.2)").s().p("EgnsgCVIwPCtIznkvMCXFAAAI7vD1Itsh+MgngAG4g");
		this.shape_2.setTransform(-189.4, 205.4);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("rgba(150,203,39,0.2)").s().p("EgnvgCXIwWCwIzdk0MCXFAAAI72D4Itph/MgnuAG+g");
		this.shape_3.setTransform(-189.4, 205.8);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("rgba(149,201,38,0.2)").s().p("Egn0gCYIwbCxIzTk3MCXFAAAI7+D7ItliBMgn8AHDg");
		this.shape_4.setTransform(-189.4, 206.1);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("rgba(148,198,38,0.2)").s().p("Egn4gCaIwhC0IzJk8MCXFAAAI8GD+IthiCMgoKAHJg");
		this.shape_5.setTransform(-189.4, 206.5);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("rgba(147,196,37,0.2)").s().p("Egn9gCcIwmC2Iy/lAMCXFAAAI8OECItdiEMgoYAHPg");
		this.shape_6.setTransform(-189.4, 206.9);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("rgba(146,193,37,0.2)").s().p("EgoAgCeIwtC4Iy1lEMCXFAAAI8XEFItXiGMgooAHVg");
		this.shape_7.setTransform(-189.4, 207.3);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("rgba(145,191,36,0.2)").s().p("EgoFgCgIwyC7IyrlIMCXFAAAI8eEIItUiIMgo2AHbg");
		this.shape_8.setTransform(-189.4, 207.6);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("rgba(145,189,36,0.2)").s().p("EgoJgCjIw3C+IyilMMCXFAAAI8mELItQiJMgpEAHhg");
		this.shape_9.setTransform(-189.4, 208);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("rgba(144,186,36,0.2)").s().p("EgoNgClIw9DAIyYlQMCXFAAAI8uEPItMiLMgpSAHng");
		this.shape_10.setTransform(-189.4, 208.4);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("rgba(143,184,35,0.2)").s().p("EgoSgCmIxCDCIyOlUMCXFAAAI82ERItIiMMgpgAHsg");
		this.shape_11.setTransform(-189.4, 208.7);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("rgba(142,182,35,0.2)").s().p("EgoVgCpIxIDFIyFlYMCXFAAAI8+EVItEiOMgpuAHyg");
		this.shape_12.setTransform(-189.4, 209.1);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("rgba(141,179,34,0.2)").s().p("EgoagCqIxNDGIx7lcMCXFAAAI9GEYItAiPMgp8AH4g");
		this.shape_13.setTransform(-189.4, 209.5);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("rgba(140,177,34,0.2)").s().p("EgoegCsIxTDIIxxlgMCXFAAAI9OEcIs8iSMgqKAH+g");
		this.shape_14.setTransform(-189.4, 209.9);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("rgba(139,175,33,0.2)").s().p("EgojgCuIxYDLIxnlkMCXFAAAI9WEeIs3iTMgqZAIEg");
		this.shape_15.setTransform(-189.4, 210.2);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("rgba(138,172,33,0.2)").s().p("EgomgCwIxfDNIxdloMCXFAAAI9eEiIs0iVMgqmAIKg");
		this.shape_16.setTransform(-189.4, 210.6);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("rgba(137,170,32,0.2)").s().p("EgorgCyIxkDPIxTlsMCXFAAAI9mElIsviWMgq2AIQg");
		this.shape_17.setTransform(-189.4, 211);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("rgba(136,168,32,0.2)").s().p("EgovgC0IxqDSIxJlwMCXFAAAI9uEoIsriYMgrEAIVg");
		this.shape_18.setTransform(-189.4, 211.3);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("rgba(135,165,31,0.2)").s().p("EgozgC2IxwDUIw/l0MCXFAAAI91EsIsoiaMgrSAIbg");
		this.shape_19.setTransform(-189.4, 211.7);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("rgba(134,163,31,0.2)").s().p("Ego3gC4Ix2DWIw1l4MCXFAAAI99EvIskibMgrgAIhg");
		this.shape_20.setTransform(-189.4, 212.1);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("rgba(133,160,31,0.2)").s().p("Ego8gC7Ix6DZIwsl8MCXFAAAI+FEyIsficMgrvAIng");
		this.shape_21.setTransform(-189.4, 212.5);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("rgba(132,158,30,0.2)").s().p("EgpAgC8IyADbIwimAMCXFAAAI+NE1IsbifMgr9AItg");
		this.shape_22.setTransform(-189.4, 212.8);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("rgba(131,156,30,0.2)").s().p("EgpEgC/IyGDfIwYmFMCXFAAAI+VE4IsYifMgsKAIyg");
		this.shape_23.setTransform(-189.4, 213.2);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("rgba(130,153,29,0.2)").s().p("EgpIgDAIyMDgIwOmJMCXFAAAI+dE8IsTiiMgsZAI5g");
		this.shape_24.setTransform(-189.4, 213.6);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("rgba(129,151,29,0.2)").s().p("EgpNgDCIyQDiIwFmMMCXFAAAI+lE/IsPikMgsnAI+g");
		this.shape_25.setTransform(-189.4, 213.9);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("rgba(128,149,28,0.2)").s().p("EgpRgDEIyXDkIv6mQMCXFAAAI+tFCIsLilMgs1AJEg");
		this.shape_26.setTransform(-189.4, 214.3);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("rgba(128,146,28,0.2)").s().p("EgpVgDGIydDnIvwmVMCXFAAAI+0FGIsIinMgtDAJKg");
		this.shape_27.setTransform(-189.4, 214.7);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("rgba(127,144,27,0.2)").s().p("EgpZgDIIyjDpIvmmZMCXFAAAI+8FJIsEioMgtRAJQg");
		this.shape_28.setTransform(-189.4, 215.1);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("rgba(126,142,27,0.2)").s().p("EgpdgDKIyoDrIvdmcMCXFAAAI/EFMIr/iqMgtgAJVg");
		this.shape_29.setTransform(-189.4, 215.4);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("rgba(125,139,27,0.2)").s().p("EgpigDNIytDuIvTmgMCXFAAAI/MFPIr8irMgttAJbg");
		this.shape_30.setTransform(-189.4, 215.8);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("rgba(124,137,26,0.2)").s().p("EgpmgDOIyzDwIvJmlMCXFAAAI/UFTIr3iuMgt9AJhg");
		this.shape_31.setTransform(-189.4, 216.2);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("rgba(123,134,26,0.2)").s().p("EgpqgDQIy4DyIvAmoMCXFAAAI/cFVIrzivMguLAJng");
		this.shape_32.setTransform(-189.4, 216.5);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("rgba(122,132,25,0.2)").s().p("EgpugDSIy+D0Iu2msMCXFAAAI/kFZIrvixMguZAJtg");
		this.shape_33.setTransform(-189.4, 216.9);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("rgba(121,130,25,0.2)").s().p("EgpzgDUIzDD3IusmxMCXFAAAI/sFcIrriyMgunAJzg");
		this.shape_34.setTransform(-189.4, 217.3);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("rgba(120,127,24,0.2)").s().p("Egp2gDWIzKD5Iuim1MCXFAAAI/zFgIroi0Mgu1AJ5g");
		this.shape_35.setTransform(-189.4, 217.7);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("rgba(119,125,24,0.2)").s().p("Egp7gDYIzPD7IuYm4MCXFAAAI/7FiIrji1MgvEAJ+g");
		this.shape_36.setTransform(-189.4, 218);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("rgba(118,123,23,0.2)").s().p("Egp/gDaIzVD9IuOm8MCXFAAAMggDAFlIrgi3MgvRAKFg");
		this.shape_37.setTransform(-189.4, 218.4);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("rgba(117,120,23,0.2)").s().p("EgqEgDcIzaEAIuEnBMCXFAAAMggLAFpIrbi4MgvgAKKg");
		this.shape_38.setTransform(-189.4, 218.8);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("rgba(116,118,22,0.2)").s().p("EgqHgDeIzhEDIt6nFMCXFAAAMggUAFsIrWi7MgvuAKQg");
		this.shape_39.setTransform(-189.4, 219.1);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("rgba(115,116,22,0.2)").s().p("EgqMgDgIzmEFItwnJMCXFAAAMggbAFvIrTi8Mgv9AKWg");
		this.shape_40.setTransform(-189.4, 219.5);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("rgba(114,113,22,0.2)").s().p("EgqQgDiIzsEHItmnNMCXFAAAMggjAFzIrPi+MgwLAKcg");
		this.shape_41.setTransform(-189.4, 219.9);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("rgba(113,111,21,0.2)").s().p("EgqUgDkIzxEKItdnSMCXFAAAMggrAF3IrKjAMgwaAKhg");
		this.shape_42.setTransform(-189.4, 220.3);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("rgba(112,109,21,0.2)").s().p("EgqZgDmIz2EMItTnVMCXFAAAMggzAF5IrGjBMgwoAKng");
		this.shape_43.setTransform(-189.4, 220.6);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("rgba(111,106,20,0.2)").s().p("EgqcgDoIz9EOItJnZMCXFAAAMgg7AF9IrDjEMgw1AKug");
		this.shape_44.setTransform(-189.4, 221);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("rgba(111,104,20,0.2)").s().p("EgqhgDqI0BERItAneMCXFAAAMghCAGAIq/jEMgxEAKzg");
		this.shape_45.setTransform(-189.4, 221.3);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("rgba(110,101,19,0.2)").s().p("EgqlgDrI0HESIs2nhMCXFAAAMghKAGDIq7jGMgxSAK4g");
		this.shape_46.setTransform(-189.4, 221.7);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("rgba(109,99,19,0.2)").s().p("EgqqgDuI0NEVIsrnlMCXFAAAMghSAGGIq3jIMgxgAK/g");
		this.shape_47.setTransform(-189.4, 222.1);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("rgba(108,97,18,0.2)").s().p("EgqtgDwI0TEYIsinqMCXFAAAMghbAGKIqyjKMgxuALFg");
		this.shape_48.setTransform(-189.4, 222.5);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("rgba(107,94,18,0.2)").s().p("EgqygDyI0YEaIsYnuMCXFAAAMghjAGNIqtjLMgx9ALLg");
		this.shape_49.setTransform(-189.4, 222.8);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("rgba(106,92,18,0.2)").s().p("Egq2gD0I0eEcIsOnxMCXFAAAMghqAGQIqqjNMgyMALQg");
		this.shape_50.setTransform(-189.4, 223.2);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("rgba(105,90,17,0.2)").s().p("Egq6gD2I0kEeIsEn1MCXFAAAMghyAGTIqnjOMgyZALWg");
		this.shape_51.setTransform(-189.4, 223.6);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("rgba(104,87,17,0.2)").s().p("Egq+gD4I0qEhIr6n6MCXFAAAMgh6AGXIqijQMgyoALcg");
		this.shape_52.setTransform(-189.4, 223.9);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("rgba(103,85,16,0.2)").s().p("EgrDgD5I0uEiIrxn9MCXFAAAMgiCAGZIqejRMgy2ALig");
		this.shape_53.setTransform(-189.4, 224.3);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("rgba(102,83,16,0.2)").s().p("EgrHgD8I00EmIrnoCMCXFAAAMgiKAGdIqajUMgzEALog");
		this.shape_54.setTransform(-189.4, 224.7);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("rgba(101,80,15,0.2)").s().p("EgrLgD9I06EnIrdoGMCXFAAAMgiSAGgIqWjUMgzSALtg");
		this.shape_55.setTransform(-189.4, 225.1);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("rgba(100,78,15,0.2)").s().p("EgrPgEAI1AEqIrToKMCXFAAAMgiaAGkIqSjXMgzgAL0g");
		this.shape_56.setTransform(-189.4, 225.4);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("rgba(99,76,14,0.2)").s().p("EgrUgEBI1FErIrJoNMCXFAAAMgiiAGnIqNjZMgzvAL5g");
		this.shape_57.setTransform(-189.4, 225.8);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("rgba(98,73,14,0.2)").s().p("EgrYgEEI1LEvIq/oSMCXFAAAMgiqAGqIqKjaMgz8AL/g");
		this.shape_58.setTransform(-189.4, 226.2);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("rgba(97,71,13,0.2)").s().p("EgrcgEFI1REwIq1oWMCXFAAAMgiyAGuIqFjcMg0MAMFg");
		this.shape_59.setTransform(-189.4, 226.5);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("rgba(96,68,13,0.2)").s().p("EgrggEII1XEzIqroZMCXFAAAMgi5AGwIqCjeMg0aAMMg");
		this.shape_60.setTransform(-189.4, 226.9);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("rgba(95,66,13,0.2)").s().p("EgrkgEKI1cE2IqioeMCXFAAAMgjBAG0Ip+jfMg0oAMQg");
		this.shape_61.setTransform(-189.4, 227.3);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("rgba(94,64,12,0.2)").s().p("EgrpgEMI1hE4IqYoiMCXFAAAMgjJAG3Ip6jgMg02AMWg");
		this.shape_62.setTransform(-189.4, 227.7);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("rgba(94,61,12,0.2)").s().p("EgrtgEOI1nE6IqOomMCXFAAAMgjRAG7Ip1jjMg1FAMdg");
		this.shape_63.setTransform(-189.4, 228);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("rgba(93,59,11,0.2)").s().p("EgrxgEQI1tE8IqEopMCXFAAAMgjZAG9IpxjkMg1UAMig");
		this.shape_64.setTransform(-189.4, 228.4);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("rgba(92,57,11,0.2)").s().p("Egr1gERI1yE+Ip7ouMCXFAAAMgjhAHBIpujmMg1hAMog");
		this.shape_65.setTransform(-189.4, 228.8);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("rgba(91,54,10,0.2)").s().p("Egr6gETI13FAIpxoyMCXFAAAMgjpAHEIppjnMg1wAMug");
		this.shape_66.setTransform(-189.4, 229.1);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("rgba(90,52,10,0.2)").s().p("Egr9gEVI1+FDIpno2MCXFAAAMgjxAHHIpljpMg1+AMzg");
		this.shape_67.setTransform(-189.4, 229.5);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("rgba(89,50,9,0.2)").s().p("EgsCgEXI2DFFIpdo6MCXFAAAMgj4AHKIpijqMg2MAM5g");
		this.shape_68.setTransform(-189.4, 229.9);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("rgba(88,47,9,0.2)").s().p("EgsGgEaI2JFIIpTo+MCXFAAAMgkAAHOIpejtMg2aANAg");
		this.shape_69.setTransform(-189.4, 230.3);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("rgba(87,45,9,0.2)").s().p("EgsLgEcI2OFLIpJpDMCXFAAAMgkIAHRIpZjuMg2pANGg");
		this.shape_70.setTransform(-189.4, 230.6);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("rgba(86,42,8,0.2)").s().p("EgsOgEeI2VFNIo/pGMCXFAAAMgkQAHUIpVjwMg23ANMg");
		this.shape_71.setTransform(-189.4, 231);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("rgba(85,40,8,0.2)").s().p("EgsTgEgI2aFPIo1pKMCXFAAAMgkYAHXIpSjxMg3EANRg");
		this.shape_72.setTransform(-189.4, 231.4);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("rgba(84,38,7,0.2)").s().p("EgsXgEhI2gFRIorpPMCXFAAAMgkgAHbIpNjzMg3UANXg");
		this.shape_73.setTransform(-189.4, 231.7);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("rgba(83,35,7,0.2)").s().p("EgsbgEjI2lFTIoipSMCXFAAAMgkoAHeIpJj1Mg3iANcg");
		this.shape_74.setTransform(-189.4, 232.1);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("rgba(82,33,6,0.2)").s().p("EgsggElI2qFVIoYpWMCXFAAAMgkwAHhIpFj2Mg3wANig");
		this.shape_75.setTransform(-189.4, 232.5);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("rgba(81,31,6,0.2)").s().p("EgsjgEnI2xFXIoOpaMCXFAAAMgk3AHlIpCj5Mg3+ANpg");
		this.shape_76.setTransform(-189.4, 232.9);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("rgba(80,28,5,0.2)").s().p("EgsogEpI22FaIoEpfMCXFAAAMgk/AHoIo9j6Mg4NANvg");
		this.shape_77.setTransform(-189.4, 233.2);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("rgba(79,26,5,0.2)").s().p("EgssgErI27FcIn7piMCXFAAAMglHAHqIo5j7Mg4bAN1g");
		this.shape_78.setTransform(-189.4, 233.6);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("rgba(78,24,4,0.2)").s().p("EgsxgEtI3BFeInwpmMCXFAAAMglPAHuIo2j9Mg4oAN6g");
		this.shape_79.setTransform(-189.4, 234);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("rgba(77,21,4,0.2)").s().p("Egs0gEvI3IFhInmprMCXFAAAMglYAHyIowj/Mg43AOAg");
		this.shape_80.setTransform(-189.4, 234.3);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("rgba(77,19,4,0.2)").s().p("Egs5gEyI3MFkIndpuMCXFAAAMglgAH0IoskAMg5FAOFg");
		this.shape_81.setTransform(-189.4, 234.7);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("rgba(76,17,3,0.2)").s().p("Egs9gEzI3SFmInTpzMCXFAAAMglnAH4IopkCMg5TAOLg");
		this.shape_82.setTransform(-189.4, 235.1);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("rgba(75,14,3,0.2)").s().p("EgtBgE2I3YFpInJp3MCXFAAAMglvAH7IolkDMg5iAORg");
		this.shape_83.setTransform(-189.4, 235.5);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("rgba(74,12,2,0.2)").s().p("EgtFgE3I3eFqIm/p7MCXFAAAMgl3AH/IohkGMg5wAOYg");
		this.shape_84.setTransform(-189.4, 235.8);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("rgba(73,9,2,0.2)").s().p("EgtKgE5I3iFtIm2p/MCXFAAAMgl/AIBIockHMg5/AOdg");
		this.shape_85.setTransform(-189.4, 236.2);

		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("rgba(72,7,1,0.2)").s().p("EgtOgE7I3oFvImsqDMCXFAAAMgmHAIFIoZkJMg6MAOjg");
		this.shape_86.setTransform(-189.4, 236.6);

		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("rgba(71,5,1,0.2)").s().p("EgtSgE9I3uFxImiqHMCXFAAAMgmOAIIIoVkKMg6bAOpg");
		this.shape_87.setTransform(-189.4, 236.9);

		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("rgba(70,2,0,0.2)").s().p("EgtWgE/I30F0ImYqLMCXFAAAMgmXAILIoQkMMg6pAOvg");
		this.shape_88.setTransform(-189.4, 237.3);

		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("rgba(69,0,0,0.2)").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_89.setTransform(-270.1, 237.7, 1, 0.652, 0, -126.8, 0);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).to({ state: [{ t: this.shape_10 }] }, 1).to({ state: [{ t: this.shape_11 }] }, 1).to({ state: [{ t: this.shape_12 }] }, 1).to({ state: [{ t: this.shape_13 }] }, 1).to({ state: [{ t: this.shape_14 }] }, 1).to({ state: [{ t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 1).to({ state: [{ t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_18 }] }, 1).to({ state: [{ t: this.shape_19 }] }, 1).to({ state: [{ t: this.shape_20 }] }, 1).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_31 }] }, 1).to({ state: [{ t: this.shape_32 }] }, 1).to({ state: [{ t: this.shape_33 }] }, 1).to({ state: [{ t: this.shape_34 }] }, 1).to({ state: [{ t: this.shape_35 }] }, 1).to({ state: [{ t: this.shape_36 }] }, 1).to({ state: [{ t: this.shape_37 }] }, 1).to({ state: [{ t: this.shape_38 }] }, 1).to({ state: [{ t: this.shape_39 }] }, 1).to({ state: [{ t: this.shape_40 }] }, 1).to({ state: [{ t: this.shape_41 }] }, 1).to({ state: [{ t: this.shape_42 }] }, 1).to({ state: [{ t: this.shape_43 }] }, 1).to({ state: [{ t: this.shape_44 }] }, 1).to({ state: [{ t: this.shape_45 }] }, 1).to({ state: [{ t: this.shape_46 }] }, 1).to({ state: [{ t: this.shape_47 }] }, 1).to({ state: [{ t: this.shape_48 }] }, 1).to({ state: [{ t: this.shape_49 }] }, 1).to({ state: [{ t: this.shape_50 }] }, 1).to({ state: [{ t: this.shape_51 }] }, 1).to({ state: [{ t: this.shape_52 }] }, 1).to({ state: [{ t: this.shape_53 }] }, 1).to({ state: [{ t: this.shape_54 }] }, 1).to({ state: [{ t: this.shape_55 }] }, 1).to({ state: [{ t: this.shape_56 }] }, 1).to({ state: [{ t: this.shape_57 }] }, 1).to({ state: [{ t: this.shape_58 }] }, 1).to({ state: [{ t: this.shape_59 }] }, 1).to({ state: [{ t: this.shape_60 }] }, 1).to({ state: [{ t: this.shape_61 }] }, 1).to({ state: [{ t: this.shape_62 }] }, 1).to({ state: [{ t: this.shape_63 }] }, 1).to({ state: [{ t: this.shape_64 }] }, 1).to({ state: [{ t: this.shape_65 }] }, 1).to({ state: [{ t: this.shape_66 }] }, 1).to({ state: [{ t: this.shape_67 }] }, 1).to({ state: [{ t: this.shape_68 }] }, 1).to({ state: [{ t: this.shape_69 }] }, 1).to({ state: [{ t: this.shape_70 }] }, 1).to({ state: [{ t: this.shape_71 }] }, 1).to({ state: [{ t: this.shape_72 }] }, 1).to({ state: [{ t: this.shape_73 }] }, 1).to({ state: [{ t: this.shape_74 }] }, 1).to({ state: [{ t: this.shape_75 }] }, 1).to({ state: [{ t: this.shape_76 }] }, 1).to({ state: [{ t: this.shape_77 }] }, 1).to({ state: [{ t: this.shape_78 }] }, 1).to({ state: [{ t: this.shape_79 }] }, 1).to({ state: [{ t: this.shape_80 }] }, 1).to({ state: [{ t: this.shape_81 }] }, 1).to({ state: [{ t: this.shape_82 }] }, 1).to({ state: [{ t: this.shape_83 }] }, 1).to({ state: [{ t: this.shape_84 }] }, 1).to({ state: [{ t: this.shape_85 }] }, 1).to({ state: [{ t: this.shape_86 }] }, 1).to({ state: [{ t: this.shape_87 }] }, 1).to({ state: [{ t: this.shape_88 }] }, 1).to({ state: [{ t: this.shape_89 }] }, 1).to({ state: [] }, 24).wait(63));

		// 图层 2
		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#99D228").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_90.setTransform(-202.4, 21.9);

		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#98D028").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_91.setTransform(-202.3, 21.9);

		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("#97CD27").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_92.setTransform(-202.3, 21.9);

		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("#96CB27").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_93.setTransform(-202.3, 21.9);

		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("#95C926").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_94.setTransform(-202.3, 21.9);

		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.f("#94C626").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_95.setTransform(-202.3, 21.9);

		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.f("#93C425").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_96.setTransform(-202.3, 21.9);

		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.f("#92C125").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_97.setTransform(-202.3, 21.9);

		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.f("#91BF24").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_98.setTransform(-202.3, 21.9);

		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.f("#91BD24").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_99.setTransform(-202.3, 21.9);

		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.f("#90BA24").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_100.setTransform(-202.3, 21.9);

		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.f("#8FB823").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_101.setTransform(-202.3, 21.9);

		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.f("#8EB623").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_102.setTransform(-202.3, 21.9);

		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.f("#8DB322").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_103.setTransform(-202.3, 21.9);

		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.f("#8CB122").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_104.setTransform(-202.3, 21.9);

		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.f("#8BAF21").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_105.setTransform(-202.3, 21.9);

		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.f("#8AAC21").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_106.setTransform(-202.3, 21.9);

		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.f("#89AA20").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_107.setTransform(-202.3, 21.9);

		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.f("#88A820").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_108.setTransform(-202.3, 21.9);

		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.f("#87A51F").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_109.setTransform(-202.3, 21.9);

		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.f("#86A31F").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_110.setTransform(-202.3, 21.9);

		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.f("#85A01F").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_111.setTransform(-202.3, 21.9);

		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.f("#849E1E").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_112.setTransform(-202.3, 21.9);

		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.f("#839C1E").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_113.setTransform(-202.3, 21.9);

		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.f("#82991D").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_114.setTransform(-202.3, 21.9);

		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.f("#81971D").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_115.setTransform(-202.3, 21.9);

		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.f("#80951C").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_116.setTransform(-202.3, 21.9);

		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.f("#80921C").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_117.setTransform(-202.3, 21.9);

		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.f("#7F901B").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_118.setTransform(-202.3, 21.9);

		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.f("#7E8E1B").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_119.setTransform(-202.3, 21.9);

		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.f("#7D8B1B").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_120.setTransform(-202.3, 21.9);

		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.f("#7C891A").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_121.setTransform(-202.3, 21.9);

		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.f("#7B861A").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_122.setTransform(-202.3, 21.9);

		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.f("#7A8419").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_123.setTransform(-202.3, 21.9);

		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.f("#798219").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_124.setTransform(-202.3, 21.9);

		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.f("#787F18").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_125.setTransform(-202.3, 21.9);

		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.f("#777D18").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_126.setTransform(-202.3, 21.9);

		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.f("#767B17").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_127.setTransform(-202.3, 21.9);

		this.shape_128 = new cjs.Shape();
		this.shape_128.graphics.f("#757817").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_128.setTransform(-202.3, 21.9);

		this.shape_129 = new cjs.Shape();
		this.shape_129.graphics.f("#747616").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_129.setTransform(-202.3, 21.9);

		this.shape_130 = new cjs.Shape();
		this.shape_130.graphics.f("#737416").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_130.setTransform(-202.3, 21.9);

		this.shape_131 = new cjs.Shape();
		this.shape_131.graphics.f("#727116").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_131.setTransform(-202.3, 21.9);

		this.shape_132 = new cjs.Shape();
		this.shape_132.graphics.f("#716F15").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_132.setTransform(-202.3, 21.9);

		this.shape_133 = new cjs.Shape();
		this.shape_133.graphics.f("#706D15").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_133.setTransform(-202.3, 21.9);

		this.shape_134 = new cjs.Shape();
		this.shape_134.graphics.f("#6F6A14").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_134.setTransform(-202.3, 21.9);

		this.shape_135 = new cjs.Shape();
		this.shape_135.graphics.f("#6F6814").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_135.setTransform(-202.3, 21.9);

		this.shape_136 = new cjs.Shape();
		this.shape_136.graphics.f("#6E6513").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_136.setTransform(-202.3, 21.9);

		this.shape_137 = new cjs.Shape();
		this.shape_137.graphics.f("#6D6313").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_137.setTransform(-202.3, 21.9);

		this.shape_138 = new cjs.Shape();
		this.shape_138.graphics.f("#6C6112").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_138.setTransform(-202.3, 21.9);

		this.shape_139 = new cjs.Shape();
		this.shape_139.graphics.f("#6B5E12").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_139.setTransform(-202.3, 21.9);

		this.shape_140 = new cjs.Shape();
		this.shape_140.graphics.f("#6A5C12").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_140.setTransform(-202.3, 21.9);

		this.shape_141 = new cjs.Shape();
		this.shape_141.graphics.f("#695A11").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_141.setTransform(-202.3, 21.9);

		this.shape_142 = new cjs.Shape();
		this.shape_142.graphics.f("#685711").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_142.setTransform(-202.3, 21.9);

		this.shape_143 = new cjs.Shape();
		this.shape_143.graphics.f("#675510").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_143.setTransform(-202.3, 21.9);

		this.shape_144 = new cjs.Shape();
		this.shape_144.graphics.f("#665310").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_144.setTransform(-202.3, 21.9);

		this.shape_145 = new cjs.Shape();
		this.shape_145.graphics.f("#65500F").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_145.setTransform(-202.3, 21.9);

		this.shape_146 = new cjs.Shape();
		this.shape_146.graphics.f("#644E0F").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_146.setTransform(-202.3, 21.9);

		this.shape_147 = new cjs.Shape();
		this.shape_147.graphics.f("#634C0E").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_147.setTransform(-202.3, 21.9);

		this.shape_148 = new cjs.Shape();
		this.shape_148.graphics.f("#62490E").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_148.setTransform(-202.3, 21.9);

		this.shape_149 = new cjs.Shape();
		this.shape_149.graphics.f("#61470D").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_149.setTransform(-202.3, 21.9);

		this.shape_150 = new cjs.Shape();
		this.shape_150.graphics.f("#60440D").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_150.setTransform(-202.3, 21.9);

		this.shape_151 = new cjs.Shape();
		this.shape_151.graphics.f("#5F420D").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_151.setTransform(-202.3, 21.9);

		this.shape_152 = new cjs.Shape();
		this.shape_152.graphics.f("#5E400C").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_152.setTransform(-202.3, 21.9);

		this.shape_153 = new cjs.Shape();
		this.shape_153.graphics.f("#5E3D0C").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_153.setTransform(-202.3, 21.9);

		this.shape_154 = new cjs.Shape();
		this.shape_154.graphics.f("#5D3B0B").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_154.setTransform(-202.3, 21.9);

		this.shape_155 = new cjs.Shape();
		this.shape_155.graphics.f("#5C390B").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_155.setTransform(-202.3, 21.9);

		this.shape_156 = new cjs.Shape();
		this.shape_156.graphics.f("#5B360A").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_156.setTransform(-202.3, 21.9);

		this.shape_157 = new cjs.Shape();
		this.shape_157.graphics.f("#5A340A").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_157.setTransform(-202.3, 21.9);

		this.shape_158 = new cjs.Shape();
		this.shape_158.graphics.f("#593209").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_158.setTransform(-202.3, 21.9);

		this.shape_159 = new cjs.Shape();
		this.shape_159.graphics.f("#582F09").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_159.setTransform(-202.3, 21.9);

		this.shape_160 = new cjs.Shape();
		this.shape_160.graphics.f("#572D09").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_160.setTransform(-202.3, 21.9);

		this.shape_161 = new cjs.Shape();
		this.shape_161.graphics.f("#562A08").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_161.setTransform(-202.3, 21.9);

		this.shape_162 = new cjs.Shape();
		this.shape_162.graphics.f("#552808").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_162.setTransform(-202.3, 21.9);

		this.shape_163 = new cjs.Shape();
		this.shape_163.graphics.f("#542607").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_163.setTransform(-202.3, 21.9);

		this.shape_164 = new cjs.Shape();
		this.shape_164.graphics.f("#532307").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_164.setTransform(-202.3, 21.9);

		this.shape_165 = new cjs.Shape();
		this.shape_165.graphics.f("#522106").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_165.setTransform(-202.3, 21.9);

		this.shape_166 = new cjs.Shape();
		this.shape_166.graphics.f("#511F06").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_166.setTransform(-202.3, 21.9);

		this.shape_167 = new cjs.Shape();
		this.shape_167.graphics.f("#501C05").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_167.setTransform(-202.3, 21.9);

		this.shape_168 = new cjs.Shape();
		this.shape_168.graphics.f("#4F1A05").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_168.setTransform(-202.3, 21.9);

		this.shape_169 = new cjs.Shape();
		this.shape_169.graphics.f("#4E1804").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_169.setTransform(-202.3, 21.9);

		this.shape_170 = new cjs.Shape();
		this.shape_170.graphics.f("#4D1504").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_170.setTransform(-202.3, 21.9);

		this.shape_171 = new cjs.Shape();
		this.shape_171.graphics.f("#4D1304").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_171.setTransform(-202.3, 21.9);

		this.shape_172 = new cjs.Shape();
		this.shape_172.graphics.f("#4C1103").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_172.setTransform(-202.3, 21.9);

		this.shape_173 = new cjs.Shape();
		this.shape_173.graphics.f("#4B0E03").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_173.setTransform(-202.3, 21.9);

		this.shape_174 = new cjs.Shape();
		this.shape_174.graphics.f("#4A0C02").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_174.setTransform(-202.3, 21.9);

		this.shape_175 = new cjs.Shape();
		this.shape_175.graphics.f("#490902").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_175.setTransform(-202.3, 21.9);

		this.shape_176 = new cjs.Shape();
		this.shape_176.graphics.f("#480701").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_176.setTransform(-202.3, 21.9);

		this.shape_177 = new cjs.Shape();
		this.shape_177.graphics.f("#470501").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_177.setTransform(-202.3, 21.9);

		this.shape_178 = new cjs.Shape();
		this.shape_178.graphics.f("#460200").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_178.setTransform(-202.3, 21.9);

		this.shape_179 = new cjs.Shape();
		this.shape_179.graphics.f("#450000").s().p("EhLiAYJIT76QIQEPAMAiwglBMAnDAl+IN0qyIbfVFg");
		this.shape_179.setTransform(-202.4, 21.9);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_90 }] }).to({ state: [{ t: this.shape_91 }] }, 1).to({ state: [{ t: this.shape_92 }] }, 1).to({ state: [{ t: this.shape_93 }] }, 1).to({ state: [{ t: this.shape_94 }] }, 1).to({ state: [{ t: this.shape_95 }] }, 1).to({ state: [{ t: this.shape_96 }] }, 1).to({ state: [{ t: this.shape_97 }] }, 1).to({ state: [{ t: this.shape_98 }] }, 1).to({ state: [{ t: this.shape_99 }] }, 1).to({ state: [{ t: this.shape_100 }] }, 1).to({ state: [{ t: this.shape_101 }] }, 1).to({ state: [{ t: this.shape_102 }] }, 1).to({ state: [{ t: this.shape_103 }] }, 1).to({ state: [{ t: this.shape_104 }] }, 1).to({ state: [{ t: this.shape_105 }] }, 1).to({ state: [{ t: this.shape_106 }] }, 1).to({ state: [{ t: this.shape_107 }] }, 1).to({ state: [{ t: this.shape_108 }] }, 1).to({ state: [{ t: this.shape_109 }] }, 1).to({ state: [{ t: this.shape_110 }] }, 1).to({ state: [{ t: this.shape_111 }] }, 1).to({ state: [{ t: this.shape_112 }] }, 1).to({ state: [{ t: this.shape_113 }] }, 1).to({ state: [{ t: this.shape_114 }] }, 1).to({ state: [{ t: this.shape_115 }] }, 1).to({ state: [{ t: this.shape_116 }] }, 1).to({ state: [{ t: this.shape_117 }] }, 1).to({ state: [{ t: this.shape_118 }] }, 1).to({ state: [{ t: this.shape_119 }] }, 1).to({ state: [{ t: this.shape_120 }] }, 1).to({ state: [{ t: this.shape_121 }] }, 1).to({ state: [{ t: this.shape_122 }] }, 1).to({ state: [{ t: this.shape_123 }] }, 1).to({ state: [{ t: this.shape_124 }] }, 1).to({ state: [{ t: this.shape_125 }] }, 1).to({ state: [{ t: this.shape_126 }] }, 1).to({ state: [{ t: this.shape_127 }] }, 1).to({ state: [{ t: this.shape_128 }] }, 1).to({ state: [{ t: this.shape_129 }] }, 1).to({ state: [{ t: this.shape_130 }] }, 1).to({ state: [{ t: this.shape_131 }] }, 1).to({ state: [{ t: this.shape_132 }] }, 1).to({ state: [{ t: this.shape_133 }] }, 1).to({ state: [{ t: this.shape_134 }] }, 1).to({ state: [{ t: this.shape_135 }] }, 1).to({ state: [{ t: this.shape_136 }] }, 1).to({ state: [{ t: this.shape_137 }] }, 1).to({ state: [{ t: this.shape_138 }] }, 1).to({ state: [{ t: this.shape_139 }] }, 1).to({ state: [{ t: this.shape_140 }] }, 1).to({ state: [{ t: this.shape_141 }] }, 1).to({ state: [{ t: this.shape_142 }] }, 1).to({ state: [{ t: this.shape_143 }] }, 1).to({ state: [{ t: this.shape_144 }] }, 1).to({ state: [{ t: this.shape_145 }] }, 1).to({ state: [{ t: this.shape_146 }] }, 1).to({ state: [{ t: this.shape_147 }] }, 1).to({ state: [{ t: this.shape_148 }] }, 1).to({ state: [{ t: this.shape_149 }] }, 1).to({ state: [{ t: this.shape_150 }] }, 1).to({ state: [{ t: this.shape_151 }] }, 1).to({ state: [{ t: this.shape_152 }] }, 1).to({ state: [{ t: this.shape_153 }] }, 1).to({ state: [{ t: this.shape_154 }] }, 1).to({ state: [{ t: this.shape_155 }] }, 1).to({ state: [{ t: this.shape_156 }] }, 1).to({ state: [{ t: this.shape_157 }] }, 1).to({ state: [{ t: this.shape_158 }] }, 1).to({ state: [{ t: this.shape_159 }] }, 1).to({ state: [{ t: this.shape_160 }] }, 1).to({ state: [{ t: this.shape_161 }] }, 1).to({ state: [{ t: this.shape_162 }] }, 1).to({ state: [{ t: this.shape_163 }] }, 1).to({ state: [{ t: this.shape_164 }] }, 1).to({ state: [{ t: this.shape_165 }] }, 1).to({ state: [{ t: this.shape_166 }] }, 1).to({ state: [{ t: this.shape_167 }] }, 1).to({ state: [{ t: this.shape_168 }] }, 1).to({ state: [{ t: this.shape_169 }] }, 1).to({ state: [{ t: this.shape_170 }] }, 1).to({ state: [{ t: this.shape_171 }] }, 1).to({ state: [{ t: this.shape_172 }] }, 1).to({ state: [{ t: this.shape_173 }] }, 1).to({ state: [{ t: this.shape_174 }] }, 1).to({ state: [{ t: this.shape_175 }] }, 1).to({ state: [{ t: this.shape_176 }] }, 1).to({ state: [{ t: this.shape_177 }] }, 1).to({ state: [{ t: this.shape_178 }] }, 1).to({ state: [{ t: this.shape_179 }] }, 1).to({ state: [] }, 24).wait(63));

		// 图层 3
		this.shape_180 = new cjs.Shape();
		this.shape_180.graphics.f("#D6D6EE").s().p("Eh9KAamMAAAg1LMD6VAAAMAAAA1Lg");
		this.shape_180.setTransform(0, 592.6, 1, 2.473);

		this.shape_181 = new cjs.Shape();
		this.shape_181.graphics.f("#D4D4EB").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_181.setTransform(0, 592.6);

		this.shape_182 = new cjs.Shape();
		this.shape_182.graphics.f("#D3D1E9").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_182.setTransform(0, 592.6);

		this.shape_183 = new cjs.Shape();
		this.shape_183.graphics.f("#D1CFE6").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_183.setTransform(0, 592.6);

		this.shape_184 = new cjs.Shape();
		this.shape_184.graphics.f("#CFCCE3").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_184.setTransform(0, 592.6);

		this.shape_185 = new cjs.Shape();
		this.shape_185.graphics.f("#CECAE1").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_185.setTransform(0, 592.6);

		this.shape_186 = new cjs.Shape();
		this.shape_186.graphics.f("#CCC8DE").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_186.setTransform(0, 592.6);

		this.shape_187 = new cjs.Shape();
		this.shape_187.graphics.f("#CBC5DB").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_187.setTransform(0, 592.6);

		this.shape_188 = new cjs.Shape();
		this.shape_188.graphics.f("#C9C3D9").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_188.setTransform(0, 592.6);

		this.shape_189 = new cjs.Shape();
		this.shape_189.graphics.f("#C7C0D6").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_189.setTransform(0, 592.6);

		this.shape_190 = new cjs.Shape();
		this.shape_190.graphics.f("#C6BED3").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_190.setTransform(0, 592.6);

		this.shape_191 = new cjs.Shape();
		this.shape_191.graphics.f("#C4BCD1").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_191.setTransform(0, 592.6);

		this.shape_192 = new cjs.Shape();
		this.shape_192.graphics.f("#C2B9CE").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_192.setTransform(0, 592.6);

		this.shape_193 = new cjs.Shape();
		this.shape_193.graphics.f("#C1B7CB").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_193.setTransform(0, 592.6);

		this.shape_194 = new cjs.Shape();
		this.shape_194.graphics.f("#BFB4C9").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_194.setTransform(0, 592.6);

		this.shape_195 = new cjs.Shape();
		this.shape_195.graphics.f("#BEB2C6").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_195.setTransform(0, 592.6);

		this.shape_196 = new cjs.Shape();
		this.shape_196.graphics.f("#BCB0C3").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_196.setTransform(0, 592.6);

		this.shape_197 = new cjs.Shape();
		this.shape_197.graphics.f("#BAADC1").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_197.setTransform(0, 592.6);

		this.shape_198 = new cjs.Shape();
		this.shape_198.graphics.f("#B9ABBE").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_198.setTransform(0, 592.6);

		this.shape_199 = new cjs.Shape();
		this.shape_199.graphics.f("#B7A8BB").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_199.setTransform(0, 592.6);

		this.shape_200 = new cjs.Shape();
		this.shape_200.graphics.f("#B5A6B9").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_200.setTransform(0, 592.6);

		this.shape_201 = new cjs.Shape();
		this.shape_201.graphics.f("#B4A4B6").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_201.setTransform(0, 592.6);

		this.shape_202 = new cjs.Shape();
		this.shape_202.graphics.f("#B2A1B3").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_202.setTransform(0, 592.6);

		this.shape_203 = new cjs.Shape();
		this.shape_203.graphics.f("#B19FB0").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_203.setTransform(0, 592.6);

		this.shape_204 = new cjs.Shape();
		this.shape_204.graphics.f("#AF9CAE").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_204.setTransform(0, 592.6);

		this.shape_205 = new cjs.Shape();
		this.shape_205.graphics.f("#AD9AAB").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_205.setTransform(0, 592.6);

		this.shape_206 = new cjs.Shape();
		this.shape_206.graphics.f("#AC97A8").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_206.setTransform(0, 592.6);

		this.shape_207 = new cjs.Shape();
		this.shape_207.graphics.f("#AA95A6").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_207.setTransform(0, 592.6);

		this.shape_208 = new cjs.Shape();
		this.shape_208.graphics.f("#A893A3").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_208.setTransform(0, 592.6);

		this.shape_209 = new cjs.Shape();
		this.shape_209.graphics.f("#A790A0").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_209.setTransform(0, 592.6);

		this.shape_210 = new cjs.Shape();
		this.shape_210.graphics.f("#A58E9E").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_210.setTransform(0, 592.6);

		this.shape_211 = new cjs.Shape();
		this.shape_211.graphics.f("#A38B9B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_211.setTransform(0, 592.6);

		this.shape_212 = new cjs.Shape();
		this.shape_212.graphics.f("#A28998").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_212.setTransform(0, 592.6);

		this.shape_213 = new cjs.Shape();
		this.shape_213.graphics.f("#A08796").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_213.setTransform(0, 592.6);

		this.shape_214 = new cjs.Shape();
		this.shape_214.graphics.f("#9F8493").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_214.setTransform(0, 592.6);

		this.shape_215 = new cjs.Shape();
		this.shape_215.graphics.f("#9D8290").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_215.setTransform(0, 592.6);

		this.shape_216 = new cjs.Shape();
		this.shape_216.graphics.f("#9B7F8E").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_216.setTransform(0, 592.6);

		this.shape_217 = new cjs.Shape();
		this.shape_217.graphics.f("#9A7D8B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_217.setTransform(0, 592.6);

		this.shape_218 = new cjs.Shape();
		this.shape_218.graphics.f("#987B88").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_218.setTransform(0, 592.6);

		this.shape_219 = new cjs.Shape();
		this.shape_219.graphics.f("#967886").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_219.setTransform(0, 592.6);

		this.shape_220 = new cjs.Shape();
		this.shape_220.graphics.f("#957683").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_220.setTransform(0, 592.6);

		this.shape_221 = new cjs.Shape();
		this.shape_221.graphics.f("#937380").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_221.setTransform(0, 592.6);

		this.shape_222 = new cjs.Shape();
		this.shape_222.graphics.f("#92717E").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_222.setTransform(0, 592.6);

		this.shape_223 = new cjs.Shape();
		this.shape_223.graphics.f("#906F7B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_223.setTransform(0, 592.6);

		this.shape_224 = new cjs.Shape();
		this.shape_224.graphics.f("#8E6C78").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_224.setTransform(0, 592.6);

		this.shape_225 = new cjs.Shape();
		this.shape_225.graphics.f("#8D6A76").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_225.setTransform(0, 592.6);

		this.shape_226 = new cjs.Shape();
		this.shape_226.graphics.f("#8B6773").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_226.setTransform(0, 592.6);

		this.shape_227 = new cjs.Shape();
		this.shape_227.graphics.f("#896570").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_227.setTransform(0, 592.6);

		this.shape_228 = new cjs.Shape();
		this.shape_228.graphics.f("#88636E").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_228.setTransform(0, 592.6);

		this.shape_229 = new cjs.Shape();
		this.shape_229.graphics.f("#86606B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_229.setTransform(0, 592.6);

		this.shape_230 = new cjs.Shape();
		this.shape_230.graphics.f("#855E68").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_230.setTransform(0, 592.6);

		this.shape_231 = new cjs.Shape();
		this.shape_231.graphics.f("#835B66").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_231.setTransform(0, 592.6);

		this.shape_232 = new cjs.Shape();
		this.shape_232.graphics.f("#815963").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_232.setTransform(0, 592.6);

		this.shape_233 = new cjs.Shape();
		this.shape_233.graphics.f("#805760").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_233.setTransform(0, 592.6);

		this.shape_234 = new cjs.Shape();
		this.shape_234.graphics.f("#7E545E").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_234.setTransform(0, 592.6);

		this.shape_235 = new cjs.Shape();
		this.shape_235.graphics.f("#7C525B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_235.setTransform(0, 592.6);

		this.shape_236 = new cjs.Shape();
		this.shape_236.graphics.f("#7B4F58").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_236.setTransform(0, 592.6);

		this.shape_237 = new cjs.Shape();
		this.shape_237.graphics.f("#794D56").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_237.setTransform(0, 592.6);

		this.shape_238 = new cjs.Shape();
		this.shape_238.graphics.f("#784B53").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_238.setTransform(0, 592.6);

		this.shape_239 = new cjs.Shape();
		this.shape_239.graphics.f("#764850").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_239.setTransform(0, 592.6);

		this.shape_240 = new cjs.Shape();
		this.shape_240.graphics.f("#74464E").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_240.setTransform(0, 592.6);

		this.shape_241 = new cjs.Shape();
		this.shape_241.graphics.f("#73434B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_241.setTransform(0, 592.6);

		this.shape_242 = new cjs.Shape();
		this.shape_242.graphics.f("#714148").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_242.setTransform(0, 592.6);

		this.shape_243 = new cjs.Shape();
		this.shape_243.graphics.f("#6F3F46").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_243.setTransform(0, 592.6);

		this.shape_244 = new cjs.Shape();
		this.shape_244.graphics.f("#6E3C43").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_244.setTransform(0, 592.6);

		this.shape_245 = new cjs.Shape();
		this.shape_245.graphics.f("#6C3A40").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_245.setTransform(0, 592.6);

		this.shape_246 = new cjs.Shape();
		this.shape_246.graphics.f("#6A373E").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_246.setTransform(0, 592.6);

		this.shape_247 = new cjs.Shape();
		this.shape_247.graphics.f("#69353B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_247.setTransform(0, 592.6);

		this.shape_248 = new cjs.Shape();
		this.shape_248.graphics.f("#673238").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_248.setTransform(0, 592.6);

		this.shape_249 = new cjs.Shape();
		this.shape_249.graphics.f("#663035").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_249.setTransform(0, 592.6);

		this.shape_250 = new cjs.Shape();
		this.shape_250.graphics.f("#642E33").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_250.setTransform(0, 592.6);

		this.shape_251 = new cjs.Shape();
		this.shape_251.graphics.f("#622B30").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_251.setTransform(0, 592.6);

		this.shape_252 = new cjs.Shape();
		this.shape_252.graphics.f("#61292D").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_252.setTransform(0, 592.6);

		this.shape_253 = new cjs.Shape();
		this.shape_253.graphics.f("#5F262B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_253.setTransform(0, 592.6);

		this.shape_254 = new cjs.Shape();
		this.shape_254.graphics.f("#5D2428").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_254.setTransform(0, 592.6);

		this.shape_255 = new cjs.Shape();
		this.shape_255.graphics.f("#5C2225").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_255.setTransform(0, 592.6);

		this.shape_256 = new cjs.Shape();
		this.shape_256.graphics.f("#5A1F23").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_256.setTransform(0, 592.6);

		this.shape_257 = new cjs.Shape();
		this.shape_257.graphics.f("#591D20").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_257.setTransform(0, 592.6);

		this.shape_258 = new cjs.Shape();
		this.shape_258.graphics.f("#571A1D").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_258.setTransform(0, 592.6);

		this.shape_259 = new cjs.Shape();
		this.shape_259.graphics.f("#55181B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_259.setTransform(0, 592.6);

		this.shape_260 = new cjs.Shape();
		this.shape_260.graphics.f("#541618").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_260.setTransform(0, 592.6);

		this.shape_261 = new cjs.Shape();
		this.shape_261.graphics.f("#521315").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_261.setTransform(0, 592.6);

		this.shape_262 = new cjs.Shape();
		this.shape_262.graphics.f("#501113").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_262.setTransform(0, 592.6);

		this.shape_263 = new cjs.Shape();
		this.shape_263.graphics.f("#4F0E10").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_263.setTransform(0, 592.6);

		this.shape_264 = new cjs.Shape();
		this.shape_264.graphics.f("#4D0C0D").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_264.setTransform(0, 592.6);

		this.shape_265 = new cjs.Shape();
		this.shape_265.graphics.f("#4C0A0B").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_265.setTransform(0, 592.6);

		this.shape_266 = new cjs.Shape();
		this.shape_266.graphics.f("#4A0708").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_266.setTransform(0, 592.6);

		this.shape_267 = new cjs.Shape();
		this.shape_267.graphics.f("#480505").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_267.setTransform(0, 592.6);

		this.shape_268 = new cjs.Shape();
		this.shape_268.graphics.f("#470203").s().p("Eh9KBByMAAAiDjMD6VAAAMAAACDjg");
		this.shape_268.setTransform(0, 592.6);

		this.shape_269 = new cjs.Shape();
		this.shape_269.graphics.f("#450000").s().p("Eh9KAamMAAAg1LMD6VAAAMAAAA1Lg");
		this.shape_269.setTransform(0, 592.6, 1, 2.473);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_180 }] }).to({ state: [{ t: this.shape_181 }] }, 1).to({ state: [{ t: this.shape_182 }] }, 1).to({ state: [{ t: this.shape_183 }] }, 1).to({ state: [{ t: this.shape_184 }] }, 1).to({ state: [{ t: this.shape_185 }] }, 1).to({ state: [{ t: this.shape_186 }] }, 1).to({ state: [{ t: this.shape_187 }] }, 1).to({ state: [{ t: this.shape_188 }] }, 1).to({ state: [{ t: this.shape_189 }] }, 1).to({ state: [{ t: this.shape_190 }] }, 1).to({ state: [{ t: this.shape_191 }] }, 1).to({ state: [{ t: this.shape_192 }] }, 1).to({ state: [{ t: this.shape_193 }] }, 1).to({ state: [{ t: this.shape_194 }] }, 1).to({ state: [{ t: this.shape_195 }] }, 1).to({ state: [{ t: this.shape_196 }] }, 1).to({ state: [{ t: this.shape_197 }] }, 1).to({ state: [{ t: this.shape_198 }] }, 1).to({ state: [{ t: this.shape_199 }] }, 1).to({ state: [{ t: this.shape_200 }] }, 1).to({ state: [{ t: this.shape_201 }] }, 1).to({ state: [{ t: this.shape_202 }] }, 1).to({ state: [{ t: this.shape_203 }] }, 1).to({ state: [{ t: this.shape_204 }] }, 1).to({ state: [{ t: this.shape_205 }] }, 1).to({ state: [{ t: this.shape_206 }] }, 1).to({ state: [{ t: this.shape_207 }] }, 1).to({ state: [{ t: this.shape_208 }] }, 1).to({ state: [{ t: this.shape_209 }] }, 1).to({ state: [{ t: this.shape_210 }] }, 1).to({ state: [{ t: this.shape_211 }] }, 1).to({ state: [{ t: this.shape_212 }] }, 1).to({ state: [{ t: this.shape_213 }] }, 1).to({ state: [{ t: this.shape_214 }] }, 1).to({ state: [{ t: this.shape_215 }] }, 1).to({ state: [{ t: this.shape_216 }] }, 1).to({ state: [{ t: this.shape_217 }] }, 1).to({ state: [{ t: this.shape_218 }] }, 1).to({ state: [{ t: this.shape_219 }] }, 1).to({ state: [{ t: this.shape_220 }] }, 1).to({ state: [{ t: this.shape_221 }] }, 1).to({ state: [{ t: this.shape_222 }] }, 1).to({ state: [{ t: this.shape_223 }] }, 1).to({ state: [{ t: this.shape_224 }] }, 1).to({ state: [{ t: this.shape_225 }] }, 1).to({ state: [{ t: this.shape_226 }] }, 1).to({ state: [{ t: this.shape_227 }] }, 1).to({ state: [{ t: this.shape_228 }] }, 1).to({ state: [{ t: this.shape_229 }] }, 1).to({ state: [{ t: this.shape_230 }] }, 1).to({ state: [{ t: this.shape_231 }] }, 1).to({ state: [{ t: this.shape_232 }] }, 1).to({ state: [{ t: this.shape_233 }] }, 1).to({ state: [{ t: this.shape_234 }] }, 1).to({ state: [{ t: this.shape_235 }] }, 1).to({ state: [{ t: this.shape_236 }] }, 1).to({ state: [{ t: this.shape_237 }] }, 1).to({ state: [{ t: this.shape_238 }] }, 1).to({ state: [{ t: this.shape_239 }] }, 1).to({ state: [{ t: this.shape_240 }] }, 1).to({ state: [{ t: this.shape_241 }] }, 1).to({ state: [{ t: this.shape_242 }] }, 1).to({ state: [{ t: this.shape_243 }] }, 1).to({ state: [{ t: this.shape_244 }] }, 1).to({ state: [{ t: this.shape_245 }] }, 1).to({ state: [{ t: this.shape_246 }] }, 1).to({ state: [{ t: this.shape_247 }] }, 1).to({ state: [{ t: this.shape_248 }] }, 1).to({ state: [{ t: this.shape_249 }] }, 1).to({ state: [{ t: this.shape_250 }] }, 1).to({ state: [{ t: this.shape_251 }] }, 1).to({ state: [{ t: this.shape_252 }] }, 1).to({ state: [{ t: this.shape_253 }] }, 1).to({ state: [{ t: this.shape_254 }] }, 1).to({ state: [{ t: this.shape_255 }] }, 1).to({ state: [{ t: this.shape_256 }] }, 1).to({ state: [{ t: this.shape_257 }] }, 1).to({ state: [{ t: this.shape_258 }] }, 1).to({ state: [{ t: this.shape_259 }] }, 1).to({ state: [{ t: this.shape_260 }] }, 1).to({ state: [{ t: this.shape_261 }] }, 1).to({ state: [{ t: this.shape_262 }] }, 1).to({ state: [{ t: this.shape_263 }] }, 1).to({ state: [{ t: this.shape_264 }] }, 1).to({ state: [{ t: this.shape_265 }] }, 1).to({ state: [{ t: this.shape_266 }] }, 1).to({ state: [{ t: this.shape_267 }] }, 1).to({ state: [{ t: this.shape_268 }] }, 1).to({ state: [{ t: this.shape_269 }] }, 1).to({ state: [] }, 24).wait(63));

		// 图层 4
		this.shape_270 = new cjs.Shape();
		this.shape_270.graphics.f("#A84B4B").s().p("Ar0L1Qk6k5AAm8QAAm7E6k5QE5k5G7AAQG8AAE5E5QE5E5AAG7QAAG8k5E5Qk5E5m8AAQm7AAk5k5g");
		this.shape_270.setTransform(360.2, -353.4, 0.738, 0.738);

		this.shape_271 = new cjs.Shape();
		this.shape_271.graphics.f("#A94D4A").s().p("AovIwQjojoAAlIQAAlHDojoQDojoFHAAQFIAADoDoQDoDoAAFHQAAFIjoDoQjoDolIAAQlHAAjojog");
		this.shape_271.setTransform(359.6, -349.9);

		this.shape_272 = new cjs.Shape();
		this.shape_272.graphics.f("#AA4E49").s().p("AowIxQjojoAAlJQAAlIDojoQDojoFIAAQFJAADoDoQDoDoAAFIQAAFJjoDoQjoDolJAAQlIAAjojog");
		this.shape_272.setTransform(359, -346.3);

		this.shape_273 = new cjs.Shape();
		this.shape_273.graphics.f("#AB5049").s().p("AoxIyQjpjpABlJQgBlIDpjpQDpjoFIgBQFJABDpDoQDoDpABFIQgBFJjoDpQjpDolJAAQlIAAjpjog");
		this.shape_273.setTransform(358.5, -342.7);

		this.shape_274 = new cjs.Shape();
		this.shape_274.graphics.f("#AC5248").s().p("AoyIzQjpjpAAlKQAAlJDpjpQDpjpFJAAQFKAADpDpQDpDpAAFJQAAFKjpDpQjpDplKAAQlJAAjpjpg");
		this.shape_274.setTransform(357.9, -339.1);

		this.shape_275 = new cjs.Shape();
		this.shape_275.graphics.f("#AD5447").s().p("AozI0QjpjqAAlKQAAlJDpjqQDqjpFJAAQFKAADqDpQDpDqAAFJQAAFKjpDqQjqDplKAAQlJAAjqjpg");
		this.shape_275.setTransform(357.3, -335.5);

		this.shape_276 = new cjs.Shape();
		this.shape_276.graphics.f("#AE5546").s().p("Ao0I1QjpjqgBlLQABlKDpjqQDqjqFKAAQFLAADqDqQDqDqAAFKQAAFLjqDqQjqDplLABQlKgBjqjpg");
		this.shape_276.setTransform(356.7, -331.9);

		this.shape_277 = new cjs.Shape();
		this.shape_277.graphics.f("#AF5745").s().p("Ao1I1QjqjqAAlLQAAlLDqjqQDrjqFKAAQFLAADrDqQDqDqAAFLQAAFLjqDqQjrDrlLAAQlKAAjrjrg");
		this.shape_277.setTransform(356.1, -328.3);

		this.shape_278 = new cjs.Shape();
		this.shape_278.graphics.f("#B05945").s().p("Ao2I3QjqjrAAlMQAAlLDqjrQDrjqFLAAQFMAADrDqQDqDrAAFLQAAFMjqDrQjrDqlMAAQlLAAjrjqg");
		this.shape_278.setTransform(355.5, -324.8);

		this.shape_279 = new cjs.Shape();
		this.shape_279.graphics.f("#B15B44").s().p("Ao3I4QjqjsgBlMQABlMDqjqQDsjsFLAAQFNAADqDsQDsDqAAFMQAAFMjsDsQjqDqlNABQlLgBjsjqg");
		this.shape_279.setTransform(355, -321.2);

		this.shape_280 = new cjs.Shape();
		this.shape_280.graphics.f("#B25C43").s().p("Ao3I5QjsjsAAlNQAAlMDsjsQDrjrFMAAQFNAADsDrQDrDsAAFMQAAFNjrDsQjsDrlNAAQlMAAjrjrg");
		this.shape_280.setTransform(354.4, -317.6);

		this.shape_281 = new cjs.Shape();
		this.shape_281.graphics.f("#B35E42").s().p("Ao4I5QjsjrAAlOQAAlNDsjsQDrjrFNAAQFOAADsDrQDrDsAAFNQAAFOjrDrQjsDslOAAQlNAAjrjsg");
		this.shape_281.setTransform(353.8, -314);

		this.shape_282 = new cjs.Shape();
		this.shape_282.graphics.f("#B36041").s().p("Ao5I6QjtjsAAlOQAAlNDtjsQDsjtFNAAQFOAADsDtQDtDsAAFNQAAFOjtDsQjsDtlOAAQlNAAjsjtg");
		this.shape_282.setTransform(353.2, -310.4);

		this.shape_283 = new cjs.Shape();
		this.shape_283.graphics.f("#B46140").s().p("Ao6I7QjtjtAAlOQAAlODtjsQDtjtFNAAQFPAADtDtQDsDsAAFOQAAFOjsDtQjtDtlPAAQlNAAjtjtg");
		this.shape_283.setTransform(352.6, -306.8);

		this.shape_284 = new cjs.Shape();
		this.shape_284.graphics.f("#B56340").s().p("Ao7I8QjtjtAAlPQAAlODtjtQDtjtFOAAQFPAADtDtQDtDtAAFOQAAFPjtDtQjtDtlPAAQlOAAjtjtg");
		this.shape_284.setTransform(352, -303.3);

		this.shape_285 = new cjs.Shape();
		this.shape_285.graphics.f("#B6653F").s().p("Ao8I+QjujuAAlQQAAlPDujtQDtjuFPAAQFQAADtDuQDuDtAAFPQAAFQjuDuQjtDtlQAAQlPAAjtjtg");
		this.shape_285.setTransform(351.5, -299.7);

		this.shape_286 = new cjs.Shape();
		this.shape_286.graphics.f("#B7673E").s().p("Ao9I+QjujuAAlQQAAlPDujuQDtjuFQAAQFQAADvDuQDtDuAAFPQAAFQjtDuQjvDulQAAQlQAAjtjug");
		this.shape_286.setTransform(350.9, -296.1);

		this.shape_287 = new cjs.Shape();
		this.shape_287.graphics.f("#B8683D").s().p("Ao+JAQjujvAAlRQAAlQDujuQDujuFQAAQFRAADuDuQDuDuAAFQQAAFRjuDvQjuDulRgBQlQABjujug");
		this.shape_287.setTransform(350.3, -292.5);

		this.shape_288 = new cjs.Shape();
		this.shape_288.graphics.f("#B96A3C").s().p("Ao/JAQjujuAAlSQAAlQDujvQDujvFRAAQFSAADuDvQDuDvABFQQgBFSjuDuQjuDvlSAAQlRAAjujvg");
		this.shape_288.setTransform(349.7, -289);

		this.shape_289 = new cjs.Shape();
		this.shape_289.graphics.f("#BA6C3C").s().p("ApAJBQjvjvAAlSQAAlRDvjvQDvjvFRAAQFSAADvDvQDvDvAAFRQAAFSjvDvQjvDvlSAAQlRAAjvjvg");
		this.shape_289.setTransform(349.1, -285.4);

		this.shape_290 = new cjs.Shape();
		this.shape_290.graphics.f("#BB6E3B").s().p("ApBJCQjvjwAAlSQAAlSDvjvQDvjvFSAAQFTAADvDvQDvDvAAFSQAAFSjvDwQjvDwlTgBQlSABjvjwg");
		this.shape_290.setTransform(348.5, -281.8);

		this.shape_291 = new cjs.Shape();
		this.shape_291.graphics.f("#BC6F3A").s().p("ApCJDQjwjwAAlTQAAlSDwjwQDwjwFSAAQFTAADwDwQDwDwAAFSQAAFTjwDwQjwDwlTAAQlSAAjwjwg");
		this.shape_291.setTransform(347.9, -278.2);

		this.shape_292 = new cjs.Shape();
		this.shape_292.graphics.f("#BD7139").s().p("ApDJEQjwjwAAlUQAAlTDwjwQDxjwFSAAQFUAADwDwQDwDwAAFTQAAFUjwDwQjwDwlUAAQlSAAjxjwg");
		this.shape_292.setTransform(347.4, -274.6);

		this.shape_293 = new cjs.Shape();
		this.shape_293.graphics.f("#BE7338").s().p("ApEJFQjwjwAAlVQAAlTDwjxQDxjwFTAAQFUAADwDwQDxDxAAFTQAAFVjxDwQjwDxlUgBQlTABjxjxg");
		this.shape_293.setTransform(346.8, -271);

		this.shape_294 = new cjs.Shape();
		this.shape_294.graphics.f("#BF7538").s().p("ApFJGQjxjxAAlVQAAlUDxjxQDxjxFUAAQFVAADxDxQDxDxAAFUQAAFVjxDxQjxDxlVAAQlUAAjxjxg");
		this.shape_294.setTransform(346.2, -267.4);

		this.shape_295 = new cjs.Shape();
		this.shape_295.graphics.f("#C07637").s().p("ApGJHQjxjyAAlVQAAlUDxjyQDxjxFVAAQFVAADyDxQDxDyAAFUQAAFVjxDyQjyDxlVAAQlVAAjxjxg");
		this.shape_295.setTransform(345.6, -263.9);

		this.shape_296 = new cjs.Shape();
		this.shape_296.graphics.f("#C17836").s().p("ApHJIQjxjyAAlWQAAlVDxjyQDyjxFVAAQFWAADxDxQDyDyAAFVQAAFWjyDyQjxDylWgBQlVABjyjyg");
		this.shape_296.setTransform(345.1, -260.3);

		this.shape_297 = new cjs.Shape();
		this.shape_297.graphics.f("#C27A35").s().p("ApHJJQjzjzAAlWQAAlWDzjyQDyjyFVAAQFXAADyDyQDyDyAAFWQAAFWjyDzQjyDylXAAQlVAAjyjyg");
		this.shape_297.setTransform(344.5, -256.7);

		this.shape_298 = new cjs.Shape();
		this.shape_298.graphics.f("#C37B34").s().p("ApJJKQjyjzAAlXQAAlWDyjzQDzjyFWAAQFXAADzDyQDyDzAAFWQAAFXjyDzQjzDylXAAQlWAAjzjyg");
		this.shape_298.setTransform(343.9, -253.1);

		this.shape_299 = new cjs.Shape();
		this.shape_299.graphics.f("#C47D34").s().p("ApKJLQjzjzABlYQgBlWDzjzQDzjzFXAAQFYAADyDzQDzDzAAFWQAAFYjzDzQjyDylYABQlXgBjzjyg");
		this.shape_299.setTransform(343.3, -249.5);

		this.shape_300 = new cjs.Shape();
		this.shape_300.graphics.f("#C57F33").s().p("ApLJLQjzjzAAlYQAAlXDzj0QDzjzFYAAQFYAAD0DzQDzD0AAFXQAAFYjzDzQj0D0lYAAQlYAAjzj0g");
		this.shape_300.setTransform(342.7, -245.9);

		this.shape_301 = new cjs.Shape();
		this.shape_301.graphics.f("#C68132").s().p("ApMJNQjzj0AAlZQAAlYDzj0QD0jzFYAAQFZAADzDzQD0D0AAFYQAAFZj0D0QjzDzlZAAQlYAAj0jzg");
		this.shape_301.setTransform(342.1, -242.4);

		this.shape_302 = new cjs.Shape();
		this.shape_302.graphics.f("#C78231").s().p("ApMJNQj1j0AAlZQAAlYD1j1QD0j0FYAAQFZAAD1D0QD0D1AAFYQAAFZj0D0Qj1D1lZAAQlYAAj0j1g");
		this.shape_302.setTransform(341.5, -238.8);

		this.shape_303 = new cjs.Shape();
		this.shape_303.graphics.f("#C88430").s().p("ApOJPQj0j1AAlaQAAlZD0j0QD1j1FZAAQFaAAD0D1QD1D0AAFZQAAFaj1D1Qj0D0laAAQlZAAj1j0g");
		this.shape_303.setTransform(341, -235.2);

		this.shape_304 = new cjs.Shape();
		this.shape_304.graphics.f("#C8862F").s().p("ApOJPQj1j1AAlaQAAlZD1j1QD0j1FaAAQFaAAD1D1QD1D1AAFZQAAFaj1D1Qj1D1laAAQlaAAj0j1g");
		this.shape_304.setTransform(340.4, -231.6);

		this.shape_305 = new cjs.Shape();
		this.shape_305.graphics.f("#C9882F").s().p("ApPJQQj2j1AAlbQAAlaD2j2QD1j1FaAAQFbAAD1D1QD2D2AAFaQAAFbj2D1Qj1D2lbAAQlaAAj1j2g");
		this.shape_305.setTransform(339.8, -228);

		this.shape_306 = new cjs.Shape();
		this.shape_306.graphics.f("#CA892E").s().p("ApRJSQj1j3AAlbQAAlbD1j1QD3j2FaAAQFcAAD1D2QD2D1AAFbQAAFbj2D3Qj1D1lcAAQlaAAj3j1g");
		this.shape_306.setTransform(339.2, -224.4);

		this.shape_307 = new cjs.Shape();
		this.shape_307.graphics.f("#CB8B2D").s().p("ApRJSQj2j2AAlcQAAlbD2j2QD2j2FbAAQFcAAD2D2QD2D2AAFbQAAFcj2D2Qj2D2lcAAQlbAAj2j2g");
		this.shape_307.setTransform(338.6, -220.9);

		this.shape_308 = new cjs.Shape();
		this.shape_308.graphics.f("#CC8D2C").s().p("ApSJTQj3j3AAlcQAAlcD3j2QD2j3FcAAQFdAAD2D3QD3D2AAFcQAAFcj3D3Qj2D3ldAAQlcAAj2j3g");
		this.shape_308.setTransform(338, -217.3);

		this.shape_309 = new cjs.Shape();
		this.shape_309.graphics.f("#CD8E2B").s().p("ApTJUQj3j3AAldQAAlcD3j3QD3j3FcAAQFdAAD3D3QD3D3AAFcQAAFdj3D3Qj3D3ldAAQlcAAj3j3g");
		this.shape_309.setTransform(337.5, -213.7);

		this.shape_310 = new cjs.Shape();
		this.shape_310.graphics.f("#CE902B").s().p("ApUJVQj3j3AAleQAAldD3j3QD3j3FdAAQFeAAD3D3QD3D3AAFdQAAFej3D3Qj3D3leAAQldAAj3j3g");
		this.shape_310.setTransform(336.9, -210.1);

		this.shape_311 = new cjs.Shape();
		this.shape_311.graphics.f("#CF922A").s().p("ApVJWQj4j4AAleQAAldD4j4QD4j4FdAAQFeAAD4D4QD4D4AAFdQAAFej4D4Qj4D4leAAQldAAj4j4g");
		this.shape_311.setTransform(336.3, -206.5);

		this.shape_312 = new cjs.Shape();
		this.shape_312.graphics.f("#D09429").s().p("ApWJXQj4j4AAlfQAAleD4j4QD4j4FeAAQFfAAD4D4QD4D4AAFeQAAFfj4D4Qj4D4lfAAQleAAj4j4g");
		this.shape_312.setTransform(335.7, -202.9);

		this.shape_313 = new cjs.Shape();
		this.shape_313.graphics.f("#D19528").s().p("ApXJYQj4j5AAlfQAAleD4j5QD4j4FfAAQFfAAD5D4QD4D5AAFeQAAFfj4D5Qj5D4lfAAQlfAAj4j4g");
		this.shape_313.setTransform(335.1, -199.4);

		this.shape_314 = new cjs.Shape();
		this.shape_314.graphics.f("#D29727").s().p("ApYJZQj5j5AAlgQAAlfD5j5QD5j5FfAAQFgAAD5D5QD5D5AAFfQAAFgj5D5Qj5D5lgAAQlfAAj5j5g");
		this.shape_314.setTransform(334.5, -195.8);

		this.shape_315 = new cjs.Shape();
		this.shape_315.graphics.f("#D39927").s().p("ApZJaQj5j5AAlhQAAlfD5j6QD5j5FgAAQFhAAD5D5QD5D6AAFfQAAFhj5D5Qj5D5lhAAQlgAAj5j5g");
		this.shape_315.setTransform(334, -192.2);

		this.shape_316 = new cjs.Shape();
		this.shape_316.graphics.f("#D49B26").s().p("ApaJbQj5j6AAlhQAAlgD5j6QD6j6FgAAQFhAAD6D6QD5D6AAFgQAAFhj5D6Qj6D6lhAAQlgAAj6j6g");
		this.shape_316.setTransform(333.4, -188.6);

		this.shape_317 = new cjs.Shape();
		this.shape_317.graphics.f("#D59C25").s().p("ApbJcQj6j7AAlhQAAlhD6j6QD6j6FhAAQFiAAD6D6QD6D6AAFhQAAFhj6D7Qj6D6liAAQlhAAj6j6g");
		this.shape_317.setTransform(332.8, -185);

		this.shape_318 = new cjs.Shape();
		this.shape_318.graphics.f("#D69E24").s().p("ApcJdQj6j7AAliQAAlhD6j7QD6j6FiAAQFiAAD7D6QD6D7AAFhQAAFij6D7Qj7D6liAAQliAAj6j6g");
		this.shape_318.setTransform(332.2, -181.5);

		this.shape_319 = new cjs.Shape();
		this.shape_319.graphics.f("#D7A023").s().p("ApcJeQj8j7ABljQgBliD8j7QD6j7FiAAQFjAAD7D7QD6D7AAFiQAAFjj6D7Qj7D7ljAAQliAAj6j7g");
		this.shape_319.setTransform(331.6, -177.9);

		this.shape_320 = new cjs.Shape();
		this.shape_320.graphics.f("#D8A223").s().p("ApeJfQj7j7AAlkQAAliD7j8QD8j7FiAAQFjAAD8D7QD7D8AAFiQAAFkj7D7Qj8D7ljAAQliAAj8j7g");
		this.shape_320.setTransform(331, -174.3);

		this.shape_321 = new cjs.Shape();
		this.shape_321.graphics.f("#D9A322").s().p("ApeJgQj8j8AAlkQAAljD8j8QD7j7FjAAQFkAAD8D7QD7D8AAFjQAAFkj7D8Qj8D7lkAAQljAAj7j7g");
		this.shape_321.setTransform(330.5, -170.7);

		this.shape_322 = new cjs.Shape();
		this.shape_322.graphics.f("#DAA521").s().p("ApfJhQj9j9ABlkQgBljD9j9QD8j8FkAAQFjAAD8D8QD9D9gBFjQABFkj9D9Qj8D8ljAAQlkAAj8j8g");
		this.shape_322.setTransform(329.9, -167.1);

		this.shape_323 = new cjs.Shape();
		this.shape_323.graphics.f("#DBA720").s().p("ApgJhQj9j8AAllQAAlkD9j8QD8j9FkAAQFlAAD9D9QD8D8AAFkQAAFlj8D8Qj9D9llAAQlkAAj8j9g");
		this.shape_323.setTransform(329.3, -163.5);

		this.shape_324 = new cjs.Shape();
		this.shape_324.graphics.f("#DCA81F").s().p("AphJjQj9j9AAlmQAAlkD9j9QD9j9FkAAQFmAAD9D9QD8D9AAFkQAAFmj8D9Qj9D8lmAAQlkAAj9j8g");
		this.shape_324.setTransform(328.7, -160);

		this.shape_325 = new cjs.Shape();
		this.shape_325.graphics.f("#DDAA1F").s().p("ApjJkQj9j+AAlmQAAllD9j+QD+j9FlAAQFnAAD8D9QD+D+gBFlQABFmj+D+Qj8D9lnAAQllAAj+j9g");
		this.shape_325.setTransform(328.1, -156.4);

		this.shape_326 = new cjs.Shape();
		this.shape_326.graphics.f("#DDAC1E").s().p("ApjJlQj+j+AAlnQAAlmD+j9QD9j+FmAAQFnAAD9D+QD+D9AAFmQAAFnj+D+Qj9D9lnAAQlmAAj9j9g");
		this.shape_326.setTransform(327.5, -152.8);

		this.shape_327 = new cjs.Shape();
		this.shape_327.graphics.f("#DEAE1D").s().p("AplJmQj9j/AAlnQAAlmD9j+QD+j+FnAAQFnAAD+D+QD+D+AAFmQAAFnj+D/Qj+D9lnAAQlnAAj+j9g");
		this.shape_327.setTransform(327, -149.2);

		this.shape_328 = new cjs.Shape();
		this.shape_328.graphics.f("#DFAF1C").s().p("AplJmQj/j+AAloQAAlnD/j+QD+j/FoAAQFnAAD/D/QD+D+gBFnQABFoj+D+Qj/D/lnAAQloAAj+j/g");
		this.shape_328.setTransform(326.4, -145.6);

		this.shape_329 = new cjs.Shape();
		this.shape_329.graphics.f("#E0B11B").s().p("ApmJoQj/kAAAloQAAlnD/j/QD/j/FnAAQFpAAD+D/QD/D/AAFnQAAFoj/EAQj+D+lpAAQlnAAj/j+g");
		this.shape_329.setTransform(325.8, -142);

		this.shape_330 = new cjs.Shape();
		this.shape_330.graphics.f("#E1B31A").s().p("ApnJoQj/j/AAlpQAAloD/j/QD/kAFoAAQFpAAD/EAQD/D/AAFoQAAFpj/D/Qj/D/lpAAQloAAj/j/g");
		this.shape_330.setTransform(325.2, -138.4);

		this.shape_331 = new cjs.Shape();
		this.shape_331.graphics.f("#E2B51A").s().p("ApoJpQkAkAAAlpQAAloEAkAQD/kAFpAAQFpAAEAEAQD/EAAAFoQAAFpj/EAQkAEAlpAAQlpAAj/kAg");
		this.shape_331.setTransform(324.6, -134.9);

		this.shape_332 = new cjs.Shape();
		this.shape_332.graphics.f("#E3B619").s().p("AppJqQkAkAAAlqQAAlpEAkAQEAkAFpAAQFqAAEAEAQEAEAAAFpQAAFqkAEAQkAEAlqAAQlpAAkAkAg");
		this.shape_332.setTransform(324, -131.3);

		this.shape_333 = new cjs.Shape();
		this.shape_333.graphics.f("#E4B818").s().p("ApqJrQkAkAAAlrQAAlqEAkAQEAkBFqAAQFrAAEAEBQEAEAAAFqQAAFrkAEAQkAEBlrAAQlqAAkAkBg");
		this.shape_333.setTransform(323.4, -127.7);

		this.shape_334 = new cjs.Shape();
		this.shape_334.graphics.f("#E5BA17").s().p("AprJsQkBkBAAlrQAAlqEBkBQEBkBFrAAQFrAAEAEBQEAEBAAFqQAAFrkAEBQkAEBlrAAQlrAAkBkBg");
		this.shape_334.setTransform(322.9, -124.1);

		this.shape_335 = new cjs.Shape();
		this.shape_335.graphics.f("#E6BB16").s().p("ApsJtQkBkCAAlrQAAlqEBkCQEBkBFrAAQFsAAEBEBQEBECAAFqQAAFrkBECQkBEBlsAAQlrAAkBkBg");
		this.shape_335.setTransform(322.3, -120.5);

		this.shape_336 = new cjs.Shape();
		this.shape_336.graphics.f("#E7BD16").s().p("AptJuQkBkCAAlsQAAlrEBkCQECkCFrAAQFtAAEBECQEBECAAFrQAAFskBECQkBECltAAQlrAAkCkCg");
		this.shape_336.setTransform(321.7, -116.9);

		this.shape_337 = new cjs.Shape();
		this.shape_337.graphics.f("#E8BF15").s().p("ApuJvQkCkCAAltQAAlsECkCQECkCFsAAQFtAAECECQECECAAFsQAAFtkCECQkCECltAAQlsAAkCkCg");
		this.shape_337.setTransform(321.1, -113.4);

		this.shape_338 = new cjs.Shape();
		this.shape_338.graphics.f("#E9C114").s().p("ApvJwQkCkDAAltQAAlsECkDQECkCFtAAQFtAAECECQEDEDAAFsQAAFtkDEDQkCECltAAQltAAkCkCg");
		this.shape_338.setTransform(320.6, -109.8);

		this.shape_339 = new cjs.Shape();
		this.shape_339.graphics.f("#EAC213").s().p("ApwJxQkDkDAAluQAAltEDkDQEDkDFtAAQFuAAEDEDQEDEDAAFtQAAFukDEDQkDEDluAAQltAAkDkDg");
		this.shape_339.setTransform(320, -106.2);

		this.shape_340 = new cjs.Shape();
		this.shape_340.graphics.f("#EBC412").s().p("ApxJyQkDkEAAluQAAltEDkEQEDkDFuAAQFuAAEEEDQEDEEAAFtQAAFukDEEQkEEDluAAQluAAkDkDg");
		this.shape_340.setTransform(319.4, -102.6);

		this.shape_341 = new cjs.Shape();
		this.shape_341.graphics.f("#ECC612").s().p("ApyJzQkDkEAAlvQAAluEDkEQEEkDFuAAQFvAAEEEDQEDEEAAFuQAAFvkDEEQkEEDlvAAQluAAkEkDg");
		this.shape_341.setTransform(318.8, -99);

		this.shape_342 = new cjs.Shape();
		this.shape_342.graphics.f("#EDC811").s().p("ApzJ0QkEkFAAlvQAAlvEEkEQEEkEFvAAQFwAAEEEEQEEEEAAFvQAAFvkEEFQkEEElwAAQlvAAkEkEg");
		this.shape_342.setTransform(318.2, -95.4);

		this.shape_343 = new cjs.Shape();
		this.shape_343.graphics.f("#EEC910").s().p("Ap0J1QkEkFAAlwQAAlvEEkFQEFkEFvAAQFwAAEEEEQEFEFAAFvQAAFwkFEFQkEEElwAAQlvAAkFkEg");
		this.shape_343.setTransform(317.6, -91.9);

		this.shape_344 = new cjs.Shape();
		this.shape_344.graphics.f("#EFCB0F").s().p("Ap0J1QkFkFAAlwQAAlwEFkFQEEkEFwAAQFxAAEEEEQEFEFAAFwQAAFwkFEFQkEEFlxAAQlwAAkEkFg");
		this.shape_344.setTransform(317, -88.3);

		this.shape_345 = new cjs.Shape();
		this.shape_345.graphics.f("#F0CD0E").s().p("Ap1J3QkGkGABlxQgBlwEGkGQEFkFFwAAQFxAAEGEFQEFEGAAFwQAAFxkFEGQkGEFlxAAQlwAAkFkFg");
		this.shape_345.setTransform(316.5, -84.7);

		this.shape_346 = new cjs.Shape();
		this.shape_346.graphics.f("#F1CF0E").s().p("Ap3J4QkFkGAAlyQAAlxEFkFQEGkGFxAAQFyAAEFEGQEGEFAAFxQAAFykGEGQkFEFlyAAQlxAAkGkFg");
		this.shape_346.setTransform(315.9, -81.1);

		this.shape_347 = new cjs.Shape();
		this.shape_347.graphics.f("#F2D00D").s().p("Ap3J4QkGkFAAlzQAAlxEGkGQEFkHFyAAQFzAAEFEHQEGEGAAFxQAAFzkGEFQkFEHlzgBQlyABkFkHg");
		this.shape_347.setTransform(315.3, -77.5);

		this.shape_348 = new cjs.Shape();
		this.shape_348.graphics.f("#F2D20C").s().p("Ap4J6QkHkHABlzQgBlyEHkGQEGkHFyAAQFzAAEGEHQEGEGABFyQgBFzkGEHQkGEGlzAAQlyAAkGkGg");
		this.shape_348.setTransform(314.7, -74);

		this.shape_349 = new cjs.Shape();
		this.shape_349.graphics.f("#F3D40B").s().p("Ap5J7QkHkIAAlzQAAlzEHkGQEGkHFzAAQF0AAEGEHQEHEGAAFzQAAFzkHEIQkGEGl0AAQlzAAkGkGg");
		this.shape_349.setTransform(314.1, -70.4);

		this.shape_350 = new cjs.Shape();
		this.shape_350.graphics.f("#F4D50A").s().p("Ap6J8QkHkIAAl0QAAlzEHkHQEHkIFzAAQF0AAEHEIQEHEHAAFzQAAF0kHEIQkHEGl0AAQlzAAkHkGg");
		this.shape_350.setTransform(313.5, -66.8);

		this.shape_351 = new cjs.Shape();
		this.shape_351.graphics.f("#F5D709").s().p("Ap7J8QkIkHABl1QgBlzEIkIQEHkIF0AAQF0AAEIEIQEHEIABFzQgBF1kHEHQkIEIl0AAQl0AAkHkIg");
		this.shape_351.setTransform(313, -63.2);

		this.shape_352 = new cjs.Shape();
		this.shape_352.graphics.f("#F6D909").s().p("Ap8J+QkIkIAAl2QAAl0EIkIQEIkIF0AAQF1AAEIEIQEIEIAAF0QAAF2kIEIQkIEHl1AAQl0AAkIkHg");
		this.shape_352.setTransform(312.4, -59.6);

		this.shape_353 = new cjs.Shape();
		this.shape_353.graphics.f("#F7DB08").s().p("Ap9J/QkIkJAAl2QAAl0EIkJQEIkJF1AAQF2AAEIEJQEIEJAAF0QAAF2kIEJQkIEHl2ABQl1gBkIkHg");
		this.shape_353.setTransform(311.8, -56);

		this.shape_354 = new cjs.Shape();
		this.shape_354.graphics.f("#F8DC07").s().p("Ap+J/QkJkJABl2QgBl1EJkJQEIkJF2AAQF2AAEJEJQEIEJABF1QgBF2kIEJQkJEJl2AAQl2AAkIkJg");
		this.shape_354.setTransform(311.2, -52.5);

		this.shape_355 = new cjs.Shape();
		this.shape_355.graphics.f("#F9DE06").s().p("Ap/KAQkJkJAAl3QAAl2EJkJQEJkJF3AAQF2AAEJEJQEJEJAAF2QAAF3kJEJQkJEJl2AAQl3AAkJkJg");
		this.shape_355.setTransform(310.6, -48.9);

		this.shape_356 = new cjs.Shape();
		this.shape_356.graphics.f("#FAE005").s().p("AqAKBQkJkKAAl3QAAl2EJkKQEJkJF3gBQF4ABEJEJQEJEKAAF2QAAF3kJEKQkJEKl4AAQl3AAkJkKg");
		this.shape_356.setTransform(310, -45.3);

		this.shape_357 = new cjs.Shape();
		this.shape_357.graphics.f("#FBE205").s().p("AqBKCQkKkKAAl4QAAl3EKkKQEKkKF3AAQF4AAEKEKQEJEKABF3QgBF4kJEKQkKEKl4AAQl3AAkKkKg");
		this.shape_357.setTransform(309.5, -41.7);

		this.shape_358 = new cjs.Shape();
		this.shape_358.graphics.f("#FCE304").s().p("AqBKDQkLkLAAl4QAAl4ELkKQEJkKF4AAQF5AAEKEKQEKEKAAF4QAAF4kKELQkKEKl5AAQl4AAkJkKg");
		this.shape_358.setTransform(308.9, -38.1);

		this.shape_359 = new cjs.Shape();
		this.shape_359.graphics.f("#FDE503").s().p("Ar0L1Qk6k5AAm8QAAm7E6k5QE5k5G7AAQG8AAE5E5QE5E5AAG7QAAG8k5E5Qk5E5m8AAQm7AAk5k5g");
		this.shape_359.setTransform(308.3, -34.5, 0.851, 0.851);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_270 }] }).to({ state: [{ t: this.shape_271 }] }, 1).to({ state: [{ t: this.shape_272 }] }, 1).to({ state: [{ t: this.shape_273 }] }, 1).to({ state: [{ t: this.shape_274 }] }, 1).to({ state: [{ t: this.shape_275 }] }, 1).to({ state: [{ t: this.shape_276 }] }, 1).to({ state: [{ t: this.shape_277 }] }, 1).to({ state: [{ t: this.shape_278 }] }, 1).to({ state: [{ t: this.shape_279 }] }, 1).to({ state: [{ t: this.shape_280 }] }, 1).to({ state: [{ t: this.shape_281 }] }, 1).to({ state: [{ t: this.shape_282 }] }, 1).to({ state: [{ t: this.shape_283 }] }, 1).to({ state: [{ t: this.shape_284 }] }, 1).to({ state: [{ t: this.shape_285 }] }, 1).to({ state: [{ t: this.shape_286 }] }, 1).to({ state: [{ t: this.shape_287 }] }, 1).to({ state: [{ t: this.shape_288 }] }, 1).to({ state: [{ t: this.shape_289 }] }, 1).to({ state: [{ t: this.shape_290 }] }, 1).to({ state: [{ t: this.shape_291 }] }, 1).to({ state: [{ t: this.shape_292 }] }, 1).to({ state: [{ t: this.shape_293 }] }, 1).to({ state: [{ t: this.shape_294 }] }, 1).to({ state: [{ t: this.shape_295 }] }, 1).to({ state: [{ t: this.shape_296 }] }, 1).to({ state: [{ t: this.shape_297 }] }, 1).to({ state: [{ t: this.shape_298 }] }, 1).to({ state: [{ t: this.shape_299 }] }, 1).to({ state: [{ t: this.shape_300 }] }, 1).to({ state: [{ t: this.shape_301 }] }, 1).to({ state: [{ t: this.shape_302 }] }, 1).to({ state: [{ t: this.shape_303 }] }, 1).to({ state: [{ t: this.shape_304 }] }, 1).to({ state: [{ t: this.shape_305 }] }, 1).to({ state: [{ t: this.shape_306 }] }, 1).to({ state: [{ t: this.shape_307 }] }, 1).to({ state: [{ t: this.shape_308 }] }, 1).to({ state: [{ t: this.shape_309 }] }, 1).to({ state: [{ t: this.shape_310 }] }, 1).to({ state: [{ t: this.shape_311 }] }, 1).to({ state: [{ t: this.shape_312 }] }, 1).to({ state: [{ t: this.shape_313 }] }, 1).to({ state: [{ t: this.shape_314 }] }, 1).to({ state: [{ t: this.shape_315 }] }, 1).to({ state: [{ t: this.shape_316 }] }, 1).to({ state: [{ t: this.shape_317 }] }, 1).to({ state: [{ t: this.shape_318 }] }, 1).to({ state: [{ t: this.shape_319 }] }, 1).to({ state: [{ t: this.shape_320 }] }, 1).to({ state: [{ t: this.shape_321 }] }, 1).to({ state: [{ t: this.shape_322 }] }, 1).to({ state: [{ t: this.shape_323 }] }, 1).to({ state: [{ t: this.shape_324 }] }, 1).to({ state: [{ t: this.shape_325 }] }, 1).to({ state: [{ t: this.shape_326 }] }, 1).to({ state: [{ t: this.shape_327 }] }, 1).to({ state: [{ t: this.shape_328 }] }, 1).to({ state: [{ t: this.shape_329 }] }, 1).to({ state: [{ t: this.shape_330 }] }, 1).to({ state: [{ t: this.shape_331 }] }, 1).to({ state: [{ t: this.shape_332 }] }, 1).to({ state: [{ t: this.shape_333 }] }, 1).to({ state: [{ t: this.shape_334 }] }, 1).to({ state: [{ t: this.shape_335 }] }, 1).to({ state: [{ t: this.shape_336 }] }, 1).to({ state: [{ t: this.shape_337 }] }, 1).to({ state: [{ t: this.shape_338 }] }, 1).to({ state: [{ t: this.shape_339 }] }, 1).to({ state: [{ t: this.shape_340 }] }, 1).to({ state: [{ t: this.shape_341 }] }, 1).to({ state: [{ t: this.shape_342 }] }, 1).to({ state: [{ t: this.shape_343 }] }, 1).to({ state: [{ t: this.shape_344 }] }, 1).to({ state: [{ t: this.shape_345 }] }, 1).to({ state: [{ t: this.shape_346 }] }, 1).to({ state: [{ t: this.shape_347 }] }, 1).to({ state: [{ t: this.shape_348 }] }, 1).to({ state: [{ t: this.shape_349 }] }, 1).to({ state: [{ t: this.shape_350 }] }, 1).to({ state: [{ t: this.shape_351 }] }, 1).to({ state: [{ t: this.shape_352 }] }, 1).to({ state: [{ t: this.shape_353 }] }, 1).to({ state: [{ t: this.shape_354 }] }, 1).to({ state: [{ t: this.shape_355 }] }, 1).to({ state: [{ t: this.shape_356 }] }, 1).to({ state: [{ t: this.shape_357 }] }, 1).to({ state: [{ t: this.shape_358 }] }, 1).to({ state: [{ t: this.shape_359 }] }, 1).to({ state: [] }, 24).wait(63));

		// 图层 1
		this.shape_360 = new cjs.Shape();
		this.shape_360.graphics.f("#EAEEEE").s().p("EhluBE7MAAAiJ1MDLeAAAMAAACJ1g");
		this.shape_360.setTransform(47.2, -341.5, 1, 1.613);

		this.shape_361 = new cjs.Shape();
		this.shape_361.graphics.f("#EAEDEB").s().p("EhlvBvDMAAAjeFMDLeAAAMAAADeFg");
		this.shape_361.setTransform(47.2, -340.5);

		this.shape_362 = new cjs.Shape();
		this.shape_362.graphics.f("#E9ECE9").s().p("EhlvBu5MAAAjdxMDLeAAAMAAADdxg");
		this.shape_362.setTransform(47.2, -339.5);

		this.shape_363 = new cjs.Shape();
		this.shape_363.graphics.f("#E9EBE6").s().p("EhlvBuvMAAAjddMDLeAAAMAAADddg");
		this.shape_363.setTransform(47.2, -338.6);

		this.shape_364 = new cjs.Shape();
		this.shape_364.graphics.f("#E8EAE3").s().p("EhlvBumMAAAjdLMDLeAAAMAAADdLg");
		this.shape_364.setTransform(47.2, -337.6);

		this.shape_365 = new cjs.Shape();
		this.shape_365.graphics.f("#E8E9E1").s().p("EhlvBucMAAAjc3MDLeAAAMAAADc3g");
		this.shape_365.setTransform(47.2, -336.6);

		this.shape_366 = new cjs.Shape();
		this.shape_366.graphics.f("#E7E8DE").s().p("EhlvBuSMAAAjcjMDLeAAAMAAADcjg");
		this.shape_366.setTransform(47.2, -335.6);

		this.shape_367 = new cjs.Shape();
		this.shape_367.graphics.f("#E7E6DB").s().p("EhlvBuIMAAAjcPMDLeAAAMAAADcPg");
		this.shape_367.setTransform(47.2, -334.6);

		this.shape_368 = new cjs.Shape();
		this.shape_368.graphics.f("#E6E5D9").s().p("EhlvBt+MAAAjb7MDLeAAAMAAADb7g");
		this.shape_368.setTransform(47.2, -333.7);

		this.shape_369 = new cjs.Shape();
		this.shape_369.graphics.f("#E6E4D6").s().p("EhlvBt0MAAAjbnMDLeAAAMAAADbng");
		this.shape_369.setTransform(47.2, -332.7);

		this.shape_370 = new cjs.Shape();
		this.shape_370.graphics.f("#E6E3D3").s().p("EhlvBtrMAAAjbVMDLeAAAMAAADbVg");
		this.shape_370.setTransform(47.2, -331.7);

		this.shape_371 = new cjs.Shape();
		this.shape_371.graphics.f("#E5E2D1").s().p("EhlvBthMAAAjbBMDLeAAAMAAADbBg");
		this.shape_371.setTransform(47.2, -330.7);

		this.shape_372 = new cjs.Shape();
		this.shape_372.graphics.f("#E5E1CE").s().p("EhlvBtXMAAAjatMDLeAAAMAAADatg");
		this.shape_372.setTransform(47.2, -329.7);

		this.shape_373 = new cjs.Shape();
		this.shape_373.graphics.f("#E4E0CB").s().p("EhlvBtNMAAAjaZMDLeAAAMAAADaZg");
		this.shape_373.setTransform(47.2, -328.7);

		this.shape_374 = new cjs.Shape();
		this.shape_374.graphics.f("#E4DFC9").s().p("EhlvBtDMAAAjaFMDLeAAAMAAADaFg");
		this.shape_374.setTransform(47.2, -327.8);

		this.shape_375 = new cjs.Shape();
		this.shape_375.graphics.f("#E3DEC6").s().p("EhlvBs5MAAAjZxMDLeAAAMAAADZxg");
		this.shape_375.setTransform(47.2, -326.8);

		this.shape_376 = new cjs.Shape();
		this.shape_376.graphics.f("#E3DDC3").s().p("EhlvBswMAAAjZfMDLeAAAMAAADZfg");
		this.shape_376.setTransform(47.2, -325.8);

		this.shape_377 = new cjs.Shape();
		this.shape_377.graphics.f("#E3DCC1").s().p("EhlvBsmMAAAjZLMDLeAAAMAAADZLg");
		this.shape_377.setTransform(47.2, -324.8);

		this.shape_378 = new cjs.Shape();
		this.shape_378.graphics.f("#E2DBBE").s().p("EhlvBscMAAAjY3MDLeAAAMAAADY3g");
		this.shape_378.setTransform(47.2, -323.8);

		this.shape_379 = new cjs.Shape();
		this.shape_379.graphics.f("#E2DABB").s().p("EhlvBsSMAAAjYjMDLeAAAMAAADYjg");
		this.shape_379.setTransform(47.2, -322.8);

		this.shape_380 = new cjs.Shape();
		this.shape_380.graphics.f("#E1D8B9").s().p("EhlvBsIMAAAjYPMDLeAAAMAAADYPg");
		this.shape_380.setTransform(47.2, -321.9);

		this.shape_381 = new cjs.Shape();
		this.shape_381.graphics.f("#E1D7B6").s().p("EhlvBr/MAAAjX9MDLeAAAMAAADX9g");
		this.shape_381.setTransform(47.2, -320.9);

		this.shape_382 = new cjs.Shape();
		this.shape_382.graphics.f("#E0D6B3").s().p("EhlvBr1MAAAjXpMDLeAAAMAAADXpg");
		this.shape_382.setTransform(47.2, -319.9);

		this.shape_383 = new cjs.Shape();
		this.shape_383.graphics.f("#E0D5B0").s().p("EhlvBrrMAAAjXVMDLeAAAMAAADXVg");
		this.shape_383.setTransform(47.2, -318.9);

		this.shape_384 = new cjs.Shape();
		this.shape_384.graphics.f("#DFD4AE").s().p("EhlvBrhMAAAjXBMDLeAAAMAAADXBg");
		this.shape_384.setTransform(47.2, -317.9);

		this.shape_385 = new cjs.Shape();
		this.shape_385.graphics.f("#DFD3AB").s().p("EhlvBrXMAAAjWtMDLeAAAMAAADWtg");
		this.shape_385.setTransform(47.2, -316.9);

		this.shape_386 = new cjs.Shape();
		this.shape_386.graphics.f("#DFD2A8").s().p("EhlvBrNMAAAjWZMDLeAAAMAAADWZg");
		this.shape_386.setTransform(47.2, -316);

		this.shape_387 = new cjs.Shape();
		this.shape_387.graphics.f("#DED1A6").s().p("EhlvBrEMAAAjWHMDLeAAAMAAADWHg");
		this.shape_387.setTransform(47.2, -315);

		this.shape_388 = new cjs.Shape();
		this.shape_388.graphics.f("#DED0A3").s().p("EhlvBq6MAAAjVzMDLeAAAMAAADVzg");
		this.shape_388.setTransform(47.2, -314);

		this.shape_389 = new cjs.Shape();
		this.shape_389.graphics.f("#DDCFA0").s().p("EhlvBqwMAAAjVfMDLeAAAMAAADVfg");
		this.shape_389.setTransform(47.2, -313);

		this.shape_390 = new cjs.Shape();
		this.shape_390.graphics.f("#DDCE9E").s().p("EhlvBqmMAAAjVLMDLeAAAMAAADVLg");
		this.shape_390.setTransform(47.2, -312);

		this.shape_391 = new cjs.Shape();
		this.shape_391.graphics.f("#DCCD9B").s().p("EhlvBqcMAAAjU3MDLeAAAMAAADU3g");
		this.shape_391.setTransform(47.2, -311.1);

		this.shape_392 = new cjs.Shape();
		this.shape_392.graphics.f("#DCCB98").s().p("EhlvBqSMAAAjUjMDLeAAAMAAADUjg");
		this.shape_392.setTransform(47.2, -310.1);

		this.shape_393 = new cjs.Shape();
		this.shape_393.graphics.f("#DCCA96").s().p("EhlvBqJMAAAjURMDLeAAAMAAADURg");
		this.shape_393.setTransform(47.2, -309.1);

		this.shape_394 = new cjs.Shape();
		this.shape_394.graphics.f("#DBC993").s().p("EhlvBp/MAAAjT9MDLeAAAMAAADT9g");
		this.shape_394.setTransform(47.2, -308.1);

		this.shape_395 = new cjs.Shape();
		this.shape_395.graphics.f("#DBC890").s().p("EhlvBp1MAAAjTpMDLeAAAMAAADTpg");
		this.shape_395.setTransform(47.2, -307.1);

		this.shape_396 = new cjs.Shape();
		this.shape_396.graphics.f("#DAC78E").s().p("EhlvBprMAAAjTVMDLeAAAMAAADTVg");
		this.shape_396.setTransform(47.2, -306.1);

		this.shape_397 = new cjs.Shape();
		this.shape_397.graphics.f("#DAC68B").s().p("EhlvBphMAAAjTBMDLeAAAMAAADTBg");
		this.shape_397.setTransform(47.2, -305.2);

		this.shape_398 = new cjs.Shape();
		this.shape_398.graphics.f("#D9C588").s().p("EhlvBpXMAAAjStMDLeAAAMAAADStg");
		this.shape_398.setTransform(47.2, -304.2);

		this.shape_399 = new cjs.Shape();
		this.shape_399.graphics.f("#D9C486").s().p("EhlvBpOMAAAjSbMDLeAAAMAAADSbg");
		this.shape_399.setTransform(47.2, -303.2);

		this.shape_400 = new cjs.Shape();
		this.shape_400.graphics.f("#D8C383").s().p("EhlvBpEMAAAjSHMDLeAAAMAAADSHg");
		this.shape_400.setTransform(47.2, -302.2);

		this.shape_401 = new cjs.Shape();
		this.shape_401.graphics.f("#D8C280").s().p("EhlvBo6MAAAjRzMDLeAAAMAAADRzg");
		this.shape_401.setTransform(47.2, -301.2);

		this.shape_402 = new cjs.Shape();
		this.shape_402.graphics.f("#D8C17E").s().p("EhlvBowMAAAjRfMDLeAAAMAAADRfg");
		this.shape_402.setTransform(47.2, -300.2);

		this.shape_403 = new cjs.Shape();
		this.shape_403.graphics.f("#D7C07B").s().p("EhlvBomMAAAjRLMDLeAAAMAAADRLg");
		this.shape_403.setTransform(47.2, -299.3);

		this.shape_404 = new cjs.Shape();
		this.shape_404.graphics.f("#D7BF78").s().p("EhlvBodMAAAjQ5MDLeAAAMAAADQ5g");
		this.shape_404.setTransform(47.2, -298.3);

		this.shape_405 = new cjs.Shape();
		this.shape_405.graphics.f("#D6BD76").s().p("EhlvBoTMAAAjQkMDLeAAAMAAADQkg");
		this.shape_405.setTransform(47.2, -297.3);

		this.shape_406 = new cjs.Shape();
		this.shape_406.graphics.f("#D6BC73").s().p("EhlvBoJMAAAjQRMDLeAAAMAAADQRg");
		this.shape_406.setTransform(47.2, -296.3);

		this.shape_407 = new cjs.Shape();
		this.shape_407.graphics.f("#D5BB70").s().p("EhlvBn/MAAAjP9MDLeAAAMAAADP9g");
		this.shape_407.setTransform(47.2, -295.3);

		this.shape_408 = new cjs.Shape();
		this.shape_408.graphics.f("#D5BA6E").s().p("EhlvBn1MAAAjPpMDLeAAAMAAADPpg");
		this.shape_408.setTransform(47.2, -294.3);

		this.shape_409 = new cjs.Shape();
		this.shape_409.graphics.f("#D5B96B").s().p("EhlvBnrMAAAjPVMDLeAAAMAAADPVg");
		this.shape_409.setTransform(47.2, -293.4);

		this.shape_410 = new cjs.Shape();
		this.shape_410.graphics.f("#D4B868").s().p("EhlvBniMAAAjPDMDLeAAAMAAADPDg");
		this.shape_410.setTransform(47.2, -292.4);

		this.shape_411 = new cjs.Shape();
		this.shape_411.graphics.f("#D4B766").s().p("EhlvBnYMAAAjOvMDLeAAAMAAADOvg");
		this.shape_411.setTransform(47.2, -291.4);

		this.shape_412 = new cjs.Shape();
		this.shape_412.graphics.f("#D3B663").s().p("EhlvBnOMAAAjObMDLeAAAMAAADObg");
		this.shape_412.setTransform(47.2, -290.4);

		this.shape_413 = new cjs.Shape();
		this.shape_413.graphics.f("#D3B560").s().p("EhlvBnEMAAAjOHMDLeAAAMAAADOHg");
		this.shape_413.setTransform(47.2, -289.4);

		this.shape_414 = new cjs.Shape();
		this.shape_414.graphics.f("#D2B45E").s().p("EhlvBm6MAAAjNzMDLeAAAMAAADNzg");
		this.shape_414.setTransform(47.2, -288.5);

		this.shape_415 = new cjs.Shape();
		this.shape_415.graphics.f("#D2B35B").s().p("EhlvBmwMAAAjNfMDLeAAAMAAADNfg");
		this.shape_415.setTransform(47.2, -287.5);

		this.shape_416 = new cjs.Shape();
		this.shape_416.graphics.f("#D1B258").s().p("EhlvBmnMAAAjNMMDLeAAAMAAADNMg");
		this.shape_416.setTransform(47.2, -286.5);

		this.shape_417 = new cjs.Shape();
		this.shape_417.graphics.f("#D1B156").s().p("EhlvBmdMAAAjM5MDLeAAAMAAADM5g");
		this.shape_417.setTransform(47.2, -285.5);

		this.shape_418 = new cjs.Shape();
		this.shape_418.graphics.f("#D1AF53").s().p("EhlvBmTMAAAjMlMDLeAAAMAAADMlg");
		this.shape_418.setTransform(47.2, -284.5);

		this.shape_419 = new cjs.Shape();
		this.shape_419.graphics.f("#D0AE50").s().p("EhlvBmJMAAAjMRMDLeAAAMAAADMRg");
		this.shape_419.setTransform(47.2, -283.5);

		this.shape_420 = new cjs.Shape();
		this.shape_420.graphics.f("#D0AD4E").s().p("EhlvBl/MAAAjL9MDLeAAAMAAADL9g");
		this.shape_420.setTransform(47.2, -282.6);

		this.shape_421 = new cjs.Shape();
		this.shape_421.graphics.f("#CFAC4B").s().p("EhlvBl1MAAAjLpMDLeAAAMAAADLpg");
		this.shape_421.setTransform(47.2, -281.6);

		this.shape_422 = new cjs.Shape();
		this.shape_422.graphics.f("#CFAB48").s().p("EhlvBlsMAAAjLWMDLeAAAMAAADLWg");
		this.shape_422.setTransform(47.2, -280.6);

		this.shape_423 = new cjs.Shape();
		this.shape_423.graphics.f("#CEAA46").s().p("EhlvBliMAAAjLDMDLeAAAMAAADLDg");
		this.shape_423.setTransform(47.2, -279.6);

		this.shape_424 = new cjs.Shape();
		this.shape_424.graphics.f("#CEA943").s().p("EhlvBlYMAAAjKvMDLeAAAMAAADKvg");
		this.shape_424.setTransform(47.2, -278.6);

		this.shape_425 = new cjs.Shape();
		this.shape_425.graphics.f("#CEA840").s().p("EhlvBlOMAAAjKbMDLeAAAMAAADKbg");
		this.shape_425.setTransform(47.2, -277.6);

		this.shape_426 = new cjs.Shape();
		this.shape_426.graphics.f("#CDA73E").s().p("EhlvBlEMAAAjKHMDLeAAAMAAADKHg");
		this.shape_426.setTransform(47.2, -276.7);

		this.shape_427 = new cjs.Shape();
		this.shape_427.graphics.f("#CDA63B").s().p("EhlvBk7MAAAjJ0MDLeAAAMAAADJ0g");
		this.shape_427.setTransform(47.2, -275.7);

		this.shape_428 = new cjs.Shape();
		this.shape_428.graphics.f("#CCA538").s().p("EhlvBkxMAAAjJgMDLeAAAMAAADJgg");
		this.shape_428.setTransform(47.2, -274.7);

		this.shape_429 = new cjs.Shape();
		this.shape_429.graphics.f("#CCA435").s().p("EhlvBknMAAAjJNMDLeAAAMAAADJNg");
		this.shape_429.setTransform(47.2, -273.7);

		this.shape_430 = new cjs.Shape();
		this.shape_430.graphics.f("#CBA233").s().p("EhlvBkdMAAAjI5MDLeAAAMAAADI5g");
		this.shape_430.setTransform(47.2, -272.7);

		this.shape_431 = new cjs.Shape();
		this.shape_431.graphics.f("#CBA130").s().p("EhlvBkTMAAAjIlMDLeAAAMAAADIlg");
		this.shape_431.setTransform(47.2, -271.7);

		this.shape_432 = new cjs.Shape();
		this.shape_432.graphics.f("#CAA02D").s().p("EhlvBkJMAAAjIRMDLeAAAMAAADIRg");
		this.shape_432.setTransform(47.2, -270.8);

		this.shape_433 = new cjs.Shape();
		this.shape_433.graphics.f("#CA9F2B").s().p("EhlvBkAMAAAjH+MDLeAAAMAAADH+g");
		this.shape_433.setTransform(47.2, -269.8);

		this.shape_434 = new cjs.Shape();
		this.shape_434.graphics.f("#CA9E28").s().p("EhlvBj2MAAAjHrMDLeAAAMAAADHrg");
		this.shape_434.setTransform(47.2, -268.8);

		this.shape_435 = new cjs.Shape();
		this.shape_435.graphics.f("#C99D25").s().p("EhlvBjsMAAAjHXMDLeAAAMAAADHXg");
		this.shape_435.setTransform(47.2, -267.8);

		this.shape_436 = new cjs.Shape();
		this.shape_436.graphics.f("#C99C23").s().p("EhlvBjiMAAAjHDMDLeAAAMAAADHDg");
		this.shape_436.setTransform(47.2, -266.8);

		this.shape_437 = new cjs.Shape();
		this.shape_437.graphics.f("#C89B20").s().p("EhlvBjYMAAAjGvMDLeAAAMAAADGvg");
		this.shape_437.setTransform(47.2, -265.9);

		this.shape_438 = new cjs.Shape();
		this.shape_438.graphics.f("#C89A1D").s().p("EhlvBjOMAAAjGbMDLeAAAMAAADGbg");
		this.shape_438.setTransform(47.2, -264.9);

		this.shape_439 = new cjs.Shape();
		this.shape_439.graphics.f("#C7991B").s().p("EhlvBjFMAAAjGIMDLeAAAMAAADGIg");
		this.shape_439.setTransform(47.2, -263.9);

		this.shape_440 = new cjs.Shape();
		this.shape_440.graphics.f("#C79818").s().p("EhlvBi7MAAAjF1MDLeAAAMAAADF1g");
		this.shape_440.setTransform(47.2, -262.9);

		this.shape_441 = new cjs.Shape();
		this.shape_441.graphics.f("#C79715").s().p("EhlvBixMAAAjFhMDLeAAAMAAADFhg");
		this.shape_441.setTransform(47.2, -261.9);

		this.shape_442 = new cjs.Shape();
		this.shape_442.graphics.f("#C69613").s().p("EhlvBinMAAAjFNMDLeAAAMAAADFNg");
		this.shape_442.setTransform(47.2, -260.9);

		this.shape_443 = new cjs.Shape();
		this.shape_443.graphics.f("#C69410").s().p("EhlvBidMAAAjE5MDLeAAAMAAADE5g");
		this.shape_443.setTransform(47.2, -260);

		this.shape_444 = new cjs.Shape();
		this.shape_444.graphics.f("#C5930D").s().p("EhlvBiUMAAAjEmMDLeAAAMAAADEmg");
		this.shape_444.setTransform(47.2, -259);

		this.shape_445 = new cjs.Shape();
		this.shape_445.graphics.f("#C5920B").s().p("EhlvBiKMAAAjESMDLeAAAMAAADESg");
		this.shape_445.setTransform(47.2, -258);

		this.shape_446 = new cjs.Shape();
		this.shape_446.graphics.f("#C49108").s().p("EhlvBiAMAAAjD/MDLeAAAMAAADD/g");
		this.shape_446.setTransform(47.2, -257);

		this.shape_447 = new cjs.Shape();
		this.shape_447.graphics.f("#C49005").s().p("EhlvBh2MAAAjDrMDLeAAAMAAADDrg");
		this.shape_447.setTransform(47.2, -256);

		this.shape_448 = new cjs.Shape();
		this.shape_448.graphics.f("#C38F03").s().p("EhlvBhsMAAAjDXMDLeAAAMAAADDXg");
		this.shape_448.setTransform(47.2, -255);

		this.shape_449 = new cjs.Shape();
		this.shape_449.graphics.f("#C38E00").s().p("EhluBE7MAAAiJ1MDLeAAAMAAACJ1g");
		this.shape_449.setTransform(47.2, -254.1, 1, 1.415);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_360 }] }).to({ state: [{ t: this.shape_361 }] }, 1).to({ state: [{ t: this.shape_362 }] }, 1).to({ state: [{ t: this.shape_363 }] }, 1).to({ state: [{ t: this.shape_364 }] }, 1).to({ state: [{ t: this.shape_365 }] }, 1).to({ state: [{ t: this.shape_366 }] }, 1).to({ state: [{ t: this.shape_367 }] }, 1).to({ state: [{ t: this.shape_368 }] }, 1).to({ state: [{ t: this.shape_369 }] }, 1).to({ state: [{ t: this.shape_370 }] }, 1).to({ state: [{ t: this.shape_371 }] }, 1).to({ state: [{ t: this.shape_372 }] }, 1).to({ state: [{ t: this.shape_373 }] }, 1).to({ state: [{ t: this.shape_374 }] }, 1).to({ state: [{ t: this.shape_375 }] }, 1).to({ state: [{ t: this.shape_376 }] }, 1).to({ state: [{ t: this.shape_377 }] }, 1).to({ state: [{ t: this.shape_378 }] }, 1).to({ state: [{ t: this.shape_379 }] }, 1).to({ state: [{ t: this.shape_380 }] }, 1).to({ state: [{ t: this.shape_381 }] }, 1).to({ state: [{ t: this.shape_382 }] }, 1).to({ state: [{ t: this.shape_383 }] }, 1).to({ state: [{ t: this.shape_384 }] }, 1).to({ state: [{ t: this.shape_385 }] }, 1).to({ state: [{ t: this.shape_386 }] }, 1).to({ state: [{ t: this.shape_387 }] }, 1).to({ state: [{ t: this.shape_388 }] }, 1).to({ state: [{ t: this.shape_389 }] }, 1).to({ state: [{ t: this.shape_390 }] }, 1).to({ state: [{ t: this.shape_391 }] }, 1).to({ state: [{ t: this.shape_392 }] }, 1).to({ state: [{ t: this.shape_393 }] }, 1).to({ state: [{ t: this.shape_394 }] }, 1).to({ state: [{ t: this.shape_395 }] }, 1).to({ state: [{ t: this.shape_396 }] }, 1).to({ state: [{ t: this.shape_397 }] }, 1).to({ state: [{ t: this.shape_398 }] }, 1).to({ state: [{ t: this.shape_399 }] }, 1).to({ state: [{ t: this.shape_400 }] }, 1).to({ state: [{ t: this.shape_401 }] }, 1).to({ state: [{ t: this.shape_402 }] }, 1).to({ state: [{ t: this.shape_403 }] }, 1).to({ state: [{ t: this.shape_404 }] }, 1).to({ state: [{ t: this.shape_405 }] }, 1).to({ state: [{ t: this.shape_406 }] }, 1).to({ state: [{ t: this.shape_407 }] }, 1).to({ state: [{ t: this.shape_408 }] }, 1).to({ state: [{ t: this.shape_409 }] }, 1).to({ state: [{ t: this.shape_410 }] }, 1).to({ state: [{ t: this.shape_411 }] }, 1).to({ state: [{ t: this.shape_412 }] }, 1).to({ state: [{ t: this.shape_413 }] }, 1).to({ state: [{ t: this.shape_414 }] }, 1).to({ state: [{ t: this.shape_415 }] }, 1).to({ state: [{ t: this.shape_416 }] }, 1).to({ state: [{ t: this.shape_417 }] }, 1).to({ state: [{ t: this.shape_418 }] }, 1).to({ state: [{ t: this.shape_419 }] }, 1).to({ state: [{ t: this.shape_420 }] }, 1).to({ state: [{ t: this.shape_421 }] }, 1).to({ state: [{ t: this.shape_422 }] }, 1).to({ state: [{ t: this.shape_423 }] }, 1).to({ state: [{ t: this.shape_424 }] }, 1).to({ state: [{ t: this.shape_425 }] }, 1).to({ state: [{ t: this.shape_426 }] }, 1).to({ state: [{ t: this.shape_427 }] }, 1).to({ state: [{ t: this.shape_428 }] }, 1).to({ state: [{ t: this.shape_429 }] }, 1).to({ state: [{ t: this.shape_430 }] }, 1).to({ state: [{ t: this.shape_431 }] }, 1).to({ state: [{ t: this.shape_432 }] }, 1).to({ state: [{ t: this.shape_433 }] }, 1).to({ state: [{ t: this.shape_434 }] }, 1).to({ state: [{ t: this.shape_435 }] }, 1).to({ state: [{ t: this.shape_436 }] }, 1).to({ state: [{ t: this.shape_437 }] }, 1).to({ state: [{ t: this.shape_438 }] }, 1).to({ state: [{ t: this.shape_439 }] }, 1).to({ state: [{ t: this.shape_440 }] }, 1).to({ state: [{ t: this.shape_441 }] }, 1).to({ state: [{ t: this.shape_442 }] }, 1).to({ state: [{ t: this.shape_443 }] }, 1).to({ state: [{ t: this.shape_444 }] }, 1).to({ state: [{ t: this.shape_445 }] }, 1).to({ state: [{ t: this.shape_446 }] }, 1).to({ state: [{ t: this.shape_447 }] }, 1).to({ state: [{ t: this.shape_448 }] }, 1).to({ state: [{ t: this.shape_449 }] }, 1).to({ state: [] }, 24).wait(63));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-801.1, -1053.2, 1930.3, 2066.8);


	(lib.元件5 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.元件4("synched", 0);
		this.instance.parent = this;
		this.instance.setTransform(0.1, 0.1, 1, 1, 0, 0, 0, 1177.5, 892.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-1177.4, -892.5, 2354.9, 1785.2), null);


	// stage content:
	(lib.测试镜头_Canvas = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_0 = function () {
			canvas.addEventListener('touchstart', touchstartFunc.bind(this), false);
			function touchstartFunc(e) {
				console.log('touchstart' + e.touches[0].clientY)
				startY = e.touches[0].clientY;
			}
			canvas.addEventListener('touchmove', touchmoveFunc.bind(this), false);
			function touchmoveFunc(e) {
				if (e.touches[0].clientY - startY > 5) {
					// 上一帧
					this.gotoAndStop(++this.currentFrame);
					startY = e.touches[0].clientY
				}else if(e.touches[0].clientY - startY < -5) {
					// 下一帧
					this.gotoAndStop(--this.currentFrame);
					startY = e.touches[0].clientY
				}
			}
			canvas.addEventListener('touchend', touchendFunc.bind(this), false);
			function touchendFunc(e) {
				startY = 0;
			}


			let _this = this;
			mouseFun = function (ev) {
				let oEvent = ev || event;
				console.log(oEvent.clientY - startY);
				if (oEvent.clientY - startY > 5) {
					_this.gotoAndStop(++_this.currentFrame);
					startY = oEvent.clientY;
				}else if(oEvent.clientY - startY < -5){
					_this.gotoAndStop(--_this.currentFrame);
					startY = oEvent.clientY;
				}
				console.log('mousemove'+oEvent.clientY);
				_this.stop();
			}
			canvas.addEventListener('mousedown', mousedownFunc.bind(this), false);
			function mousedownFunc(ev) {
				let oEvent = ev || event;
				startY = oEvent.clientY;
				console.log('mousedown' + oEvent.clientY);
				if (mousestate == 1) {
					canvas.addEventListener('mousemove', mouseFun, false);
					mousestate = 0;
				}
			}
			canvas.addEventListener('mouseup', mouseupFunc.bind(this), false);
			function mouseupFunc(e) {
				console.log('mouseup');
				canvas.removeEventListener('mousemove', mouseFun, false);
				mousestate = 1;
				// this.stop();
			}
		}
		this.frame_89 = function () {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(24));

		// 图层 2
		this.movieClip_1 = new lib.元件5();
		this.movieClip_1.parent = this;
		this.movieClip_1.setTransform(615, 85.6);
		this.movieClip_1.alpha = 0.02;

		this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(113));

		// 图层 1
		this.instance = new lib.元件1("synched", 0);
		this.instance.parent = this;
		this.instance.setTransform(454.5, 383.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({ y: 544.9, startPosition: 89 }, 89).wait(24));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-50.5, -422.9, 2354.9, 2204.4);
	// library properties:
	lib.properties = {
		id: '8215C2AD08A8A547A5D2BEBFDA162E46',
		width: 1024,
		height: 768,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		webfonts: {},
		manifest: [
			{ src: "images/位图1.jpg", id: "位图1" }
		],
		preloads: []
	};



	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

	p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['8215C2AD08A8A547A5D2BEBFDA162E46'] = {
		getStage: function () { return exportRoot.getStage(); },
		getLibrary: function () { return lib; },
		getSpriteSheet: function () { return ss; },
		getImages: function () { return img; }
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}

	an.getComposition = function (id) {
		return an.compositions[id];
	}



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;