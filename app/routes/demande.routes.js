// const { verifySignUp } = require("../middleware");
const controller = require("../controllers/demande.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/demande/create",
      controller.createDemande
    );
    app.get(
      "/api/demande/user",
      controller.getDemande
    );
    app.get(
      "/api/demande/etablissement",
      controller.getDemandeByEtablissement
    );
    app.get(
      "/api/demande/region",
      controller.getDemandeByRegion
    );
    app.get(
      "/api/demande/all",
      controller.getAllDemande
    );
    app.post(
      "/api/demande/etat",
      controller.changeEtat
    );
};