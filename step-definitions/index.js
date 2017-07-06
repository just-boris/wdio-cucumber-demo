const assert = require("assert");

module.exports = function() {
  this.Given(/^the open page "([^"]*)"$/, url => {
    browser.url(url);
  });

  this.Then(/I click on (\d+)\w{2} link/, index => {
    browser.execute(index => {
      document
        .querySelectorAll(".athing")
        [index].nextSibling.querySelector(".subtext :last-child")
        .click();
    }, index);
  });

  this.Then("pending step", () => "pending");

  this.Then(/^should see (\d+) posts$/, postsCount => {
    const posts = browser.elements(".athing").value;
    assert.equal(posts.length, postsCount);
  });

  this.Then("should see some comments", () => {
    const result = browser.element(".comment-tree");
    assert.ok(result);
  });
};
