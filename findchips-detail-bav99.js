/* jshint expr: true */
module.exports = {
  tags: ['findchips'],
    'Demo test Findchips' : function (client) {
    client
      .url('http://findchips.com/detail/bav99')
      

    //check for header and footer
    .assert.elementPresent('#header')
    .assert.elementPresent('.footer')
    //check if "Manufacturer Datasheets" section is there
    .assert.elementPresent('.datasheets-list')
    //check if "Reference Designs" is visible
    .assert.visible('.reference-designs-holder');

    
  }
};
