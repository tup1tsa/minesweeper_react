import {
  MAX_HEIGHT,
  MAX_WIDTH,
  MIN_EMPTY_CELLS,
  MIN_HEIGHT,
  MIN_MINES,
  MIN_WIDTH
} from "../../constants";
import { IGameOptionsState } from "../../reducers/gameOptionsReducer";
import { CheckNumberRange } from "./checkNumberRange";

export type ValidateGameOptions = (
  options: IGameOptionsState,
  checkNumberRange: CheckNumberRange
) => boolean;

export const validateGameOptions: ValidateGameOptions = (
  { height, width, mines },
  checkNumberRange
) =>
  checkNumberRange(width, MIN_WIDTH, MAX_WIDTH) === "" &&
  checkNumberRange(height, MIN_HEIGHT, MAX_HEIGHT) === "" &&
  checkNumberRange(mines, MIN_MINES, width * height - MIN_EMPTY_CELLS) === "";
