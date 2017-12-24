        var tonique =60; //C4
        var diapason=440; // A4 of course
        var gamme =[0,2,4,5,7,9,11]; // mode ionien, les autres s'obtiendrons par décalage
        
        
    function midi_freq(no){ // tempérament égal
        return diapason*2**((no-67)/12)
    }    
 
    var rfreq0 = midi_freq(tonique);

        
    function diato_freq(deg){
        var oct=0, midi=tonique; 
        while (deg<0){
            oct -=1;
            deg += 7;
        }
		while (deg>6){
            oct +=1;
            deg -= 7;
        }
        midi += 12*oct + gamme[deg];
        document.getElementById("controle").innerHTML = ' oct =' + oct +' / deg =' + deg + ' => note ' + midi;
        return midi_freq(midi);
        }
