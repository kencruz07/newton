Newton.Component = function(props){
  this.props = props ? props : null;
  this.state = this.getInitialState();
  this.UID = Newton.UID;
  Newton.updateUID();
};

Newton.Component.prototype = {
  getInitialState: function(){
    return {};
  },

  setState: function(newState){
    for (var state in newState) {
      if (newState.hasOwnProperty(state)) {
        this.state[state] = newState[state]
      }
    }

    this.render();
  },

  getUID: function(){
    return this.UID;
  },

  render: function(){
    return null;
  }
}

