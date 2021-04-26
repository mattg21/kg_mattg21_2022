let number_to_phonetic = {'1': "One", '2': "Two", '3': "Three", '4': "Four", '5': "Five", '6': "Six", '7': "Seven", '8': "Eight",'9': "Nine",'0': "Zero"};

for(i=0; i <= 9; i++) {
    console.log(number_to_phonetic[i.toString()])
}
let my_args = process.argv.slice(2)
console.log(my_args)

let my_converted = "";

for(i = 0; i < my_args.length; i++) {
    try {
        let int_to_convert = my_args[i].split('')
        //console.log(int_to_convert)
        let curr_string = "";
        for (j = 0; j < int_to_convert.length; j++) {
            curr_string += number_to_phonetic[int_to_convert[j]]    
        }
        if (i == my_args.length - 1) {
            my_converted += curr_string 
        }else {
            my_converted += curr_string + ","
        }
    }catch(err) {

    }
    
}
console.log(my_converted)