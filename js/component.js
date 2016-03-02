Newton.Component = function(props){
  this.props = props ? props : null;
  this.UID = Newton.UID;
  this.state = this.getInitialState();
  Newton.UID++;

  return this;
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

