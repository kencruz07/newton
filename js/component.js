(function(){

  Newton.Component = function(props){
    var _UID = Newton.getUID();

    var _getUID = function(){
      return _UID;
    };



    this.getUID = function(){
      return _getUID();
    };

    this.props = props ? props : null;
    this.state = this.getInitialState();

    Newton.updateUID();
  };





  Newton.Component.prototype = {
    getInitialState: function(){
      return {};
    },

    setState: function(newState){
      for (var state in newState) {
        if (newState.hasOwnProperty(state)) this.state[state] = newState[state];
      }

      Newton.DOM.update(this);
    },

    render: function(){
      return null;
    }
  }

})();

