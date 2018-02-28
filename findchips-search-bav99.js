/* jshint expr: true */
module.exports = {
  tags: ['findchips'],

  'Demo test Findchips' : function (client) {
    client
      .url('http://findchips.com/search/bav99')
      
    //should have "bav99" in h2
    .verify.containsText('.title-holder h2', 'bav99')
    //should have search box
    .assert.elementPresent('#search')
    //should have footer
    .assert.elementPresent('.footer')
    //should have some results
    .assert.elementPresent('.distributor-results')
    //click on "Detail" link (top left)
    .click('#j-nav li:last-child');


  }
};
