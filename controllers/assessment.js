"use strict";

const logger = require("../utils/logger");
const assessmentStore = require("../models/assessment-store");
const userStore = require("../models/user-store");
const uuid = require("uuid");

const assessment = {
  index(request, response) {
    const userid = request.params.id;
    const viewData = {
      user: userStore.getUserById(userid),
      user_assessments: assessmentStore.getUserAssessments(userid)
    };
    response.render("assessment", viewData);
  },
  addComment(request, response) {
    const assessmentId = request.params.id;
    console.log(request.body.comment);
    assessmentStore.addComment(assessmentId, request.body.comment);
    response.redirect("/dashboard");
  }
};

module.exports = assessment;
