var EI = {
  
  getInitialState : function(){
    return {displayExitIntent: false}
  },

  handleMouseout: function(callback){
    var html = document.documentElement
    function handleMouseleave(e){
      if (e.clientY<0) {
        callback()
        html.removeEventListener('mouseleave', handleMouseleave)
      }
    }
    html.addEventListener('mouseleave',handleMouseleave)
  }
}

module.exports = EI
