const SectionWrapper = (Component: () => JSX.Element) => function HOC() {
    return (
        <section
            style={{ padding: 6 }}
        >
            <Component />
        </section>
    )
}

export default SectionWrapper