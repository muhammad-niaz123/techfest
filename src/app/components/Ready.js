"use client"
import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function Ready() {
  const lref = useRef(null)
  const rref = useRef(null)
  const eref = useRef(null)

  useEffect(() => {
    const animateEye = (eyeRef, e) => {
      const eye = eyeRef.current.getBoundingClientRect()
      const centerX = eye.left + eye.width / 2
      const centerY = eye.top + eye.height / 2

      const dx = e.clientX - centerX
      const dy = e.clientY - centerY

console.log("DX",dx,"dy",dy)

      const angle = Math.atan2(dy, dx) * (180 / Math.PI)
      const distance = Math.min(Math.sqrt(dx ** 2 + dy ** 2), 25)
      const moveX = (dx / Math.sqrt(dx ** 2 + dy ** 2)) * distance
      const moveY = (dy / Math.sqrt(dx ** 2 + dy ** 2)) * distance

      gsap.to(eyeRef.current, {
        rotation: angle,
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out",
        transformOrigin: "center center",
      })
    }

    const handleMouseMove = (e) => {
      animateEye(lref, e)
      animateEye(rref, e)
    }

    const area = eref.current
    area.addEventListener("mousemove", handleMouseMove)
    return () => area.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="w-[100vw] h-[100vh] flex items-center justify-center"
      ref={eref}
    >
      <div className="eyes w-[60vw] h-[60vh] bg-lime-300 rounded flex items-center justify-center">
        <div className="w-full h-[60%] flex items-center justify-center gap-10">
          {/* Eye 1 */}
          <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center">
            <div className="w-[120px] h-[120px] bg-black rounded-full overflow-hidden relative flex items-center justify-center">
              <div
                ref={lref}
                className="absolute w-[40px] h-[40px] bg-white rounded-full"
              ></div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center">
            <div className="w-[120px] h-[120px] bg-black rounded-full overflow-hidden relative flex items-center justify-center">
              <div
                ref={rref}
                className="absolute w-[40px] h-[40px] bg-white rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
