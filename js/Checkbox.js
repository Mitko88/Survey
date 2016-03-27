		function changeCheckBoxes(){
				var t1=[];
				$.each($("input[class=main1]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("1") >= 0){
					$('#2').prop('checked', false); // Unchecks it
					$('#3').prop('checked', false);
					$('#4').prop('checked', false);
					$('#5').prop('checked', false);
				}
			}
		function changeCheckBoxes1(){
				var t1=[];
				$.each($("input[class=main1]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("2")>=0 || t1.indexOf("3")>=0 || t1.indexOf("4")>=0){
					$('#1').prop('checked', false); // Unchecks it
					$('#5').prop('checked', false); // Unchecks it
				}
			}
		function changeCheckBoxes2(){
				var t1=[];
				$.each($("input[class=main1]:checked"), function() {
					t1.push($(this).val());
				});
				var t = t1.indexOf("5");
				if (t1.indexOf("5")>=0){
					$('#1').prop('checked', false); // Unchecks it
					$('#2').prop('checked', true); // Unchecks it
					$('#3').prop('checked', true);
					$('#4').prop('checked', true);
				}else{
					$('#1').prop('checked', false); // Unchecks it
					$('#2').prop('checked', false); // Unchecks it
					$('#3').prop('checked', false);
					$('#4').prop('checked', false);
				}
			}
		function changeCheckBoxes3(){
				var t1=[];
				$.each($("input[class=main2]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("6") >= 0){
					$('#7').prop('checked', false); // Unchecks it
					$('#8').prop('checked', false);
					$('#9').prop('checked', false);
					$('#10').prop('checked', false);
				}
			}
		function changeCheckBoxes4(){
				var t1=[];
				$.each($("input[class=main2]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("7")>=0 || t1.indexOf("8")>=0 || t1.indexOf("9")>=0){
					$('#6').prop('checked', false); // Unchecks it
					$('#10').prop('checked', false); // Unchecks it
				}
			}
		function changeCheckBoxes5(){
				var t1=[];
				$.each($("input[class=main2]:checked"), function() {
					t1.push($(this).val());
				});
				var t = t1.indexOf("10");
				if (t1.indexOf("10")>=0){
					$('#6').prop('checked', false); // Unchecks it
					$('#7').prop('checked', true); // Unchecks it
					$('#8').prop('checked', true);
					$('#9').prop('checked', true);
				}else{
					$('#6').prop('checked', false); // Unchecks it
					$('#7').prop('checked', false); // Unchecks it
					$('#8').prop('checked', false);
					$('#9').prop('checked', false);
				}
			}
			function changeCheckBoxes6(){
				var t1=[];
				$.each($("input[class=main3]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("11") >= 0){
					$('#12').prop('checked', false); // Unchecks it
					$('#13').prop('checked', false);
					$('#14').prop('checked', false);
					$('#15').prop('checked', false);
				}
			}
		function changeCheckBoxes7(){
				var t1=[];
				$.each($("input[class=main3]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("12")>=0 || t1.indexOf("13")>=0 || t1.indexOf("14")>=0){
					$('#11').prop('checked', false); // Unchecks it
					$('#15').prop('checked', false); // Unchecks it
				}
			}
		function changeCheckBoxes8(){
				var t1=[];
				$.each($("input[class=main3]:checked"), function() {
					t1.push($(this).val());
				});
				var t = t1.indexOf("15");
				if (t1.indexOf("15")>=0){
					$('#11').prop('checked', false); // Unchecks it
					$('#12').prop('checked', true); // Unchecks it
					$('#13').prop('checked', true);
					$('#14').prop('checked', true);
				}else{
					$('#11').prop('checked', false); // Unchecks it
					$('#12').prop('checked', false); // Unchecks it
					$('#13').prop('checked', false);
					$('#14').prop('checked', false);
				}
			}
		function changeCheckBoxes9(){
				var t1=[];
				$.each($("input[class=main4]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("16") >= 0){
					$('#17').prop('checked', false); // Unchecks it
					$('#18').prop('checked', false);
					$('#19').prop('checked', false);
					$('#20').prop('checked', false);
				}
			}
		function changeCheckBoxes10(){
				var t1=[];
				$.each($("input[class=main4]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("17")>=0 || t1.indexOf("18")>=0 || t1.indexOf("19")>=0){
					$('#16').prop('checked', false); // Unchecks it
					$('#20').prop('checked', false); // Unchecks it
				}
			}
		function changeCheckBoxes11(){
				var t1=[];
				$.each($("input[class=main4]:checked"), function() {
					t1.push($(this).val());
				});
				var t = t1.indexOf("20");
				if (t1.indexOf("20")>=0){
					$('#16').prop('checked', false); // Unchecks it
					$('#17').prop('checked', true); // Unchecks it
					$('#18').prop('checked', true);
					$('#19').prop('checked', true);
				}else{
					$('#16').prop('checked', false); // Unchecks it
					$('#17').prop('checked', false); // Unchecks it
					$('#18').prop('checked', false);
					$('#19').prop('checked', false);
				}
			}
				function changeCheckBoxes12(){
				var t1=[];
				$.each($("input[class=main5]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("21") >= 0){
					$('#22').prop('checked', false); // Unchecks it
					$('#23').prop('checked', false);
					$('#24').prop('checked', false);
					$('#25').prop('checked', false);
				}
			}
		function changeCheckBoxes13(){
				var t1=[];
				$.each($("input[class=main5]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("22")>=0 || t1.indexOf("23")>=0 || t1.indexOf("24")>=0){
					$('#21').prop('checked', false); // Unchecks it
					$('#25').prop('checked', false); // Unchecks it
				}
			}
		function changeCheckBoxes14(){
				var t1=[];
				$.each($("input[class=main5]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("25")>=0){
					$('#21').prop('checked', false); // Unchecks it
					$('#22').prop('checked', true); // Unchecks it
					$('#23').prop('checked', true);
					$('#24').prop('checked', true);
				}else{
					$('#21').prop('checked', false); // Unchecks it
					$('#22').prop('checked', false); // Unchecks it
					$('#23').prop('checked', false);
					$('#24').prop('checked', false);
				}
			}
				function changeCheckBoxes15(){
				var t1=[];
				$.each($("input[class=main6]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("26") >= 0){
					$('#27').prop('checked', false); // Unchecks it
					$('#28').prop('checked', false);
					$('#29').prop('checked', false);
					$('#30').prop('checked', false);
				}
			}
		function changeCheckBoxes16(){
				var t1=[];
				$.each($("input[class=main6]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("27")>=0 || t1.indexOf("28")>=0 || t1.indexOf("29")>=0){
					$('#26').prop('checked', false); // Unchecks it
					$('#30').prop('checked', false); // Unchecks it
				}
			}
		function changeCheckBoxes17(){
				var t1=[];
				$.each($("input[class=main6]:checked"), function() {
					t1.push($(this).val());
				});
				var t = t1.indexOf("30");
				if (t1.indexOf("30")>=0){
					$('#26').prop('checked', false); // Unchecks it
					$('#27').prop('checked', true); // Unchecks it
					$('#28').prop('checked', true);
					$('#29').prop('checked', true);
				}else{
					$('#26').prop('checked', false); // Unchecks it
					$('#27').prop('checked', false); // Unchecks it
					$('#28').prop('checked', false);
					$('#29').prop('checked', false);
				}
			}
		function changeCheckBoxes18(){
				var t1=[];
				$.each($("input[class=main7]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("31") >= 0){
					$('#32').prop('checked', false); // Unchecks it
					$('#33').prop('checked', false);
					$('#34').prop('checked', false);
					$('#35').prop('checked', false);
				}
		}
		function changeCheckBoxes19(){
				var t1=[];
				$.each($("input[class=main7]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("32") >= 0){
					$('#31').prop('checked', false); // Unchecks it
					$('#33').prop('checked', false);
					$('#34').prop('checked', false);
					$('#35').prop('checked', false);
				}else{
					$('#33').prop('checked', false);
					$('#34').prop('checked', false);
				}
		}
		function changeCheckBoxes20(){
				var t1=[];
				$.each($("input[class=main7]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("33") >= 0){
					$('#31').prop('checked', false); // Unchecks it
					$('#32').prop('checked', true);
					$('#34').prop('checked', false);
					$('#35').prop('checked', false);
				}else{
					$('#34').prop('checked', false);
				}
		}
		function changeCheckBoxes21(){
				var t1=[];
				$.each($("input[class=main7]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("34") >= 0){
					$('#31').prop('checked', false); // Unchecks it
					$('#32').prop('checked', true);
					$('#33').prop('checked', true);
					$('#35').prop('checked', false);
				}
				
		}
		function changeCheckBoxes22(){
				var t1=[];
				$.each($("input[class=main7]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("35") >= 0){
					$('#31').prop('checked', false); // Unchecks it
					$('#32').prop('checked', true);
					$('#33').prop('checked', true);
					$('#34').prop('checked', true);
				}else{
					$('#31').prop('checked', false); // Unchecks it
					$('#32').prop('checked', false);
					$('#33').prop('checked', false);
					$('#34').prop('checked', false);
				}
		}
		function changeCheckBoxes23(){
				var t1=[];
				$.each($("input[class=main8]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("36") >= 0){
					$('#37').prop('checked', false); // Unchecks it
					$('#38').prop('checked', false);
					$('#39').prop('checked', false);
					$('#40').prop('checked', false);
				}
		}
		function changeCheckBoxes24(){
				var t1=[];
				$.each($("input[class=main8]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("37") >= 0){
					$('#36').prop('checked', false); // Unchecks it
					$('#38').prop('checked', false);
					$('#39').prop('checked', false);
					$('#40').prop('checked', false);
				}else{
					$('#38').prop('checked', false);
					$('#39').prop('checked', false);
				}
		}
		function changeCheckBoxes25(){
				var t1=[];
				$.each($("input[class=main8]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("36") >= 0){
					$('#37').prop('checked', false); // Unchecks it
					$('#38').prop('checked', true);
					$('#39').prop('checked', false);
					$('#40').prop('checked', false);
				}else{
					$('#39').prop('checked', false);
				}
		}
		function changeCheckBoxes26(){
				var t1=[];
				$.each($("input[class=main8]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("39") >= 0){
					$('#36').prop('checked', false); // Unchecks it
					$('#37').prop('checked', true);
					$('#38').prop('checked', true);
					$('#40').prop('checked', false);
				}
				
		}
		function changeCheckBoxes27(){
				var t1=[];
				$.each($("input[class=main8]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("40") >= 0){
					$('#36').prop('checked', false); // Unchecks it
					$('#37').prop('checked', true);
					$('#38').prop('checked', true);
					$('#39').prop('checked', true);
				}else{
					$('#36').prop('checked', false); // Unchecks it
					$('#37').prop('checked', false);
					$('#38').prop('checked', false);
					$('#39').prop('checked', false);
				}
		}
		function changeCheckBoxes28(){
				var t1=[];
				$.each($("input[class=main9]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("41") >= 0){
					$('#42').prop('checked', false); // Unchecks it
					$('#43').prop('checked', false);
					$('#44').prop('checked', false);
					$('#45').prop('checked', false);
				}
		}
		function changeCheckBoxes29(){
				var t1=[];
				$.each($("input[class=main9]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("42") >= 0){
					$('#41').prop('checked', false); // Unchecks it
					$('#43').prop('checked', false);
					$('#44').prop('checked', false);
					$('#45').prop('checked', false);
				}else{
					$('#43').prop('checked', false);
					$('#44').prop('checked', false);
				}
		}
		function changeCheckBoxes30(){
				var t1=[];
				$.each($("input[class=main9]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("43") >= 0){
					$('#41').prop('checked', false); // Unchecks it
					$('#42').prop('checked', true);
					$('#44').prop('checked', false);
					$('#45').prop('checked', false);
				}else{
					$('#44').prop('checked', false);
				}
		}
		function changeCheckBoxes31(){
				var t1=[];
				$.each($("input[class=main9]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("44") >= 0){
					$('#41').prop('checked', false); // Unchecks it
					$('#42').prop('checked', true);
					$('#43').prop('checked', true);
					$('#45').prop('checked', false);
				}
				
		}
		function changeCheckBoxes32(){
				var t1=[];
				$.each($("input[class=main9]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("45") >= 0){
					$('#41').prop('checked', false); // Unchecks it
					$('#42').prop('checked', true);
					$('#43').prop('checked', true);
					$('#44').prop('checked', true);
				}else{
					$('#41').prop('checked', false); // Unchecks it
					$('#42').prop('checked', false);
					$('#43').prop('checked', false);
					$('#44').prop('checked', false);
				}
		}
		function changeCheckBoxes33(){
				var t1=[];
				$.each($("input[class=main12]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("46") >= 0){
					$('#47').prop('checked', false); // Unchecks it
					$('#48').prop('checked', false);
					$('#49').prop('checked', false);
				}else{
					$('#47').prop('checked', false); // Unchecks it
					$('#48').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes34(){
				var t1=[];
				$.each($("input[class=main12]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("47") >= 0){
					$('#46').prop('checked', true); // Unchecks it
					$('#48').prop('checked', false);
					$('#49').prop('checked', false);
				}else{
					$('#48').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes35(){
				var t1=[];
				$.each($("input[class=main12]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("48") >= 0){
					$('#46').prop('checked', true); // Unchecks it
					$('#47').prop('checked', true);
					$('#49').prop('checked', false);
				}
		}
		function changeCheckBoxes36(){
				var t1=[];
				$.each($("input[class=main12]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("49") >= 0){
					$('#46').prop('checked', false); // Unchecks it
					$('#47').prop('checked', false);
					$('#48').prop('checked', false);
				}
		}
		function changeCheckBoxes37(){
				var t1=[];
				$.each($("input[class=main13]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("50") >= 0){
					$('#51').prop('checked', false); // Unchecks it
					$('#52').prop('checked', false);
					$('#53').prop('checked', false);
				}else{
					$('#51').prop('checked', false); // Unchecks it
					$('#52').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes38(){
				var t1=[];
				$.each($("input[class=main13]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("51") >= 0){
					$('#50').prop('checked', true); // Unchecks it
					$('#52').prop('checked', false);
					$('#53').prop('checked', false);
				}else{
					$('#52').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes39(){
				var t1=[];
				$.each($("input[class=main13]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("52") >= 0){
					$('#50').prop('checked', true); // Unchecks it
					$('#51').prop('checked', true);
					$('#53').prop('checked', false);
				}
		}
		function changeCheckBoxes40(){
				var t1=[];
				$.each($("input[class=main13]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("53") >= 0){
					$('#50').prop('checked', false); // Unchecks it
					$('#51').prop('checked', false);
					$('#52').prop('checked', false);
				}
		}
		function changeCheckBoxes41(){
				var t1=[];
				$.each($("input[class=main14]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("54") >= 0){
					$('#55').prop('checked', false); // Unchecks it
					$('#56').prop('checked', false);
					$('#58').prop('checked', false);
				}else{
					$('#55').prop('checked', false); // Unchecks it
					$('#56').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes42(){
				var t1=[];
				$.each($("input[class=main14]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("55") >= 0){
					$('#54').prop('checked', true); // Unchecks it
					$('#56').prop('checked', false);
					$('#58').prop('checked', false);
				}else{
					$('#56').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes43(){
				var t1=[];
				$.each($("input[class=main14]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("56") >= 0){
					$('#54').prop('checked', true); // Unchecks it
					$('#55').prop('checked', true);
					$('#57').prop('checked', false);
				}
		}
		function changeCheckBoxes44(){
				var t1=[];
				$.each($("input[class=main14]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("57") >= 0){
					$('#54').prop('checked', false); // Unchecks it
					$('#55').prop('checked', false);
					$('#56').prop('checked', false);
				}
		}
		function changeCheckBoxes45(){
				var t1=[];
				$.each($("input[class=main15]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("58") >= 0){
					$('#59').prop('checked', false); // Unchecks it
					$('#60').prop('checked', false);
					$('#61').prop('checked', false);
				}else{
					$('#59').prop('checked', false); // Unchecks it
					$('#60').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes46(){
				var t1=[];
				$.each($("input[class=main15]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("59") >= 0){
					$('#58').prop('checked', true); // Unchecks it
					$('#60').prop('checked', false);
					$('#61').prop('checked', false);
				}else{
					$('#60').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes47(){
				var t1=[];
				$.each($("input[class=main15]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("60") >= 0){
					$('#58').prop('checked', true); // Unchecks it
					$('#59').prop('checked', true);
					$('#61').prop('checked', false);
				}
		}
		function changeCheckBoxes48(){
				var t1=[];
				$.each($("input[class=main15]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("61") >= 0){
					$('#58').prop('checked', false); // Unchecks it
					$('#59').prop('checked', false);
					$('#60').prop('checked', false);
				}
		}
		function changeCheckBoxes49(){
				var t1=[];
				$.each($("input[class=main16]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("62") >= 0){
					$('#63').prop('checked', false); // Unchecks it
					$('#64').prop('checked', false);
					$('#65').prop('checked', false);
				}else{
					$('#63').prop('checked', false); // Unchecks it
					$('#64').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes50(){
				var t1=[];
				$.each($("input[class=main16]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("63") >= 0){
					$('#62').prop('checked', true); // Unchecks it
					$('#64').prop('checked', false);
					$('#65').prop('checked', false);
				}else{
					$('#64').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes51(){
				var t1=[];
				$.each($("input[class=main16]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("64") >= 0){
					$('#62').prop('checked', true); // Unchecks it
					$('#63').prop('checked', true);
					$('#65').prop('checked', false);
				}
		}
		function changeCheckBoxes52(){
				var t1=[];
				$.each($("input[class=main16]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("65") >= 0){
					$('#62').prop('checked', false); // Unchecks it
					$('#63').prop('checked', false);
					$('#64').prop('checked', false);
				}
		}
		function changeCheckBoxes53(){
				var t1=[];
				$.each($("input[class=main17]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("66") >= 0){
					$('#67').prop('checked', false); // Unchecks it
					$('#68').prop('checked', false);
					$('#69').prop('checked', false);
				}else{
					$('#67').prop('checked', false); // Unchecks it
					$('#68').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes54(){
				var t1=[];
				$.each($("input[class=main17]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("67") >= 0){
					$('#66').prop('checked', true); // Unchecks it
					$('#68').prop('checked', false);
					$('#69').prop('checked', false);
				}else{
					$('#68').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes55(){
				var t1=[];
				$.each($("input[class=main17]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("68") >= 0){
					$('#66').prop('checked', true); // Unchecks it
					$('#67').prop('checked', true);
					$('#69').prop('checked', false);
				}
		}
		function changeCheckBoxes56(){
				var t1=[];
				$.each($("input[class=main17]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("69") >= 0){
					$('#66').prop('checked', false); // Unchecks it
					$('#67').prop('checked', false);
					$('#68').prop('checked', false);
				}
		}
		function changeCheckBoxes57(){
				var t1=[];
				$.each($("input[class=main18]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("70") >= 0){
					$('#71').prop('checked', false); // Unchecks it
					$('#72').prop('checked', false);
					$('#73').prop('checked', false);
				}else{
					$('#71').prop('checked', false); // Unchecks it
					$('#72').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes58(){
				var t1=[];
				$.each($("input[class=main18]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("71") >= 0){
					$('#70').prop('checked', true); // Unchecks it
					$('#72').prop('checked', false);
					$('#73').prop('checked', false);
				}else{
					$('#72').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes59(){
				var t1=[];
				$.each($("input[class=main18]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("72") >= 0){
					$('#70').prop('checked', true); // Unchecks it
					$('#71').prop('checked', true);
					$('#73').prop('checked', false);
				}
		}
		function changeCheckBoxes60(){
				var t1=[];
				$.each($("input[class=main18]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("73") >= 0){
					$('#70').prop('checked', false); // Unchecks it
					$('#71').prop('checked', false);
					$('#72').prop('checked', false);
				}
		}
		function changeCheckBoxes61(){
				var t1=[];
				$.each($("input[class=main19]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("74") >= 0){
					$('#75').prop('checked', false); // Unchecks it
					$('#76').prop('checked', false);
					$('#77').prop('checked', false);
				}else{
					$('#75').prop('checked', false); // Unchecks it
					$('#76').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes62(){
				var t1=[];
				$.each($("input[class=main19]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("75") >= 0){
					$('#74').prop('checked', true); // Unchecks it
					$('#76').prop('checked', false);
					$('#77').prop('checked', false);
				}else{
					$('#76').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes63(){
				var t1=[];
				$.each($("input[class=main19]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("76") >= 0){
					$('#74').prop('checked', true); // Unchecks it
					$('#75').prop('checked', true);
					$('#77').prop('checked', false);
				}
		}
		function changeCheckBoxes64(){
				var t1=[];
				$.each($("input[class=main19]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("77") >= 0){
					$('#74').prop('checked', false); // Unchecks it
					$('#75').prop('checked', false);
					$('#76').prop('checked', false);
				}
		}
		function changeCheckBoxes65(){
				var t1=[];
				$.each($("input[class=main20]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("78") >= 0){
					$('#79').prop('checked', false); // Unchecks it
					$('#80').prop('checked', false);
					$('#81').prop('checked', false);
				}else{
					$('#79').prop('checked', false); // Unchecks it
					$('#80').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes66(){
				var t1=[];
				$.each($("input[class=main20]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("79") >= 0){
					$('#78').prop('checked', true); // Unchecks it
					$('#80').prop('checked', false);
					$('#81').prop('checked', false);
				}else{
					$('#80').prop('checked', false); // Unchecks it
				}
		}
		function changeCheckBoxes67(){
				var t1=[];
				$.each($("input[class=main20]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("80") >= 0){
					$('#78').prop('checked', true); // Unchecks it
					$('#79').prop('checked', true);
					$('#80').prop('checked', false);
				}
		}
		function changeCheckBoxes68(){
				var t1=[];
				$.each($("input[class=main20]:checked"), function() {
					t1.push($(this).val());
				});
				if (t1.indexOf("81") >= 0){
					$('#78').prop('checked', false); // Unchecks it
					$('#79').prop('checked', false);
					$('#80').prop('checked', false);
				}
		}