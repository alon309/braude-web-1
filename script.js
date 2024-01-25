        var input;
        var input_value;

        function get_factorial(x){
            if( x==1){
                return 1
            }
            return x*get_factorial(x-1)
        }

        function appendCharacter(char){
            input = document.getElementById('display');

            if(char=='.'){
                //only one dot can be in the number
                if(!input.value.includes('.')){
                    input.value += char;
                }
            }
            else{
            input.value += char;
            }
        }

        function clearInput() {
            document.getElementById('display').value = '';
        }

        function deleteLast() {
            input = document.getElementById('display');
            input.value = input.value.slice(0, -1);
        }

        function pie_func() {
            input = document.getElementById('display');
            input.value += Math.PI;
        }

        function e_func() {
            input = document.getElementById('display');
            input.value += Math.E;
        }

        function square_func(){
            input = document.getElementById('display');
            input_value = parseFloat(input.value);
            //check if number
            if(!isNaN(input_value)) {
                input.value = input_value ** 2;
            }
        }

        function denominator(){
            input = document.getElementById('display');
            input_value = parseFloat(input.value);
            if(!isNaN(input_value) && input_value != 0) {
                input.value = 1 / input_value ;
            }
            else{
                alert('Must be number greater than 0')
            }
        }

        function absolute_func(){
            input = document.getElementById('display');
            input_value = parseFloat(input.value);
            //check if number
            if(!isNaN(input_value)) {
                input.value = Math.abs(input_value);
            }
        }

        function exponential_func(){
            input = document.getElementById('display');
            input_value = parseFloat(input.value);
            //check if number
            if(!isNaN(input_value)) {
                input_value.value = Math.exp(input_value);
            }
        }

        function mod_func(){
            input = document.getElementById('display');
            input_value = parseFloat(input.value);
            var divisor = prompt('Enter the divisor:', '');
            //check
            if(!isNaN(input_value) && parseFloat(divisor)!=0) {
                input.value = input_value % parseFloat(divisor);
            }
        }

        function root2_func(){
            input = document.getElementById('display');
            input_value = parseFloat(input.value);
            if(!isNaN(input_value) && input_value >= 0) {
                input.value = Math.pow(input_value,0.5);
            }
        }
        
        function factorial_func(num){
            input = document.getElementById('display');
            input_value = parseFloat(input.value);
            //must be int greater than 0
            if (input_value >= 0 && Number.isInteger(input_value)) {
                input.value = get_factorial(input_value);
            }
        }

        function xyPow_func(){
            input = document.getElementById('display');
            input.value += '**';
        }

        function log_func(){
            input = document.getElementById('display');
            input.value += 'Math.log10(';
        }

        function ln_func(){
            input = document.getElementById('display');
            input.value += 'Math.log(';
        }

        function opposite_func(){
            input = document.getElementById('display');
            input_value = parseFloat(input.value);
            //check if number
            if(!isNaN(input_value)) {
            input.value = input_value * (-1)
            }
        }

        function calculateResult(){
            input = document.getElementById('display');
            input_value = parseFloat(input.value);
            input.value = eval(input.value);
        }