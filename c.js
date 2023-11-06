function location(s1,s2)
        {
            var s1 = document.getElementById(s1);
            var s2 = document.getElementById(s2);
            s2.innerHTML= "";
            if(s1.value =="raj")
            {
                var optionArray=["jaipur|Jaipur","alwer|Alwer","jodhpur|Jodhpur","bikaner|bikaner"]
            }
            else if(s1.value=="hr")
            {
                var optionArray=["|","rewari|Rewari","bawal|Bawal","rohatak|Rohatak","karnal|Karnal"]
            }
            else if(s1.value=="punjab")
            {
                var optionArray=["|","mohali|Mohali","mansa|Mansa","amritser|Amritser","ludhiyana|Ludhiyana"]
            }
            for(option in optionArray)
            {
                var pair = optionArray[option].split("|");
                var newOption = document.createElement("option");
                newOption.value = pair[0];
                newOption.innerHTML = pair[1];
                s2.option.add(newOption);
            }
        }