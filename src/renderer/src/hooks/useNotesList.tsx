import { notesAtom, selectedNoteIndexAtom } from '@/store'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
  // seperated component value get
  const notes = useAtomValue(notesAtom)

  // iseAtom usied to same component set value and get value
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
