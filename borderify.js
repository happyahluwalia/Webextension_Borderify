document.body.style.border = "5px solid yellow";
var secret = 'happy';
    var keypressed = [];
    window.addEventListener('keyup', function(e){
        keypressed.push(e.key);

        // The array would continue to grow, we want to compare the end of the array to our secret
        keypressed.splice(-secret.length-1,(keypressed.length - secret.length));

        let currentSeq = keypressed.join('');
        if (secret ===currentSeq){
            alert('You unlocked an easter egg :)');
        }
    })
