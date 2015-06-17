window.addEventListener("load", function load(event){

	//elemento
	var e = document.querySelector('#text'),
		t = e.value;

	//focus no elemento
	document.querySelector('#text').addEventListener('focus', function(){
		if (e.value == t) {
			e.value = "";
		};
	});

	//blur no elemento
	document.querySelector('#text').addEventListener('blur', function(){
		if (e.value == "") {
			e.value = t;
		};
	});

	//stop
	document.querySelector('#btn-stop').addEventListener('click', function(){
		//stop na fala
		speechSynthesis.cancel();
	});

	//play
	document.querySelector('#btn').addEventListener('click', function(){

		//texto
		var v = document.querySelector('#text').value;

		//verifica se existe algo digitado
		if (v == "") {e.focus()};

		//raio convertedor dinofauro
		v = v.replace(/v/g, 'f');
		v = v.replace(/s /g, '#@#');
		v = v.replace(/#@#/g, 's ');
		v = v.replace(/s/g, 'f');
		v = v.replace(/ç/g, 'f');
		v = v.replace(/b/g, 'f');
		v = v.replace(/mp/g, 'mpf');
		v = v.replace(/t/g, 'f');
		v = v.replace(/p/g, 'f');
		v = v.replace(/V/g, 'F');
		v = v.replace(/S/g, 'F');
		v = v.replace(/B/g, 'F');
		v = v.replace(/T/g, 'F');
		v = v.replace(/P/g, 'F');

		//SpeechAPI
		var msg = new SpeechSynthesisUtterance();
		var voices = window.speechSynthesis.getVoices();
		// msg.voice = voices[11]; // Note: some voices don't support altering params
		msg.voiceURI = 'native';
		msg.volume = 1; // 0 to 1
		msg.rate = 0.7; // 0.1 to 10
		msg.pitch = 0; //0 to 2
		msg.text = v;
		msg.lang = 'pt-BR';

		//executa metodo
		speechSynthesis.speak(msg);

	});

},false);