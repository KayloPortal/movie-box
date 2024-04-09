

function SectionContainer({customClass, containerClass, children, full}) {
  return (
    <section className={customClass}>
      <div className={`container${full ? "-full" : ""} ${containerClass}`}>{children}</div>
    </section>
  )
}

export default SectionContainer