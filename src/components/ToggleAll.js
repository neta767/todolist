export function ToggleAll({onToggleAll, children}) {
    return (
        <section className="main">
            <input className="toggle-all"
                   type="checkbox"
                   onChange={(event) => onToggleAll(event.target.checked)}
            />
            {children}
        </section>
    );
}
