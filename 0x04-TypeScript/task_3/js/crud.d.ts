import { RowID } from './interface';
import { RowElement } from './interface';

declare namespace crud {
    function insertRow(row: RowElement): RowID;
    function deleteRow(rowID: RowID): void;
    function updateRow(rowID: RowID, row: RowElement): RowID;
}

export = crud;