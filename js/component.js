Newton.Component = function(props){
  var UID = Newton.getUID();

  var getUID = function(){
    return UID;
  };

  this.getUID = function(){
    return getUID();
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

    this.render();
  },

  render: function(){
    return null;
  }
}

