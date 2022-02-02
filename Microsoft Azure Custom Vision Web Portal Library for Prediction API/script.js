window.addEventListener("load",function(){

    document.getElementById('capture').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById('PredictedPicture').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
}


        
        
        button.addEventListener("click", function(){
     
         const file = document.getElementById('capture').files[0];
         console.log(file);
       
        //HTTP Post Request
        var URL = "https://centralindia.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0e8f3f5a-9efe-4088-ab52-db293b6efc6c/classify/iterations/Diabetes%20Detection/image";
        var xhr = new XMLHttpRequest();
        
        xhr.open('POST', URL, true);
        xhr.setRequestHeader('Prediction-Key','9f786ebaf15c4dfea557b5fb2412195e');
        xhr.setRequestHeader('Content-Type','application/octet-stream')
   
        
        xhr.send(file); 
        
        
        xhr.onreadystatechange = processRequest;
        
        function processRequest(e){
            if(xhr.readyState == 4 && xhr.status == 200){
                //alert(xhr.responseText);
                console.log(typeof(xhr.responseText));
                var json = JSON.parse(xhr.responseText);
                console.log(json);
                console.log(json.predictions[0]['probability']);
                console.log(typeof(json));  
                  
                var table = document.getElementById("myTable");

                for(var i = json.predictions.length -1 ; i >= 0 ; i--){


                var row = table.insertRow(1);


                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                // Add some text to the new cells:
                cell1.innerHTML = json.predictions[i]['tagName'];
                cell2.innerHTML = json.predictions[i]['probability'] * 100 + '%';

                


                }
            }
        }
        },false);

        },false);

        