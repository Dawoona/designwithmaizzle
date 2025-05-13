const nodemailer = require('nodemailer');
const path = require('path');

// Créer un transporteur pour envoyer l'email (ici avec un compte Gmail)
let transporter = nodemailer.createTransport({
  service: 'gmail',  // Utilise un autre service si nécessaire (ex: Outlook)
  auth: {
    user: 'matdawoon@gmail.com',  // Remplace par ton adresse email
    pass: 'brtn upzx tzgy mnew',     // Remplace par ton mot de passe
  },
});

// Options de l'email
let mailOptions = {
  from: 'matdawoon@gmail.com',  // L'email de l'expéditeur
  to: 'matdawoon@outlook.com',  // L'email du destinataire
  subject: 'Email avec image en CID',  // Sujet de l'email
  html: '<h1>Voici une image incluse via CID</h1><img src="cid:animated-header.webp" alt="expedition-33-video" width="600" />',  // HTML de l'email
  attachments: [
    {
      filename: 'animated-header.webp',  // Nom de l'image attachée
      path: path.join(__dirname, 'images/animated-header.webp'),  // Chemin local du fichier image (assurez-vous que le fichier existe)
      cid: 'header-animated.webp',  // L'ID de l'image qui sera référencé dans l'HTML
    },
  ],
};

// Envoi de l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erreur d\'envoi:', error);
  }
  console.log('Email envoyé: ' + info.response);
});