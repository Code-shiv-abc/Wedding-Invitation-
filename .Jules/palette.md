## 2024-05-22 - Framer Motion Accessibility
**Learning:** `motion.div` is frequently used for interactive elements (like scroll indicators) but lacks native semantics.
**Action:** Use `<motion.button>` instead of `<motion.div>` for clickable elements. It provides native button semantics (`role="button"`, keyboard support, focus handling) out of the box, reducing code complexity and accessibility errors.
