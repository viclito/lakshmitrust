import React from 'react'
import styles from './Facilities.module.scss'
import Image from 'next/image'
import blood from '../../public/blood.jpg'
import checkup from '../../public/chekup.png'
import education from '../../public/education.jpg'
import food from '../../public/food.jpg'
import planting from '../../public/planting.jpeg'
import environment from '../../public/environment.jpg'
import heart from '../../public/heart.jpg'
import clothes from '../../public/clothes.jpg'
import amminities from '../../public/amminities.jpg'
import adoption from '../../public/adoption.jpg'
import eye from '../../public/eye.jpeg'
import nursing from '../../public/nursing.jpg'
import skills from '../../public/skills.jpg'
import social from '../../public/social.jpg'


const Facilities = () => {
  return (
    <>
        <div className={styles.facilities}>
            <div className={styles.title}>Our Facilities</div>
            <div className={styles.inner}>
                
                <div className={styles.box}>
                    <div className={styles.image}>
                        <Image src={blood} alt=''/>
                        <h4>Blood Donation Camp</h4>
                    </div>
                    
                    <div className={styles.content}>
                        <p>Organize life-saving Blood Donation Camps with us, contributing to the community s well-being and saving lives one donation at a time. Join us in making a difference today</p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.swap}`}>
                    <div className={styles.content}>
                        <p>Prioritize your health with our comprehensive Full Body Checkup. Detect potential issues early, ensuring a proactive approach to your well-being for a healthier and happier life.</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={checkup} alt=''/>
                        <h4>Full Body Checkup</h4>
                    </div>
                    
                </div>
                <div className={styles.box}>
                    <div className={styles.image}>
                        <Image src={education} alt=''/>
                        <h4>Helping Childs Education</h4>
                    </div>
                    
                    <div className={styles.content}>
                        <p>Empower the future by supporting children s education. Your contribution ensures access to quality learning, shaping bright minds and fostering a foundation for a better tomorrow.</p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.swap}`}>
                    <div className={styles.content}>
                        <p>Provide nourishment and hope to those in need with our Food Assistance program. Together, let s combat hunger and build a stronger, more compassionate community through shared meals.</p>
                    </div>
                    <div className={styles.image}>
                        <Image src={food} alt=''/>
                        <h4>Food For Needy People</h4>
                    </div>
                    
                </div>
                <div className={styles.box}>
                    
                    <div className={styles.image}>
                        <Image src={planting} alt=''/>
                        <h4>Planting trees</h4>
                    </div>
                    <div className={styles.content}>
                        <p>Contribute to a greener tomorrow by joining our tree-planting initiatives. Each planted tree is a step towards a healthier planet, combating climate change and preserving nature for future generations</p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.swap}`}>
                    <div className={styles.content}>
                        <p>Be a part of the movement for a cleaner environment. Join our efforts to reduce pollution, waste, and promote sustainable practices, creating a healthier and more vibrant community for all.</p>
                    </div>
                    
                    <div className={styles.image}>
                        <Image src={environment} alt=''/>
                        <h4>Clean Environment</h4>
                    </div>
                </div>
                <div className={styles.box}>
                    
                    <div className={styles.image}>
                        <Image src={heart} alt=''/>
                        <h4>Free Heart Camp</h4>
                    </div>
                    <div className={styles.content}>
                        <p>Take charge of your heart health at our Free Heart Camp. Receive expert screenings and guidance, ensuring a proactive approach to cardiovascular well-being for a healthier, happier life.</p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.swap}`}>
                    <div className={styles.content}>
                        <p>Make a difference in someone s life by donating clothes to the needy. Your contribution provides warmth and dignity, spreading kindness one garment at a time.</p>
                    </div>
                    
                    <div className={styles.image}>
                        <Image src={clothes} alt=''/>
                        <h4>Clothes For Needy</h4>
                    </div>
                </div>
                <div className={styles.box}>
                    
                    <div className={styles.image}>
                        <Image src={amminities} alt=''/>
                        <h4>Amminities For School <br /> and Colleges</h4>
                    </div>
                    <div className={styles.content}>
                        <p>Elevate education environments by supporting our Amenities for Schools and Colleges initiative. Enhance learning experiences with improved facilities, fostering a conducive atmosphere for academic excellence and growth.</p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.swap}`}>
                    <div className={styles.content}>
                        <p>Transform a child s life through adoption. Provide a loving home, support, and a brighter future. Make a lifelong impact by opening your heart to adoption today.</p>
                    </div>
                    
                    <div className={styles.image}>
                        <Image src={adoption} alt=''/>
                        <h4>Child Adoptation</h4>
                    </div>
                </div>
                <div className={styles.box}>
                    
                    <div className={styles.image}>
                        <Image src={eye} alt=''/>
                        <h4>Free Eye Camp</h4>
                    </div>
                    <div className={styles.content}>
                        <p>Join our Free Eye Camp to brighten lives through vision care. Comprehensive eye check-ups and assistance ensure a clearer future for those in need. See the world with compassion.</p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.swap}`}>
                    <div className={styles.content}>
                        <p>Extend care and compassion to children and the elderly in our nursing programs. Create a nurturing environment, ensuring their well-being and dignity in the later stages of life.</p>
                    </div>
                    
                    <div className={styles.image}>
                        <Image src={nursing} alt=''/>
                        <h4>Nursing For Children and Oldage Home</h4>
                    </div>
                </div>
                <div className={styles.box}>
                    
                    <div className={styles.image}>
                        <Image src={skills} alt=''/>
                        <h4>Learning Skills And Training</h4>
                    </div>
                    <div className={styles.content}>
                        <p>Unlock potential and opportunities with our Learning Skills and Training programs. Empower individuals through education and skill-building, paving the way for a brighter and more fulfilling future.</p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.swap}`}>
                    <div className={styles.content}>
                        <p>Embrace a broader impact through our diverse social welfare initiatives. Together, we create positive change, uplift communities, and foster a more compassionate and inclusive society for all.</p>
                    </div>
                    
                    <div className={styles.image}>
                        <Image src={social} alt=''/>
                        <h4>All Other Social Welfare</h4>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Facilities