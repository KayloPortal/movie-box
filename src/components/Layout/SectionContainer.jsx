

function SectionContainer({customClass, children}) {
  return (
    <section className={customClass}>
      <div className={`container ${customClass}-container`}>{children}</div>
    </section>
  )
}

export default SectionContainer