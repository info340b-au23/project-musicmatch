//our footer for each page
import '../style.css'; //import the custom CSS file

export function Footer() {
    return (
        <footer className="footerAllPages">
            <div className="container">
                <p><a href="mailto:email@musicmatch.uw.edu"><span className="material-icons">email</span> email@musicmatch.uw.edu</a></p>
                <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
                <p>&copy; MusicMatch 2023</p>
            </div>
        </footer>
    );
}