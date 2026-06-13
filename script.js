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
            "❤️ Santé : les indicateurs de santé sont généralement plus favorables dans les sociétés où les écarts sociaux sont moins marqués.";

        education.innerHTML =
            "🎓 Éducation : la mobilité sociale tend à être plus importante lorsque les écarts de départ sont moins importants.";

        confiance.innerHTML =
            "🤝 Confiance sociale : les niveaux de confiance collective sont souvent plus élevés dans les sociétés plus égalitaires.";

    }

    else if (niveau < 70) {

        sante.innerHTML =
            "❤️ Santé : les effets dépendent fortement des politiques publiques, de l’accès aux soins et des conditions de vie.";

        education.innerHTML =
            "🎓 Éducation : les écarts de réussite peuvent se creuser selon l’origine sociale, le territoire et les ressources familiales.";

        confiance.innerHTML =
            "🤝 Confiance sociale : les résultats varient selon les pays, l’histoire sociale et la qualité des institutions.";

    }

    else {

        sante.innerHTML =
            "❤️ Santé : plusieurs études observent davantage de stress chronique, de maladies et d’inégalités d’espérance de vie.";

        education.innerHTML =
            "🎓 Éducation : l’origine sociale peut jouer un rôle plus important dans les parcours scolaires et professionnels.";

        confiance.innerHTML =
            "🤝 Confiance sociale : les sociétés très inégalitaires peuvent connaître davantage de défiance, de tensions et de sentiment d’injustice.";

    }

}

slider.addEventListener("input", updateSimulation);

updateSimulation();
