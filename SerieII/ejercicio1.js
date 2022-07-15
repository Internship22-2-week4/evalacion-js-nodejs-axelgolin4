
function fixFiles(files) {
    var newfile = []
    var repetidos = []
    var cont = 0
    for (i = 0; i < files.length; i++) {
    repetidos[i] = 0
    }
    for (i = 0; i < files.length; i++) {
        cont = 0
        for (x = 0; x < newfile.length; x++) {
            if(files[i] == newfile[x]){
                cont = cont +1
            }       
        }
        if(cont > 0){
           newfile.push(files[i])
            repetidos[newfile.length-1] = cont
        }
        else{
            newfile.push(files[i])
        }     
    }
    for (i = 0; i < newfile.length; i++) {
        if(repetidos[i]>0){
            newfile[i] =newfile[i]+'('+repetidos[i]+')' 
        }
    }
    console.log(newfile)
    return newfile
}


files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixfile = fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']