$(function() {
  $('[name="btn"]:radio').change( function() {
    if($('[id=a]').prop('checked')){
      $('.text').hide();
      $('.text01').show();
    } else if ($('[id=b]').prop('checked')) {
      $('.text').hide();
      $('.text02').show();
    } else if ($('[id=c]').prop('checked')) {
      $('.text').hide();
      $('.text03').show();
    } 
	
	
	
	
  });
});