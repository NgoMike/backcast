var Video = Backbone.Model.extend({ 

  flag: false,

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
    this.set('flag', !this.get('flag'));
  }

});
