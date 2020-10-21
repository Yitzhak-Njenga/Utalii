function myFunction(x) {
    x.classList.toggle("change");
  }

  $(document).ready(function(){
    $("#nairobi").click(function(){
      $("#row1").show('slow');
    });

    $("#close1").click(function(){
        $("#row1").hide('slow');
    })


    $("#mombasa").click(function(){
        $("#row2").show('slow');
    })

    $("#close2").click(function(){
        $("#row2").hide('slow');
    })


    $("#nakuru").click(function(){
        $("#row3").show('slow');
    })
    $('#close3').click(function(){
        $('#row3').hide('slow');
    })

    $('#kisumu').click(function(){
        $('#row4').show('slow');
    })
    $('#close4').click(function(){
        $('#row4').hide('slow');
    })
  });