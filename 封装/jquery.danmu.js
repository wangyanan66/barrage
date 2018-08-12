(function($){
  function randomColor(m,n){
    var num = parseInt(Math.random()*(m-n+1))+n;
    return num;
  }
  $danmu = function(o){
    var defaluts = {
      event:'click',
      button:'#emit',
      textBut:'#but',
      contriner:'.box'
    }
    for(var key in o){
      defaluts[key] = o[key];
    }
    $(defaluts.button).on(defaluts.event,function(){
      var v = $(defaluts.textBut).val();
      if(v.trim().length != 0){
        var top = randomColor(450,10);
        var left = $(defaluts.contriner).width();
        var colors = 'rgb('+randomColor(255,0)+','+randomColor(255,0)+','+randomColor(255,0)+')';
        var $span = $('<span></span>');
        $span.text(v).appendTo(defaluts.contriner).css({top:top,left:left,width:$span.width(),color:colors})
        .animate({left:-$span.width()},10000,function(){
          $span.remove();
        })
        //设置的话只需传参就行，不用等于
        $(defaluts.textBut).val('');
      }else{
        alert('内容不能为空');
      }
    })  
  }
})(window.jQuery)