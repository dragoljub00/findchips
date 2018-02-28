/* jshint expr: true */
module.exports = {
  tags: ['findchips'],
  'Demo test Findchips' : function (client) {
    client
      .url('http://findchips.com')
      

    //check if "Get instant insight into any electronic component." text is in h2
    .verify.containsText('.intro-left h2', 'Get instant insight into any electronic component.')
    //check if search box is there
    .assert.elementPresent('#search')
    //"upload bom" button should be present
    .assert.elementPresent('#bom-upload-search')
    //"Live Electronic Component Searches" has to be present and to have list of parts
    .verify.containsText('.parts-sections-list h3', 'Live Electronic Component Searches')
    .assert.elementPresent('#parts-sections-livelist')
    //"Live Electronic Component Searches by Region" should be there with 4 regions
    .verify.containsText('.parts-sections-list h3', 'Live Electronic Component Searches by Region')
    .assert.elementPresent('#asia', '#china', '#europe', '#america')
    //check if footer is there
    .assert.elementPresent('.public-footer')
    //put "bav99" in search box and click "Search" button
    .setValue('#part', 'bav99')
    .click('input[value=Search]');
    

  }
};
