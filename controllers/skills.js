const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Dev Skill List',
    });
}

function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Skill Details'
    });
  }

  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Dev Skill' });
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

function edit(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit', {
        title: "Edit Dev Skill",
        skill
    })
}

function update(req, res) {
    req.body.desc = !!req.body.desc
    Skill.update(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
}