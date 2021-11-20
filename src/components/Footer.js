
function Footer() {
    return(
        <>
            <footer role="contentinfo" className="footer">
                {/* TO DO: link 고쳐야함 */}
                <div className="footer-copyright">
                    <a href="https://github.com/Makeet/minflix">
                    Minflix
                    </a> &copy;Makeet {new Date().getFullYear()}.
                </div>
            </footer>
        </>
    )
}
export default Footer;