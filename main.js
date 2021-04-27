const my_args = process.argv.slice(2)

function int_ch_array_to_phonetic(int_ch_array) {
    const number_to_phonetic = {'1': "One", '2': "Two", '3': "Three", '4': "Four", '5': "Five", '6': "Six", '7': "Seven", '8': "Eight",'9': "Nine",'0': "Zero"}
    let curr_string = ""
    
    for (j = 0; j < int_ch_array.length; j++) {
        curr_string += number_to_phonetic[int_ch_array[j]]    
    }
    return curr_string
}

function int_to_string(m_args)  {
    // takes in a list of args passed in as integers
    try {
        let my_converted = ""

        for(i = 0; i < m_args.length; i++) {
            if(isNaN(m_args[i])) {
                console.log("Invalid argument")
                return ""
            }
            const int_to_convert = m_args[i].split('')
            if(i == m_args.length - 1 ) {
                my_converted += int_ch_array_to_phonetic(int_to_convert)
            } else {
                my_converted += int_ch_array_to_phonetic(int_to_convert) + ','
            }
            
        } return my_converted 
        
    }catch(err) {
        console.log("Something went wrong: ", err)
    }
}

const myString = int_to_string(my_args)
if (myString) console.log(myString); 