import {
  FloatingPortal,
  Placement,
  arrow,
  offset,
  safePolygon,
  shift,
  useFloating,
  useHover,
  useInteractions
} from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import React, { ElementType, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  offSet?: number
  as?: ElementType
  initialOpen?: boolean
  placement?: Placement
}

export default function Popover({
  children,
  renderPopover,
  className,
  offSet = 7,
  as: ElementType = 'div',
  initialOpen,
  placement
}: Props) {
  const [isOpen, setIsOpen] = useState(initialOpen || false)

  const arrowRef = useRef<HTMLElement>(null)
  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [shift(), arrow({ element: arrowRef }), offset(offSet)],
    placement
  })
  const hover = useHover(context, { handleClose: safePolygon() })
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])
  return (
    <ElementType className={className} ref={refs.setReference} {...getReferenceProps()}>
      {children}
      {isOpen && (
        <FloatingPortal>
          <AnimatePresence>
            <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
              <motion.div
                style={{
                  width: 'max-content',
                  transformOrigin: `${middlewareData.arrow?.x}px top`
                }}
                initial={{ opacity: 0, transform: 'scale(0)' }}
                animate={{ opacity: 1, transform: 'scale(1)' }}
                exit={{ opacity: 0, transform: 'scale(0)' }}
                transition={{ duration: 0.2 }}
              >
                <span
                  ref={arrowRef}
                  className='z-20 translate-y-[-95%] border-[10px] border-x-transparent border-b-white border-t-transparent'
                  style={{
                    position: 'absolute',
                    left: middlewareData.arrow?.x,
                    top: middlewareData.arrow?.y
                  }}
                />
                {renderPopover}
              </motion.div>
            </div>
          </AnimatePresence>
        </FloatingPortal>
      )}
    </ElementType>
  )
}
