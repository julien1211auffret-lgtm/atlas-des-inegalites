const slider = document.getElementById("slider");

const valeur = document.getElementById("valeur");

const sante = document.getElementById("sante-result");
const education = document.getElementById("education-result");
const confiance = document.getElementById("confiance-result");

function updateSimulation() {

    const niveau = parseInt(slider.value);

    valeur.textContent = niveau;

    if (niveau < 30) {

        sante.innerHTML =
            "❤️ Santé : les indicateurs de santé sont généralement plus favorables.";

        education.innerHTML =
            "🎓 Éducation : la mobilité sociale tend à être plus importante.";

        confiance.innerHTML =
            "🤝 Confiance sociale : les niveaux de confiance sont souvent plus élevés.";

    }

    else if (niveau < 70) {

        sante.innerHTML =
            "❤️ Santé : situation intermédiaire selon les politiques publiques et le contexte économique.";

        education.innerHTML =
            "🎓 Éducation : les écarts de réussite peuvent commencer à se creuser.";

        confiance.innerHTML =
            "🤝 Confiance sociale : les résultats varient fortement selon les pays.";

    }

    else {

        sante.innerHTML =
            "❤️ Santé : certaines études observent davantage de problèmes de santé et de stress chronique.";

        education.innerHTML =
            "🎓 Éducation : l'origine sociale peut jouer un rôle plus important dans la réussite scolaire.";

        confiance.innerHTML =
            "🤝 Confiance sociale : plusieurs travaux suggèrent une diminution de la confiance collective.";

    }

}

slider.addEventListener("input", updateSimulation);

updateSimulation();
