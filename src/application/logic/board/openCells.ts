import { ICellPosition } from "../../actions/actions";
import { Field } from "../../reducers/toggleCellReducer";

export type OpenCells = (
  field: Field,
  positions: ReadonlyArray<ICellPosition>
) => Field;

export const openCells: OpenCells = (field, positions) =>
  field.map((row, rowIndex) =>
    row.map((cell, columnIndex) => {
      const shouldOpen =
        positions.find(
          position =>
            position.column === columnIndex && position.row === rowIndex
        ) !== undefined;
      if (shouldOpen) {
        return { ...cell, open: true };
      }
      return cell;
    })
  );
