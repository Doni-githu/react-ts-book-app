const SectionWrapper = (Component: () => JSX.Element) => function HOC() {
    return (
        <section
            style={{ padding: 6, backgroundColor: 'white', marginBottom: 20}}
        >
            <Component />
        </section>
    )
}

export default SectionWrapper