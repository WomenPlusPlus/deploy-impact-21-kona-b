import {
  MdFamilyRestroom,
  MdWork,
  MdFoodBank,
} from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";
import {
  GiHealthNormal,
  GiOpenBook,
  GiPodiumWinner,
  GiPlanetConquest,
  GiEarthAfricaEurope,
  GiRollingEnergy,
} from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { FaFish, FaHandHoldingWater,FaFemale,FaMale } from "react-icons/fa";
import { BsTreeFill, BsGenderFemale } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { SiHandshake } from "react-icons/si";

const iconMap = {
  male: FaMale,
  female: FaFemale,
  socialProtection: MdFamilyRestroom,
  food: RiPlantFill,
  wellBeing: GiHealthNormal,
  education: GiOpenBook,
  genderEquality: BsGenderFemale,
  cleanWater: FaHandHoldingWater,
  energy: GiRollingEnergy,
  workAndEntrepreneurship: MdWork,
  informationTechnology: GrTechnology,
  equalOpportunities: GiPodiumWinner,
  housing: GiPlanetConquest,
  sustainableLifestyles: MdFoodBank,
  climateAction: GiEarthAfricaEurope,
  fishing: FaFish,
  biodiversity: BsTreeFill,
  justiceAndLegal: GoLaw,
  partnerships: SiHandshake,
};

export default iconMap;
