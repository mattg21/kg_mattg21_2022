const my_args = process.argv.slice(2)

function int_to_string(m_args)  {
    const number_to_phonetic = {'1': "One", '2': "Two", '3': "Three", '4': "Four", '5': "Five", '6': "Six", '7': "Seven", '8': "Eight",'9': "Nine",'0': "Zero"};
    try {
        let my_converted = ""

        for(i = 0; i < m_args.length; i++) {

            let int_to_convert = m_args[i].split('')
            let curr_string = "";

            for (j = 0; j < int_to_convert.length; j++) {
                curr_string += number_to_phonetic[int_to_convert[j]]    
            }

            if (i == m_args.length - 1) {
                my_converted += curr_string 
            }else {
                my_converted += curr_string + ","
            }
            
        } return my_converted 
        
    }catch(err) {
        console.log("Invalid argument")
    }
}

const myString = int_to_string(my_args)
console.log(myString)