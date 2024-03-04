import express from "express"; // Import du module Express
import path from "path"; // Import du module path pour la gestion des chemins de fichiers
import { fileURLToPath } from "url"; // Import du module url pour la conversion des URL en chemins de fichiers
import cors from "cors"; // Import du module cors pour gérer les requêtes Cross-Origin Resource Sharing (CORS)

// Récupération du chemin du fichier en cours d'exécution et du répertoire parent
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Configuration du port et de l'hôte
const port = 8070;
const host = "127.0.0.1";

// Initialisation de l'application Express
const app = express();

/**
 * Middleware pour parser les données de formulaire.
 * @function
 * @name express.urlencoded
 * @memberof app
 * @param {Object} options - Options de configuration.
 * @param {boolean} options.extended - Si true, utilise la bibliothèque qs pour traiter les données de formulaire.
 */

app.use(express.urlencoded({ extended: true }));

/**
 * Middleware pour autoriser les requêtes CORS.
 * @function
 * @name cors
 * @memberof app
 */

app.use(cors());

/**
 * Middleware pour servir les fichiers statiques depuis le répertoire 'public'.
 * @function
 * @name express.static
 * @memberof app
 * @param {string} path - Chemin du répertoire contenant les fichiers statiques.
 */

app.use(express.static(path.join(dirname, "public")));

/**
 * Middleware pour servir l'icône de favicon.
 * @function
 * @name express.static
 * @memberof app
 * @param {string} path - Chemin du fichier de l'icône de favicon.
 */

app.use(
  "/favicon.ico",
  express.static(path.join(dirname, "public", "images", "favicon.png"))
);

/**
 * Route pour la page d'accueil.
 * @name GET_/
 * @function
 * @memberof app
 * @param {Object} req - Objet représentant la requête HTTP.
 * @param {Object} res - Objet représentant la réponse HTTP.
 * @param {function} next - Fonction pour passer à la fonction middleware suivante.
 */

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(dirname) }, (err) => {
    if (err) throw new Error(err);
  });
});

/**
 * Route pour recevoir les commentaires.
 * @name POST_/comment
 * @function
 * @memberof app
 * @param {Object} req - Objet représentant la requête HTTP.
 * @param {Object} res - Objet représentant la réponse HTTP.
 */

app.post("/comment", (req, res) => {
  const comment = req.body.message; // Récupération du commentaire à partir du corps de la requête
  res.send(comment); // Envoi du commentaire en réponse
});

/**
 * Démarrage du serveur sur le port spécifié et l'hôte spécifié.
 * @function
 * @name app.listen
 * @memberof app
 * @param {number} port - Port sur lequel le serveur écoute.
 * @param {string} host - Nom d'hôte ou adresse IP sur laquelle le serveur écoute.
 * @param {function} callback - Fonction de rappel appelée une fois le serveur démarré.
 */

app.listen(port, host, () => {
  console.info(`Server started @ http://${host}:${port}.`); // Message de confirmation du démarrage du serveur
});
