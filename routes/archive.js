/*
 * GET archive page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
  res.render("archive", {
    data,
    title: "Archive | Emily Nguyen",
    description:
      "Human-Computer Interaction student at UC San Diego. Loves crafting visual experiences and seeing them through to implementation."
  });
};