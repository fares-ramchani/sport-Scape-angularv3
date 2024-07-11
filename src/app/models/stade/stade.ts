import { Activite } from "../activite/activite.model"
import { Propritaire } from "../modelPropritaireDeStade/Propritaire.model"
import { PhotoStade } from "../photoStade/photo-stade.model"

export interface Stade {
    ville:String
    nomStade:String
    photoStade:PhotoStade[]
    longtitude:String
    latitude:String
    activite:Activite
    proprietaireDeStade:Propritaire
}
