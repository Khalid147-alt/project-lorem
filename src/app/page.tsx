// app/page.tsx
import styles from './styles/Navbar.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/Group 11.png" alt="Logo" width={40} height={40} />
        <span className={styles.logoText}>Image Gallery</span>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>MAIN</li>
          <li className={styles.navItem}>GALLERY</li>
          <li className={styles.navItem}>PROJECTS</li>
          <li className={styles.navItem}>CERTIFICATIONS</li>
          <li className={styles.navItem}>CONTACTS</li>
        </ul>
      </nav>
      
    </header>
     <img
        src="/Rectangle 6.png" 
        alt="lorem image"
        style={{
        
          borderRadius: '10px',
          boxShadow: '0px 4px 8px white',
          margin: '40px',
          float:'right',
  
             
        }}

       
      />

      <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.projectText}>PROJECT</h1>
        <h2 className={styles.lorumText}>Lorum</h2>
      </div>
      
    </div>
    <img
        src="/Group 13.png" 
        alt="arrow image"
        style={{
        
          borderRadius: '10px',
          boxShadow: '0px 4px 8px white',
          margin: '0px',
          float:'none',
  
             
        }}

       
      />
      <img
        src="/public\Group 20.png" 
        alt=""
        style={{
        
          borderRadius: '10px',
          boxShadow: '0px 4px 8px white',
          margin: '0px',
          float:'none',
  
             
        }}

       
      />
        <img
        src="/Group 79.png" 
        alt=""
        style={{
        
          borderRadius: '10px',
          boxShadow: '0px 4px 8px white',
          margin: '0px',
          float:'none',
  
             
        }}

       
      />
       <img
        src="/Group 82.png" 
        alt=""
        style={{
        
          borderRadius: '10px',
          boxShadow: '0px 4px 8px white',
          margin: '0px',
          float:'none',
  
             
        }}

       
      />
             <img
        src="/Footer.png" 
        alt=""
        style={{
        
          borderRadius: '10px',
          boxShadow: '0px 4px 8px white',
          margin: '0px',
          float:'none',
  
             
        }}

       
      />
    
      </>
  );
}



