import { HistoryEditor } from 'slate-history/dist/history-editor';
import { ReactEditor, useSlateStatic } from 'slate-react';
import { SPEditor } from '../types/SPEditor';
import { TEditor } from '../types/TEditor';

/**
 * Typed {@link useSlateStatic} & SPEditor.
 * Needs to be called in a child component of `Plate`.
 * Else, use `useStoreEditorRef`.
 */
export const useEditorRef = <
  T extends TEditor = ReactEditor & HistoryEditor
>() => (useSlateStatic() as unknown) as T & SPEditor;
