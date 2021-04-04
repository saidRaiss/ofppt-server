module.exports = (sequelize, Sequelize) => {
    const Demande = sequelize.define("demandes", {
    nom: {
        type: Sequelize.STRING
      },
      prenom:{
        type: Sequelize.STRING
      },
      nomDirecteur:{
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      lieuNaissance: {
        type: Sequelize.STRING
      },
      nationalite: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      adressePostale: {
        type: Sequelize.STRING
      },
      codePostal: {
        type: Sequelize.STRING
      },
      dateNaissance: {
        type: Sequelize.STRING
      },
      situationFamilliale: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      directionGenerale: {
        type: Sequelize.STRING
      },
      villeAffectation: {
        type: Sequelize.STRING
      },
      etablissementAffectation: {
        type: Sequelize.STRING
      },
      fonctionExercee: {
        type: Sequelize.STRING
      },
      employeur: {
        type: Sequelize.STRING
      },
      adresseEmployeur: {
        type: Sequelize.STRING
      },
      codePostalEmployeur: {
        type: Sequelize.STRING
      },
      nombreAnneeExperience: {
        type: Sequelize.STRING
      },
      specialite: {
        type: Sequelize.STRING
      },
      nombreHeuresTravail: {
        type: Sequelize.STRING
      },
      typeVacataire: {
        type: Sequelize.STRING
      },
      etat: {
        type: Sequelize.STRING
      }
    });
    return Demande;
};