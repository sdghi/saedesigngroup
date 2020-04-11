import { useMemo } from 'react'
import { useAppContext } from '../../provider'

export const useCursorChange = (cursorValue) => {
    const { setCursorElement } = useAppContext();

    const bind = useMemo(() => {
        return {
            onMouseOver: () => setCursorElement(cursorValue),
            onMouseLeave: () => setCursorElement({ initial: 'initial' })
        }
    }, [cursorValue, setCursorElement]);

    return [bind]
}