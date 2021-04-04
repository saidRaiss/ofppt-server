const db = require("../models");
// const config = require("../config/auth.config");
const User = db.user;
const Demande = db.demande;

// const Op = db.Sequelize.Op;

// var jwt = require("jsonwebtoken");
// var bcrypt = require("bcryptjs");

exports.createDemande = (req, res) => {
    Demande.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        nomDirecteur: req.body.nomDirecteur,
        email: req.body.email,
        lieuNaissance: req.body.lieuNaissance,
        nationalite: req.body.nationalite,
        ville: req.body.ville,
        adressePostale: req.body.adressePostale,
        codePostal: req.body.codePostal,
        dateNaissance: req.body.dateNaissance,
        situationFamilliale: req.body.situationFamilliale,
        country: req.body.country,
        directionGenerale: req.body.directionGenerale,
        villeAffectation: req.body.villeAffectation,
        etablissementAffectation: req.body.etablissementAffectation,
        fonctionExercee: req.body.fonctionExercee,
        employeur: req.body.employeur,
        adresseEmployeur: req.body.adresseEmployeur,
        codePostalEmployeur: req.body.codePostalEmployeur,
        nombreAnneeExperience: req.body.nombreAnneeExperience,
        specialite: req.body.specialite,
        nombreHeuresTravail: req.body.nombreHeuresTravail,
        typeVacataire: req.body.typeVacataire,
        etat:"En attend"
    }).then(demande => {
        User.findOne({
            where: {
              email: req.body.email
            }
        }).then(user => {
            user.getDemandes().then(demandes => {
                for (let i = 0; i < demandes.length; i++) {
                    Demande.destroy({
                        where: {
                            id: demandes[i].id
                          }
                    });
                }
                user.setDemandes(demande).then(() =>{
                    return res.send("Demande created!")
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })
    
}
exports.getDemande = (req, res) => {
    Demande.findOne({
        where:{
            email: req.body.email
        }
    }).then(demande => {
        if(demande) {
            res.send(demande)
        }
        else {
            res.send("{}")
        }
    }).catch(err => {
        console.log(err)
    });
}
exports.getDemandeByEtablissement = (req, res) => {
    Demande.findAll({
        where:{
            etablissementAffectation: req.body.etablissementAffectation
        }
    }).then(demandes => {
        res.send(demandes)
    })
}
exports.getDemandeByRegion = (req, res) => {
    Demande.findAll({
        where:{
            directionGenerale: req.body.directionGenerale
        }
    }).then(demandes => {
        res.send(demandes)
    })
}
exports.getAllDemande = (req, res) => {
    Demande.findAll().then(demandes => {
        res.send(demandes)
    })
}
exports.changeEtat = async (req, res) => {
    try{const result =  await Demande.update({etat:req.body.etat}, {where:{email:req.body.email}})
    if(result){
        res.send(result)
    }}catch(err){
        res.send(err)
    }
}