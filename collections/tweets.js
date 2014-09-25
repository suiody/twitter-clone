Tweets = new Mongo.Collection('tweets')

Tweets.before.insert(function (userId, doc) {
  doc.tweetedAt = Date.now();
  doc.userId = userId;
});

Tweets.allow({
  insert: function(userId, doc) {
    return true;
  },

  update: function(userId, doc, fields, modifier) {
    return false;
  },

  remove: function(userId, doc) {
    return doc.userId === userId;
  }
})
