Newton.Component = function(props){
  this.props = props;
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
        console.log(state, newState[state]);
      }
    }
  },

  getUID: function(){
    return this.UID;
  },

  render: function(){
    return null;
  }
}

