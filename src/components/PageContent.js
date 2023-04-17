import classes from "./PageContent.module.css";

function PageContent({ title, children }) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      <h2>Introduction</h2>
      <p>
        This website is currently under construction. However, the framework is
        in place. You will need to login to edit and remove events. The frontend
        is built with React and the back end in nodejs. The databaase is
        basically a nodejs website with an in-memory json file to store data. If
        you enter https://jshanahan.biz/events you will bet some events back in
        json format.
      </p>
      <h2>Source Code</h2>
      <p>
        The front end code is available from{"   "}
        <a
          href="https://github.com/jmshanahan/ReactHome"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
      <p>
        The back end code is available from{"   "}
        <a
          href="https://github.com/jmshanahan/ReactNodeBackend"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
      <h2>Instructions</h2>
      <p>
        If you create a login you can add events, edit events and remove events.
        The login information just like the information is stored as an in -
        memory json file at the back end. Basically if I were to restart the
        application all data would be lost but it is only a demo application for
        now.
      </p>

      <h2>About Me</h2>
      <p>
        {" "}
        I am a software developer that is currently looking for work. You can
        view my{" "}
        <a
          href="https://www.linkedin.com/in/scroutie/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedln profile here
        </a>
        Currently I am on my way back to Ireland from Australia and will arrive
        back in ireland on the 28 April 2023. I also have another site that is
        available{" "}
        <a
          href="https://www.linkedin.com/in/scroutie/"
          target="_blank"
          rel="noreferrer"
        >
          www.jshanahan.com
        </a>
        <h3>Contact Info</h3>
        <p>
          My email address is jmshanahan@netcmail.com. When I get back to
          Ireland I will be available on 0873866753
        </p>
      </p>

      {children}
    </div>
  );
}

export default PageContent;
