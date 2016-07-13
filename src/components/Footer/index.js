import React, {Component} from 'react';

import styles from './styles.scss';

class Footer extends Component {
  render(){
    let fullYear = new Date().getFullYear()
    return (
      <footer className="footer">
        <section>
          <p>Copyright © 1998 - {fullYear} Tencent <strong>I</strong>nternational <strong>B</strong>ussiness <strong>G</strong>roup.</p>
        </section>
        <section>
          <p> All Rights Reserved.</p>
        </section>
      </footer>
    );
  }

}

export default Footer;
