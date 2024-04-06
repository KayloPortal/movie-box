

function SectionContainer({customClass, children, full}) {
  return (
    <section className={customClass}>
      <div className={`container${full ? "-full" : ""} ${customClass}-container`}>{children}</div>
    </section>
  )
}

export default SectionContainer