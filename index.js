$(document).ready(function(){

      $("#sub").click(function(event){
            event.preventDefault();

            const amount = $('#amt').val();
            const rate = $('#rate').val();
            const months = $('#time').val();
            
            const interest = (amount * (rate * 0.01)) / months;
            const total = ((amount / months) + interest).toFixed(2);
        
            $('#output').html("EMI: (₹)" + total);

      })
            
      })
       
	// section in the variable
	







	













