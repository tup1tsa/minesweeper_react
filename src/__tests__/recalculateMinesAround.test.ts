import { findCellsAround } from "../findCellsAround";
import { generateEmptyField } from "../generateEmptyField";
import { placeMines } from "../placeMines";
import { recalculateMinesAround } from "../recalculateMinesAround";

it("should calculate mines around properly for 2 by 4 field", () => {
  const field = generateEmptyField(4, 2);
  const mines = [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 1, column: 1 }
  ];
  const fieldWithMines = placeMines(field, mines);
  const calculatedField = recalculateMinesAround(
    fieldWithMines,
    findCellsAround
  );
  expect(calculatedField[1][0].minesAround).toBe(3);
  expect(calculatedField[0][2].minesAround).toBe(2);
  expect(calculatedField[0][2].minesAround).toBe(2);
  expect(calculatedField[1][3].minesAround).toBe(0);
  expect(calculatedField[1][3].minesAround).toBe(0);
});
