let last = [''];
var i = 0;

function search(ele){
    const p = document.getElementById('cinp');
    const inputfield = document.getElementById('cin');
    var mas = [
        ['qeko oqwe лаыщгвыга щщ '],
        ['How do you think the printInteger() function is related to printers?'],
        ['A gift but not for you Misha'],
        ['<a href = "https://www.youtube.com/watch?v=cujM4QznLDw&t=1s">Women☕️</a>'],
        ['JUST STOP TAKING THESE STUPID NOTES JUST STOP TAKING THESE STUPID NOTES JUST STOP TAKING THESE STUPID NOTES JUST STOP TAKING THESE STUPID NOTES']
    ];
    
    if(event.key === 'Enter'){
        let f = ele.value.split(' ');

        last.push(ele.value);
        i = last.length;

        p.insertAdjacentHTML('beforebegin', '<li>' + ele.value + '</li>');

        if (f.length === 2 && f[0].toLowerCase() === 'notes' && !isNaN(Number(f[1][0]))){ 
            if (Number(f[1]) < 5 && Number(f[1]) > -1){
                p.insertAdjacentHTML('beforeBegin', '<li class = "info" >'+ mas[Number(ele.value.split(' ')[1])][0] +'</li>');
            }
            else{
                p.insertAdjacentHTML('beforebegin', '<li class = "info" >Invalid number</li>');
            }
        }
        else{
            switch(ele.value.toLowerCase()){
                case 'help':
                    p.insertAdjacentHTML('beforebegin', '<li class = "info" >To get information about a specific command, type HELP &lt;command name&gt;</li>');
                    p.insertAdjacentHTML('beforebegin', '<li class = "info" >HELP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Displays background information about commands</li>');
                    p.insertAdjacentHTML('beforebegin', '<li class = "info" >NOTES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Displays entries left in the shared archive</li>');

                    break;
                case 'notes':
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >There is an error in the command syntax.</li>');
                    break;
                case 'help notes':
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >NOTES [number of note]</li>');  
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >NOTES NUMBERS Displays the recorded numbers</li>');
                    break;
                case 'notes numbers':
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >NOTES 0 PROBEL qwe</li>');
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >NOTES 1 PROBEL A little bit about our documentation</li>');  
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >NOTES 2 PROBEL WTF?</li>');  
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >NOTES 3 PROBEL A gift? For girls?</li>');  
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >NOTES 4 PROBEL Women</li>');  
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >NOTES 5 PROBEL JUST STOP TAKING THESE STUPID NOTES.</li>');    
                    break;
                default:
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >&quot;' + ele.value + '&quot; it is not an internal program</li>');
                    p.insertAdjacentHTML('beforeBegin', '<li class = "info" >To display the list of commands, use the Command help</li>');
                    
                    break;
            } 
        }
        p.insertAdjacentHTML('beforebegin', '<br>');
        ele.value = "";
    }
    if (event.key === 'ArrowUp'){
        if(i > 0) i--;
        else i = last.length - 1;
        ele.value = last[i];
        console.log(ele.value.length);
        window.setTimeout(() => {
            inputfield.setSelectionRange(ele.value.length, ele.value.length)
        },0);
    }
    if (event.key === 'ArrowDown'){
        if(i < last.length - 1) i++;
        else i = 0;
        ele.value = last[i];
        console.log(ele.value.length);
        window.setTimeout(() => {
            inputfield.setSelectionRange(ele.value.length, ele.value.length)
        },0);
    }

}