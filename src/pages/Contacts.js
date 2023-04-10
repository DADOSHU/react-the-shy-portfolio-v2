const Contacts = () => {
    return (
        <>
            <main className="section indent" id="contacts">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Rostov-on-Don, Russia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram</h2>
                            <p><a href="https://telegram.me/davabecker" target="_blank" rel="noreferrer noopener">@davabecker</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:askdeveloper@mail.ru" target="_blank" rel="noreferrer noopener">askdeveloper@mail.ru</a></p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}
 
export default Contacts;