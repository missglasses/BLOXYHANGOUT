import React from 'react';

const Navbar = ()=> {

    return (
        <nav style={styles.nav}>
        <a href = "#home" style={styles.link}>Home</a>
        <a href = "#about" style={styles.link}>About</a>
        <a href ="#contact" style={styles.link}>Contact Us</a>
        </nav>

    );
};

const styles = {
    nav: {
    backgroundColor: '#304F6E',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    },

    link :{
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    },
}


export default Navbar;