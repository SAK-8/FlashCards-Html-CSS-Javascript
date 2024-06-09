const flipCard = document.querySelector('#flip');
                const side1 = document.querySelector("#side1");
                const side2 = document.querySelector("#side2");
                var counter = 0;
                var capacity = 0;
                var terms = [];
                var definitions = [];
                var index = -1;
                function NextTerm(){
                    if(capacity<1){
                        console.log("Can't do that");
                    }else{
                        index++;
                        if(index == capacity){
                            index = 0;
                        }
                        document.getElementById("side1").textContent=terms[index];
                        document.getElementById("side2").textContent=definitions[index];
                    }
                }
                function addTerm(){
                    var inputTerm = document.getElementById('term');
                    var inputDefinition = document.getElementById('definition');
                    index++;
                    terms[index] = inputTerm.value;
                    definitions[index] = inputDefinition.value;
                    capacity++;
                    document.getElementById("side1").textContent=terms[index];
                    document.getElementById("side2").textContent=definitions[index];
                }
                flipCard.addEventListener('click', function(){
                    if(counter%2 == 0){
                        side1.style.display='none';
                        side2.style.display='block';
                        counter++;
                        
                    }else{
                        side2.style.display='none';
                        side1.style.display='block';
                        counter++;
                        
                    }
                }) 