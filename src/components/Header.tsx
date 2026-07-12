type HeaderProps = { onHome: () => void }
export function Header({ onHome }: HeaderProps) { return <header className="site-header"><a className="logo" href="#home" onClick={onHome}>PJS</a><nav aria-label="주요 탐색">{['Experience', 'Tech', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={onHome}>{item}</a>)}</nav></header> }
