const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into valeur(titre, contenu, img) 
                values(?,?,?)`,
      [data.Nom, data.Prenom, data.Age],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createComment: (data, callBack) => {
    pool.query(
      `insert into commentaire(Nom, Prenom, Commentaire) 
                values(?,?,?)`,
      [data.Nom, data.Prenom, data.Commentaire],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createOthers: (data, callBack) => {
    pool.query(
      `insert into autres(Nom, Prenom, Choix) 
                values(?,?,?)`,
      [data.Nom, data.Prenom, data.Choix],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  createDon: (data, callBack) => {
    pool.query(
      `insert into don(Nom, Prenom, Mail, Montant, Nume, CVC) 
                values(?,?,?,?,?,?)`,
      [data.Nom, data.Prenom, data.Mail, data.Montant, data.Nume, data.CVC],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from valeur where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select * from valeur where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUserByUserName: (Nom, callBack) => {
    pool.query(
      `select * from valeur where titre = ?`,
      [Nom],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUsers: (callBack) => {
    pool.query(
      `select id,titre, contenu, img from valeur`,
      [],
      (error, results) => {
        if (error) {
          callBack(error, null);
        }
        callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update valeur set first_name=?, first_name=?, login=?, email=?, password=?, telephone_number=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from valeur where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
