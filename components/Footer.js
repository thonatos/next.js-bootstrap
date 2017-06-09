const year = new Date().getFullYear()

export default () => (
  <div className="footer">
    <div className="container component-footer">
      <p>
        Copyright © {year} . <a href="https://www.thonatos.com/#/">SuYI.</a>
      </p>
      <p>
        Released Under the MIT License <br />
      </p>      
    </div>
    <style jsx>{`
      .footer{
        background: #F8F8F8;
      }
      
      .component-footer{
        text-align: center;
        font-size: 0.8em;
        padding: 2em 0 4em 0;
      }

      ul.links{
        list-style: none;
        padding: 0;
      }

      ul.links li {
        display: inline-block;
        padding: 0 0.5em;
        border-left: 1px solid #999;
      }

      ul.links li:first-child {
        display: inline-block;
        padding: 0 1em;
        border-left: none;
      }      
    `}</style>
  </div>
)