function getCookies(cookie_name){
    let cookie_value = "";
    try{
        if(document.cookie.length > 1){
            var ck_array = document.cookie.split(';')

    ck_array.map(mp=>{
        var ck_key = ''
        var  i = 0;
    
        while(mp[i] != '=' && (mp[i] != ' ' || i == 0)){
            if(mp[i] != ' ')
            ck_key += mp[i];
            i++;
        }
        
        if(ck_key == cookie_name){
            cookie_value = decodeURIComponent(mp.substring(i+1))
        }
    })
        }
        
    }catch(err){

    }
    

    return cookie_value;

}

export default getCookies;