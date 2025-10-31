// import React from 'react';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';

// export default function Home() {
//   const books = [
//     {
//       id: 1,
//       title: "Charak Samhita - Volume 1",
//       author: "Maharshi Charaka",
//       description: "The foundational text of Ayurveda covering Sutrasthana (general principles) and Nidanasthana (pathology).",
//       chapters: 7,
//       pages: 621,
//       url: "/docs/volume-1",
//       featured: true,
//       category: "Classical Texts"
//     },
//     {
//       id: 2,
//       title: "Charak Samhita - Volume 2",
//       author: "Maharshi Charaka",
//       description: "Continuation covering Vimanasthana (specific determination), Sharirasthana (anatomy), and therapeutic sections.",
//       chapters: 7,
//       pages: 678,
//       url: "/docs/valume-2/volume-2",
//       featured: true,
//       category: "Classical Texts"
//     }
//   ];

//   return (
//     <Layout
//       title="Home"
//       description="Ayurveda Digital Library - Access authentic classical texts of Ayurveda in an easy-to-read digital format">
      
//       <style>{`
//         .hero-section {
//           background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 50%, #fef3c7 100%);
//           padding: 4rem 2rem;
//           text-align: center;
//         }

//         .hero-title {
//           font-size: 3rem;
//           font-weight: 700;
//           color: #78350f;
//           margin-bottom: 1rem;
//           line-height: 1.2;
//         }

//         .hero-subtitle {
//           font-size: 1.1rem;
//           color: #92400e;
//           margin-bottom: 0.5rem;
//           font-weight: 500;
//         }

//         .hero-description {
//           font-size: 1.25rem;
//           color: #92400e;
//           max-width: 900px;
//           margin: 0 auto 2rem;
//           line-height: 1.6;
//         }

//         .search-container {
//           max-width: 700px;
//           margin: 0 auto;
//           position: relative;
//         }

//         .search-input {
//           width: 100%;
//           padding: 1rem 1rem 1rem 3rem;
//           font-size: 1rem;
//           border: 2px solid #fbbf24;
//           border-radius: 50px;
//           outline: none;
//           transition: all 0.3s;
//         }

//         .search-input:focus {
//           border-color: #f59e0b;
//           box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
//         }

//         .search-icon {
//           position: absolute;
//           left: 1rem;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #d97706;
//           width: 20px;
//           height: 20px;
//         }

//         .stats-section {
//           max-width: 1200px;
//           margin: -2rem auto 3rem;
//           padding: 0 2rem;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 2rem;
//         }

//         .stat-card {
//           background: white;
//           padding: 2rem;
//           border-radius: 16px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
//           border: 2px solid #fde68a;
//           text-align: center;
//           transition: transform 0.3s, box-shadow 0.3s;
//         }

//         .stat-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
//         }

//         .stat-icon {
//           font-size: 2.5rem;
//           margin-bottom: 0.5rem;
//         }

//         .stat-number {
//           font-size: 2.5rem;
//           font-weight: 700;
//           color: #78350f;
//           margin: 0.5rem 0;
//         }

//         .stat-label {
//           color: #92400e;
//           font-size: 1rem;
//         }

//         .content-section {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 3rem 2rem;
//         }

//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           color: #78350f;
//           text-align: center;
//           margin-bottom: 3rem;
//         }

//         .books-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
//           gap: 2rem;
//           margin-bottom: 3rem;
//         }

//         @media (max-width: 768px) {
//           .books-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         .book-card {
//           background: white;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           border: 2px solid #fde68a;
//           transition: all 0.3s;
//           position: relative;
//         }

//         .book-card:hover {
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//           transform: translateY(-5px);
//         }

//         .book-header {
//           background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
//           padding: 2rem;
//           color: white;
//           position: relative;
//         }

//         .book-category {
//           display: inline-block;
//           background: rgba(255, 255, 255, 0.2);
//           padding: 0.4rem 1rem;
//           border-radius: 20px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//         }

//         .book-title {
//           font-size: 1.75rem;
//           font-weight: 700;
//           margin: 0.5rem 0;
//         }

//         .book-author {
//           font-size: 0.95rem;
//           opacity: 0.9;
//         }

//         .book-star {
//           position: absolute;
//           top: 2rem;
//           right: 2rem;
//           font-size: 1.5rem;
//         }

//         .book-body {
//           padding: 2rem;
//         }

//         .book-description {
//           color: #92400e;
//           line-height: 1.7;
//           margin-bottom: 1.5rem;
//           font-size: 1rem;
//         }

//         .book-meta {
//           display: flex;
//           gap: 2rem;
//           margin-bottom: 1.5rem;
//           color: #92400e;
//           font-size: 0.95rem;
//         }

//         .book-meta-item {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }

//         .start-reading-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
//           color: white;
//           padding: 0.9rem 2rem;
//           border-radius: 12px;
//           text-decoration: none;
//           font-weight: 600;
//           transition: all 0.3s;
//           font-size: 1rem;
//         }

//         .start-reading-btn:hover {
//           background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
//           color: white;
//           text-decoration: none;
//           transform: translateX(5px);
//         }

//         .coming-soon-section {
//           background: white;
//           border-radius: 20px;
//           padding: 3rem;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           border: 2px solid #fde68a;
//           margin-bottom: 3rem;
//           text-align: center;
//         }

//         .coming-soon-title {
//           font-size: 2rem;
//           font-weight: 700;
//           color: #78350f;
//           margin-bottom: 1rem;
//         }

//         .coming-soon-description {
//           color: #92400e;
//           max-width: 800px;
//           margin: 0 auto 2rem;
//           line-height: 1.6;
//           font-size: 1.05rem;
//         }

//         .book-tags {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 0.75rem;
//         }

//         .book-tag {
//           background: #fef3c7;
//           color: #92400e;
//           padding: 0.6rem 1.2rem;
//           border-radius: 25px;
//           font-size: 0.9rem;
//           font-weight: 500;
//         }

//         .about-section {
//           background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
//           border-radius: 20px;
//           padding: 3rem;
//           border: 2px solid #fbbf24;
//         }

//         .about-title {
//           font-size: 2rem;
//           font-weight: 700;
//           color: #78350f;
//           text-align: center;
//           margin-bottom: 1.5rem;
//         }

//         .about-content {
//           max-width: 900px;
//           margin: 0 auto;
//           text-align: center;
//         }

//         .about-paragraph {
//           color: #92400e;
//           line-height: 1.8;
//           margin-bottom: 1.5rem;
//           font-size: 1.05rem;
//         }
//       `}</style>

//       <main>
//         {/* Hero Section */}
//         <div className="hero-section">
//           <h1 className="hero-title">Ayurveda Digital Library</h1>
//           <p className="hero-subtitle">Ancient Wisdom, Modern Access</p>
          
//           <h2 className="hero-description">
//             Access authentic classical texts of Ayurveda in an easy-to-read digital format. 
//             Start your journey with the comprehensive Charak Samhita.
//           </h2>

//           {/* <div className="search-container">
//             <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search for texts, topics, or concepts..."
//               className="search-input"
//             />
//           </div> */}
//         </div>

//         {/* Stats Section */}
//         <div className="stats-section">
//           <div className="stat-card">
//             <div className="stat-icon">📚</div>
//             <div className="stat-number">2</div>
//             <div className="stat-label">Volumes Available</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-icon">📖</div>
//             <div className="stat-number">120+</div>
//             <div className="stat-label">Chapters</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-icon">⭐</div>
//             <div className="stat-number">1000+</div>
//             <div className="stat-label">Pages of Knowledge</div>
//           </div>
//         </div>

//         {/* Books Section */}
//         <div className="content-section">
//           <h3 className="section-title">Available Texts</h3>
          
//           <div className="books-grid">
//             {books.map((book) => (
//               <div key={book.id} className="book-card">
//                 <div className="book-header">
//                   <span className="book-category">{book.category}</span>
//                   {book.featured && <span className="book-star">⭐</span>}
//                   <h4 className="book-title">{book.title}</h4>
//                   <p className="book-author">{book.author}</p>
//                 </div>
                
//                 <div className="book-body">
//                   <p className="book-description">{book.description}</p>
                  
//                   <div className="book-meta">
//                     <div className="book-meta-item">
//                       <span>📖</span>
//                       <span>{book.chapters} Chapters</span>
//                     </div>
//                     <div className="book-meta-item">
//                       <span>📄</span>
//                       <span>{book.pages} Pages</span>
//                     </div>
//                   </div>
                  
//                   <Link to={book.url} className="start-reading-btn">
//                     <span>Start Reading</span>
//                     <span>→</span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Coming Soon */}
//           <div className="coming-soon-section">
//             <h3 className="coming-soon-title">More Texts Coming Soon</h3>
//             <p className="coming-soon-description">
//               We're continuously expanding our library to include more classical Ayurvedic texts. 
//               Future additions will include Sushruta Samhita, Ashtanga Hridaya, and more.
//             </p>
//             <div className="book-tags">
//               <span className="book-tag">Sushruta Samhita</span>
//               <span className="book-tag">Ashtanga Hridaya</span>
//               <span className="book-tag">Ashtanga Sangraha</span>
//               <span className="book-tag">Bhava Prakasha</span>
//             </div>
//           </div>

//           {/* About Section */}
//           <div className="about-section">
//             <h3 className="about-title">About This Project</h3>
//             <div className="about-content">
//               <p className="about-paragraph">
//                 This platform is dedicated to making classical Ayurvedic texts accessible to everyone. 
//                 By digitizing these ancient scriptures, we aim to preserve and share the profound wisdom 
//                 of Ayurveda with modern readers, students, and practitioners worldwide.
//               </p>
//               <p className="about-paragraph">
//                 Built with modern technology for seamless reading, searching, and navigation, 
//                 this library maintains the authenticity and integrity of the original texts while 
//                 providing an enhanced digital reading experience.
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </Layout>
//   );
// }

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  const books = [
    {
      id: 1,
      title: "Charak Samhita - Volume 1",
      author: "Maharshi Charaka",
      description: "The foundational text of Ayurveda covering Sutrasthana (general principles) and Nidanasthana (pathology).",
      chapters: 30,
      pages: 450,
      url: "/docs/volume-1",
      featured: true,
      category: "Classical Texts"
    },
    {
      id: 2,
      title: "Charak Samhita - Volume 2",
      author: "Maharshi Charaka",
      description: "Continuation covering Vimanasthana (specific determination), Sharirasthana (anatomy), and therapeutic sections.",
      chapters: 90,
      pages: 680,
      url: "/docs/valume-2/volume-2",
      featured: true,
      category: "Classical Texts"
    }
  ];

  return (
    <Layout
      title="Home"
      description="Ayurveda Digital Library - Access authentic classical texts of Ayurveda in an easy-to-read digital format">
      
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Ayurveda Digital Library</h1>
          <p className={styles.heroSubtitle}>Ancient Wisdom, Modern Access</p>
          
          <p className={styles.heroDescription}>
            Access authentic classical texts of Ayurveda in an easy-to-read digital format. 
            Start your journey with the comprehensive Charak Samhita.
          </p>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📚</div>
            <div className={styles.statNumber}>2</div>
            <div className={styles.statLabel}>Volumes Available</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📖</div>
            <div className={styles.statNumber}>120+</div>
            <div className={styles.statLabel}>Chapters</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>⭐</div>
            <div className={styles.statNumber}>1000+</div>
            <div className={styles.statLabel}>Pages of Knowledge</div>
          </div>
        </div>

        {/* Books Section */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionTitle}>Available Texts</h3>
          
          <div className={styles.booksGrid}>
            {books.map((book) => (
              <div key={book.id} className={styles.bookCard}>
                <div className={styles.bookHeader}>
                  <span className={styles.bookCategory}>{book.category}</span>
                  {book.featured && <span className={styles.bookStar}>⭐</span>}
                  <h4 className={styles.bookTitle}>{book.title}</h4>
                  <p className={styles.bookAuthor}>{book.author}</p>
                </div>
                
                <div className={styles.bookBody}>
                  <p className={styles.bookDescription}>{book.description}</p>
                  
                  <div className={styles.bookMeta}>
                    <div className={styles.bookMetaItem}>
                      <span>📖</span>
                      <span>{book.chapters} Chapters</span>
                    </div>
                    <div className={styles.bookMetaItem}>
                      <span>📄</span>
                      <span>{book.pages} Pages</span>
                    </div>
                  </div>
                  
                  <Link to={book.url} className={styles.startReadingBtn}>
                    <span>Start Reading</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className={styles.comingSoonSection}>
            <h3 className={styles.comingSoonTitle}>More Texts Coming Soon</h3>
            <p className={styles.comingSoonDescription}>
              We're continuously expanding our library to include more classical Ayurvedic texts. 
              Future additions will include Sushruta Samhita, Ashtanga Hridaya, and more.
            </p>
            <div className={styles.bookTags}>
              <span className={styles.bookTag}>Sushruta Samhita</span>
              <span className={styles.bookTag}>Ashtanga Hridaya</span>
              <span className={styles.bookTag}>Ashtanga Sangraha</span>
              <span className={styles.bookTag}>Bhava Prakasha</span>
            </div>
          </div>

          {/* About Section */}
          <div className={styles.aboutSection}>
            <h3 className={styles.aboutTitle}>About This Project</h3>
            <div className={styles.aboutContent}>
              <p className={styles.aboutParagraph}>
                This platform is dedicated to making classical Ayurvedic texts accessible to everyone. 
                By digitizing these ancient scriptures, we aim to preserve and share the profound wisdom 
                of Ayurveda with modern readers, students, and practitioners worldwide.
              </p>
              <p className={styles.aboutParagraph}>
                Built with modern technology for seamless reading, searching, and navigation, 
                this library maintains the authenticity and integrity of the original texts while 
                providing an enhanced digital reading experience.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}