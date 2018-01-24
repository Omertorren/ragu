app.controller('gameCtrl', ['$scope', function ($scope) {
	$scope.categories = ["פוליטי", "גאוגרפי", "כלכלי", "חברתי", "תרבותי"];
	$scope.currentStrips = {};
	$scope.strips = [{"name":"עמידר","pic":"amidar.png","category":"כלכלי"},{"name":"ארגמן","pic":"argaman.png","category":"כלכלי"},{"name":"מפעל אתא","pic":"atta factory.png","category":"כלכלי"},{"name":"הסכם השילומים","pic":"heskem hashilumim.png","category":"כלכלי"},{"name":"מדינת הרווחה","pic":"mediniot.png","category":"כלכלי"},{"name":"מפעל הפיס","pic":"Mifal_hapais.png","category":"כלכלי"},{"name":"מפעלי ים המלח","pic":"mifal.png","category":"כלכלי"},{"name":"בתי ספר מקצועיים","pic":"profschool.png","category":"כלכלי"},{"name":"תקציב המדינה","pic":"takziv medina.png","category":"כלכלי"},{"name":"תנובה","pic":"tnuva.png","category":"כלכלי"}, {"name":"אבי גבאי","pic":"avigabai.png","category":"פוליטי"},{"name":"גדר ההפרדה","pic":"gader hahafrada.png","category":"פוליטי"},{"name":"הרצל","pic":"hertzel.png","category":"פוליטי"},{"name":"איציק שמולי","pic":"itzik shmuli.png","category":"פוליטי"},{"name":"מאיר כהנא","pic":"kahana.png","category":"פוליטי"},{"name":"הליכוד","pic":"Likkud.png","category":"פוליטי"},{"name":"אוסלו","pic":"oslo.png","category":"פוליטי"},{"name":"הפנתרים השחורים","pic":"pantershahor.png","category":"פוליטי"},{"name":"שס","pic":"shass.png","category":"פוליטי"},{"name":"העלייה ממרוקו","pic":"aliyamaroko.png","category":"חברתי"},{"name":"גיוס חרדים","pic":"gius hredim.png","category":"חברתי"},{"name":"חטיפת ילדי תימן","pic":"hatufei teiman.png","category":"חברתי"},{"name":"כיכר רבין","pic":"kikar rabin.png","category":"חברתי"},{"name":"חב״ד","pic":"lubvitz.png","category":"חברתי"},{"name":"מעברות","pic":"maabarot.png","category":"חברתי"},{"name":"מבצע שלמה","pic":"mivtza shlomo.png","category":"חברתי"},{"name":"נערי רפול","pic":"nearei raful.png","category":"חברתי"},{"name":"שוברים שתיקה","pic":"shovrim shtika.png","category":"חברתי"},{"name":"רצח תאיר ראדה","pic":"tairrada.png","category":"חברתי"},{"name":"המחאה החברתית","pic":"tents.png","category":"חברתי"}, {"name":"מוזיאון האסלאם","pic":"amanut islam.png","category":"תרבותי"},{"name":"התזמורת האנדלוסית","pic":"andalusit.png","category":"תרבותי"},{"name":"פסטיבל ערד","pic":"arad festival.png","category":"תרבותי"},{"name":"הבאבא סאלי","pic":"baba sali.png","category":"תרבותי"},{"name":"בר רפאלי","pic":"bar refaeli.png","category":"תרבותי"},{"name":"הקאמרי","pic":"cameri.png","category":"תרבותי"},{"name":"הוא הלך בשדות","pic":"huhalachbasadut.png","category":"תרבותי"},{"name":"סמינר הקיבוצים","pic":"kibutz seminr.png","category":"תרבותי"},{"name":"מלכת אמבטיה","pic":"malkatambat.png","category":"תרבותי"},{"name":"פסטיגל","pic":"pestigal.png","category":"תרבותי"},{"name":"פרס ישראל","pic":"prass israel.png","category":"תרבותי"},{"name":"רשף (אל)","pic":"reshef.png","category":"תרבותי"},{"name":"ואלס עם באשיר","pic":"Waltz-with-Bashir.png","category":"תרבותי"},{"name":"זוהר ארגוב","pic":"zoharargov.png","category":"תרבותי"}, {"name":"אפולוניה","pic":"apolonia.png","category":"גאוגרפי"},{"name":"רחוב דיזנגוף","pic":"Dizengoff.png","category":"גאוגרפי"},{"name":"רמת הגולן","pic":"gilgal.png","category":"גאוגרפי"},{"name":"כפר שמריהו","pic":"kfar shmriahu.png","category":"גאוגרפי"},{"name":"המכתש הגדול","pic":"Makhtesh gadol.png","category":"גאוגרפי"},{"name":"מוסררה","pic":"musrara.png","category":"גאוגרפי"},{"name":"פריפריה","pic":"periferia.png","category":"גאוגרפי"},{"name":"שדרות רוטשילד","pic":"sderot rochild.png","category":"גאוגרפי"},{"name":"שביל ישראל","pic":"shvil israel.png","category":"גאוגרפי"},{"name":"סידני עלי","pic":"sidni ali.png","category":"גאוגרפי"},{"name":"תל צפית","pic":"tel tzapit.png","category":"גאוגרפי"},{"name":"יהודה ושומרון","pic":"yosh.png","category":"גאוגרפי"}];
	$scope.currentLock = '';

	$scope.shuffle = function() {
		_.forEach($scope.categories, function(cat){
			if(cat !== $scope.currentLock){
				$scope.currentStrips[cat] = $scope.getRandomStrip(cat)
			}
		});
	};


	$scope.getRandomStrip = function(category){
		var strips = _.filter($scope.strips, {category: category});
		return strips[_.random(0, strips.length-1)];
	};

	$scope.shuffle();
	document.onkeypress = function(event){
		if(event.code === "Space"){
			$scope.shuffle();
			$scope.$apply()
		}
	};

	$scope.changeLock = function(cat){
		$scope.currentLock = $scope.currentLock === cat ? '' : cat;
		document.body.click();
	}

	$scope.gotMatch = function(cat){
		return true;
	}
}]);