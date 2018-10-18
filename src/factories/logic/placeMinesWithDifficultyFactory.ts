import { ICellPosition } from "../../application/actions";
import { findCellsAround } from "../../application/logic/findCellsAround";
import { placeMines } from "../../application/logic/placeMines";
import { placeMinesWithDifficulty } from "../../application/logic/placeMinesWithDifficulty";
import { Field } from "../../application/reducers/toggleCellReducer";
import { calculateDifficultyLevelFactory } from "./calculateDifficultyLevelFactory";
import { generateMinesFactory } from "./generateMinesFactory";
import { generateSeedFactory } from "./generateSeedFactory";
import { recalculateMinesAroundFactory } from "./recalculateMinesAroundFactory";

export type PlaceMinesWithDifficultyFactory = (
  field: Field,
  mines: number,
  fromPosition: ICellPosition,
  minDifficulty?: number
) => { field: Field; seed: string };

export const placeMinesWithDifficultyFactory: PlaceMinesWithDifficultyFactory = (
  field,
  mines,
  fromPosition,
  minDifficulty
) =>
  placeMinesWithDifficulty(
    field,
    mines,
    fromPosition,
    {
      calculateDifficultyLevel: calculateDifficultyLevelFactory,
      generateMines: generateMinesFactory,
      placeMines,
      findCellsAround,
      recalculateMinesAround: recalculateMinesAroundFactory,
      generateSeed: generateSeedFactory
    },
    minDifficulty
  );