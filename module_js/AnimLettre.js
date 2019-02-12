import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(o, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.lesLettres = o.lesLettres
        this.elmParent = elementParent
        this.AnimLettre(this.lesLettres)
        this.fonction = fonction
    }


    AnimLettre() {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        console.log('introduction')
        let elmConteneur = this.creerElement(this.elmParent,
            'section',
            '',
            'mot')
            
        for (let uneLettre of lesLettres){
			
                uneLettre.style.animationDelay = (i * 0.5) + "s";
                uneLettre.style.color = tabCouleur[(i++)%7]
                
        }
        
    
        //Quand l'animation de la dernière lettre du mot joyeux est terminée la fonction animerNoel est appelée	
        lesLettres[nbLettres - 1].addEventListener("animationend", animerNoel, false);
        console.log('lesLettres[nbLettres - 1]' + lesLettres[nbLettres - 1].innerHTML)



        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
        elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        noeud.classList.add(classCSS)
        elmParent.appendChild(noeud)
        return noeud
    }

    terminerIntro(evt) {
        this.elmParent.firstChild.classList.add('deplacementContenuIntro')
        this.elmParent.firstChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent)
        this.fonction()
    }

}