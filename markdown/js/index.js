new Vue({
  el: '#editor',
  data: {
    input: '# hello'
  },
  filters: {
    marked: marked
  },
  ready(){

  },
  watch: {
    input(val){
        $('pre code').each(function(i,item){
          hljs.highlightBlock(item);
          //获取行数
          var lines = $(this).text().split('\n').length - 1;
          var $numbering = $('<ul/>').addClass('pre-numbering');
          for(i=1;i<=lines;i++){
              $numbering.append($('<li/>').text(i));
          }
          $(this)
              .addClass('has-numbering')
              .parent()
              .append($numbering);
      });
    }
  }
})
