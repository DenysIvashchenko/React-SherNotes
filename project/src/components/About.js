function About() {
  return (
    <div className="container">
      <section className="about">
        <h2>About</h2>

        <div className="text">
          <p>
            <b>ShareNotes</b> – service for exchanging notes. Create a note,
            send a link to the note and your friend can view it. After viewing,
            the note will be deleted (or after 15 minutes from the moment of
            creation).
          </p>
          <p>How do I take a note? </p>
          <ul>
            <li>Follow the link</li>
            <li>Paste the text and click Create</li>
            <li>Send the generated address to a friend!</li>
          </ul>
          <p>
            How do I read a note? Go to the sent URL, or enter the address by
            hand here.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
