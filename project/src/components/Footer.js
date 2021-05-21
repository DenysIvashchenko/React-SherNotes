function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="social">
            <a href="tel:+971564819752">
              <img src="../img/Telegram.png" alt="a" />
            </a>
            <a
              href="https://github.com/DenysIvashchenko"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../img/github.png" alt="git" />
            </a>
            <a href="mailto:zim21den21@gmail.com">
              <img src="../img/gmail.png" alt="a" />
            </a>
            <a
              href="https://www.linkedin.com/in/denys-ivashchenko-45143469/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../img/linked.png" alt="link" />
            </a>
          </div>
          <p className="copirating">
            Copyright © 2021 Denys Ivashchenko. All rights reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
