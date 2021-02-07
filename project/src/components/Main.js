import { NavLink } from 'react-router-dom';
function Main() {
    return (
        <div className="container">
            <section className="home">
                <h2>Home</h2>
                <div className="home-link">
                    <div className="link-create">
                        <NavLink to="/create">Create note</NavLink>
                    </div>
                    <div className="link-note">
                        <NavLink to="/note">View Note</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
