class mono_alphabetic_c  {
	constructor(...s) {

		var t = this;
        t.abcString = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ! @ # $ % ^ & * ( ) . ,"
        t.abc  = t.abcString.split(" ");
        t.abc.push(" ");
        
        t.cfs = []
        for (var cf of s) t.cfs.push(cf.split(" "));
        for (var cf of t.cfs) cf.push(" ")

	}

	yencrypt(string) {  
        var t = this;
        var ret="";
        
        var cur_c;//current char
        var cur_l; //current letter of cipher
        var str = string
        for (var cipher in t.cfs) {
          if (ret !== "") {
            str = ret;
            ret = ""
          }
          var cf = t.cfs[cipher]
          for (var i = 0; i < str.length; i++) {
            
            for (var j = 0; j < t.abc.length; j++)//loop alphabet length
            {
              cur_l = cf[j].charAt(0)
              cur_c = str.charAt(i);
              
              if(t.abc[j] === cur_c.toUpperCase()){
                //console.log(cur_c + " " + cf[j].charAt(0))
                if (cur_c.isLowerCase()) ret += cur_l.toUpperCase();
                else ret += cur_l.toLowerCase();
                break;
              }
            }
          }
        }
        
        return ret

  }//end yencrypt

    ydecrypt(str) {
        var t = this;
        var ret = "";

        var cur_c;//current char
        var cur_l; //current letter of cipher
        
        for (var i = 0; i < str.length; i++) {
          
          for (var j = 0; j < t.abc.length; j++)//loop alphabet length
          {
            cur_l = t.cf[j].charAt(0)
            cur_c = str.charAt(i);
            
            if(cur_c.toUpperCase() === t.cf[j]){
              //console.log(cur_c + " " + t.cf[j].charAt(0))
              if (cur_c.isLowerCase()) ret += t.abc[j].toUpperCase();
              else ret += t.abc[j].toLowerCase();
              break;
            }
          }
        }
        
        return ret
	}//end ydecrypt

}
